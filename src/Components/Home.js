import React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class LandingPage extends React.Component {
	  constructor(props) {
    super(props)
    this.state = {
      cards: [''],
      swipedAllCards: false,
      cardIndex: 0,
    }
  }


  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1}}>
          {/*<Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} />*/}
            <Text key={index} style={styles.text}>{card}</Text>
        </View>
      </View>
    )
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };
  
	render() {
    const { navigate } = this.props.navigation;
		return (
      <View>
      <Text style={styles.heading}>Do you want to go to university?</Text>
			  <View>
				  <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            cards={this.state.cards}
            onSwipedRight={(cardIndex) => navigate('UniDecision', { decision: 'yes'})}
            onSwipedBottom={(cardIndex) => navigate('UniDecision', { decision: 'no'})}
            onSwipedLeft={(cardIndex) => navigate('UniDecision', { decision: 'no'})}
            cardIndex={this.state.cardIndex}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            disableTopSwipe
            stackSeparation={15}
            overlayLabels={{
              left: {
                title: 'No',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                    fontSize: 30,
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
                    fontSize: 30,
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
               bottom: {
                title: 'Don\'t Know',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1,
                    fontSize: 30,
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
  card: {
    marginTop: 20,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: '#909090',
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
  box: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000',
    width: 250,
    alignSelf: 'center',
    height: 175
  },
  image: {
    height: 200,
    width: 200,
  }
})

export default LandingPage;