import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';

import Home from './src/Components/Home';
import UniDecision from './src/Components/UniDecision';

import CourseChoice from './src/Components/CourseChoice';
import CourseSelection from './src/Components/CourseSelection';
import CourseCards from './src/Components/CourseCards';

import UniChoice from './src/Components/UniChoice';
import UniSelection from './src/Components/UniSelector';
import UniCards from './src/Components/UniCards';

import FilteredData from './src/Components/FilteredData';



const App = createStackNavigator({
  Home: { screen: Home },
  UniDecision: { screen: UniDecision },
  
  CourseChoice: { screen: CourseChoice },
  CourseSelection: { screen: CourseSelection },
  CourseCards: { screen: CourseCards },
  
  UniChoice: { screen: UniChoice },
  UniSelection: { screen: UniSelection },
  UniCards: { screen: UniCards }, 

  FilteredData: { screen: FilteredData },
})

export default App;
