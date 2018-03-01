import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { Constants } from 'expo';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.routeArray = this.props.routeArray;
    this.navigate = this.props.navigate;
  }

  getTitle(currentView) {
    return this.routeArray[currentView || 0].toString();
  }

  getLeftButton(currentView) {
    const left = this.routeArray[currentView - 1];
    return left ? (
      <Button
        style={[styles.button, styles.buttonLeft]}
        title={'< ' + left}
        onPress={() => this.navigate(left)}
      />
    ) : (
      <View style={styles.empty} />
    );
  }

  getRightButton(currentView) {
    const right = this.routeArray[currentView + 1];
    return right ? (
      <Button
        style={[styles.button, styles.buttonLeft]}
        title={right + ' >'}
        onPress={() => this.navigate(right)}
      />
    ) : (
      <View style={styles.empty} />
    );
  }

  render() {
    const { currentView } = this.props;
    return (
      <View style={styles.container}>
        {this.getLeftButton(currentView)}
        <Text style={styles.title}>{this.getTitle(currentView)}</Text>
        {this.getRightButton(currentView)}
      </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: Constants.statusBarHeight + APPBAR_HEIGHT,
    backgroundColor: '#E87EAC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    flexDirection: 'column',
  },
  button: {
    color: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    width: 70,
  },
  empty: {
    width: 70,
  },
  buttonLeft: {
    textAlign: 'left',
    paddingLeft: 10,
  },
  buttonRight: {
    textAlign: 'right',
    paddingRight: 10,
  },
});
