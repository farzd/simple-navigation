import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Card extends React.Component {
  render() {
    const { name, navigate, goTo, active } = this.props;
    if (active) {
      console.log(`card ${name} is inView`);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Card {name}</Text>
        <Button title={'goTo ' + this.props.goTo} onPress={()=> navigate(goTo)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#${(Math.random()*0xFFFFFF<<0).toString(16)}`,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  text: {
    color: '#fff',
    fontSize: 30 
  }
});
