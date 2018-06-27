import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/LandingPage';
import NoUniScreen from './components/noToUniversityPage';
import YesUniScreen from './components/yesToUniversityPage';
import CourseChoice from './components/CourseChoice';
import UniFilters from './components/UniFilters';
import CourseFilters from './components/CourseFilters';
import FilteredData from './components/FilteredData';

const App = createStackNavigator({
  FilteredData: { screen: FilteredData },
  Home: { screen: HomeScreen },
  YesToUni: { screen: YesUniScreen },
  NoToUni: { screen: NoUniScreen },
  CourseChoice: { screen: CourseChoice },
  UniFilters: { screen: UniFilters },
  CourseFilters: { screen: CourseFilters },
})

export default App;