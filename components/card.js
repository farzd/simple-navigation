import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Modal1 from './modal1';

export default class Card extends React.Component {
  render() {
    const { name, color, navigate, goTo, active, openModal } = this.props;
    if (active) {
      console.log(`card ${name} is inView`);
    }
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>
          Card {name}
        </Text>
        {name === 'Feed'
          ? <Button
              color="#fff"
              title={'open Modal 1'}
              onPress={() => openModal(true, <Modal1 />)}
            />
          : null}
        <Button color="#fff" title={'goto ' + this.props.goTo} onPress={() => navigate(goTo)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  button: {
    color: '#fff',
  },
});
