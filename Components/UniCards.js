import React from 'react';
import { View, Text, StyleSheet, Slider, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class CourseCards extends React.Component {
	static navigationOptions = { 
		header: null, 
	};
	
	 constructor(props) {
    	super(props)

	    this.state = {
	      cards: ['nightLife', 'dayLife', 'accomodation', 'sports', 'expenses'],
	      cardIndex: 0,
		  yes: 'Yes',
		  no: 'No',
		  answers: [],
	    }
  	}

	renderCard = (card, index) => {
		if (card === 'nightLife') {
			return (
				<View style={styles.card} key={index}>
					<Text style={styles.text}>nightLife</Text>
				</View>
				)
		} else if (card === 'dayLife') {
			return (
				<View style={styles.card} key={index}>
				<Text style={styles.text}>DayLife</Text>
				</View>
				)
		} else if (card === 'accomodation') {
			return (
				<View style={styles.card} key={index}>
					<Text style={styles.text}>Accomodation</Text>
				</View>
				)
		} else if (card === 'sports') {
			return (
				<View style={styles.card} key={index}>
					<Text style={styles.text}>Sports</Text>
				</View>
				)
		} else if (card === 'expenses') {
			return (
				<View style={styles.card} key={index}>
					<Text style={styles.text}>Expenses</Text>
				</View>
				)
		}
	};


	handleSwipe = (index, answer) => {
		const answers = Object.assign({}, this.state.answers);
		answers[this.state.cards[index]] = answer;

	  this.setState({ answers });
	}

	handleChange(value, element) {
		this.setState({
			[element]: value,
		})
	}

	onSwiped(cardIndex) {
				// set state yes and no to what fontAwesome icon or text you want for the next card.
	const swipes = [
		{yes: 'hell yeah', no: 'nah'}, // dayLife
		{yes: 'yup', no: 'nope'}, // accomodation
		{yes: 'hey', no: 'nay'}, // sports
		{yes: 'uh huh', no: 'nu uh'}, // expenses 
		];

	this.setState({
		yes: swipes[index].yes,
		no: swipes[index].no,
	})
	}

	render() {
      const { navigate } = this.props.navigation;
      console.log(this.state.answers)
		return (
			<View>
			<Text style={styles.heading}>Narrow down whats important to you when it comes to choosing a University.</Text>
				<View>
					<Swiper
		            ref={swiper => {
		              this.swiper = swiper
		            }}
		            onSwiped={(cardIndex) => this.onSwiped(cardIndex)} // set state with yes/no things
		            onSwipedAll={() => navigate('FilteredData')}
		            cards={this.state.cards}
		            onSwipedRight={(cardIndex) => this.handleSwipe(cardIndex, 'yes')}
		            onSwipedLeft={(cardIndex) => this.handleSwipe(cardIndex, 'no')}
		            cardIndex={this.state.cardIndex}
		            renderCard={this.renderCard}
		            stackSize={3}
		            verticalSwipe={false}
		            stackSeparation={15}
		            overlayLabels={{
		              left: {
		                title: this.state.no,
		                style: {
		                  label: {
		                    backgroundColor: 'black',
		                    borderColor: 'black',
		                    color: 'white',
		                    borderWidth: 1
		                  },
		                  wrapper: {
		                    flexDirection: 'column',
		                    alignItems: 'flex-end',
		                    justifyContent: 'flex-start',
		                    marginTop: 30,
		                    marginLeft: -30
		                  }
		                }
		              },
		              right: {
		                title: this.state.yes,
		                style: {
		                  label: {
		                    backgroundColor: 'black',
		                    borderColor: 'black',
		                    color: 'white',
		                    borderWidth: 1
		                  },
		                  wrapper: {
		                    flexDirection: 'column',
		                    alignItems: 'flex-start',
		                    justifyContent: 'flex-start',
		                    marginTop: 30,
		                    marginLeft: 30
		                  }
		                }
		              },
		            }}
		          >
		          </Swiper>
	          </View>
	          <View style={{ marginTop: 330 }}>
          <Text style={{ textAlign: 'center' }}>Swipe <Text style={{fontWeight: 'bold'}}>Right </Text>for Yes</Text>
          <Text style={{ textAlign: 'center' }}><Text style={{fontWeight: 'bold'}}>Left </Text>for No</Text>
        </View>
          </View>
          )
	}
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
  	textAlign: 'center',
  	fontSize: 20,
  	marginLeft: 30,
  	marginRight: 30,
  	marginTop: 40,
  },
  text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  	slider: {
		width: 180,
	},
})

export default CourseCards;