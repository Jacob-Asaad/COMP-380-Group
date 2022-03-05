import react from "react";
import { StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import ExploreTabs from "../navigation/ExploreTabs";

export default function CloudFitness({navigation}) {
  
    return (
        <ExploreTabs />
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
  });