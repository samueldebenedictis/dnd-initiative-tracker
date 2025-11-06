import React from 'react';

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

const ParticipantList: React.FC<Props> = ({ participants, decreaseHP, increaseHP, removeParticipant }) => {
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((p, index) => (
                        <tr key={p.id}>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>
                                <div>
                                    <p>
                                        <span>
                                            Initiative:{" "}
                                        </span>
                                        {p.initiative}
                                    </p>
                                    <p>
                                        <span>
                                            AC:{" "}
                                        </span>
                                        {p.ac}
                                    </p>
                                    <p>
                                        <span>
                                            HP:{" "}
                                        </span>
                                        {p.hp}

                                        <button onClick={() => decreaseHP(p.id)}>-</button>
                                        <button onClick={() => increaseHP(p.id)}>+</button>
                                    </p>
                                    <button onClick={() => removeParticipant(p.id)}>Remove</button>
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
