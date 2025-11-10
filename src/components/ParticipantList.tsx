import type React from "react";

interface Participant {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  ac: string;
}

interface Props {
  participants: Participant[];
  decreaseHP: (id: number) => void;
  increaseHP: (id: number) => void;
  removeParticipant: (id: number) => void;
}

const ParticipantList: React.FC<Props> = ({
  participants,
  decreaseHP,
  increaseHP,
  removeParticipant,
}) => {
  return (
    <div className="w-full max-w-[800px] rounded-lg bg-gray-700 p-4">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p, index) => (
            <tr key={p.id} className="border-b">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 font-semibold">{p.name}</td>
              <td className="px-4 py-2">
                <div className="space-y-1">
                  <p>
                    <span className="font-medium">Initiative: </span>
                    {p.initiative}
                  </p>
                  <p>
                    <span className="font-medium">AC: </span>
                    {p.ac}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium">HP: </span>
                    {p.hp}
                    <button
                      type="button"
                      onClick={() => decreaseHP(p.id)}
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => increaseHP(p.id)}
                      className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                    >
                      +
                    </button>
                  </p>
                  <button
                    type="button"
                    onClick={() => removeParticipant(p.id)}
                    className="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantList;
