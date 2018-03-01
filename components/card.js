import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ModalContent1 = ({ openModal }) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.text}>Modal 1</Text>
      <Button
        onPress={() => {
          openModal(<ModalContent2 />);
        }}
        title="open Modal 2"
      />
    </View>
  );
};

const ModalContent2 = () => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.text}>Modal 2</Text>
    </View>
  );
};

export default class Card extends React.Component {
  render() {
    const { name, color, navigate, goTo, active, openModal, closeModal } = this.props;
    if (active) {
      console.log(`card ${name} is inView`);
    }
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>Card {name}</Text>
        {name === 'Feed' ? (
          <Button
            color="#fff"
            title={'open Modal 1'}
            onPress={() =>
              openModal(<ModalContent1 openModal={openModal} closeModal={closeModal} />)
            }
          />
        ) : null}
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
  modalContainer: {
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
