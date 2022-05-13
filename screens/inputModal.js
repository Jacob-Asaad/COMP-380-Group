import React, {useState, useContext, useEffect} from 'react';
import { Modal, Picker } from 'react-native';
//import Picker from '@react-native-picker/picker'
import NumericInput from 'react-native-numeric-input';
import { WorkoutContext } from './../helper/context';
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
    Line,
    StyledInputLabel,
    StyledNumericInputView,
    StyledNumericInputView1,
    StyledNumericInputView11,
    StyledInputNumericLabel
   
} from './../components/styles';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import ExerciseListItems from './exerciseListItem';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import ExerciseHome from './ExerciseHome';
import fitnessAPI from '../apis/fitness';
import { Axios } from 'axios';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { KeyboardAvoidingView } from 'react-native-web';


const InputModal = ({navigation, weightUnitValue, setWeightUnitValue,restSecondsValue, setRestSecondsValue, upperTargetRepetitionsValue, setUpperTargetRepetitionsValue,thirdModalVisible, handleWorkoutEdit,  setsValue, setSetsValue, targetRepetitionsValue, setTargetRepetitionsValue, startWeightValue, setStartWeightValue, restIntervalValue, setRestIntervalValue, exerciseNameValue, setExerciseNameValue, setThirdModalVis, firstName, setSecondModalVis, secondModalVisible, modalVisible, getWorkoutsFromAPI, workoutEmail, setModalVisible, workoutInputValue, setWorkoutInputValue, workoutTypeValue, setWorkoutTypeValue, workoutToBeEdited, setWorkoutToBeEdited, workoutExerciseValue, setWorkoutExerciseValue, handleAddWorkout, handleEditWorkout, workouts, exerciseVisible, workoutIDValue, setWorkoutIDValue, setExerciseVisible, }) => {
    const route = useRoute();
    
    const {exerciseQuantityValue, setExerciseQuantityValue} = useContext(WorkoutContext);
    const [exercises, setExercises] = useState([]);
    const [exerciseIDValue, setExerciseIDValue] = useState();
    const [exerciseToBeEdited, setExerciseToBeEdited] = useState(null);
         
        
    
           

            
        
    
        const getExercisesFromAPI = (id) => {
            //console.log(this.workout);
            //const urle = "exercise/" + workoutIDValue;
            const urle = "exercise/" + id;
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
        key: workoutIDValue,
        
    });

    const [exercise, upDateExercise] = useState({
        workoutID: workoutIDValue,
        exerciseName: exerciseNameValue,
        sets: setsValue,
        targetRepetitionsUpper: upperTargetRepetitionsValue,
        targetRepetitions: targetRepetitionsValue,
        startWeight: startWeightValue,
        weightUnit: weightUnitValue,
        restInterval: restIntervalValue,
        restSeconds: restSecondsValue
    })
    const postWorkout = (workout) => {
        const url = 'workout';
        fitnessAPI.post(url, workout)
        .then((res) => {
            
            console.log(res.data._id);
            //console.log(workoutIDValue);
            getExercisesFromAPI(res.data._id);
            handleWorkoutEdit(res.data);
            setModalVisible(false);
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
        //console.log(workout.exercises);
        //incrementExerciseCount();
        //console.log(exerciseQuantityValue);
        fitnessAPI.put(puturl, workout)
        .then((res) => {
            
            //console.log(res.data)
            //console.log(res);
            
        })
        .catch((error) => {
            
            //console.log(workout);
        })
    }

    const handleCloseSecondMod = () => {
        setSecondModalVis(false);
        setExercises([]);
        setModalVisible(true);
        //console.log(exercises);
    } 

    const handleCloseThirdMod = () => {
        setThirdModalVis(false);
        setExerciseNameValue("");
        setSetsValue(0);
        setUpperTargetRepetitionsValue(0);
        setTargetRepetitionsValue(0);
        setStartWeightValue(0);
        setWeightUnitValue("lbs");
        setRestIntervalValue(0);
        setRestSecondsValue("00");
        setExerciseToBeEdited(null);
        
    }

    
    const handleCloseModal = () => {
        setModalVisible(false);
        //setTimeout(() => {getWorkoutsFromAPI(workouts)}, 100);
        getWorkoutsFromAPI(workouts);
        setWorkoutInputValue("");
        setWorkoutTypeValue("");
        setWorkoutExerciseValue(0);
        // setOtherValues in workouts everywhere you find this
        setWorkoutToBeEdited(null);
        //console.log("closed")
        // this one too
    }

    const handleSecondModal = () => {
        if (!workoutToBeEdited) {
            
            //postWorkout(workout);
            handleWorkoutSubmit();
            handleCloseModal();
            //setTimeout(() => {handleWorkoutEdit(workout)}, 500);
            handleWorkoutEdit(workout);
        } else {
        
        //setTimeout(() => {setSecondModalVis(true)}, 1000);
        //setTimeout(() => {getExercisesFromAPI(workoutIDValue)}, 2000);
        //console.log("Theory True");
        getExercisesFromAPI(workoutIDValue);
        }
        //getExercisesFromAPI(workoutIDValue);
        //setTimeout(() => {setSecondModalVis(true)}, 1000);
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
        setUpperTargetRepetitionsValue(item.targetRepetitionsUpper);
        setStartWeightValue(item.startWeight);
        setWeightUnitValue(item.weightUnit);
        setRestIntervalValue(item.restInterval);
        setRestSecondsValue(item.restSeconds);

        //setWorkoutIDValue(item.key);
    }

    const incrementExerciseCount = () => {
        //const quant = JSON.stringify(exerciseQuant)
        //console.log(JSON.parse(quant) + 1);
        //setExerciseQuantityValue(exerciseQuant);
        upDateWorkout({
            userEmail: route.params.email,
            //workoutName: workoutInputValue,
            //workoutType: workoutTypeValue,
            exercises: exerciseQuantityValue, });
        setTimeout(() => {console.log(exerciseQuantityValue)}, 500);
    }

    const handleExerciseSubmit = () => {
        //console.log(exerciseQuantityValue)
        
        if (!exerciseToBeEdited) {
            setExerciseQuantityValue((exerciseQuantityValue) + 1);
            console.log(exerciseQuantityValue)
            incrementExerciseCount();
           
            postExercise(exercise);
            
            
            //upDateWorkout({
               // exercises: exerciseQuantityValue,
              //  userEmail: route.params.email,
                //workoutName: workoutInputValue,
               // workoutType: workoutTypeValue,
               // });
            setTimeout(() => {putWorkout(workout)}, 700);
            //putWorkout(workout);
            setTimeout(() => {upDateExercise(null)}, 1000);
            
        } else {
            //setTimeout(() => {putExercise(exercise)}, 100);
            putExercise(exercise);
            
            setExerciseToBeEdited(null);
            
            
            upDateExercise(null);
        }
         setTimeout(() => {getExercisesFromAPI(workoutIDValue)}, 900);
         //getExercisesFromAPI(workoutIDValue);
         setExerciseNameValue("");
         setSetsValue(0);
         setUpperTargetRepetitionsValue(0);
         setTargetRepetitionsValue(0);
         setStartWeightValue(0);
         setWeightUnitValue("lbs");
         setRestIntervalValue(0);
         setRestSecondsValue("00");
         setTimeout(() => {getWorkoutsFromAPI(workouts)}, 1500);
         //getWorkoutsFromAPI(workouts);
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
          //setTimeout(() => {postWorkout(workout)}, 100);
          postWorkout(workout);
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
             //setTimeout(() => {putWorkout(workout)}, 100);
             putWorkout(workout);
             setWorkoutToBeEdited(null);
             upDateWorkout(null);
         }

         setTimeout(() => {getWorkoutsFromAPI(workouts)}, 500);
         //getWorkoutsFromAPI(workouts);
         setWorkoutInputValue("");
         setWorkoutTypeValue("");
         setExerciseQuantityValue(0);
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
                    <StyledInputLabel>Workout Name</StyledInputLabel>
                    <StyledInput 
                        placeholder="Workout Name"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setWorkoutInputValue(text); upDateWorkout({
                            userEmail: route.params.email,
                            workoutName: text,
                            workoutType: workoutTypeValue,
                            //exercises: exerciseQuantityValue,
                            
                        })}}
                        value={workoutInputValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleWorkoutSubmit}
                    />
                    <StyledInputLabel>Workout Type</StyledInputLabel>
                    <StyledInput 
                        placeholder="Type"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={false}
                        onChangeText={(text) => {setWorkoutTypeValue(text); upDateWorkout({
                            userEmail: route.params.email,
                            workoutName: workoutInputValue,
                            workoutType: text,
                            //exercises: exerciseQuantityValue,
                            
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
              width="100%"
              transparent={true}
              visible={thirdModalVisible}
              onRequestClose={handleCloseThirdMod}
            >
            <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                          <HeaderTitle>{workoutInputValue} Exercise</HeaderTitle>
                         <AntDesign name="edit" size={30} color={colors1.tertiary} />
                    </ModalIcon>
                    <StyledInputLabel>Exercise Name</StyledInputLabel>
                    <StyledInput 
                        placeholder="Exercise Name"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => {setExerciseNameValue(text); upDateExercise({
                            //userEmail: route.params.email,
                            exerciseName: text,
                            sets: setsValue,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            weightUnit: weightUnitValue,
                            restInterval: restIntervalValue,
                            restSeconds: restSecondsValue,

                        })}}
                        value={exerciseNameValue}
                        //onSubmitEditing={handleWorkoutSubmit}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    
                    <StyledNumericInputView>
                    <StyledInputNumericLabel>Sets</StyledInputNumericLabel>
                    <NumericInput 
                        
                        value={setsValue}
                        rounded
                        minValue={0}
                        autoFocus={true}
                        onChange={(val) => {setSetsValue(val); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: val,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            weightUnit: weightUnitValue,
                            restInterval: restIntervalValue,
                            restSeconds: restSecondsValue,
                        })}}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    </StyledNumericInputView>
                    <Line/>
                    <StyledNumericInputView><StyledInputNumericLabel>Repetitions</StyledInputNumericLabel></StyledNumericInputView>
                    
                    <StyledNumericInputView11>
                    
                    
                    <StyledInputNumericLabel>Lower</StyledInputNumericLabel>
                    <StyledInputNumericLabel>Upper</StyledInputNumericLabel>
                    
                    </StyledNumericInputView11>
                    <StyledNumericInputView1>
                    
                    
                    <NumericInput 
                        valueType="integer"
                        value={targetRepetitionsValue}
                        rounded
                        minValue={0}
                        autoFocus={true}
                        onChange={(val) => {setTargetRepetitionsValue(val); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: val,
                            startWeight: startWeightValue,
                            weightUnit: weightUnitValue,
                            restInterval: restIntervalValue,
                            restSeconds: restSecondsValue,
                        })}}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <NumericInput 
                        valueType="integer"
                        value={upperTargetRepetitionsValue}
                        rounded
                        minValue={0}
                        autoFocus={true}
                        //minValue={targetRepetitionsValue}
                        onChange={(val) => {setUpperTargetRepetitionsValue(val); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitionsUpper: val,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            weightUnit: weightUnitValue,
                            restInterval: restIntervalValue,
                            restSeconds: restSecondsValue,
                        })}}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    
                    </StyledNumericInputView1>
                    <StyledNumericInputView11>
                    <StyledInputNumericLabel>Start Weight </StyledInputNumericLabel><StyledInputNumericLabel>Weight Unit</StyledInputNumericLabel>
                    </StyledNumericInputView11>
                    <StyledNumericInputView1>
                    <NumericInput 
                        //valueType={'real'}
                        value={startWeightValue}
                        rounded
                        minValue={0}
                        autoFocus={true}
                        onChange={(val) => {setStartWeightValue(val); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: val,
                            weightUnit: weightUnitValue,
                            restInterval: restIntervalValue,
                            restSeconds: restSecondsValue,
                        })}}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <Picker
                    selectedValue={weightUnitValue}
                      style={{ height: 50, width: 92, color: colors1.tertiary }}
                      onValueChange={(item) => {setWeightUnitValue(item); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            weightUnit: item,
                            restInterval: restIntervalValue,
                            restSeconds: restSecondsValue,
                        })}}
                    >
                        <Picker.Item label="lbs" value="lbs" />
                        <Picker.Item label="kgs" value="kgs" />
                        
                    </Picker>
                    </StyledNumericInputView1>
                    
                    <StyledNumericInputView11><StyledInputNumericLabel>Minutes</StyledInputNumericLabel><StyledInputNumericLabel>Seconds</StyledInputNumericLabel></StyledNumericInputView11>
                    <StyledNumericInputView1>
                    
                    <NumericInput 
                        //valueType={'real'}
                        value={restIntervalValue}
                        rounded
                        minValue={0}
                        autoFocus={true}
                        onChange={(val) => {setRestIntervalValue(val); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            weightUnit: weightUnitValue,
                            restInterval: val,
                            restSeconds: restSecondsValue,
                        })}}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <Picker
                    selectedValue={restSecondsValue}
                      style={{ height: 50, width: 85, color: colors1.tertiary }}
                      onValueChange={(item) => {setRestSecondsValue(item); upDateExercise({
                            exerciseName: exerciseNameValue,
                            sets: setsValue,
                            targetRepetitionsUpper: upperTargetRepetitionsValue,
                            targetRepetitions: targetRepetitionsValue,
                            startWeight: startWeightValue,
                            weightUnit: weightUnitValue,
                            restInterval: restIntervalValue,
                            restSeconds: item,
                        })}}
                    >
                        <Picker.Item label="00" value="00" />
                        <Picker.Item label="15" value="15" />
                        <Picker.Item label="30" value="30" />
                        <Picker.Item label="45" value="45" />
                    </Picker>
                    </StyledNumericInputView1>

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