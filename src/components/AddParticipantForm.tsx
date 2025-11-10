import type React from "react";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

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
    <div className="w-full max-w-[800px] bg-amber-100 p-4 border-2 border-solid border-red-900">
      <div className="mb-4">
        <StyledInput
          type="text"
          name="name"
          placeholder="Name (Player/Monster)"
          value={newParticipant.name}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <StyledInput
          type="number"
          name="initiative"
          placeholder="Initiative Roll"
          value={
            newParticipant.initiative !== 0
              ? newParticipant.initiative
              : undefined
          }
          onChange={handleInputChange}
          className="flex-1"
        />
        <StyledButton
          type="button"
          onClick={rollInitiative}
          className="uppercase bg-green-900 hover:bg-green-800"
        >
          <span className="text-xl">R</span>
          oll <span className="text-xl">D20</span>
        </StyledButton>
      </div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row">
        <StyledInput
          type="number"
          name="hp"
          placeholder="HP"
          value={newParticipant.hp !== 0 ? newParticipant.hp : undefined}
          onChange={handleInputChange}
          className="flex-1"
        />
        <StyledInput
          type="number"
          name="ac"
          placeholder="AC"
          value={newParticipant.ac}
          onChange={handleInputChange}
          className="flex-1"
        />
      </div>
      <div className="text-center w-full">
        <StyledButton
          type="button"
          onClick={addParticipant}
          className="uppercase w-full bg-green-900 hover:bg-green-800"
        >
          <span className="text-xl">A</span>
          DD <span className="text-xl">P</span>articipant
        </StyledButton>
      </div>
    </div>
  );
};

export default AddParticipantForm;
