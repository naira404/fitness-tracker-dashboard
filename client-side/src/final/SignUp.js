import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from '../components/rtkStore/slices/login-slice';
import { addGoal, getGoal } from './../components/rtkStore/slices/Goal-slice';


export default function SignUp() {

    // const [username, setUsername] = useState('');
    // const [Gender, setGender] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');  
    // const [currentWeight, setCurrentWeight] = useState('');
    // const [targetWeight, setTargetWeight] = useState('');
    // const [targetCaloriesBurned, setTargetCaloriesBurned] = useState('');
    // const [targetCaloriesIntake, setTargetCaloriesIntake] = useState('');
    // const [height, setHeight] = useState('');
    // const [age, setAge] = useState('');
    // const [dailySteps, setDailySteps] = useState('');
    // const [dailyHydration, setDailyHydration] = useState('');

    // const [userData, setUserData] = useState([]);
    // const navigate = useNavigate();



    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    const [targetWeight, setTargetWeight] = useState();
    const [targetCaloriesBurned, setTargetCaloriesBurned] = useState();
    const [targetCaloriesIntake, setTargetCaloriesIntake] = useState();
    const [targetWaterIntake, setTargetWaterIntake] = useState();
    const [targetSteps, setTargetSteps] = useState();


  const navigate=useNavigate();


  //user Slice
  const user=useSelector(state=>state.login);

//   console.log("user",user);

  //goal Slice
  const goal=useSelector(state=>state.goal);

//   console.log("user",goal);

  const dispatch=useDispatch()


    const handleSubmit = (e) => { 
        e.preventDefault();



        dispatch(userRegistration({
            userName,
            email,
            gender,
            password,
            age: parseInt(age),
            height: parseInt(height),
            weight: parseInt(weight)
        }))
          .unwrap()
          .then((response) => {
            const userId = response?.data.user._id; 
            // console.log("Registration success:", userId);

            dispatch(addGoal({
                userId,
                targetWeight:parseInt(targetWeight),
                targetCaloriesBurned:parseInt(targetCaloriesBurned),
                targetCaloriesIntake:parseInt(targetCaloriesIntake),
                targetWaterIntake:parseInt(targetWaterIntake),
                targetSteps:parseInt(targetSteps)
            }))

            navigate(`/profile/${userId}`);
          })
          .catch((error) => {
            console.error("Signup failed:", error);
          });

    };

    return (
        <div className='signin-wrapper'>
            <div className="signin-page">
                <div className="signin-container">
                    <h2 className="signin-title">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="signin-form">
                        <div className="input-group">
                            <label className='fs-5'> Email:
                    
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label className='fs-5'>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label className='fs-5'>Username:</label>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group gender-group">
                                <label className='fs-5'>Gender: </label>
                                <div className="radio-group">
                                    <div className="radio-input">
                                        <input
                                            type="radio"
                                            id="gendermal"
                                            value="male"
                                            name="gender"
                                            onChange={(e) => setGender(e.target.value)}
                                            required
                                        />
                                        <label  htmlFor="gendermal">Male</label>
                                    </div>
                                    <div className="radio-input">
                                        <input
                                            type="radio"
                                            id="genderf"
                                            value="female"
                                            name="gender"
                                            onChange={(e) => setGender(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="genderf">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label className='fs-5'>Age:</label>
                                <input
                                    type="text"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className='fs-5'>Height:</label>
                                <input
                                    type="text"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label className='fs-5'>Weight:</label>
                                <input
                                    type="text"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className='fs-5'>Target Weight:</label>
                                <input
                                    type="text"
                                    value={targetWeight}
                                    onChange={(e) => setTargetWeight(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label className='fs-5'>Target Calories Intake:</label>
                                <input
                                    type="text"
                                    value={targetCaloriesIntake}
                                    onChange={(e) => setTargetCaloriesIntake(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className='fs-5'>Target Calories Burned:</label>
                                <input
                                    type="text"
                                    value={targetCaloriesBurned}
                                    onChange={(e) => setTargetCaloriesBurned(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label className='fs-5'>Daily Hydration (L):</label>
                                <input
                                    type="text"
                                    value={targetWaterIntake}
                                    onChange={(e) => setTargetWaterIntake(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className='fs-5'>Daily Steps:</label>
                                <input
                                    type="text"
                                    value={targetSteps}
                                    onChange={(e) => setTargetSteps(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button className='signbtn' type="submit" >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignUp.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser } from '../components/rtkStore/slices/login-slice';


// export default function SignUp() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const user=useSelector(state=> state.login);
//     console.log("user",user);

//     const dispatch=useDispatch();



//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setEmailError('');
//         setPasswordError('');

//         dispatch(fetchUser({email,password}));

//         console.log("userId.id",user.data.data.user._id);
    

//         if (!validateEmail(email)) {
//             setEmailError('Invalid email format');
//         }

//         if (!password) {
//             setPasswordError('Password is required');
//         }

//         if (!validateEmail(email) || !password) {
//             return;
//         }

//         // If everything is valid, navigate to home
//         navigate('/profile/'+user.data.data.user._id);
//     };

//     return (
//         <div className='signup-body'>
//             <div className="signin-page">
//                 <div className="signin-container">
//                     <h2 style={{ color:" #de96da", fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>
//                         Sign In
//                     </h2>
//                     <form onSubmit={handleSubmit} style={{ marginLeft: '30px' }}>
//                         <div className="input-group1">
//                             <label>Email:</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             {emailError && <p className="error-message1">{emailError}</p>}
//                         </div>

//                         <div className="input-group1">
//                             <label>Password:</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             {passwordError && <p className="error-message1">{passwordError}</p>}
//                         </div>

//                         <button className='signbtn1' type="submit">Sign In</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }