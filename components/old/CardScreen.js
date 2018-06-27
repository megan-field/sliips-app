// import React, { Component } from 'react'
// import Swiper from 'react-native-deck-swiper'
// import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
// import Logo from '../theme/images/ABLogo.png'
// // import getCardProfile from './getCardProfile'

// export default class Exemple extends Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//       cards: ['1', '2', '3'],
//       swipedAllCards: false,
//       swipeDirection: '',
//       isSwipingBack: false,
//       cardIndex: 0,
//       swipedCards: [],
//     }
//   }

//   renderCard = (card, index) => {
//     return (
//       <View style={styles.card}>
//         <Text key={index} style={styles.text}>{card}</Text>
//       </View>
//     )
//   };

//   onSwipedAllCards = () => {
//     this.setState({
//       swipedAllCards: true
//     })
//   };

// // stores liked cards in state. 
//   onSwipedLeft = (cardIndex) => {
//     const swipedCards = Object.assign([], this.state.swipedCards)
//     swipedCards.push(this.state.cards[cardIndex])
    
//     this.setState({ swipedCards });
//   }

// // if you click a card, give you more info and can scroll it
//   onTapCard = (cardIndex) => {
//     this.getCardProfile(this.state.cards[cardIndex]);
//   }

//   getCardProfile(element) => {
//     console.log(element)
//   }

// // at the bottom of the pile it shouldn't glitch, either refreshes list or just stops

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View>
//       <View>
//         <Swiper
//             ref={swiper => {
//               this.swiper = swiper
//             }}
//             onSwiped={this.onSwiped}
//             cards={this.state.cards}
//             onSwipedLeft={(cardIndex) => this.onSwipedLeft(cardIndex)}
//             onTapCard={(cardIndex) => this.onTapCard(cardIndex)}
//             cardIndex={this.state.cardIndex}
//             verticalSwipe={false}
//             renderCard={this.renderCard}
//             onSwipedAll={this.onSwipedAllCards}
//             stackSize={3}
//             stackSeparation={15}
//             overlayLabels={{
//               left: {
//                 title: 'NOPE',
//                 style: {
//                   label: {
//                     backgroundColor: 'black',
//                     borderColor: 'black',
//                     color: 'white',
//                     borderWidth: 1
//                   },
//                   wrapper: {
//                     flexDirection: 'column',
//                     alignItems: 'flex-end',
//                     justifyContent: 'flex-start',
//                     marginTop: 30,
//                     marginLeft: -30
//                   }
//                 }
//               },
//               right: {
//                 title: 'LIKE',
//                 style: {
//                   label: {
//                     backgroundColor: 'black',
//                     borderColor: 'black',
//                     color: 'white',
//                     borderWidth: 1
//                   },
//                   wrapper: {
//                     flexDirection: 'column',
//                     alignItems: 'flex-start',
//                     justifyContent: 'flex-start',
//                     marginTop: 30,
//                     marginLeft: 30
//                   }
//                 }
//               },
//             }}
//           >
//           </Swiper>
//       </View>
//       <View style={{ marginTop: 30 }}>
//       	<Text style={{ textAlign: 'center' }}>top text</Text>
//       </View>  
//       <View style={{ marginTop: 300 }}>
//       	<Text style={{ textAlign: 'center' }}>bottom text</Text>
//       </View>
// 	 </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   card: {
//     height: 200,
//     borderRadius: 4,
//     borderWidth: 2,
//     borderColor: '#E8E8E8',
//     justifyContent: 'center',
//     backgroundColor: 'white'
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 50,
//     backgroundColor: 'transparent'
//   },
//   done: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: 'white',
//     backgroundColor: 'transparent'
//   }
// })