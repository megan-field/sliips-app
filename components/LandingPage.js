import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class LandingPage extends React.Component {
	  constructor(props) {
    super(props)
    this.state = {
      cards: ['Do you want to go to university?'],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text key={index} style={styles.text}>{card}</Text>
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
			  <View>
				  <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            onSwiped={this.onSwiped}
            cards={this.state.cards}
            onSwipedRight={(cardIndex) => navigate('YesToUni')}
            onSwipedBottom={(cardIndex) => navigate('NoToUni')}
            onSwipedLeft={(cardIndex) => navigate('NoToUni')}
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
               bottom: {
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
        <View style={{ marginTop: 300 }}>
          <Text style={{ textAlign: 'center' }}>Swipe <Text style={{fontWeight: 'bold'}}>Right </Text>for Yes</Text>
          <Text style={{ textAlign: 'center' }}><Text style={{fontWeight: 'bold'}}>Left </Text>for No</Text>
          <Text style={{ textAlign: 'center' }}>and <Text style={{fontWeight: 'bold'}}>Down </Text>for Don't Know</Text>
        </View>
			</View>
			)
	}
}


const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  }
})

export default LandingPage;