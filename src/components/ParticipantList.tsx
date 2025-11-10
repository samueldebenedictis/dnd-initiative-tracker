import type React from "react";
import StyledButton from "./StyledButton";

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
    <table className="border-2 border-red-900 w-full max-w-[800px] bg-amber-50 p-4 border-collapse border border-gray-400 text-red-900 w-full table-auto">
      <thead className="bg-amber-100">
        <tr className="">
          <th className="px-2 py-2 text-center font-bold">#</th>
          <th className="px-2 py-2 text-center font-bold">NAME</th>
          <th className="px-2 py-2 text-center">DETAILS</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((p, index) => (
          <tr key={p.id} className="border-2 border-red-900">
            <td className="px-2 py-2 text-center">{index + 1}</td>
            <td className="px-4 py-2 font-semibold">
              <div className="grid">
                <span className="uppercase text-center my-2 border-b-2 border-red-800">
                  {p.name}
                </span>
                <StyledButton
                  type="button"
                  onClick={() => removeParticipant(p.id)}
                  className="text-xs bg-red-900 hover:bg-red-800"
                >
                  <span className="text-sm">R</span>EMOVE
                </StyledButton>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="space-y-1 text-center">
                <p>
                  <span className="font-medium">Initiative: </span>
                  {p.initiative}
                </p>
                <p className="flex items-center justify-center gap-2 text-center">
                  <StyledButton
                    type="button"
                    onClick={() => decreaseHP(p.id)}
                    className="px-3 rounded-full font-bold text-xs bg-red-900 hover:bg-red-800"
                  >
                    -
                  </StyledButton>
                  <span className="font-medium">HP: </span>
                  {p.hp}
                  <StyledButton
                    type="button"
                    onClick={() => increaseHP(p.id)}
                    className="px-3 rounded-full font-bold text-xs bg-green-900 hover:bg-green-800"
                  >
                    +
                  </StyledButton>
                </p>
                <p>
                  <span className="font-medium">AC: </span>
                  {p.ac}
                </p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParticipantList;
