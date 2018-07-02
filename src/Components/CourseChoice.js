import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class CourseChoice extends React.Component {	
		constructor(props) {
   		super(props)

	    this.state = {
	      cards: [''],
	      answer: [],
	      cardIndex: 0,
		  costs: 0,
	    }
	}

	renderCard = (card, index) => {
		return (
			<View key={index} style={styles.card}>
		        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1}}>
		          	{/*<Image source={require('')} />*/}
	         		<Text key={index} style={styles.text}>{card}</Text>
	    	    </View>
		    </View>
			)
	}

// sets state with answer and navigates to next page on swipe.
	handleSwipe = (answer) => {
	  const { navigate } = this.props.navigation;

	  let navigateTo = 'CourseCards';
	  if (answer === 'yes') navigateTo = 'CourseSelection'

	  this.setState({ answer });
	  navigate(navigateTo)
	}

	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.heading}>Do you know what course you want to study?</Text>
				<View>
					<Swiper
			            ref={swiper => {
			              this.swiper = swiper
			            }}
			            cards={this.state.cards}
			            onSwipedRight={() => this.handleSwipe('yes')}
			            onSwipedLeft={() => this.handleSwipe('no')}
			            cardIndex={this.state.cardIndex}
			            renderCard={this.renderCard}
			            stackSize={3}
			            verticalSwipe={false}
			            stackSeparation={15}
			            overlayLabels={{
			              left: {
			                title: 'Don\'t Know',
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
			                    marginLeft: 0
			                  }
			                }
			              },
			              right: {
			                title: 'Yes',
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
  container: {
  	marginTop: 50,
  },
  card: {
    marginTop: 50,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
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
    fontSize: 25,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
})

export default CourseChoice;