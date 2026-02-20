import React from 'react';

const PositionsTable: React.FC = () => {
    // Sample Data
    const openPositions = [
        { id: 1, title: 'Position 1', amount: 100 },
        { id: 2, title: 'Position 2', amount: 200 },
        { id: 3, title: 'Position 3', amount: 300 }
    ];

    return (
        <div>
            <h2>Open Positions</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {openPositions.map(position => (
                        <tr key={position.id}>
                            <td>{position.id}</td>
                            <td>{position.title}</td>
                            <td>{position.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PositionsTable;