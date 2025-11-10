import type React from "react";
import { useEffect, useState } from "react";
import AddParticipantForm from "./components/AddParticipantForm";
import ParticipantList from "./components/ParticipantList";
import StyledButton from "./components/StyledButton";

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
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-4 space-y-6 bg-amber-50">
      <h1 className="text-3xl font-bold text-red-900 text-center uppercase">
        <span className="text-4xl">D&D</span>{" "}
        <span className="text-4xl">I</span>nitiative{" "}
        <span className="text-4xl">T</span>racker
      </h1>

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

      <div className="w-full max-w-[800px] text-center">
        <StyledButton
          type="button"
          onClick={clearTable}
          className="w-full bg-red-900 hover:bg-red-800"
        >
          REMOVE ALL
        </StyledButton>
      </div>
    </div>
  );
}

export default App;
