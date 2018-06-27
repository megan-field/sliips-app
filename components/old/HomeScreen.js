// import React from 'react';
// import { View, Button, TextInput, Image, StyleSheet } from 'react-native'

// import Logo from '../theme/images/ABLogo.png'

// class HomeScreen extends React.Component {
// 	static navigationOptions = {
//     title: 'Home',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//       <View style={styles.centerBox}>
//       <Image source={Logo} style={styles.logo} />
// 	      <Button
// 	        title="Cards"
// 	        onPress={() =>
// 	          navigate('Cards')
// 	        }
// 	      />
// 	      <Button
// 	        title="Graphs"
// 	        onPress={() =>
// 	          navigate('Graphs')
// 	        }
// 	      />
//       </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: 'column', 
// 		justifyContent: 'center', 
// 		alignItems: 'center'
// 	},
// 	centerBox: {
// 		flexDirection: 'column', 
// 		justifyContent: 'center', 
// 		alignItems: 'center', 
// 		backgroundColor: 'white', 
// 		height: 300, 
// 		width: 200
// 	},
// 	logo: {
// 		height: 35, 
// 		width: 100, 
// 		marginBottom: 20
// 	}
// })

// export default HomeScreen;