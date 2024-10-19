import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = () => {
    const [data, setData] = useState([]);
    const [editingRow, setEditingRow] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('YOUR_API_ENDPOINT');
            setData(response.data);
        };
        fetchData();
    }, []);

    const handleEditClick = (row) => {
        setEditingRow(row.id);
        setEditData(row);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleSave = async () => {
        await axios.put(`http://localhost:5000/users/${editingRow}`, editData);
        const updatedData = data.map((item) =>
            item.id === editingRow ? editData : item
        );
        setData(updatedData);
        setEditingRow(null);
        setEditData({});
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <table style={{ borderCollapse: 'collapse', margin: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', border: '1px solid black' }}>ID</th>
                        <th style={{ padding: '10px', border: '1px solid black' }}>Name</th>
                        <th style={{ padding: '10px', border: '1px solid black' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td style={{ padding: '10px', border: '1px solid black' }}>{row.id}</td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>
                                {editingRow === row.id ? (
                                    <input
                                        name="name"
                                        value={editData.name || ''}
                                        onChange={handleInputChange}
                                        style={{ width: '100%' }}
                                    />
                                ) : (
                                    row.name
                                )}
                            </td>
                            <td style={{ padding: '10px', border: '1px solid black' }}>
                                {editingRow === row.id ? (
                                    <button onClick={handleSave}>Save</button>
                                ) : (
                                    <button onClick={() => handleEditClick(row)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;

