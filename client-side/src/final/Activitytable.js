// // import axios from 'axios';
// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import EditIcon from '@mui/icons-material/Edit';
// // import CheckBoxIcon from '@mui/icons-material/CheckBox';
// // import './table.css';

// // function Activitytable() {
// //     const { id } = useParams();
// //     const [values, setValues] = useState({
// //         id: id,
// //         username: '',
// //         currantweight: '',
// //         targetedweight: '',
// //         workout: '',
// //         gender: '',
// //         age: '',
// //         height: "",
// //         dailySteps: "",
// //         dailyCalories: "",
// //         dailyhydrated: "",
// //         activity: []
// //     });
// //     const [editingRow, setEditingRow] = useState(null);
// //     const [editData, setEditData] = useState({});

// //     useEffect(() => {
// //         if (id) {
// //             axios.get(`http://localhost:5000/users/${id}`)
// //                 .then(res => {
// //                     setValues(res.data);
// //                 })
// //                 .catch(err => console.log(err));
// //         }
// //     }, [id]);

// //     const handleEditClick = (row) => {
// //         setEditingRow(row.id);
// //         setEditData(row);
// //     };

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setEditData({ ...editData, [name]: value });
// //     };

// //     const handleSave = async () => {
// //       try {
// //           console.log("Saving data:", editData); 
// //           const response = await axios.put(`http://localhost:5000/activity/${editingRow}`, editData);
// //           console.log("Save response:", response.data); 
          
// //           if (response.status === 200) {
// //               const updatedActivities = values.activity.map(a =>
// //                   a.id === editingRow ? { ...a, ...editData } : a
// //               );
// //               setValues({ ...values, activity: updatedActivities });
// //               setEditingRow(null);
// //               setEditData({});
// //           }
// //       } catch (error) {
// //           console.error("Error saving data:", error); 
// //       }
// //   };
  

// //     return (
// //         <div>
// //             <table style={{ borderCollapse: 'collapse', whiteSpace: 'nowrap', marginTop: "2%" }}>
// //                 <thead>
// //                     <tr>
// //                         <th style={{ border: '1px none #ddd', padding: '5px', backgroundColor: '#f2f2f2', width: '10%' }}>Date</th>
// //                         <th style={{ border: '1px none #ddd', padding: '5px', backgroundColor: '#f2f2f2', width: '10%' }}>Activity</th>
// //                         <th style={{ border: '1px none #ddd', padding: '5px', backgroundColor: '#f2f2f2', width: '10%' }}>Duration</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '22%' }}>Burned Calories</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '20%' }}>Calories Intake</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '20%' }}>Water Intake</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '20%' }}>Steps Count</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '5%' }}></th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {values.activity.map(a => (
// //                         <tr key={a.id}>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="date"
// //                                         value={editData.date || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.date
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="activity"
// //                                         value={editData.activity || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.activity
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="duration"
// //                                         value={editData.duration || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.duration
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="burnedCalories"
// //                                         value={editData.burnedCalories || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.burnedCalories
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="caloriesIntake"
// //                                         value={editData.caloriesIntake || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.caloriesIntake
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="waterIntake"
// //                                         value={editData.waterIntake || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.waterIntake
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="stepsCount"
// //                                         value={editData.stepsCount || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.stepsCount
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '5px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <CheckBoxIcon
// //                                         sx={{ fontSize: "25px", padding: "5px", cursor: "pointer", color: 'green' }}
// //                                         onClick={handleSave}
// //                                     />
// //                                 ) : (
// //                                     <EditIcon
// //                                         sx={{ fontSize: "25px", padding: "5px", cursor: "pointer" }}
// //                                         onClick={() => handleEditClick(a)}
// //                                     />
// //                                 )}
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default Activitytable;
// /**************************************************************************** */
// // import axios from 'axios';
// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import EditIcon from '@mui/icons-material/Edit';
// // import CheckBoxIcon from '@mui/icons-material/CheckBox';
// // import './table.css';

// // function Activitytable() {
// //     const { id } = useParams();
// //     const [values, setValues] = useState({
// //         id: id,
// //         username: '',
// //         currantweight: '',
// //         targetedweight: '',
// //         workout: '',
// //         gender: '',
// //         age: '',
// //         height: "",
// //         dailySteps: "",
// //         dailyCalories: "",
// //         dailyhydrated: "",
// //         activity: []
// //     });
// //     const [editingRow, setEditingRow] = useState(null);
// //     const [editData, setEditData] = useState({});
// //     const [error, setError] = useState('');
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (id) {
// //             setLoading(true);
// //             axios.get(`http://localhost:5000/users/${id}`)
// //                 .then(res => {
// //                     setValues(res.data);
// //                     setError(''); // Clear error on successful fetch
// //                 })
// //                 .catch(err => {
// //                     console.log(err);
// //                     setError('Failed to fetch data');
// //                 })
// //                 .finally(() => setLoading(false));
// //         }
// //     }, [id]);

// //     const handleEditClick = (row) => {
// //         console.log("Editing row:", row);
// //         setEditingRow(row.id);
// //         setEditData(row);
// //     };

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setEditData({ ...editData, [name]: value });
// //     };

// //     const handleSave = async () => {
// //         console.log("Editing Row ID:", editingRow);
// //         console.log("Edit Data before save:", editData);
// //         try {
// //             const response = await axios.put(`http://localhost:5000/activity/${editingRow}`, editData);
// //             console.log("Save response:", response);

// //             if (response.status === 200) {
// //                 const updatedActivities = values.activity.map(a =>
// //                     a.id === editingRow ? { ...a, ...editData } : a
// //                 );
// //                 console.log("Updated Activities:", updatedActivities);
// //                 setValues({ ...values, activity: updatedActivities });
// //                 setEditingRow(null);
// //                 setEditData({});
// //             }
// //         } catch (error) {
// //             console.error("Error saving data:", error.response ? error.response.data : error.message);
// //             setError('Failed to save data. Please try again.');
// //         }
// //     };

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div>
// //             {error && <div style={{ color: 'red' }}>{error}</div>}
// //             <table style={{ borderCollapse: 'collapse', whiteSpace: 'nowrap', marginTop: "2%" }}>
// //                 <thead>
// //                     <tr>
// //                         <th style={{ border: '1px none #ddd', padding: '5px', backgroundColor: '#f2f2f2', width: '10%' }}>Date</th>
// //                         <th style={{ border: '1px none #ddd', padding: '5px', backgroundColor: '#f2f2f2', width: '10%' }}>Activity</th>
// //                         <th style={{ border: '1px none #ddd', padding: '5px', backgroundColor: '#f2f2f2', width: '10%' }}>Duration</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '22%' }}>Burned Calories</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '20%' }}>Calories Intake</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '20%' }}>Water Intake</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '20%' }}>Steps Count</th>
// //                         <th style={{ border: '1px none #ddd', padding: '10px', backgroundColor: '#f2f2f2', width: '5%' }}></th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {values.activity.map(a => (
// //                         <tr key={a.id}>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="date"
// //                                         value={editData.date || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.date
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="activity"
// //                                         value={editData.activity || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.activity
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="duration"
// //                                         value={editData.duration || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.duration
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="burnedCalories"
// //                                         value={editData.burnedCalories || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.burnedCalories
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="caloriesIntake"
// //                                         value={editData.caloriesIntake || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.caloriesIntake
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="waterIntake"
// //                                         value={editData.waterIntake || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.waterIntake
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '10px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <input
// //                                         name="stepsCount"
// //                                         value={editData.stepsCount || ''}
// //                                         onChange={handleInputChange}
// //                                         style={{ width: '100%' }}
// //                                     />
// //                                 ) : (
// //                                     a.stepsCount
// //                                 )}
// //                             </td>
// //                             <td style={{ border: '1px none #ddd', padding: '5px' }}>
// //                                 {editingRow === a.id ? (
// //                                     <CheckBoxIcon
// //                                         sx={{ fontSize: "25px", padding: "5px", cursor: "pointer", color: 'green' }}
// //                                         onClick={handleSave}
// //                                     />
// //                                 ) : (
// //                                     <EditIcon
// //                                         sx={{ fontSize: "25px", padding: "5px", cursor: "pointer" }}
// //                                         onClick={() => handleEditClick(a)}
// //                                     />
// //                                 )}
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default Activitytable;

// // import axios from 'axios';
// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import EditIcon from '@mui/icons-material/Edit';
// // import CheckBoxIcon from '@mui/icons-material/CheckBox';
// // import './table.css';

// // const ActivityTable = () => {
// //     const { id } = useParams();
// //     const [user, setUser] = useState(null); // Store the user data
// //     const [editingIndex, setEditingIndex] = useState(null); // Tracks the activity being edited
// //     const [editedActivity, setEditedActivity] = useState({}); // Temporarily holds the activity being edited
// //     const [error, setError] = useState('');
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (id) {
// //             setLoading(true);
// //             axios.get(`http://localhost:5000/users/${id}`)
// //                 .then(res => {
// //                     setUser(res.data); // Set the user data
// //                     setError('');
// //                 })
// //                 .catch(err => {
// //                     console.log(err);
// //                     setError('Failed to fetch user data');
// //                 })
// //                 .finally(() => setLoading(false));
// //         }
// //     }, [id]);

// //     const handleEdit = (index) => {
// //         setEditingIndex(index);
// //         setEditedActivity(user.activity[index]); // Load current activity data for editing
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setEditedActivity({
// //             ...editedActivity,
// //             [name]: value, // Update the specific field being edited
// //         });
// //     };

// //     const handleSave = async () => {
// //         const updatedActivities = [...user.activity];
// //         updatedActivities[editingIndex] = editedActivity; // Replace the edited activity in the array

// //         try {
// //             const response = await axios.put(`http://localhost:5000/users/${id}`, { ...user, activity: updatedActivities });
// //             console.log("Save response:", response);

// //             if (response.status === 200) {
// //                 setUser({ ...user, activity: updatedActivities }); // Update user data with modified activities
// //                 setEditingIndex(null); // Exit editing mode
// //             }
// //         } catch (error) {
// //             console.error("Error saving data:", error.response ? error.response.data : error.message);
// //             setError('Failed to save data. Please try again.');
// //         }
// //     };

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div>
// //             {error && <div style={{ color: 'red' }}>{error}</div>}
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Date</th>
// //                         <th>Activity</th>
// //                         <th>Duration</th>
// //                         <th>Burned Calories</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {user.activity.map((activity, index) => (
// //                         <tr key={index}>
// //                             {editingIndex === index ? (
// //                                 <>
// //                                     {/* Show input fields when editing */}
// //                                     <td>
// //                                         <input
// //                                             type="text"
// //                                             name="date"
// //                                             value={editedActivity.date}
// //                                             onChange={handleChange}
// //                                         />
// //                                     </td>
// //                                     <td>
// //                                         <input
// //                                             type="text"
// //                                             name="activity"
// //                                             value={editedActivity.activity}
// //                                             onChange={handleChange}
// //                                         />
// //                                     </td>
// //                                     <td>
// //                                         <input
// //                                             type="text"
// //                                             name="duration"
// //                                             value={editedActivity.duration}
// //                                             onChange={handleChange}
// //                                         />
// //                                     </td>
// //                                     <td>
// //                                         <input
// //                                             type="text"
// //                                             name="burnedCalories"
// //                                             value={editedActivity.burnedCalories}
// //                                             onChange={handleChange}
// //                                         />
// //                                     </td>
// //                                     <td>
// //                                         <CheckBoxIcon
// //                                             sx={{ fontSize: "25px", padding: "5px", cursor: "pointer", color: 'green' }}
// //                                             onClick={handleSave}
// //                                         />
// //                                     </td>
// //                                 </>
// //                             ) : (
// //                                 <>
// //                                     {/* Show activity details when not editing */}
// //                                     <td>{activity.date}</td>
// //                                     <td>{activity.activity}</td>
// //                                     <td>{activity.duration}</td>
// //                                     <td>{activity.burnedCalories}</td>
// //                                     <td>
// //                                         <EditIcon
// //                                             sx={{ fontSize: "25px", padding: "5px", cursor: "pointer" }}
// //                                             onClick={() => handleEdit(index)}
// //                                         />
// //                                     </td>
// //                                 </>
// //                             )}
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default ActivityTable;
// // import axios from 'axios';
// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import EditIcon from '@mui/icons-material/Edit';
// // import CheckBoxIcon from '@mui/icons-material/CheckBox';
// // import './table.css'; // Make sure to import your CSS

// // const ActivityTable = () => {
// //     const { id } = useParams();
// //     const [user, setUser] = useState(null);
// //     const [editingIndex, setEditingIndex] = useState(null);
// //     const [editedActivity, setEditedActivity] = useState({});
// //     const [error, setError] = useState('');
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         if (id) {
// //             setLoading(true);
// //             axios.get(`http://localhost:5000/users/${id}`)
// //                 .then(res => {
// //                     setUser(res.data);
// //                     setError('');
// //                 })
// //                 .catch(err => {
// //                     console.log(err);
// //                     setError('Failed to fetch user data');
// //                 })
// //                 .finally(() => setLoading(false));
// //         }
// //     }, [id]);

// //     const handleEdit = (index) => {
// //         setEditingIndex(index);
// //         setEditedActivity(user.activity[index]);
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setEditedActivity({
// //             ...editedActivity,
// //             [name]: value,
// //         });
// //     };

// //     const handleSave = async () => {
// //         const updatedActivities = [...user.activity];
// //         updatedActivities[editingIndex] = editedActivity;

// //         try {
// //             const response = await axios.put(`http://localhost:5000/users/${id}`, { ...user, activity: updatedActivities });
// //             if (response.status === 200) {
// //                 setUser({ ...user, activity: updatedActivities });
// //                 setEditingIndex(null);
// //             }
// //         } catch (error) {
// //             console.error("Error saving data:", error.response ? error.response.data : error.message);
// //             setError('Failed to save data. Please try again.');
// //         }
// //     };

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div>
// //             {error && <div style={{ color: 'red' }}>{error}</div>}
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Date</th>
// //                         <th>Activity</th>
// //                         <th>Duration</th>
// //                         <th>Burned Calories</th>
// //                         <th>Calories Intake</th>
// //                         <th>Water Intake</th>
// //                         <th>Steps Count</th>
// //                         <th></th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {user.activity.map((activity, index) => (
// //                         <tr key={index}>
// //                             {editingIndex === index ? (
// //                                 <>
// //                                     <td>
// //                                         <input type="text" name="date" value={editedActivity.date} onChange={handleChange} />
// //                                     </td>
// //                                     <td>
// //                                         <input type="text" name="activity" value={editedActivity.activity} onChange={handleChange} />
// //                                     </td>
// //                                     <td>
// //                                         <input type="text" name="duration" value={editedActivity.duration} onChange={handleChange} />
// //                                     </td>
// //                                     <td>
// //                                         <input type="text" name="burnedCalories" value={editedActivity.burnedCalories} onChange={handleChange} />
// //                                     </td>
// //                                     <td>
// //                                         <input type="text" name="caloriesintake" value={editedActivity.calo} onChange={handleChange} />
// //                                     </td>
// //                                     <td>
// //                                         <CheckBoxIcon
// //                                             sx={{ fontSize: "25px", padding: "5px", cursor: "pointer", color: 'green' }}
// //                                             onClick={handleSave}
// //                                         />
// //                                     </td>
// //                                 </>
// //                             ) : (
// //                                 <>
// //                                     <td>{activity.date}</td>
// //                                     <td>{activity.activity}</td>
// //                                     <td>{activity.duration}</td>
// //                                     <td>{activity.burnedCalories}</td>
// //                                     <td>
// //                                         <EditIcon
// //                                             sx={{ fontSize: "25px", padding: "5px", cursor: "pointer" }}
// //                                             onClick={() => handleEdit(index)}
// //                                         />
// //                                     </td>
// //                                 </>
// //                             )}
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default ActivityTable;
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import './table.css';
// import useFetchUsersData from './dash/fetch/fetch'; 
// import { useSelector } from 'react-redux';
// const ActivityTable = () => {

//     const user= useSelector(state=>state.login);
  
//     console.log("user",user);
  
//     // const profileData=user.data?.data.user;
//     // console.log("profileData",profileData);  
//     // console.log("profileData",profileData?.workouts);  

//     // const  id  = useParams();
//     // const [user, setUser] = useState(null);
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [editedActivity, setEditedActivity] = useState({});
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);

//     // useEffect(() => {
//     //     if (id) {
//     //         setLoading(true);
//     //         axios.get(`http://localhost:5000/users/${id}`)
//     //             .then(res => {
//     //                 setUser(res.data);
//     //                 setError('');
//     //             })
//     //             .catch(err => {
//     //                 console.log(err);
//     //                 setError('Failed to fetch user data');
//     //             })
//     //             .finally(() => setLoading(false));
//     //     }
//     // }, [id]);

//     const handleEdit = (index) => {
//         setEditingIndex(index);
//         setEditedActivity(user.activity[index]);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedActivity({
//             ...editedActivity,
//             [name]: value,
//         });
//     };

//     const handleSave = async () => {
//         // const updatedActivities = [...user.activity];
//         // updatedActivities[editingIndex] = editedActivity;

//         // try {
//         //     const response = await axios.put(`http://localhost:5000/users/${id}`, { ...user, activity: updatedActivities });
//         //     if (response.status === 200) {
//         //         setUser({ ...user, activity: updatedActivities });
//         //         setEditingIndex(null);
//         //     }
//         // } catch (error) {
//         //     console.error("Error saving data:", error.response ? error.response.data : error.message);
//         //     setError('Failed to save data. Please try again.');
//         // }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Activity</th>
//                         <th>Duration</th>
//                         <th>Burned Calories</th>
//                         <th>Calories Intake</th>
//                         <th>Water Intake</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {profileData?.workouts.map((workout, index) =>{
                        
                        
//                         console.log("workout",index);
//                     return(

                        
//                         <tr key={index}>
//                             {editingIndex === index ? (
//                                 <>
//                                     <td>
//                                         <input type="text" name="date" value={editedActivity.date} onChange={handleChange} />
//                                     </td>
//                                     <td>
//                                         <input type="text" name="activity" value={editedActivity.activity} onChange={handleChange} />
//                                     </td>
//                                     <td>
//                                         <input type="text" name="duration" value={editedActivity.duration} onChange={handleChange} />
//                                     </td>
//                                     <td>
//                                         <input type="text" name="burnedCalories" value={editedActivity.burnedCalories} onChange={handleChange} />
//                                     </td>
//                                     <td>
//                                         <input type="text" name="caloriesIntake" value={editedActivity.caloriesIntake} onChange={handleChange} />
//                                     </td>
//                                     <td>
//                                         <input type="text" name="waterIntake" value={editedActivity.waterIntake} onChange={handleChange} />
//                                     </td>
//                                     <td>
//                                         <CheckBoxIcon
//                                             sx={{ fontSize: "2em", padding: "5px", cursor: "pointer", color: 'blueviolet' }}
//                                             onClick={handleSave}
//                                         />
//                                     </td>
//                                 </>
//                             ) : (
//                                 <>
//                                     <td>{workout.date}</td>
//                                     <td>{workout.workout}</td>
//                                     <td>{workout.duration}</td>
//                                     <td>{workout.burnedCalories}</td>
//                                     <td>{workout.caloriesIntake}</td>
//                                     <td>{workout.waterIntake}</td>
//                                     <td>
//                                         <EditIcon
//                                             sx={{ fontSize: "2em", padding: "5px", cursor: "pointer", color:"#d782e2" }}
//                                             onClick={() => handleEdit(index)}
//                                         />
//                                     </td>
//                                 </>
//                             )}
//                         </tr>
//                     )
//                 }
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ActivityTable;



