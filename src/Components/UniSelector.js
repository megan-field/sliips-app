import React from 'react';
import { View, Text, Picker, StyleSheet, Button, Item, FlatList } from 'react-native';

class UniSelection extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			uniPicked: [],
		}
	}

	handlePicker(itemValue) {
		let uniPicked = [];
		if (Array.isArray(this.state.uniPicked)) uniPicked = Object.assign([], this.state.uniPicked)

		if (!uniPicked.includes(itemValue) && itemValue !== null) uniPicked.push(itemValue);
		this.setState({ uniPicked })
	}

	handleRemove(course) {
		const uniPicked = Object.assign([], this.state.uniPicked)
		uniPicked.splice(uniPicked.indexOf(course), 1)
		this.setState({ uniPicked })
	}

	render() {
		let disabled = true;
		let courseList = []
		if (Array.isArray(this.state.uniPicked) && this.state.uniPicked.length > 0) courseList = Object.assign([], this.state.uniPicked)
		let nextButtonColor = '#88aece';

		if (this.state.uniPicked.length > 0) {
			nextButtonColor = '#4682B4';
			disabled = false;
		}

		const { navigate } = this.props.navigation;
		return (
			<View>
				<View>
					<Text style={styles.text}>Choose the universities you are interested in.</Text>
				</View>
				<View style={{ height: 150, marginTop: 30, backgroundColor: '#909090', width: 200, alignSelf: 'center', borderRadius: 10 }}>
				<FlatList
				data={[{ key: 'Glasgow' }, { key: 'Edinburgh' }, { key: 'Manchester' }, { key: 'London' }, { key: 'Birmingham' }, { key: 'Liverpool' }]}
				renderItem={({item}) => (
					<View>
						<Button onPress={() => this.handlePicker(item.key)} title={item.key} color='white' />
					</View>
					)}
				/>
				</View>
				<View style={{ height: 100, marginTop: 30 }}>
					<FlatList
						data={courseList.map((course, i) => ({ key: course, index: i})).sort((a, b) => b.index - a.index)}
						renderItem={({item}) => (
							<View key={item.index} style={{flexDirection: 'row', justifyContent: 'space-around'}}>
								<Text style={{ color: '#909090' }}>{item.key}</Text><Button onPress={() => {this.handleRemove(item.key)}} title='x' />
							</View>
					)}
						/>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<View style={{ height: 40, width: 100, backgroundColor: nextButtonColor, borderRadius: 5, marginTop: 20}}>
					<Button
				        	title="Submit"
				        	onPress={() => navigate('UniCards')}
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
		marginTop: 50,
    	fontSize: 20,
    	marginLeft: 10,
    	marginRight: 10,
    	color: '#909090',
	}
})

export default UniSelection;