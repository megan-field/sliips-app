import React from 'react';
import { View, Text, Button, StyleSheet, Slider } from 'react-native';

class CourseFilters extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			costs: 0,
			contactTime: 0,
			lectureTime: 0,
			exams: 0,
			care: 0,
		}
	}

	handleChange(value, element) {
		this.setState({
			[element]: value,
		})
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
			<Text style={styles.title}>Course Filters</Text>
			<View>
			<Text>Costs</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'costs')}
				/>
			</View>
				<View>
			<Text>Contact Time</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'contactTime')}
				/>
			</View>
				<View>
			<Text>Lecture Time</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'lectureTime')}
				/>
			</View>
				<View>
			<Text>Course Work/ Exams</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'exams')}
				/>
			</View>
				<View>
			<Text>Care about ****</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'care')}
				/>
			</View>
			<View style={{ height: 40, width: 100, backgroundColor: '#4682B4', marginBottom: 20, borderRadius: 5,}}>
		        <Button
		        	title="Next"
		        	onPress={() => navigate('FilteredData')}
					color= '#fff'
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
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 5,
	},
	slider: {
		width: 180,
	},
	title: {
		fontSize: 20,
	},
})

export default CourseFilters;