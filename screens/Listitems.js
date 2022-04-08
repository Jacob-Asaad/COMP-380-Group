import React, {useState} from 'react';

import {
    ListView,
    ListViewHidden,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    TypeText,
    colors1
} from './../components/styles';

import { SwipeListView } from 'react-native-swipe-list-view';
import { Entypo } from '@expo/vector-icons';

const ListItems = ({workouts, setWorkouts, handleWorkoutEdit}) => {

    // For styling currently swiped todo rowwww
    const [swipedRow, setSwipedRow] = useState(null);

    const handleDeleteWorkout = (rowMap, rowKey) => {
        const newWorkouts = [...workouts];
        const workoutIndex = workouts.findIndex((workout) => workout.key === rowKey);
        newWorkouts.splice(workoutIndex, 1);
        setWorkouts(newWorkouts);
    }

    

    return (
        // throw it in a frag to make the && work proper
        <>
        {workouts.length == 0 && <TodoText>The Best Shape of Your Life Starts Here</TodoText>}
        {workouts.length != 0 && <SwipeListView 
            data={workouts}
            renderItem={(data) => {
                const RowText = data.item.key === swipedRow ? SwipedTodoText : TodoText;
                return (
                    <ListView
                        underlayColor={colors1.primary}
                        onPress={() => {
                            handleWorkoutEdit(data.item)
                        }}
                    >
                        <>
                        <RowText>{data.item.title}</RowText>
                        <TypeText>Type: {data.item.workoutType}</TypeText>
                        <TypeText>Exercises: {data.item.exercises}</TypeText>
                        <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
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

export default ListItems;