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
    <div className="w-full max-w-[800px] bg-amber-50 p-4 border-2 border-solid border-red-900">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name (Player/Monster)"
          value={newParticipant.name}
          onChange={handleInputChange}
          className="text-red-900 placeholder-amber-900 w-full border border-red-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-900 bg-amber-100"
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
          className=" bg-green-900 px-4 py-2 text-amber-100 transition-colors hover:bg-green-800"
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
