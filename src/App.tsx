import type React from "react";
import { useEffect, useState } from "react";
import AddParticipantForm from "./components/AddParticipantForm";
import ParticipantList from "./components/ParticipantList";

interface Participant {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  ac: string;
}

function App() {
  const [participants, setParticipants] = useState<Participant[]>(() => {
    const savedParticipants = localStorage.getItem(
      "initiativeTrackerParticipants",
    );
    return savedParticipants
      ? JSON.parse(savedParticipants).map((p: { hp: string }) => ({
          ...p,
          hp: parseInt(p.hp) || 0,
        }))
      : [];
  });
  const [newParticipant, setNewParticipant] = useState<Omit<Participant, "id">>(
    {
      name: "",
      initiative: 0,
      hp: 0,
      ac: "",
    },
  );

  useEffect(() => {
    localStorage.setItem(
      "initiativeTrackerParticipants",
      JSON.stringify(participants),
    );
  }, [participants]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "initiative" || name === "hp" ? parseInt(value) || 0 : value;
    setNewParticipant({ ...newParticipant, [name]: parsedValue });
  };

  const addParticipant = () => {
    if (newParticipant.name && newParticipant.initiative) {
      const updatedParticipants = [
        ...participants,
        { ...newParticipant, id: Date.now() },
      ];
      const sortedParticipants = updatedParticipants.sort(
        (a, b) => b.initiative - a.initiative,
      );
      setParticipants(sortedParticipants);
      setNewParticipant({ name: "", initiative: 0, hp: 0, ac: "" });
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
    setParticipants(participants.filter((p) => p.id !== id));
  };

  const increaseHP = (id: number) => {
    setParticipants(
      participants.map((p) => (p.id === id ? { ...p, hp: p.hp + 1 } : p)),
    );
  };

  const decreaseHP = (id: number) => {
    setParticipants(
      participants.map((p) =>
        p.id === id ? { ...p, hp: Math.max(0, p.hp - 1) } : p,
      ),
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">D&D Initiative Tracker</h1>

      <AddParticipantForm
        newParticipant={newParticipant}
        handleInputChange={handleInputChange}
        addParticipant={addParticipant}
        rollInitiative={rollInitiative}
      />

      <ParticipantList
        participants={participants}
        decreaseHP={decreaseHP}
        increaseHP={increaseHP}
        removeParticipant={removeParticipant}
      />

      <div className="text-center">
        <button
          type="button"
          onClick={clearTable}
          className="rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
