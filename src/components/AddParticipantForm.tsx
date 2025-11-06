import type React from "react";

interface NewParticipant {
  name: string;
  initiative: number;
  hp: number;
  ac: string;
}

interface Props {
  newParticipant: NewParticipant;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addParticipant: () => void;
  rollInitiative: () => void;
}

const AddParticipantForm: React.FC<Props> = ({
  newParticipant,
  handleInputChange,
  addParticipant,
  rollInitiative,
}) => {
  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name (Player/Monster)"
          value={newParticipant.name}
          onChange={handleInputChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="number"
          name="initiative"
          placeholder="Initiative Roll"
          value={
            newParticipant.initiative !== 0
              ? newParticipant.initiative
              : undefined
          }
          onChange={handleInputChange}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={rollInitiative}
          className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
        >
          Roll D20
        </button>
      </div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="number"
          name="hp"
          placeholder="HP"
          value={newParticipant.hp !== 0 ? newParticipant.hp : undefined}
          onChange={handleInputChange}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="ac"
          placeholder="AC"
          value={newParticipant.ac}
          onChange={handleInputChange}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={addParticipant}
          className="rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Add Participant
        </button>
      </div>
    </div>
  );
};

export default AddParticipantForm;
