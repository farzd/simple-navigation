import React, { Component } from 'react';
import { Constants } from 'expo';
import { StyleSheet, Button, Dimensions, Animated } from 'react-native';
const { height: appHeight, width: appWidth } = Dimensions.get('window');

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(appHeight),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, { toValue: 0, duration: 150 }).start();
  }

  closeAfterAnimation() {
    Animated.timing(this.state.offset, { toValue: appHeight, duration: 150 }).start(() => {
      this.props.closeModalAction();
    });
  }

  render() {
    return (
      <Animated.View style={[styles.modal, { top: this.state.offset, zIndex: this.props.zIndex }]}>
        {this.props.children}
        <Button
          onPress={() => {
            this.closeAfterAnimation();
          }}
          title="Close Modal"
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#E87EAC',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: appWidth,
    height: appHeight,
    left: 0,
    top: 0,
  },
});
