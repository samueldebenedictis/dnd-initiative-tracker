import React from 'react';

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

const AddParticipantForm: React.FC<Props> = ({ newParticipant, handleInputChange, addParticipant, rollInitiative }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name (Player/Monster)"
                    value={newParticipant.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-2">
                <input
                    type="number"
                    name="initiative"
                    placeholder="Initiative Roll"
                    value={newParticipant.initiative !== 0 ? newParticipant.initiative : undefined}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={rollInitiative} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">Roll D20</button>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-2">
                <input
                    type="number"
                    name="hp"
                    placeholder="HP"
                    value={newParticipant.hp !== 0 ? newParticipant.hp : undefined}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    name="ac"
                    placeholder="AC"
                    value={newParticipant.ac}
                    onChange={handleInputChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="text-center">
                <button onClick={addParticipant} className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Add Participant</button>
            </div>
        </div>
    );
};

export default AddParticipantForm;
