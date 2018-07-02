import React from 'react';
import { View, Text, StyleSheet, Slider, Button, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class CourseCards extends React.Component {
	constructor(props) {
    	super(props)

	    this.state = {
	      cards: ['explainerText', 'nightLife', 'dayLife', 'accomodation', 'sports', 'expenses'],
	      cardIndex: 0,
		  yes: 'ok',
		  no: 'ok',
		  answers: [],
		  question: ''
	    }
  	}

	renderCard = (card, index) => {
		if (card === 'explainerText') {
			return (
				<View style={styles.card} key={index}>
					<Text style={styles.text}>Narrow down whats important to you when it comes to choosing a course.</Text>
				</View>
				)
		} else if (card === 'nightLife') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'dayLife') {
			return (
				<View style={styles.card} key={index}>
				<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'accomodation') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'sports') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'expenses') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		}
	};


	handleSwipe = (index, answer) => {
		const answers = Object.assign({}, this.state.answers);
		answers[this.state.cards[index]] = answer;

	  this.setState({ answers });
	}


	onSwiped(cardIndex) {
				// set state yes and no to what fontAwesome icon or text you want for the next card.
	const swipes = [
		{yes: 'hell yeah', no: 'nah'}, // nightLife
		{yes: 'yup', no: 'nope'}, // dayLife
		{yes: 'hey', no: 'nay'}, // accomodation
		{yes: 'uh huh', no: 'nu uh'}, // sports 
		{yes: 'uh huh', no: 'nu uh'}, // expenses 
		{yes: 'uh huh', no: 'nu uh'}, // onSwipedAll 
		];

	const questions = [
	'Night Life',
	'Day Life',
	'Accomodation',
	'Sports',
	'Expenses',
	]

	this.setState({
		yes: swipes[cardIndex].yes,
		no: swipes[cardIndex].no,
		question: questions[cardIndex],
	})
	}

	render() {
      const { navigate } = this.props.navigation;

		return (
			<View style={{ marginTop: 40 }}>
			<View style={{ height: 80 }}>
			<Text style={styles.heading}>{this.state.question}</Text>
			</View>
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
		                    borderWidth: 1,
		                    fontSize: 20,
		                  },
		                  wrapper: {
		                    flexDirection: 'column',
		                    alignItems: 'flex-end',
		                    justifyContent: 'flex-start',
		                    marginTop: -40,
		                    marginLeft: 0,
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
		                    borderWidth: 1,
		                    fontSize: 20,
		                  },
		                  wrapper: {
		                    flexDirection: 'column',
		                    alignItems: 'flex-start',
		                    justifyContent: 'flex-start',
		                    marginTop: -40,
		                    marginLeft: 0,
		                  }
		                }
		              },
		            }}
		          >
		          </Swiper>
	          </View>
          </View>
          )
	}
}

const styles = StyleSheet.create({
  card: {
  	marginTop: 50,
    height: 250,
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
  },
  image: {
  	height: 100,
  	width: 100,
  	alignSelf: 'center',
  },
  subText: {
  	textAlign: 'center',
    margin: 10,
    fontSize: 30,
    backgroundColor: 'transparent'
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
})

export default CourseCards;