import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class UniChoice extends React.Component {
	static navigationOptions = { 
		header: null, 
	};
	
		constructor(props) {
   		super(props)

	    this.state = {
	      cards: ['Do you know what university you want to go to?'],
	      cardIndex: 0,
		  costs: 0,
		  answer: [],
	    }
	}

	renderCard = (card, index) => {
		return (
			<View key={index} style={styles.card}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1}}>
          <View style={styles.box}>
          {/*<Image source={require('')} />*/}
          </View>
            <Text key={index} style={styles.text}>{card}</Text>
        </View>
      </View>
			)
	}

// sets the state with the answer, and navigates to another page.
	handleSwipe = (answer) => {
	  const { navigate } = this.props.navigation;
	  this.setState({ answer })

	  if (answer === 'yes') navigate('UniSelection');
	  else navigate('UniCards')
	}

	render() {
		return (
			<View>
				<View style={styles.container}>
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
			                title: 'Yes',
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
				<View style={{ marginTop: 400 }}>
		          <Text style={{ textAlign: 'center' }}>Swipe <Text style={{fontWeight: 'bold'}}>Right </Text>for Yes</Text>
		          <Text style={{ textAlign: 'center' }}>and <Text style={{fontWeight: 'bold'}}>Left </Text>for Don't Know Yet</Text>
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
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  box: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000',
    width: 250,
    alignSelf: 'center',
    height: 175
  },
})

export default UniChoice;