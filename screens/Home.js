import React, { useState } from 'react';

import { Text } from 'react-native';

import ExerciseHome from './ExerciseHome';

import ListItems from './Listitems';
import { Container } from './../components/styles';

import InputModal from './inputModal';
import Header from "./Header.js";

const Home = () => {

    // initial Workouts
    const initialWorkouts = [{
        title: "Push",
        workoutType: "Weight Lifting",
        exercises: 0,
        date: "Fri, 07 Jan 2021 16:32:11 GHT",
        key: "1"
    }, {
        title: "Pull",
        workoutType: "Weight Lifting",
        exercises: 0,
        date: "Fri, 07 Jan 2021 16:32:11 GHT",
        key: "2"
    }, {
        title: "Body Weight",
        workoutType: "Calisthenics",
        exercises: 0,
        date: "Fri, 07 Jan 2021 16:32:11 GHT",
        key: "3"
    }, {
        title: "Stamina Performance",
        workoutType: "Cardio",
        exercises: 0,
        date: "Fri, 07 Jan 2021 16:32:11 GHT",
        key: "4"
    }]

    const [workouts, setWorkouts] = useState(initialWorkouts);

    // clear all workouts
    const handleClearWorkouts = () => {
        setWorkouts([]);
    }

    // modal visibility 
    // we want this to be initialized to false because
    // we dont want it to show initially
    const [modalVisible, setModalVisible] = useState(false);
    const [workoutInputValue, setWorkoutInputValue] = useState();
    const [workoutTypeValue, setWorkoutTypeValue] = useState();
    const [workoutExerciseValue, setWorkoutExerciseValue] = useState();
    const [workoutIDValue, setWorkoutIDValue] = useState();
    const [exerciseVisible, setExerciseVisible] = useState(false);

    // Function to add a new workout
    const handleAddWorkout = (workout) => {
        const newWorkouts = [...workouts, workout];
        setWorkouts(newWorkouts);
        setModalVisible(false);
    }
    
    // handleWorkoutEdit
    // 1st: we want to store the item to be edited in a state variable
    const [workoutToBeEdited, setWorkoutToBeEdited] = useState(null);
    // 2nd: we want to show the input modal
    // 3rd: we want to set the value of our input field to the title of 
    // our item to be edited
    const handleWorkoutEdit = (item) => {
        setWorkoutToBeEdited(item);
        setModalVisible(true);
        setWorkoutInputValue(item.title);
        setWorkoutTypeValue(item.workoutType);
        setWorkoutIDValue(item.key);
    }

    const handleEditWorkout = (editedWorkout) => {
        const newWorkouts = [...workouts];
        const workoutIndex = workouts.findIndex((workout) => workout.key === editedWorkout.key);
        newWorkouts.splice(workoutIndex, 1, editedWorkout);
        setWorkouts(newWorkouts);
        setWorkoutToBeEdited(null);
        setModalVisible(false);
    }


    return (
        <Container>
        <>
       <Header handleClearWorkouts={handleClearWorkouts}/>
       <ListItems
         workouts={workouts}
         setWorkouts={setWorkouts}
         handleWorkoutEdit={handleWorkoutEdit} 
        />
        <InputModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            workoutInputValue={workoutInputValue}
            workoutTypeValue={workoutTypeValue}
            setWorkoutInputValue={setWorkoutInputValue}
            setWorkoutTypeValue={setWorkoutTypeValue}
            handleAddWorkout={handleAddWorkout}
            workoutExerciseValue={workoutExerciseValue}
            setWorkoutExerciseValue={setWorkoutExerciseValue}
            workoutToBeEdited={workoutToBeEdited}
            setWorkoutToBeEdited={setWorkoutToBeEdited}
            handleEditWorkout={handleEditWorkout}
            workouts={workouts}
            exerciseVisible={exerciseVisible}
            setExerciseVisible={setExerciseVisible}
        />
        
       </>
       </Container>
    );
}

export default Home;