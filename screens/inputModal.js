import React, {useState, useEffect} from 'react';
import { Modal } from 'react-native';
//import Axios from 'axios';
import {
    ModalButton,
    ModalContainer,
    ModalView,
    StyledView,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors1,
    StyledInput
} from './../components/styles';
import { NavigationContainer, useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import ExerciseHome from './ExerciseHome';
import fitnessAPI from '../apis/fitness';
import { axios } from 'axios';


const InputModal = ({modalVisible, getWorkoutsFromAPI, workoutEmail, setModalVisible, workoutInputValue, setWorkoutInputValue, workoutTypeValue, setWorkoutTypeValue, workoutToBeEdited, setWorkoutToBeEdited, workoutExerciseValue, setWorkoutExerciseValue, handleAddWorkout, handleEditWorkout, workouts, exerciseVisible, workoutIDValue, setWorkoutIDValue, setExerciseVisible, }) => {
    const route = useRoute();
    
    
    
    const [workout, upDateWorkout] = useState({
        userEmail: route.params.email,
        workoutName: workoutInputValue,
        workoutType: workoutTypeValue,
        
    });
    const postWorkout = () => {
        const url = 'workout';
        fitnessAPI.post(url, workout)
        .then((res) => {
            //console.log(res);
            //console.log(workout)
            
        })
        .catch((error) => {
            //console.log(error);
            //console.log(workout)
        });
    };

    const putWorkout = () => {
        const puturl = 'workout/' + workoutIDValue;
        fitnessAPI.put(puturl, workout)
        .then((res) => {
            //console.log(res);
            //console.log(workout)
        })
        .catch((error) => {
            //console.log(error);
            //console.log(workout);
        })
    }

    
    const handleCloseModal = () => {
        setModalVisible(false);
        setWorkoutInputValue("");
        setWorkoutTypeValue("");
        setWorkoutExerciseValue(0);
        // setOtherValues in workouts everywhere you find this
        setWorkoutToBeEdited(null);
        // this one too
    }

    const handleStartExercise = () => {
        setModalVisible(false);
        setExerciseVisible(true);
    }

    const handleWorkoutSubmit = () => {

         if (!workoutToBeEdited) {
            /**handleAddWorkout({
                title: workoutInputValue,
                workoutType: workoutTypeValue,
                exercises: workoutExerciseValue,
                date: new Date().toUTCString(),
                key: `${(workouts[workouts.length-1] && parseInt(workouts[workouts.length - 1].key) + 1) || 1 }`}
            
         });**/
         //upDateWorkout({
           // userEmail: route.params.email,
           // workoutName: workoutInputValue,
           // workoutType: workoutTypeValue,
        // });
          setTimeout(() => {postWorkout(workout)}, 100);
         
         } else {
            /**  handleEditWorkout({
                 title: workoutInputValue,
                 workoutType: workoutTypeValue,
                 exercises: workoutExerciseValue,
                 date: workoutToBeEdited.date,
                 key: workoutToBeEdited.key
             }) **/
             //console.log(workoutIDValue);
             setTimeout(() => {putWorkout(workout)}, 100);
             setWorkoutToBeEdited(null);
         }

         setTimeout(() => {getWorkoutsFromAPI(workouts)}, 500);
         setWorkoutInputValue("");
         setWorkoutTypeValue("");
         setModalVisible(false);
         
         
         
         
         

    }
    return (
        <>
            
            <ModalButton onPress={() => {setModalVisible(true)}}>
                 <AntDesign name="plus" size={30} color={colors1.secondary} />
            </ModalButton>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                          <HeaderTitle>Workouts</HeaderTitle>
                         <AntDesign name="edit" size={30} color={colors1.tertiary} />
                    </ModalIcon>
                    <StyledInput 
                        placeholder="Workout Name"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setWorkoutInputValue(text); upDateWorkout({
                            userEmail: route.params.email,
                            workoutName: text,
                            workoutType: workoutTypeValue,
                        })}}
                        value={workoutInputValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleWorkoutSubmit}
                    />
                    <StyledInput 
                        placeholder="Type"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setWorkoutTypeValue(text); upDateWorkout({
                            userEmail: route.params.email,
                            workoutName: workoutInputValue,
                            workoutType: text,
                        })}}
                        value={workoutTypeValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleWorkoutSubmit}
                    />

                    <ModalActionGroup>
                        <ModalAction color={colors1.primary} onPress={handleCloseModal}>
                             <AntDesign name="close" size={28} color={colors1.tertiary} />
                        </ModalAction>
                       
                        <ModalAction color={colors1.primary} onPress={handleWorkoutSubmit}>
                            <AntDesign name="plus" size={28} color={colors1.tertiary} />
                        </ModalAction>
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
            
            
        </>
    )
    
}

export default InputModal;