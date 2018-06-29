import React from 'react';
import { View, Text, Picker, StyleSheet, ScrollView, Button, Item, FlatList } from 'react-native';

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

// sets state with courses picked
	handlePicker(itemValue) {
		let coursesPicked = [];
		if (Array.isArray(this.state.coursesPicked)) coursesPicked = Object.assign([], this.state.coursesPicked)
			// Top item is used as a placeholder, so it shouldn't be set in the state.
		if (!coursesPicked.includes(itemValue) && itemValue !== null) coursesPicked.push(itemValue);
		this.setState({ coursesPicked })
	}

// if the x button is clicked it removes the subject.
	handleRemove(course) {
		const coursesPicked = Object.assign([], this.state.coursesPicked)
		coursesPicked.splice(coursesPicked.indexOf(course), 1)
		this.setState({ coursesPicked })
	}

	render() {
		let courseList = []
		let disabled = true;
		if (Array.isArray(this.state.coursesPicked) && this.state.coursesPicked.length > 0) courseList = Object.assign([], this.state.coursesPicked)
		let nextButtonColor = '#88aece';

		// sets the submit view to look enabled, and actually enables the button.
		if (this.state.coursesPicked.length > 0) {
			nextButtonColor = '#4682B4';
			disabled = false;
		}

		const { navigate } = this.props.navigation;
		// FlatList is used to scroll only on the courses picked. 
		// The map is sorted so last going in is first displayed. This shows new ones going in, as the view is a fixed height.
		return (
			<View>
				<View>
					<Text style={styles.text}>Choose from as many courses as you're intersted in.</Text>
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
				<View style={{ height: 100 }}>
					<FlatList
						data={courseList.map((course, i) => ({ key: course, index: i})).sort((a, b) => b.index - a.index)}
						renderItem={({item}) => (
							<View key={item.index} style={{flexDirection: 'row', justifyContent: 'space-around'}}>
								<Text>{item.key}</Text><Button onPress={() => {this.handleRemove(item.key)}} title='x' />
							</View>
					)}
						/>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<View style={{ height: 40, width: 100, backgroundColor: nextButtonColor, borderRadius: 5, marginTop: 20}}>
				        <Button
				        	title="Submit"
				        	onPress={() => navigate('CourseCards')}
							color= '#fff'
							style={{position: 'center'}}
							disabled={disabled}
				        />
					</View>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 50,
    	fontSize: 20,
	}
})

export default CourseChoice;