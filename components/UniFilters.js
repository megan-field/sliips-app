import React from 'react';
import { View, Text, Slider, StyleSheet, Button } from 'react-native';

class UniFilters extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nightLife: 0,
			dayLife: 0,
			accomodation: 0,
			sports: 0,
			expenses: 0,
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
			<Text style={styles.title}>University Filters</Text>
			<View>
			<Text>Night Life</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'nightLife')}
				/>
			</View>
				<View>
			<Text>Day Life</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'dayLife')}
				/>
			</View>
				<View>
			<Text>Accomodation</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'accomodation')}
				/>
			</View>
				<View>
			<Text>Sports</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'sports')}
				/>
			</View>
				<View>
			<Text>Expenses</Text>
				<Slider 
					style={styles.slider}
					maximumValue={10}
					step={1}
					onSlidingComplete={(value) => this.handleChange(value, 'expenses')}
				/>
			</View>
			<View style={{ height: 40, width: 100, backgroundColor: '#4682B4', marginBottom: 20, borderRadius: 5,}}>
		        <Button
		        	title="Next"
		        	onPress={() => navigate('CourseFilters')}
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

export default UniFilters;