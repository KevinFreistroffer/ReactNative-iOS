import React, { Component } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export class App extends Component {  
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
    this.setState({ 
      buttonText: originalText ? 'Hiya!' : 'Hello',
      originalText: !originalText
    });
  }

  render() {
    const { buttonText } = this.state;
    return(
      <View style={ styles.container }>
        <Button style={styles.button} onPress={ () => { this.toggleButtonText() } } title={buttonText} />
      </View>
    );
  }
}

export default App;
