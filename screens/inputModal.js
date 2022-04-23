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
    StyledInput,
    Line
   
} from './../components/styles';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import ExerciseListItems from './exerciseListItem';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import ExerciseHome from './ExerciseHome';
import fitnessAPI from '../apis/fitness';
import { Axios } from 'axios';
import { createIconSetFromFontello } from 'react-native-vector-icons';


const InputModal = ({navigation, thirdModalVisible, handleWorkoutEdit, exerciseQuantityValue, setExerciseQuantityValue, setsValue, setSetsValue, targetRepetitionsValue, setTargetRepetitionsValue, startWeightValue, setStartWeightValue, restIntervalValue, setRestIntervalValue, exerciseNameValue, setExerciseNameValue, setThirdModalVis, firstName, setSecondModalVis, secondModalVisible, modalVisible, getWorkoutsFromAPI, workoutEmail, setModalVisible, workoutInputValue, setWorkoutInputValue, workoutTypeValue, setWorkoutTypeValue, workoutToBeEdited, setWorkoutToBeEdited, workoutExerciseValue, setWorkoutExerciseValue, handleAddWorkout, handleEditWorkout, workouts, exerciseVisible, workoutIDValue, setWorkoutIDValue, setExerciseVisible, }) => {
    const route = useRoute();

    const [exercises, setExercises] = useState([]);
    const [exerciseIDValue, setExerciseIDValue] = useState();
    const [exerciseToBeEdited, setExerciseToBeEdited] = useState(null);
         
        
    
           

            
        
    
        const getExercisesFromAPI = () => {
            const urle = "exercise/" + workoutIDValue;
            fitnessAPI.get(urle)
            .then((response) => {
               //console.log(response.data)
               if (response.data != "Exercises start here!") {
                setExercises(response.data)
               }
                //setExercises(response.data)
                //console.log(exercises)
                //setWorkoutEmail(route.params.email)
                
                
            })
            .catch(function(error){
                //console.log("bye")
            })
        }
    
        if (!exercises) {
            return null;
        }

        const postExercise = () => {
            const url = 'exercise/' + workoutIDValue;
            fitnessAPI.post(url, exercise)
            .then((res) => {
                //console.log(res);
                //console.log(workout)
                
            })
            .catch((error) => {
                //console.log(error);
                //console.log(workout)
            });
        };

        const putExercise = () => {
            const puturl = 'exercise/' + exerciseIDValue;
            fitnessAPI.put(puturl, exercise)
            .then((res) => {
                //console.log(firstName)
                //console.log(res);
                //console.log(workout)
            })
            .catch((error) => {
                //console.log(error);
                //console.log(workout);
            })
        }


    

    
    
    
    
    const [workout, upDateWorkout] = useState({
        userEmail: route.params.email,
        workoutName: workoutInputValue,
        workoutType: workoutTypeValue,
        
    });

    const [exercise, upDateExercise] = useState({
        workoutID: workoutIDValue,
        exerciseName: exerciseNameValue,
        sets: setsValue,
        targetRepetitions: targetRepetitionsValue,
        startWeight: startWeightValue,
        restInterval: restIntervalValue
    })
    const postWorkout = () => {
        const url = 'workout';
        fitnessAPI.post(url, workout)
        .then((res) => {
            setWorkoutIDValue(res.data._id);
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
            //console.log(res.data)
            //console.log(res);
            console.log(workout)
        })
        .catch((error) => {
            console.log(error);
            //console.log(workout);
        })
    }

    const handleCloseSecondMod = () => {
        setSecondModalVis(false);
        setExercises([]);
        //console.log(exercises);
    } 

    const handleCloseThirdMod = () => {
        setThirdModalVis(false);
        setExerciseNameValue("");
        setSetsValue("");
        setTargetRepetitionsValue("");
        setStartWeightValue("");
        setRestIntervalValue("");
        setExerciseToBeEdited(null);
        
    }

    
    const handleCloseModal = () => {
        setModalVisible(false);
        setTimeout(() => {getWorkoutsFromAPI(workouts)}, 100);
        setWorkoutInputValue("");
        setWorkoutTypeValue("");
        setWorkoutExerciseValue(0);
        // setOtherValues in workouts everywhere you find this
        setWorkoutToBeEdited(null);
        // this one too
    }

    const handleSecondModal = () => {
        if (!workoutToBeEdited) {
            
            setTimeout(() => {postWorkout(workout)}, 100);
            handleCloseModal();
            handleWorkoutEdit(workout);
        }
        getExercisesFromAPI();
        setSecondModalVis(true);
    };

    const handleCloseSecondModal = () => {
        setSecondModalVis(false);
    };

    const handleStartExercise = () => {
        setModalVisible(false);
        setExerciseVisible(true);
    }
    
    const handleAddExercise = () => {

    }
    
    
    const handleExerciseEdit = (item) => {
        setExerciseToBeEdited(item);
        setExerciseIDValue(item._id);
        setThirdModalVis(true);
        setExerciseNameValue(item.exerciseName);
        setSetsValue(item.sets);
        setTargetRepetitionsValue(item.targetRepetitions);
        setStartWeightValue(item.startWeight);
        setRestIntervalValue(item.restInterval);

        //setWorkoutIDValue(item.key);
    }

    const handleExerciseSubmit = () => {
        console.log(exerciseQuantityValue)
        
        if (!exerciseToBeEdited) {
            const val = exerciseQuantityValue + 1;
           //console.log(val)
            setTimeout(() => {setExerciseQuantityValue(val)}, 500);
            setTimeout(() => {console.log(exerciseQuantityValue)}, 200);
            setTimeout(() => {postExercise(exercise)}, 100);
            
            upDateWorkout({
                exercises: exerciseQuantityValue,
                userEmail: route.params.email,
                workoutName: workoutInputValue,
                workoutType: workoutTypeValue,
                });
            setTimeout(() => {putWorkout(workout)}, 100);
            upDateExercise(null);
            
        } else {
            setTimeout(() => {putExercise(exercise)}, 100);
            
            setExerciseToBeEdited(null);
            
            
            upDateExercise(null);
        }
         setTimeout(() => {getExercisesFromAPI(exercises)}, 500);
         setExerciseNameValue("");
         setSetsValue("");
         setTargetRepetitionsValue("");
         setStartWeightValue("");
         setRestIntervalValue("");
         setTimeout(() => {getWorkoutsFromAPI(workouts)}, 100);
         setThirdModalVis(false);
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
          upDateWorkout(null);
         
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
             upDateWorkout(null);
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
                    <Line/>
                    <ModalIcon>
                    <HeaderTitle>{workoutInputValue}</HeaderTitle>
                    <HeaderTitle>Exercises</HeaderTitle>
                    <FontAwesome5 name="dumbbell" size={30} color={colors1.tertiary} />
                    </ModalIcon>
                    <ModalActionGroup>
                    <ModalAction color={colors1.primary} onPress={handleSecondModal}>
                            <AntDesign name="check" size={28} color={colors1.tertiary} />
                        </ModalAction>  
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={secondModalVisible}
                onRequestClose={handleCloseSecondMod}
            >
            <ModalContainer>
                <ModalView>
                <ModalIcon>
                          
                          <HeaderTitle>{workoutInputValue} Exercises</HeaderTitle>
                          <HeaderTitle>{workoutIDValue}</HeaderTitle>
                         <AntDesign name="edit" size={30} color={colors1.tertiary} />
                    </ModalIcon>
                    <ModalActionGroup>
                        <ModalAction color={colors1.primary} onPress={handleCloseSecondMod}>
                            <AntDesign name="close" size={28} color={colors1.tertiary} />
                        </ModalAction>  
                        <ModalAction color={colors1.primary} onPress={() => {setThirdModalVis(true)}}>
                            <AntDesign name="plus" size={28} color={colors1.tertiary} />
                        </ModalAction>
                    </ModalActionGroup>
                    <Line />
                    <>
                        <ExerciseListItems 
                            exercises={exercises}
                            data={exercises}
                            
                            handleExerciseEdit={handleExerciseEdit}
                            setExercises={setExercises}
                        />
                    </>
                </ModalView>
            </ModalContainer>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={thirdModalVisible}
              onRequestClose={handleCloseThirdMod}
            >
            <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                          <HeaderTitle>{workoutInputValue} Exericise</HeaderTitle>
                         <AntDesign name="edit" size={30} color={colors1.tertiary} />
                    </ModalIcon>
                    <StyledInput 
                        placeholder="Exercise Name"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setExerciseNameValue(text); upDateExercise({
                            //userEmail: route.params.email,
                            exerciseName: text,
                            sets: setsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            restInterval: restIntervalValue,

                        })}}
                        value={exerciseNameValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Sets"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setSetsValue(text); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: text,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            restInterval: restIntervalValue,
                        })}}
                        value={setsValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Repetitions"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setTargetRepetitionsValue(text); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitions: text,
                            startWeight: startWeightValue,
                            restInterval: restIntervalValue,
                        })}}
                        value={targetRepetitionsValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Start Weight"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setStartWeightValue(text); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: text,
                            restInterval: restIntervalValue,
                        })}}
                        value={startWeightValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Rest Interval"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setRestIntervalValue(text); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            restInterval: text,
                        })}}
                        value={restIntervalValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleExerciseSubmit}
                    />

                    <ModalActionGroup>
                        <ModalAction color={colors1.primary} onPress={handleCloseThirdMod}>
                             <AntDesign name="close" size={28} color={colors1.tertiary} />
                        </ModalAction>
                        
                        <ModalAction color={colors1.primary} onPress={handleExerciseSubmit}>
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