import React, { Component } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { styles } as rootStyles from '../../App';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    color: '#fff'
  }
});

export class Home extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      originalText: true, 
      buttonText: 'Hello'
    }

    this.toggleButtonText = this.toggleButtonText.bind(this);
  }



  toggleButtonText() {
    const { originalText } = this.state; 
    this.setState({ buttonText: originalText ? 'Hiya!' : 'Hello' });
  }

  render() {
    return(
      <View>
        <Button onPress={ () => { this.toggleButtonText() } } title={this.state.buttonText} >
      </View>
    );
  }
}

export default Home;
