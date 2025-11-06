import React, { useState, useEffect } from 'react';
import './App.css';

interface Participant {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  ac: string;
}

function App() {
const [participants, setParticipants] = useState<Participant[]>(() => {
  const savedParticipants = localStorage.getItem('initiativeTrackerParticipants');
  return savedParticipants ? JSON.parse(savedParticipants).map((p: any) => ({ ...p, hp: parseInt(p.hp) || 0 })) : [];
});
const [newParticipant, setNewParticipant] = useState<Omit<Participant, 'id'>>({
  name: '',
  initiative: 0,
  hp: 0,
  ac: '',
});

  useEffect(() => {
    localStorage.setItem('initiativeTrackerParticipants', JSON.stringify(participants));
  }, [participants]);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  const parsedValue = (name === 'initiative' || name === 'hp') ? (parseInt(value) || 0) : value;
  setNewParticipant({ ...newParticipant, [name]: parsedValue });
};

  const addParticipant = () => {
    if (newParticipant.name && newParticipant.initiative) {
      const updatedParticipants = [...participants, { ...newParticipant, id: Date.now() }];
      const sortedParticipants = updatedParticipants.sort((a, b) => b.initiative - a.initiative);
      setParticipants(sortedParticipants);
      setNewParticipant({ name: '', initiative: 0, hp: 0, ac: '' });
    }
  };

  const rollInitiative = () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    setNewParticipant({ ...newParticipant, initiative: roll });
  };

  const clearTable = () => {
    setParticipants([]);
  };

const removeParticipant = (id: number) => {
  setParticipants(participants.filter(p => p.id !== id));
};

const increaseHP = (id: number) => {
  setParticipants(participants.map(p => p.id === id ? { ...p, hp: p.hp + 1 } : p));
};

const decreaseHP = (id: number) => {
  setParticipants(participants.map(p => p.id === id ? { ...p, hp: Math.max(0, p.hp - 1) } : p));
};

  return (
    <div className="App">
      <h1>D&D Initiative Tracker</h1>

      <div className="add-participant-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name (Player/Monster)"
            value={newParticipant.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            name="initiative"
            placeholder="Initiative Roll"
            value={newParticipant.initiative !== 0 ? newParticipant.initiative : undefined}
            onChange={handleInputChange}
          />
          <button onClick={rollInitiative}>Roll D20</button>
        </div>
        <div className="form-row">
          <input
            type="number"
            name="hp"
            placeholder="HP"
            value={newParticipant.hp !== 0 ? newParticipant.hp : undefined }
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="ac"
            placeholder="AC"
            value={newParticipant.ac}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <button onClick={addParticipant}>Add Participant</button>
        </div>
      </div>

      <div className="table-container">
        <table className="initiative-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Initiative</th>
              <th>Position</th>
              <th>HP</th>
              <th>AC</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p, index) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.initiative}</td>
                <td>{index + 1}</td>
                <td>
                  <button className="hp-button" onClick={() => decreaseHP(p.id)}>-</button>
                  {p.hp}
                  <button className="hp-button" onClick={() => increaseHP(p.id)}>+</button>
                </td>
                <td>{p.ac}</td>
                <td><button onClick={() => removeParticipant(p.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="clear-button-container">
        <button onClick={clearTable} className="clear-button">Clear</button>
      </div>
    </div>
  );
}

export default App;
