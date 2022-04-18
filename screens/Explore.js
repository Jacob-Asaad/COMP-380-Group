import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import SiteWorkoutCard from '../components/SiteWorkoutCard';
import fitnessAPI from '../apis/fitness';
const SiteWorkouts = ({navigation}) => {

    const [siteWorkouts, setSiteWorkouts] = useState([])

    useEffect(()=>{
        getSiteWorkoutsFromAPI()
    },[])

    //const newsResponse = async() => {
      //  const response = await newsAPI.get("top-headlines?country=us&apiKey=9aa001c96f24410f99daeb548634443d");
        //console.log(response.data);
    //}

    function getSiteWorkoutsFromAPI(){
        fitnessAPI.get("siteworkout")
        .then(function(response){
            
            setSiteWorkouts(response.data)
            //console.log(SiteWorkoutCard)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    if (!siteWorkouts) {
        return null
    }
    return (
        <View>
           <FlatList data = {siteWorkouts} keyExtractor = {(item, index) => 'key' + index} 
               renderItem = {({item}) => {
                   return <SiteWorkoutCard item={item}/>
               }}
           />
        </View>
        
    )
}

export default SiteWorkouts;

/**<Text>News Screen</Text>
           <NewsCard></NewsCard> */