import React from 'react';
import { View, Text, Modal, TouchableHighlight, Button } from 'react-native';

class FilteredData extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVisible: false,
		}
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible })
	}

	render() {
		const { navigate } = this.props.navigation;
		
		return (
			 <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={{marginTop: 22, width: 100, backgroundColor: '#FFB6C1', height: '100%'}}>
            <View>
            <Text>Adjust Filter for</Text>
              <Button 
              title="University"
              onPress={() => navigate('UniFilters')}
              />
              <Button 
              title="Course"
              onPress={() => navigate('CourseFilters')}
              />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Profile</Text>
        </TouchableHighlight>
      </View>
			)
	}
}

export default FilteredData;