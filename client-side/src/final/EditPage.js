// import axios from 'axios'
// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useNavigate, useParams,Link } from 'react-router-dom'


// const EditPage = () => {
//       const { id } = useParams();
//       const [values, setValues] = useState({
//             id: id,
//             username: '',
//             currantweight: '',
//             targetedweight: '',
//             workout: '',
//             password: '',
//             age: '',
//             dailySteps: "",
//             dailyCalories: "",
//             dailyCaloriesBurned: "",
//             dailyhydrated: "",

//       })
//     const navigate=useNavigate();
//       useEffect(() => {
//             console.log('ID from params:', id);

//             if (id) {
//                   axios.get(`http://localhost:5000/users/${id}`)
//                         .then(res => {console.log(res)
//                                setValues(res.data)
//                         })
//                         .catch(err => console.log(err));
//             } else {
//                   console.error("ID is not defined");
//             }
//       }, [id]);
//        const handelSubmit=(event)=>{

//             axios.put(`http://localhost:5000/users/${id}`,values)
//                         .then(res => {console.log(res);
//                               navigate('/profile')
//                         })
//                         .catch(err => console.log(err));

//        }

//       return (
//             <div >

//                   <div className=' cont-1 w-100 border text-white p5'>
//                         <div className='image'></div>
//                         <form onSubmit={handelSubmit} style={{marginTop:"2%"}}>
//                               <div>
//                                     <label > Name :</label>
//                                     <input
//                                           type='text'
//                                           className='form-control'
//                                           placeholder='Enter your user name'
//                                           value={values.username}
//                                           onChange={e => setValues({ ...values, username: e.target.value })}
//                                     />

//                               </div>
//                               <div>
//                                     <label >Daily Calories :</label>
//                                     <input
//                                           type='text'
//                                           className='form-control'
//                                           value={values.dailyCalories}
//                                           onChange={e => setValues({ ...values, dailyCalories: e.target.value })}
//                                     />
//                               </div>
//                               <div>
//                               <label >Daily Burned Calories :</label>
//                                     <input
//                                           type='text'
//                                           className='form-control'
//                                           value={values.dailyCaloriesBurned}
//                                           onChange={e => setValues({ ...values, dailyCaloriesBurned: e.target.value })}
//                                     />


//                               </div>
//                               <div>
//                                     <label >Your target weight :</label>
//                                     <input
//                                           type='text'
//                                           className='form-control'
//                                           value={values.targetedweight}
//                                           onChange={e => setValues({ ...values, targetedweight: e.target.value })}
//                                     />

//                               </div>
//                               <div>
//                                     <label >Your currant weight :</label>
//                                     <input
//                                           type='text'
//                                           className='form-control'
//                                           placeholder=' Your currant weight  '
//                                           value={values.currantweight}
//                                           onChange={e => setValues({ ...values, currantweight: e.target.value })}
//                                     />

//                               </div>
//                               <div>
//                                     <label >workout :</label>
//                                     <input
//                                           type='text'
//                                           className='form-control'
//                                           placeholder='Enter your user name'
//                                           value={values.workout}
//                                           onChange={e => setValues({ ...values, workout: e.target.value }) }
//                                     />

//                               </div>
//                               <div style={{marginBottom:"3%"}}>
//                                     <label >Age:</label>

//                                     <input
//                                           type='number'
//                                           className='form-control'
//                                           placeholder='Enter your user name'
//                                           value={values.age}
//                                           onChange={e => setValues({ ...values, age: e.target.value })}
//                                     />
//                               </div>

//                                    <button><Link   className='edit-btn' to={`/Profile/${id}`} style={{textDecoration: "none",marginTop:"4%", padding:"10px 45px"}} > Edit</Link></button>     
//                         </form>

//                   </div>
//             </div>
//       )
// }

// export default EditPage
// import { ImportContacts } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './edit .css'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../components/rtkStore/slices/login-slice'
import { updateGoal } from '../components/rtkStore/slices/Goal-slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const EditPage = () => {
  
  const userId=useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.login);
  const profileData=user.data?.data.user;
  // console.log("profileData.age",profileData?.age);

  const [updateUserName, setUpdateUserName] = useState(profileData?.userName);
  const [updateEmail, setUpdateEmail] = useState(profileData?.email);
  const [updatePassword, setUpdatePassword] = useState(profileData?.password);
  const [updateAge, setUpdateAge] = useState(profileData?.age);
  const [updateHeight, setUpdateHeight] = useState(profileData?.height);
  const [updateWeight, setUpdateWeight] = useState(profileData?.weight);


  //goal slice
  const goal= useSelector(state=>state.goal);
  console.log("goalProfile",goal);
  const goalData=goal.data?.data.goal;
  console.log("goalData",goalData);

//targetWeight,targetCaloriesBurned,targetCaloriesIntake,targetWaterIntake,targetSteps
  const [updateTargetWeight, setUpdateTargetWeight] = useState(goalData?.targetWeight);
  const [updateTargetCaloriesBurned, setUpdateTargetCaloriesBurned] = useState(goalData?.targetCaloriesBurned);
  const [updateTargetCaloriesIntake, setUpdateTargetCaloriesIntake] = useState(goalData?.targetCaloriesIntake);
  const [updateTargetWaterIntake, setUpdateTargetWaterIntake] = useState(goalData?.targetWaterIntake);
  const [updateTargetSteps, setUpdateTargetSteps] = useState(goalData?.targetSteps);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateUser({
      userId,
      updateUserName,
      updateEmail,
      updatePassword,
      updateAge:parseInt(updateAge),
      updateHeight:parseInt(updateHeight),
      updateWeight:parseInt(updateWeight)
  }))



  dispatch(updateGoal({
    goalId:goalData?._id,
    updateTargetWeight:parseInt(updateTargetWeight),
    updateTargetCaloriesBurned:parseInt(updateTargetCaloriesBurned),
    updateTargetCaloriesIntake:parseInt(updateTargetCaloriesIntake),
    updateTargetWaterIntake:parseInt(updateTargetWaterIntake),
    updateTargetSteps:parseInt(updateTargetSteps)
}))

  // console.log("userId.id",user.data.data.user._id);

  navigate('/profile/'+user.data.data.user._id);
  };

  return (
    <div className='mx-3 edit '>
      
      <div className='h-100 w-100 text-white p5 d-flex justify-content-center align-items-center '>
       
        <form  onSubmit={handleSubmit} style={{ marginLeft: '10%', width:"50%" }}>
        <h2 className='text-center d-block'>Update Your Details <FontAwesomeIcon icon={faPenToSquare} /> </h2>
        <h4>Personal Info : </h4>
          <div className='row mb-1'>
            <div className='col-md-6'>
              <label> Name:</label>
              <input
                type='text'
                className='form-control'
               
                value={updateUserName}
                onChange={(e) => setUpdateUserName(e.target.value)}
              />
            </div>
  
            <div className='col-md-6'>
              <label> Height</label>
              <input
                type='text'
                className='form-control'
               
                value={updateHeight}
                onChange={(e) => setUpdateHeight(e.target.value)}
              />
            </div>
          </div>
  
          <div className='row  mb-1'>
            <div className='col-md-6'>
              <label> Weight:</label>
              <input
                type='text'
                className='form-control'
               
                value={updateWeight}
                onChange={(e) => setUpdateWeight(e.target.value)}
              />
            </div>
            </div>

            <hr style={{color: "gray"}}/>
            <h4>Goals : </h4>
           
            <div className='row  mb-1'>
            <div className='col-md-6'>
              <label> Target Weight:</label>
              <input
                type='text'
                className='form-control'
               
                value={updateTargetWeight}
                onChange={(e) => setUpdateTargetWeight(e.target.value)}
              />
            </div>
          
         
            <div className='col-md-6'>
              <label> Target Calories Burned:</label>
              <input
                type='text'
                className='form-control'
              
                value={updateTargetCaloriesBurned}
                onChange={(e) => setUpdateTargetCaloriesBurned(e.target.value)}
              />
            </div>
            </div>
            
  
          <div className='row  mb-1'>
            <div className='col-md-6'>
              <label> Target Calories Intake:</label>
              <input
                type='text'
                className='form-control'
              
                value={updateTargetCaloriesIntake}
                onChange={(e) => setUpdateTargetCaloriesIntake(e.target.value)}
              />
            </div>
          
            <div className='col-md-6  '>
              <label> Target Water Intake:</label>
              <input
                type='text'
                className='form-control'
                
                value={updateTargetWaterIntake}
                onChange={(e) => setUpdateTargetWaterIntake(e.target.value)}
              />
            </div>
            </div>
            <div className='col-md-6 '>
              <label> Target Steps:</label>
              <input
                type='text'
                className='form-control'
               
                value={updateTargetSteps}
                onChange={(e) => setUpdateTargetSteps(e.target.value)}
              />
            </div>
         
  
          {/* Submit Button */}
          <button type="submit" className='sub-edit text-center' style={{
            textDecoration: "none", marginTop: "4%",marginLeft:"37%"
          }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
  
}
export default EditPage;

//   return (
//     <div className='mx-3'>
//       <div className='cont-1 w-100 border text-white p5'>
//         <div className='image'></div>
//         <form onSubmit={handleSubmit} style={{ marginTop: "2%", marginLeft: '40px' }}>
//           <div>
//             <label> Name:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter your username'
//               value={updateUserName}
//               onChange={(e) => setUpdateUserName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label> Email:</label>
//             <input
//               type='text'
//               className='form-control'
//               value={updateEmail}
//               onChange={(e) => setUpdateEmail(e.target.value)}/>
//           </div>
//           <div>
//             <label> Password:</label>
//             <input
//               type='text'
//               className='form-control'
//               value={updatePassword}
//               onChange={(e) => setUpdatePassword(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> Age:</label>
//             <input
//               type='text'
//               className='form-control'
//               value={updateAge}
//               onChange={(e) => setUpdateAge(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> Height</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder=' Your current weight'
//               value={updateHeight}
//               onChange={(e) => setUpdateHeight(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> weight:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter workout type'
//               value={updateWeight}
//               onChange={(e) => setUpdateWeight(e.target.value)}
//               />
//           </div>
//           <div>
//             <label>Target Weight:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter workout type'
//               value={updateTargetWeight}
//               onChange={(e) => setUpdateTargetWeight(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> Target Calories Burned:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter workout type'
//               value={updateTargetCaloriesBurned}
//               onChange={(e) => setUpdateTargetCaloriesBurned(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> Target Calories Intake:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter workout type'
//               value={updateTargetCaloriesIntake}
//               onChange={(e) => setUpdateTargetCaloriesIntake(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> Target Water Intake:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter workout type'
//               value={updateTargetWaterIntake}
//               onChange={(e) => setUpdateTargetWaterIntake(e.target.value)}
//               />
//           </div>
//           <div>
//             <label> Target Steps:</label>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Enter workout type'
//               value={updateTargetSteps}
//               onChange={(e) => setUpdateTargetSteps(e.target.value)}
//               />
//           </div>
          
//           {/* Submit Button */}
//           <button type="submit" className='sub-edit' style={{
//             textDecoration: "none", marginTop: "4%", padding: "10px 30px",
            
//              }}>
//           Save Changes
//         </button>
//       </form>
//     </div>
//     </div >
//   )
// }

// export default EditPage;