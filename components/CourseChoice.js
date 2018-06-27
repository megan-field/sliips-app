import React from 'react';
import { View, Text, Picker, StyleSheet, ScrollView, Button, Item } from 'react-native';

class CourseChoice extends React.Component {
	static navigationOptions = { 
		header: null, 
	};

	constructor(props) {
		super(props)

		this.state = {
			coursesPicked: [],
		}
	}

	handlePicker(itemValue) {
		let coursesPicked = [];
		if (Array.isArray(this.state.coursesPicked)) coursesPicked = Object.assign([], this.state.coursesPicked)

		if (!coursesPicked.includes(itemValue) && itemValue !== null) coursesPicked.push(itemValue);
		this.setState({ coursesPicked })
	}

	handleRemove(course) {
		const coursesPicked = Object.assign([], this.state.coursesPicked)
		coursesPicked.splice(coursesPicked.indexOf(course), 1)
		this.setState({ coursesPicked })
	}

	render() {
		let courseList = []
		if (Array.isArray(this.state.coursesPicked) && this.state.coursesPicked.length > 0) courseList = Object.assign([], this.state.coursesPicked)
		let nextButtonColor = '#88aece';

		if (this.state.coursesPicked.length > 0) nextButtonColor = '#4682B4';

		const { navigate } = this.props.navigation;
		return (
			<ScrollView>
				<View>
					<Text style={styles.text}>Do you know what course you want to study?</Text>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
					<Picker
						onValueChange={(itemValue) => this.handlePicker(itemValue)}
						style={{ width: 200, borderRadius: 5, marginBottom: 20}}
					>
						<Picker.Item label="Courses" />
						<Picker.Item label="English" value="English" />
	  					<Picker.Item label="Physics" value="Physics" />
	  					<Picker.Item label="Biology" value="Biology" />
	  					<Picker.Item label="Chemistry" value="Chemistry" />
	  					<Picker.Item label="History" value="History" />
	  					<Picker.Item label="Mathematics" value="Mathematics" />
					</Picker>
				</View>
				<View>
					{courseList.map((course, i) => (
					<View key={i} style={{flexDirection: 'row', justifyContent: 'space-around'}}>
						<Text>{course}</Text><Button onPress={() => {this.handleRemove(course)}} title='x' />
					</View>
						))}
				</View>
				<View>
					<Button 
					title="Don't Know"
					onPress={() => this.setState({ coursesPicked: 'Don\'t Know'})}
					/>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<View style={{ height: 40, width: 100, backgroundColor: nextButtonColor, borderRadius: 5, marginTop: 20}}>
				        <Button
				        	title="Next"
				        	onPress={() => navigate('UniFilters')}
							color= '#fff'
							style={{position: 'center'}}
				        />
					</View>
				</View>
			</ScrollView>
			)
	}
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 50,
    	fontSize: 30,
	}
})

export default CourseChoice;