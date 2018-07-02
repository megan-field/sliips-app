import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';

import Home from './Components/Home';
import UniDecision from './Components/UniDecision';

import CourseChoice from './Components/CourseChoice';
import CourseSelection from './Components/CourseSelection';
import CourseCards from './Components/CourseCards';

import UniChoice from './Components/UniChoice';
import UniSelection from './Components/UniSelector';
import UniCards from './Components/UniCards';

import FilteredData from './Components/FilteredData';



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
