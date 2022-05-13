import React, {useState} from 'react';

import {
    ListView1,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    TypeText,
    colors1,
    Colors,
    PageTitle
} from './../components/styles';

import { View, ActivityIndicator } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Entypo } from '@expo/vector-icons';
import { RawButton } from 'react-native-gesture-handler';

const ExerciseListItems = ({exercises, setExercises, handleExerciseEdit}) => {

    // For styling currently swiped todo rowwww
    const [swipedRow, setSwipedRow] = useState(null);

    const handleDeleteExercise = (rowMap, rowKey) => {
        const newExercises = [...exercises];
        const exerciseIndex = exercises.findIndex((exercise) => exercise.key === rowKey);
        newExercises.splice(exerciseIndex, 1);
        setWorkouts(newExercises);
    }

    

    return (
        // throw it in a frag to make the && work proper
        <>
        {exercises.length == 0 && <TodoText>The Best Shape of Your Life Starts Here</TodoText>}
        {exercises.length != 0 && <SwipeListView 
            data={exercises}
            keyExtractor = {(item, index) => 'key' + index}
            renderItem={(data) => {
                const RowText = data.item.key === swipedRow ? SwipedTodoText : TodoText;
                return (
                    <ListView1
                        underlayColor={Colors.c1prim}
                        onPress={() => {
                            handleExerciseEdit(data.item)
                        }}
                    >
                        <>
                        <RowText>{data.item.exerciseName}</RowText>
                        <TypeText>Sets: {data.item.sets}</TypeText>
                        <TypeText>Repetititions: {data.item.targetRepetitions} to {data.item.targetRepetitionsUpper}</TypeText>
                        <TypeText>Start Weight: {data.item.startWeight} {data.item.weightUnit}</TypeText>
                        <TypeText>Rest Interval: {data.item.restInterval}:{data.item.restSeconds}</TypeText>
                        
                        
                        </>
                    </ListView1>
                )
            }}
            renderHiddenItem={(data, rowMap) => {
                return ( <ListViewHidden>
                    <HiddenButton
                        onPress={() => handleDeleteWorkout(rowMap, data.item.key)}
                    >
                        <Entypo name="trash" size={25} colors={colors1.secondary} />
                    </HiddenButton>
                   

                </ListViewHidden> )
            }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            disableLeftSwipe={false}
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1, paddingBottom: 30, marginBottom: 40
            }}
            onRowOpen={(rowKey) => {
                setSwipedRow(rowKey);
            }}
            onRowClose={() => {
                setSwipedRow(null);
            }}
        />}
        </>
    );
}

export default ExerciseListItems;