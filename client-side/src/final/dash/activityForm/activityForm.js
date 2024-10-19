import React, { useState } from 'react';
import './activityForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import CalsIntakeInsight from './../insights/calsIntakCard';
import { useDispatch } from 'react-redux';
import { addWorkout } from '../../../components/rtkStore/slices/Workout-slice';
import { useNavigate } from 'react-router-dom';

const ActivityForm = ({ toggleForm,userId }) => {
    // const [formData, setFormData] = useState({
    //     activity1: '',
    //     duration1: '',
    //     burnedCalories1: '',
    //     activity2: '',
    //     duration2: '',
    //     burnedCalories2: '',
    //     activity3: '',
    //     duration3: '',
    //     burnedCalories3: '',
    //     caloriesIntake: '',
    //     waterIntake: '',
    //     stepsCount: '',
    // });


    const [errors, setErrors] = useState({});
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);

    // const validate = () => {
    //     const newErrors = {};
    //     if (!formData.activity1) newErrors.activity1 = 'Required';
    //     if (!formData.duration1 || formData.duration1 <= 0) newErrors.duration1 = 'Must be positive';
    //     if (!formData.burnedCalories1 || formData.burnedCalories1 <= 0) newErrors.burnedCalories1 = 'Must be positive';
    //     if (formData.duration2 && formData.duration2 <= 0) newErrors.duration2 = 'Must be positive';
    //     if (formData.burnedCalories2 && formData.burnedCalories2 <= 0) newErrors.burnedCalories2 = 'Must be positive';
    //     if (formData.duration3 && formData.duration3 <= 0) newErrors.duration3 = 'Must be positive';
    //     if (formData.burnedCalories3 && formData.burnedCalories3 <= 0) newErrors.burnedCalories3 = 'Must be positive';
    //     if (!formData.caloriesIntake || formData.caloriesIntake <= 0) newErrors.caloriesIntake = 'Must be positive';
    //     if (!formData.waterIntake || formData.waterIntake <= 0) newErrors.waterIntake = 'Must be positive';
    //     if (!formData.stepsCount || formData.stepsCount <= 0) newErrors.stepsCount = 'Must be positive';
    //     return newErrors;
    // };


    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     console.log(caloriesIntake);
    //     console.log(waterIntake);
    //     console.log(steps);
    //     console.log(activityType);
    //     console.log(duration);
    //     console.log(colsBurned);

    //     const activityInfo = [{
    //         activityType,
    //         duration,
    //         caloriesBurned: colsBurned
    //     }];

    //     dispatch(addWorkout({userId,activityInfo,caloriesIntake,waterIntake,steps}))
        
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const activityInfo = [
            {
                activityType:activityType1,
                duration:duration1,
                caloriesBurned: colsBurned1
            },
            // {
            //     activityType:activityType2,
            //     duration:duration2,
            //     caloriesBurned: colsBurned2
            // },
            // {
            //     activityType:activityType3,
            //     duration:duration3,
            //     caloriesBurned: colsBurned3
            // },
    ];
    
        // Check the data being dispatched
        console.log("Workout Data:", {
            userId, 
            activityInfo,
            caloriesIntake, 
            waterIntake, 
            steps
        });
    
        dispatch(addWorkout({
            userId, 
            activityInfo,
            caloriesIntake, 
            waterIntake, 
            steps
        }));

        // navigate("/dashboard");
        // navigate(`/profile/${userId}`);


    };
    

    const [caloriesIntake,setCaloriesIntake]=useState('');
    const [waterIntake,setWaterIntake]=useState('');
    const [steps,setSteps]=useState('');

    const [activityType1,setActivityType1]=useState('');
    const [duration1,setDuration1]=useState('');
    const [colsBurned1,setCalsBurned1]=useState('');

    // const [activityType2,setActivityType2]=useState('');
    // const [duration2,setDuration2]=useState('');
    // const [colsBurned2,setCalsBurned2]=useState('');

    // const [activityType3,setActivityType3]=useState('');
    // const [duration3,setDuration3]=useState('');
    // const [colsBurned3,setCalsBurned3]=useState('');

    return (
        <div className={`activity-form-container ${showThankYouMessage ? 'shrink-container' : ''}`}>
            {!showThankYouMessage && (
                <>
                    <h2>Add New Activity <FontAwesomeIcon icon={faDumbbell} /></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-row" style={{borderBottom:"2px solid grey ", paddingBottom:"1%"}}>
                            <div className="input-group">
                                <label>Calories Intake:</label>
                                <input
                                    type="text"
                                    name="caloriesIntake"
                                    onChange={(e) => setCaloriesIntake(e.target.value)}
                                    value={caloriesIntake}
                                />
                                {errors.caloriesIntake && <div className="error">{errors.caloriesIntake}</div>}
                            </div>
                            <div className="input-group">
                                <label>Water Intake (L):</label>
                                <input
                                    type="text"
                                    step="0.1"
                                    name="waterIntake"
                                    onChange={(e) => setWaterIntake(e.target.value)}
                                    value={waterIntake}
                                />
                                {errors.waterIntake && <div className="error">{errors.waterIntake}</div>}
                            </div>
                            <div className="input-group">
                                <label>Steps Count:</label>
                                <input
                                    type="text"
                                    name="stepsCount"
                                    onChange={(e) => setSteps(e.target.value)}
                                    value={steps}
                                />
                                {errors.stepsCount && <div className="error">{errors.stepsCount}</div>}
                            </div>
                        </div>

                        <h4>Activity :</h4>
                        <div className="input-row" style={{borderBottom:"2px solid grey ", paddingBottom:"1%"}}>
                            <div className="input-group">
                                <label>Activity:</label>
                                <select
                                    name="activity1"
                                    onChange={(e) => setActivityType1(e.target.value)}
                                    value={activityType1}
                                >
                                    <option value="" disabled hidden>Select Activity:</option>
                                    <option value="Running">Running</option>
                                    <option value="Cycling">Cycling</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.activity1 && <div className="error">{errors.activity1}</div>}
                            </div>
                            <div className="input-group">
                                <label>Duration:</label>
                                <input
                                    type="text"
                                    name="duration1"
                                    onChange={(e) => setDuration1(e.target.value)}
                                    value={duration1}
                                />
                                {errors.duration1 && <div className="error">{errors.duration1}</div>}
                            </div>
                            <div className="input-group">
                                <label>Burned Calories:</label>
                                <input
                                    type="text"
                                    name="burnedCalories1"
                                    onChange={(e) => setCalsBurned1(e.target.value)}
                                    value={colsBurned1}
                                />
                                {errors.burnedCalories1 && <div className="error">{errors.burnedCalories1}</div>}
                            </div>
                        </div>
                        {/* <h4>Activity 2 :</h4>
                        <div className="input-row" style={{borderBottom:"2px solid grey ", paddingBottom:"1%"}}>
                            <div className="input-group">
                                <label>Activity:</label>
                                <select
                                    name="activity2"
                                    onChange={(e) => setActivityType2(e.target.value)}
                                    value={activityType2}
                                >
                                    <option value="" disabled hidden>Select Activity:</option>
                                    <option value="Running">Running</option>
                                    <option value="Cycling">Cycling</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.activity1 && <div className="error">{errors.activity1}</div>}
                            </div>
                            <div className="input-group">
                                <label>Duration:</label>
                                <input
                                    type="text"
                                    name="duration1"
                                    onChange={(e) => setDuration2(e.target.value)}
                                    value={duration2}
                                />
                                {errors.duration2 && <div className="error">{errors.duration2}</div>}
                            </div>
                            <div className="input-group">
                                <label>Burned Calories:</label>
                                <input
                                    type="text"
                                    name="burnedCalories2"
                                    onChange={(e) => setCalsBurned2(e.target.value)}
                                    value={colsBurned2}
                                />
                                {errors.burnedCalories2 && <div className="error">{errors.burnedCalories2}</div>}
                            </div>
                        </div>
                        <h4>Activity 3 :</h4>
                        <div className="input-row" style={{borderBottom:"2px solid grey ", paddingBottom:"1%"}}>
                            <div className="input-group">
                                <label>Activity:</label>
                                <select
                                    name="activity3"
                                    onChange={(e) => setActivityType3(e.target.value)}
                                    value={activityType3}
                                >
                                    <option value="" disabled hidden>Select Activity:</option>
                                    <option value="Running">Running</option>
                                    <option value="Cycling">Cycling</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.activity3 && <div className="error">{errors.activity3}</div>}
                            </div>
                            <div className="input-group">
                                <label>Duration:</label>
                                <input
                                    type="text"
                                    name="duration3"
                                    onChange={(e) => setDuration3(e.target.value)}
                                    value={duration3}
                                />
                                {errors.duration3 && <div className="error">{errors.duration3}</div>}
                            </div>
                            <div className="input-group">
                                <label>Burned Calories:</label>
                                <input
                                    type="text"
                                    name="burnedCalories3"
                                    onChange={(e) => setCalsBurned3(e.target.value)}
                                    value={colsBurned3}
                                />
                                {errors.burnedCalories3 && <div className="error">{errors.burnedCalories3}</div>}
                            </div>
                        </div>
                         */}
                        <div className="button-row">
                            <button type="submit" style={{ backgroundColor: "#b679ac" }}>Submit</button>
                            <button type="button" onClick={toggleForm}>Close</button>
                        </div>
                    </form>
                </>
            )}

            {showThankYouMessage && (
                <div className="thank-you-message">
                    Thanks for logging your today's activity. Waiting for you again tomorrow!
                </div>
            )}
        </div>
    );
};

export default ActivityForm;