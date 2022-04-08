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

const InputExercise = ({exerciseInputVisible, setExerciseInputVisible, exerciseNameValue, setExerciseNameValue, setsValue, setSetsValue, targetRepetitionsValue, setTargetRepetitionsValue, startWeightValue, setStartWeightValue, weightUnit, setWeightUnit, restInterval, setRestInterval, dropInterval, setDropInterval, exerciseToBeEdited, setExerciseToBeEdited, workoutExerciseValue = 0, setWorkoutExerciseValue, workoutIDValue, setWorkoutIDValue, handleAddExercise, handleEditExercise, exercises }) => {

    const handleCloseExerciseInput = () => {
        setExerciseInputVisible(false);
        setExerciseNameValue("");
        setSetsValue(0);
        setTargetRepetitionsValue(0);
        setStartWeightValue(0);
        setWeightUnit("lbs");
        setRestInterval("30 sec");
        setDropInterval(0);
        // setOtherValues in workouts everywhere you find this
        setExerciseToBeEdited(null);
        // this one too
    }

    const handleExerciseSubmit = () => {

         if (!exerciseToBeEdited) {
            handleAddExercise({
                workoutID: workoutIDValue,
                exerciseName: exerciseNameValue,
                sets: setsValue,
                targetRepetitions: targetRepetitionsValue,
                startWeight: startWeightValue,
                weightUnit: weightUnitValue,
                restInterval: restIntervalValue,
                dropInterval: dropIntervalValue,
                key: `${(exercises[exercises.length-1] && parseInt(exercises[exercises.length - 1].key) + 1) || 1 }`
            });
         } else {
             handleEditExercise({
                 workoutID: exerciseToBeEdited.workoutID,
                 exerciseName: exerciseNameValue,
                 sets: setsValue,
                 targetRepetitions: targetRepetitionsValue,
                 startWeight: startWeightValue,
                 weightUnit: weightUnitValue,
                 restInterval: restIntervalValue,
                 dropInterval: dropIntervalValue,
                 key: exerciseToBeEdited.key
             })
         }

         
         setExerciseNameValue("");
         setSetsValue(0);
         setTargetRepetitionsValue(0);
         setStartWeightValue(0);
         setWeightUnitValue("lbs");
         setRestIntervalValue("");
         setDropIntervalValue(0);
    }
    return (
        <>
            <ModalButton onPress={() => {setExerciseInputVisible(true)}}>
                 <AntDesign name="plus" size={30} color={colors1.secondary} />
            </ModalButton>
            <Modal
                animationType="slide"
                transparent={true}
                visible={exerciseInputVisible}
                onRequestClose={handleCloseExerciseInput}
            >
                <ModalContainer>
                    <ModalView>
                    <ModalIcon>
                          <HeaderTitle>Exercises</HeaderTitle>
                         <AntDesign name="edit" size={30} color={colors1.tertiary} />
                    </ModalIcon>
                    <StyledInput 
                        placeholder="Exercise Name"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setExerciseNameValue(text)}
                        value={exerciseNameValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Sets"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setSetsValue(text)}
                        value={setsValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Target Repetitions"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTargetRepetitionsValue(text)}
                        value={targetRepetitionsValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Start Weight"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setStartWeightValue(text)}
                        value={startWeightValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Weight Unit"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setWeightUnitValue(text)}
                        value={weightUnitValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Rest Interval"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setRestIntervalValue(text)}
                        value={restIntervalValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />
                    <StyledInput 
                        placeholder="Drop Interval"
                        placeholderTextColor={colors1.alternative}
                        selectionColor={colors1.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setDropIntervalValue(text)}
                        value={dropIntervalValue}
                        onSubmitEditing={handleExerciseSubmit}
                    />

                    <ModalActionGroup>
                        <ModalAction color={colors1.primary} onPress={handleCloseExerciseInput}>
                             <AntDesign name="close" size={28} color={colors1.tertiary} />
                        </ModalAction>
                        <ModalAction color={colors1.tertiary} onPress={handleExerciseSubmit}>
                             <AntDesign name="check" size={28} color={colors1.secondary} />
                        </ModalAction>
                    </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default InputExercise;