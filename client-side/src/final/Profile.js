import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Activitytable from "./Activitytable";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useFetchUsersData from "./dash/fetch/fetch";
import "./profile.css";
import { useSelector, useDispatch } from 'react-redux';
import { getGoal } from "../components/rtkStore/slices/Goal-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faClock } from "@fortawesome/free-solid-svg-icons";
import WorkoutCard from './workoutCard';
import { getLatestWorkouts } from "../components/rtkStore/slices/Workout-slice";
import AddActivity from "./dash/btn/addActivity";

function Profile() {
  const userId = useParams();
  console.log("Profile userId.id", userId);

  const dispatch=useDispatch();
  //user slice
    const user= useSelector(state=>state.login);
    console.log("userProfile",user);
    const profileData=user.data?.data.user;
    console.log("profileData",profileData);
    
    const goalId=profileData?.goals[0];
    console.log("profileGoal",goalId);
    
    //goal slice
    const goal= useSelector(state=>state.goal);
    console.log("goalProfile",goal);
    const goalData=goal.data?.data.goal;
    console.log("goalData",goalData);

    // Workout slice
  const workout = useSelector(state => state.workout);

  console.log("workout",workout);
  
  const workoutData = workout.data?.data;

    useEffect(() => {
      
      
      if (profileData && goalId) {
        dispatch(getGoal(goalId));
    }
      if (profileData && userId) {
        dispatch(getLatestWorkouts(userId));
    }

    },[dispatch,profileData,goalId,userId]);

  return (
    <div
      className="container"
      style={{ marginLeft: "16%", marginTop: "0", paddingTop: "2%" , marginRight:"0"}}
      
    >
      <div className="user-line">
<h2 className="text-start px-3 pb-1 userpro"><FontAwesomeIcon icon={faAddressCard} /> User Profile </h2>
</div>
      <div
        style={{ marginLeft: "2.5%", width: "93%" }}
        className="row shadow main-row d-flex justify-content-center align-items-center col-12 profile-card"
      >
        <div className="col-lg-3 col-md-12 mb-4  ">
          <div className="p-4 text-center">
            <img src="/profile.jpg" style={{width:"80%", height:"40%"}}></img>
            <h4 className="mt-3">{profileData?.userName}</h4>
            <Link
              className=" btn edit-btn mt-3 text-light fs-5 fw-bold "
              // to={`/Editpage`}
              to={`/Editpage/${userId.id}`}
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <div className="col-lg-9 col-md-12 ">
          <div className="p-1 ">
            <div className="row userinfo">
              
              <div className="col-md-4">
                <h5 className="fs-5">
                {/* Name: <span className="data">Basmalla Mahmoud</span> */}
                  Name: <span className="data">{profileData?.userName}</span>
                </h5>
              </div>
              <div className="col-md-4">
              <h5 className="fs-5">
                {/* Email: <span className="data">basmalla@gmail.com</span> */}
                  Email: <span className="data">{profileData?.email}</span>
                </h5>
                
              </div>

              <div className="col-md-4">
              <h5 className="fs-5">
                  Height: 
                  {/* <span className="data">163</span> */}
                  <span className="data">{profileData?.height}</span>
                </h5>
              </div>
              
            </div>
            <hr />
            <div className="row userinfo">
              <div className="col-md-4">
                <h5 className="fs-5">
                  Current Weight:{" "}
                  {/* <span className="data">78</span> */}
                  <span className="data">{profileData?.weight}</span>
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="fs-5">
                  Target Weight:{" "} 
                  {/* <span className="data">53</span> */}
                  <span className="data">{goalData?.targetWeight}</span>
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="fs-5">
                  {" "}
                  TargetCalories Intake:{" "}
                  {/* <span className="data">1750</span> */}
                  <span className="data">{goalData?.targetCaloriesIntake}</span>
                </h5>
              </div>
            </div>
            <hr />
            <div className="row userinfo">
              <div className="col-md-4">
                <h5 className="fs-5">
                  {" "}
                  TargetCalories Burned:{" "}
                  {/* <span className="data">860</span> */}
                  <span className="data">{goalData?.targetCaloriesBurned}</span>
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="fs-5">
                Target Water Intake:{" "}
                {/* <span className="data">3.5</span> */}
                  <span className="data">{goalData?.targetWaterIntake}</span>
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="fs-5">
                Target Steps: 
                {/* <span className="data">3.5</span> */}
                  <span className="data">{goalData?.targetSteps}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="userpro mt-3 "> <FontAwesomeIcon className="mx-2" icon={faClock} />Last Week Recap</h3>
      <div className="row mt-3 d-flex justify-content-center" style={{width: "97%", paddingLeft: "2.5%"}}>

      {
    workoutData && workoutData.workouts && workoutData.workouts.length > 0 ? (
      <WorkoutCard workoutData={workoutData.workouts} />
    ) : (
      // <h2 className="text-secondary text-center" style={{color:"#665D58"}}>DO Some Workouts...</h2>
      <AddActivity className="col-1" userId={userId} />

    )
  }
        
        </div>
    </div>
  );
}

export default Profile;