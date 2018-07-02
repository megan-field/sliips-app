import React from 'react';
import { View, Text, Modal, TouchableHighlight, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

class FilteredData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: ['University/Course 1', 'University/Course 2', 'University/Course 3'],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
			modalVisible: false,
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1}}>
          <View style={styles.box}>
          </View>
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

	setModalVisible(visible) {
		this.setState({ modalVisible: visible })
	}

  handleFilters(name) {
    const { navigate } = this.props.navigation;

    this.setModalVisible(!this.state.modalVisible)
    navigate(name)
  }

  handleSwipe(index, direction) {
    // save data to state.
  }

	render() {
		const { navigate } = this.props.navigation;
		
		return (
			 <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >

          <View>
            <View style={{height: '100%', paddingTop: 50,  width: 150, backgroundColor: '#4682B4'}}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
              <Text style={{ textAlign: 'right', color: 'white' }}>x</Text>
              </TouchableHighlight>
              </View>
              <View>
              <Text>Adjust Filters</Text>
              </View>
              <View>
              <Button 
                title="Change Course"
                onPress={() => this.handleFilters('CourseChoice')}
                color='#fff'
              />
              <Button 
                title="Change University"
                onPress={() => this.handleFilters('UniSelection')}
                color='#fff'
              />
            </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Profile</Text>
        </TouchableHighlight>
          <View>
          <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            onSwiped={this.onSwiped}
            cards={this.state.cards}
            onSwipedRight={(cardIndex) => this.handleSwipe(cardIndex, 'right')}
            onSwipedBottom={(cardIndex) => this.handleSwipe(cardIndex, 'down')}
            onSwipedLeft={(cardIndex) => this.handleSwipe(cardIndex, 'left')}
            cardIndex={this.state.cardIndex}
            renderCard={this.renderCard}
            // onSwipedAll={this.onSwipedAllCards}
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
                    marginLeft: 0,
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
                title: 'maybe',
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
    marginTop: 50,
    height: 300,
    borderRadius: 4,
    borderWidth: 1,
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
  box: {
    borderColor: '#000', 
    borderWidth: 2, 
    height: 150, 
    width: 250, 
    alignSelf: 'center',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
})

export default FilteredData;