import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import drawPieChart from '../theme/custom/echarts/drawPieChart';
import Echarts from 'native-echarts';

class Graphs extends React.Component {
  render() {

  	const data = [
  	{percent: 20, value: '1'},
  	{percent: 80, value: '2'},
  	]

  	const options = drawPieChart(data, true, 'pie', false);
  	const options2 = drawPieChart(data, true, 'doughnut', false);
  	const options3 = drawPieChart(data, false, 'pie', true);

    return (
		<ScrollView>
	      <Echarts option={options} height={300} />
	      <Echarts option={options2} height={300} />
	      <Echarts option={options3} height={300} />
		</ScrollView>
    );
  }
}

export default Graphs;