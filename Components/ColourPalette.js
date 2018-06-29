import React from 'react';
import { View, Image } from 'react-native';

class ColourPalette extends React.Component {
	render() {
		return(
			<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
			<View style={{ height: 100, width: 100, backgroundColor: '#186E64'}} /> {/* */}
			<View style={{ height: 100, width: 100, backgroundColor: '#895084'}} /> {/* */}
			<View style={{ height: 100, width: 100, backgroundColor: '#fff'}} /> {/* */}
			</View>
			);
	}
}

export default ColourPalette;