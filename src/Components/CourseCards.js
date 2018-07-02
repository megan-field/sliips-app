import React from 'react';
import { View, Text, StyleSheet, Slider, Button, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class CourseCards extends React.Component {
	static navigationOptions = { 
		header: null, 
	};
	
	constructor(props) {
   		super(props)

	    this.state = {
	      cards: ['explainerText', 'costs', 'contactTime', 'lectureTime', 'Exams', 'CareAboutResearch'],
	      cardIndex: 0,
		  yes: 'ok',
		  no: 'ok',
		  answers: {},
		  question: '',
	    }
	}

// puts the value of the slider in state.
	handleChange(value) {
		const answers = {};
		answers['slider'] = value;

		this.setState({ answers });
	}

	renderCard = (card, index) => {
		if (card === 'explainerText') {
			return (
				<View style={styles.card} key={index}>
					<Text style={styles.text}>Narrow down whats important to you when it comes to choosing a course.</Text>
				</View>
				)
		} else if (card === 'costs') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
					<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1}}>
					  <View>
					    <Text>0 </Text>
					  </View>
					  <View>
					    <Slider 
							style={styles.slider}
							maximumValue={10}
							step={1}
							onSlidingComplete={(value) => this.handleChange(value)}
						/>
					  </View>
					  <View>
					    <Text> 10</Text>
					  </View>
					</View>
					<Text style={styles.subText}>Adjust the slider if you want to be more acurate</Text>
				</View>
				)
		} else if (card === 'contactTime') {
			return (
				<View style={styles.card} key={index}>
				<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'lectureTime') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'Exams') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		} else if (card === 'CareAboutResearch') {
			return (
				<View style={styles.card} key={index}>
					<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />
				</View>
				)
		}
	};


	onSwiped = (index) => {
		const swipes = [
			{yes: 'hell yeah', no: 'nah'}, //costs
			{yes: 'yup', no: 'nope'}, // contactTime
			{yes: 'hey', no: 'nay'}, // lectureTime
			{yes: 'uh huh', no: 'nu uh'}, // Exams 
			{yes: 'uh huh', no: 'nu uh'}, // CareAboutResearch 
			{yes: '', no: ''}, // onSwipedAll 
		];

		let questions = [
		'Are you a big spender or a moderate mouse?', 
		'Do you care about how much contact time you get with a tutor?', 
		'Lecture Time', 
		'Course work over Exams?', 
		'care about research',
		];

		this.setState({
			yes: swipes[index].yes,
			no: swipes[index].no,
			question: questions[index],
		})
	}

// adds yes or no for direction of swipe into the state.
	handleSwipe = (index, answer) => {
	  // save data to state.
	  const key = this.state.cards[index];
	  let answers = Object.assign({}, this.state.answers)
	  answers[key] = answer;

	  this.setState({ answers })
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
		            onSwiped={(cardIndex) => this.onSwiped(cardIndex)}
		            onSwipedAll={() => navigate('UniChoice')}
		            cards={this.state.cards}
		            onSwipedRight={(cardIndex) => this.handleSwipe(cardIndex, 'yes')}
		            onSwipedLeft={(cardIndex) => this.handleSwipe(cardIndex, 'no')}
		            cardIndex={this.state.cardIndex}
		            renderCard={this.renderCard}
		            stackSize={3}
		            verticalSwipe={false}
		            stackSeparation={15}
		            overlayOpacityHorizontalThreshold={0}
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
		                    marginTop: 250,
		                    marginLeft: 0
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
		                    marginTop: 250,
		                    marginLeft: 0
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
  },
  image: {
  	height: 100,
  	width: 100,
  	alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  subText: {
  	textAlign: 'center',
    margin: 10,
    fontSize: 10,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  slider: {
	width: 130,
	 alignSelf: 'center',
  },
})

export default CourseCards;