import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import Cardd from "./insights/stepscard";
import MainInsight from "./insights/main";
import "./Dahboard.css";
import TotalDurationBarChart from "./charts/workoutDuration";
import BurnedCaloriesChart from "./charts/burnedCalsAndDate";
import WeeklyStepsChart from "./charts/stepsPie";
import WeeklyWaterChart from "./charts/waterPie";
import AddActivity from "./btn/addActivity";
import { useDispatch, useSelector } from "react-redux";
import { getLatestWorkouts, getWorkout } from "../../components/rtkStore/slices/Workout-slice";
import { getGoal } from "../../components/rtkStore/slices/Goal-slice";

function Dashbord() {
    const dispatch = useDispatch();
    // const [refreshKey, setRefreshKey] = useState(0);

    // User slice
    const user = useSelector(state => state.login);
    const profileData = user.data?.data?.user;
    const userId = profileData?._id;

    // Goal slice
    const goalId = profileData?.goals[0];
    console.log("goalId",goalId);
    
    const goal = useSelector(state => state.goal);
    const goalData = goal.data?.data?.goal;

    // Workout slice
    const workout = useSelector(state => state.workout);
    const workoutData = workout.data?.data?.workouts[0];

    // Fetch goal and workouts when component mounts
    useEffect(() => {
        if (profileData && goalId) {
            dispatch(getGoal(goalId));
        }
        if (profileData && userId) {
            dispatch(getLatestWorkouts(userId));
        }

    }, [dispatch, profileData, userId, goalId]);

    // Handle loading and errors
    if (!profileData || !goalData || !workoutData) {
        return (
            <div className="loading-container">
                <p>Loading data, please wait...</p>
            </div>
        );
    }

    return (
        <div className="dash container d-flex mt-0 mb-2 pt-0  p-2">
            <h3 className="ms-5 fs-2 mb-3 p-0 mt-3" style={{ color: "#333333" }}>Take a look at your progress!</h3>

            <div className="d-flex justify-content-center align-items-center">
                <MainInsight
                    className="justify-content-center"
                    userId={userId}
                    goalTarget={goalData}
                    workoutValue={workoutData?workoutData:null}
                />
            </div>

            <div className="d-flex ">
                <BurnedCaloriesChart
                    user={profileData}
                    goalTarget={workout.data?.data?.workouts}
                    workoutValue={workout.data?.data}
                />

                <TotalDurationBarChart className="col-6"
                user={profileData}
                    goalTarget={goalData?.targetCaloriesIntake}
                    workoutValue={workout.data?.data.workouts}
                 />
            </div>

            <div className="d-flex ">
                <WeeklyWaterChart className="col-5 "
                user={profileData}
                goalTarget={goalData?.targetWaterIntake}
                workoutValue={workout.data?.data.workouts}
                 />
                <WeeklyStepsChart
                    user={profileData}
                    goalTarget={goalData?.targetSteps}
                    workoutValue={workout.data?.data}
                />
                <AddActivity className="col-1" userId={userId} />
            </div>
        </div>
    );
}

export default Dashbord;
