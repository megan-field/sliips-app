import React from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';

class LandingResponsePage extends React.Component {
	static navigationOptions = { 
		header: null, 
	};

	constructor(props) {
		super(props)

		this.state = {
			reasons: [],
		}
	}

	handleButtons(answer) {
		const reasons = Object.assign([], this.state.reasons);

		if (reasons.includes(answer)) reasons.splice(reasons.indexOf(answer), 1)
		else reasons.push(answer);

		this.setState({ reasons });
	}

	handleNext() {
		const { navigate } = this.props.navigation;
		if (this.state.reasons.length > 0) navigate('CourseChoice')
	}

	render() {

		const clicked = { Passion: '#808080', Job: '#808080', Other: '#808080', next: '#88aece' }
		// turning each button view green once it has been clicked.
		Object.keys(clicked).forEach(element => {
			if (this.state.reasons.includes(element)) clicked[element] = '#32CD32'
		})

		if (this.state.reasons.length > 0) clicked.next = '#4682B4';

		return (
			<View style={styles.container}>
			<Text style={styles.title}>Why do you want to go to university?</Text>
			<View style={{ height: 40, width: 200, backgroundColor: clicked.Passion, marginBottom: 20, borderRadius: 5,}}>
	        <Button
	        	title="A Passion of Mine"
	        	onPress={() => this.handleButtons('Passion')}
				color={'#fff'}
	        />

	        </View>
	        <View style={{ height: 40, width: 200, backgroundColor: clicked.Job, marginBottom: 20, borderRadius: 5,}}>
	        <Button
	        	title="Job Prospects"
	        	onPress={() => this.handleButtons('Job')}
				color= '#fff'
	        />
	        </View>
	        <View style={{ height: 40, width: 200, backgroundColor: clicked.Other, marginBottom: 20, borderRadius: 5,}}>
	        <Button
	        	title="Other"
	        	onPress={() => this.handleButtons('Other')}
				color= '#fff'
	        />
			</View>
			    <View style={{ height: 40, width: 100, backgroundColor: clicked.next, marginBottom: 20, borderRadius: 5,}}>
	        <Button
	        	title="Next"
	        	onPress={() => this.handleNext()}
				color= '#fff'
				disabled={false}
	        />
			</View>
	        </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
       	flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	},
	switch: {
		backgroundColor: '#808080',
	},
	title: {
		textAlign: 'center',
    	margin: 20,
    	fontSize: 30,
	}
})

export default LandingResponsePage;