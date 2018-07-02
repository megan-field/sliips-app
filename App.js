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
  UniDecision: { screen: UniDecision, navigationOptions: { header: null } },
  
  CourseChoice: { screen: CourseChoice, navigationOptions: { header: null } },
  CourseSelection: { screen: CourseSelection, navigationOptions: { header: null } },
  CourseCards: { screen: CourseCards, navigationOptions: { header: null } },
  
  UniChoice: { screen: UniChoice, navigationOptions: { header: null } },
  UniSelection: { screen: UniSelection, navigationOptions: { header: null } },
  UniCards: { screen: UniCards, navigationOptions: { header: null } }, 

  FilteredData: { screen: FilteredData, navigationOptions: { header: null } },
}, { 
	cardStyle: { 
		// backgroundColor: '#355c7d',
	}
})

export default App;
