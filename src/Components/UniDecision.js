import React from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';

class uniDecision extends React.Component {
	static navigationOptions = { 
		header: null, 
	};

	constructor(props) {
		super(props)

		this.state = {
			answers: [],
			decision: this.props.navigation.state.params.decision,
		}
	}

	handleButtons(answer) {
		const answers = Object.assign([], this.state.answers);

		if (answers.includes(answer)) answers.splice(answers.indexOf(answer), 1)
		else answers.push(answer);

		this.setState({ answers });
	}

	handleNext() {
		const { navigate } = this.props.navigation;
		if (this.state.answers.length > 0) navigate('CourseChoice')
	}

	render() {
		const clicked = { Passion: '#808080', Job: '#808080', Cost: '#808080', "No Benefits": '#808080', "Not Clever Enough": '#808080', 'Won\'t Fit In': '#808080', "Welfare/ Support": '#808080', "Responsabilities at Home": '#808080', Other: '#808080', next: '#88aece' }
		// turning each button view green once it has been clicked.
		Object.keys(clicked).forEach(element => {
			if (this.state.answers.includes(element)) clicked[element] = '#32CD32'
		})

		if (this.state.answers.length > 0) clicked.next = '#4682B4';

		if (this.state.decision === 'yes') {
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
	} else {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>Why do you not want to go to university?</Text>
					<View style={{ height: 38, width: 250, backgroundColor: clicked.Cost, marginBottom: 20, borderRadius: 5,}}>
						<Button 
							title="The Cost"
							onPress={() => this.handleButtons('Cost')}
							color= '#fff'
				        />
			        </View>
			        <View style={{ height: 38, width: 250, backgroundColor: clicked["No Benefits"], marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="I See No Benefits"
				        	onPress={() => this.handleButtons('No Benefits')}
							color= '#fff'
				        />
			        </View>
			        <View style={{ height: 38, width: 250, backgroundColor: clicked["Not Clever Enough"], marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="I'm Not Clever Enough"
				        	onPress={() => this.handleButtons('Not Clever Enough')}
							color= '#fff'
				        />
					</View>
					<View style={{ height: 38, width: 250, backgroundColor: clicked["Won\'t Fit In"], marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="I Won't Fit In"
				        	onPress={() => this.handleButtons('Won\'t Fit In')}
							color= '#fff'
				        />
					</View>
					<View style={{ height: 38, width: 250, backgroundColor: clicked["Welfare/ Support"], marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="Welfare/ Support"
				        	onPress={() => this.handleButtons('Welfare/ Support')}
							color= '#fff'
				        />
					</View>
					<View style={{ height: 38, width: 250, backgroundColor: clicked["Responsabilities at Home"], marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="Responsabilities at Home"
				        	onPress={() => this.handleButtons('Responsabilities at Home')}
							color= '#fff'
				        />
					</View>
					<View style={{ height: 38, width: 250, backgroundColor: clicked["Other"], marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="Other"
				        	onPress={() => this.handleButtons('Other')}
							color= '#fff'
				        />
					</View>
					<View style={{ height: 38, width: 100, backgroundColor: clicked.next, marginBottom: 20, borderRadius: 5,}}>
				        <Button
				        	title="Next"
				        	onPress={() => this.handleNext()}
							color= '#fff'
				        />
					</View>
				</View>
	        </ScrollView>
		)
	}
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
    	fontSize: 25,
	}
})

export default uniDecision;