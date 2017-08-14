import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Modal1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Modal1</Text>
        <Button title={'close'} onPress={() => this.props.openModal(false)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E87EAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});
