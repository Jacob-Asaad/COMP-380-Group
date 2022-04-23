import React, { useState, useEffect } from 'react';

import { Text } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';

import ExerciseHome from './ExerciseHome';

import ListItems from './Listitems';
import { Container } from './../components/styles';

import InputModal from './inputModal';
import Header from "./Header.js";
import fitnessAPI from '../apis/fitness';

const Home = ({isExercise, firstName}) => {

    const route = useRoute();
    

    //const [workouts, setWorkouts] = useState(initialWorkouts);
    const [workouts, setWorkouts] = useState([]);
    const [workoutEmail, setWorkoutEmail] = useState();
    const [exerciseQuantityValue, setExerciseQuantityValue] = useState(Number);
    

    useEffect(()=>{
        getWorkoutsFromAPI()
        
    },[])
    
    function getWorkoutsFromAPI(){
        fitnessAPI.get("workout/" + route.params.email)
        .then(function(response){
            setWorkouts(response.data)
            //setExerciseQuantityValue(response.data.exercises)
            console.log(workouts)
            setWorkoutEmail(route.params.email)
            
            
        })
        .catch(function(error){
            //console.log(error)
        })
    }

    if (!workouts) {
        return null
    }

    // clear all workouts
    const handleClearWorkouts = () => {
        setWorkouts([]);
    }

    // modal visibility 
    // we want this to be initialized to false because
    // we dont want it to show initially
    const [modalVisible, setModalVisible] = useState(false);
    const [secondModalVisible, setSecondModalVis] = useState(false);
    const [thirdModalVisible, setThirdModalVis] = useState(false);
    const [workoutInputValue, setWorkoutInputValue] = useState();
    const [exerciseNameValue, setExerciseNameValue] = useState();
    const [setsValue, setSetsValue] = useState();
    const [targetRepetitionsValue, setTargetRepetionsValue] = useState();
    const [startWeightValue, setStartWeightValue] = useState();
    const [restIntervalValue, setRestIntervalValue] = useState();
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
        setWorkoutIDValue(item._id);
        setModalVisible(true);
        setWorkoutInputValue(item.workoutName);
        setWorkoutTypeValue(item.workoutType);
        //setWorkoutIDValue(item.key);
    }

    

    const handleEditWorkout = (editedWorkout) => {
        const newWorkouts = [...workouts];
        const workoutIndex = workouts.findIndex((workout) => workout.key === editedWorkout.key);
        newWorkouts.splice(workoutIndex, 1, editedWorkout);
        setWorkouts(newWorkouts);
        setWorkoutToBeEdited(null);
        setModalVisible(false);
    }
    handleExerciseOpen = () => {
        this.setState({ isExercise: true });
    };

    handleExerciseClose = () => {
        this.setState({ isExercise: false });
    };


    return (
        <Container>
        <>
        <Header 
       handleClearWorkouts={handleClearWorkouts}
       firstName={firstName}
       
       />
       <ListItems
         workouts={workouts}
         data={workouts}
         workoutEmail={workoutEmail}
         
         setWorkouts={setWorkouts}
         handleWorkoutEdit={handleWorkoutEdit} 
        />
        <InputModal
            handleWorkoutEdit={handleWorkoutEdit}
            workouts={workouts}
            firstName={firstName}
            exerciseNameValue={exerciseNameValue}
            setExerciseNameValue={setExerciseNameValue}
            exerciseQuantityValue={exerciseQuantityValue}
            setExerciseQuantityValue={setExerciseQuantityValue}
            setsValue={setsValue}
            setSetsValue={setSetsValue}
            restIntervalValue={restIntervalValue}
            setRestIntervalValue={setRestIntervalValue}
            targetRepetitionsValue={targetRepetitionsValue}
            setTargetRepetitionsValue={setTargetRepetionsValue}
            startWeightValue={startWeightValue}
            setStartWeightValue={setStartWeightValue}
            getWorkoutsFromAPI={getWorkoutsFromAPI}
            workoutIDValue={workoutIDValue}
            workoutEmail={workoutEmail}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            secondModalVisible={secondModalVisible}
            setSecondModalVis={setSecondModalVis}
            thirdModalVisible={thirdModalVisible}
            setThirdModalVis={setThirdModalVis}
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
            setWorkoutIDValue={setWorkoutIDValue}
            exerciseVisible={exerciseVisible}
            setExerciseVisible={setExerciseVisible}
        />
        
       </>
       </Container>
    );
}

export default Home;