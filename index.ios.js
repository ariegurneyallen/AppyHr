import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval(() => {
      this.setState({ showtext: !this.state.showtext });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='Shabba ranks' />
        <Blink text="asap ferg" />
        <Blink text='rollling' />
      </View>
    );
  }
}

AppRegistry.registerComponent('AppyHr1', () => BlinkApp);
