import React, { useState } from 'react';

import { Text } from 'react-native';

import ListItems from './Listitems';

import InputExercise from './InputExercise';


const ExerciseHome = ({}) => {


    const [exercises, setExercises] = useState();

    // clear all workouts
    const handleClearExercises = () => {
        setExercises([]);
    }

    // modal visibility 
    // we want this to be initialized to false because
    // we dont want it to show initially
    const [exerciseInputVisible, setExerciseInputVisible] = useState(false);
    const [workoutExerciseId, setWorkoutExerciseId] = useState();
    const [exerciseNameValue, setExerciseNameValue] = useState();
    const [setsValue, setSetsValue] = useState();
    const [targetRepetitionsValue, setTargetRepetitionsValue] = useState();
    const [startWeightValue, setStartWeightValue] = useState();
    const [weightUnit, setWeightUnit] = useState();
    const [restInterval, setRestInterval] = useState();
    const [dropInterval, setDropInterval] = useState();

    // Function to add a new workout
    const handleAddExercise = (exercise) => {
        const newExercises = [...exercises, exercise];
        
        setExercises(newExercises);
        setExerciseInputVisible(false);
    }
    
    // handleWorkoutEdit
    // 1st: we want to store the item to be edited in a state variable
    const [exerciseToBeEdited, setExerciseToBeEdited] = useState(null);
    // 2nd: we want to show the input modal
    // 3rd: we want to set the value of our input field to the title of 
    // our item to be edited
    const handleExerciseEdit = (item) => {
        setExerciseToBeEdited(item);
        setExerciseInputVisible(true);
        setExerciseNameValue(item.exerciseName);
        setSetsValue(item.sets);
        setTargetRepetitionsValue(item.targetRepetitions);
        setStartWeightValue(item.startWeight);
        setWeightUnit(item.weightUnit);
        setRestInterval(item.restInterval);
        setDropInterval(item.dropInterval);

    }

    const handleEditExercise = (editedExercise) => {
        const newExercises = [...exercises];
        const exerciseIndex = exercises.findIndex((exercise) => exercise.key === editedExercise.key);
        newExercises.splice(exerciseIndex, 1, editedExercise);
        setExercises(newExercises);
        setExerciseToBeEdited(null);
        setExerciseInputVisible(false);
    }

    return (
        <>
       
       <ListItems
         exercises={exercises}
         setExercises={setExercises}
         handleExerciseEdit={handleExerciseEdit}
        />
        <InputExercise
            exerciseInputVisible={exerciseInputVisible}
            setExerciseInputVisible={setExerciseInputVisible}
            exerciseNameValue={exerciseNameValue}
            setExerciseNameValue={setExerciseNameValue}
            setsValue={setsValue}
            setSetsValue={setSetsValue}
            targetRepetitionsValue={targetRepetitionsValue}
            setTargetRepetitionsValue={setTargetRepetitionsValue}
            startWeightValue={startWeightValue}
            setStartWeightValue={setStartWeightValue}
            weightUnit={weightUnit}
            setWeightUnit={setWeightUnit}
            restInterval={restInterval}
            setRestInterval={setRestInterval}
            dropInterval={dropInterval}
            setDropInterval={setDropInterval}
            exerciseToBeEdited={exerciseToBeEdited}
            setExerciseToBeEdited={setExerciseToBeEdited}
            handleEditExercise={handleEditExercise}
            exercises={exercises}
            handleAddExercise={handleAddExercise}
        />
       </>
    );
}

export default ExerciseHome;