import React from 'react';
import { Modal } from 'react-native';
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
import { AntDesign } from '@expo/vector-icons';
import ExerciseHome from './ExerciseHome';

const InputModal = ({modalVisible, setModalVisible, workoutInputValue, setWorkoutInputValue, workoutTypeValue, setWorkoutTypeValue, workoutToBeEdited, setWorkoutToBeEdited, workoutExerciseValue, setWorkoutExerciseValue, handleAddWorkout, handleEditWorkout, workouts, exerciseVisible, workoutIDValue, setWorkoutIDValue, setExerciseVisible }) => {

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
            handleAddWorkout({
                title: workoutInputValue,
                workoutType: workoutTypeValue,
                exercises: workoutExerciseValue,
                date: new Date().toUTCString(),
                key: `${(workouts[workouts.length-1] && parseInt(workouts[workouts.length - 1].key) + 1) || 1 }`
            });
         } else {
             handleEditWorkout({
                 title: workoutInputValue,
                 workoutType: workoutTypeValue,
                 exercises: workoutExerciseValue,
                 date: workoutToBeEdited.date,
                 key: workoutToBeEdited.key
             })
         }

         
         setWorkoutInputValue("");
         setWorkoutTypeValue("");
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
                        onChangeText={(text) => setWorkoutInputValue(text)}
                        value={workoutInputValue}
                        onSubmitEditing={handleWorkoutSubmit}
                    />
                    <StyledInput 
                        placeholder="Type"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setWorkoutTypeValue(text)}
                        value={workoutTypeValue}
                        onSubmitEditing={handleWorkoutSubmit}
                    />

                    <ModalActionGroup>
                        <ModalAction color={colors1.primary} onPress={handleCloseModal}>
                             <AntDesign name="close" size={28} color={colors1.tertiary} />
                        </ModalAction>
                        <ModalAction color={colors1.tertiary} onPress={handleWorkoutSubmit}>
                             <AntDesign name="check" size={28} color={colors1.secondary} />
                        </ModalAction>
                        <ModalAction color={colors1.primary} onPress={handleStartExercise}>
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