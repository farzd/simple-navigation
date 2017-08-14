import React from 'react';
import { StyleSheet, View, Dimensions, Animated, Easing, Platform, Modal } from 'react-native';
import NavigationBar from 'react-native-navbar';
const { height: appHeight, width: appWidth } = Dimensions.get('window');

export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.navigatorViews = this.props.navigatorViews;
    this.routeConfig = this.props.routeConfig;
    this.getRouteArray = Object.keys(this.navigatorViews);
    const startPosition = -appWidth * this.getRouteLocation(this.routeConfig.initialRouteName);
    this.animateMargin = new Animated.Value(startPosition);
    this.navigate = this.navigate.bind(this);
    this.openModal = this.openModal.bind(this);
    this.modalComponent = null;
    this.state = {
      currentView: this.getRouteLocation(this.routeConfig.initialRouteName),
      modalVisible: false,
    };
  }

  openModal(state, component) {
    if (component) {
      this.modalComponent = component;
    }
    this.setState({
      modalVisible: state,
    });
  }

  navigate(route) {
    this.setState({
      currentView: this.getRouteLocation(route),
    });
    Animated.timing(this.animateMargin, {
      toValue: -appWidth * this.getRouteLocation(route),
      duration: 300,
      easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    }).start();
  }

  getContainerWidth() {
    return appWidth * this.getRouteArray.length;
  }

  getRouteLocation(route) {
    return this.getRouteArray.indexOf(route);
  }

  render() {
    const navigatorWidth = {
      width: this.getContainerWidth(),
    };
    const { headerStyles } = this.props;
    const { currentView } = this.state;
    const currentRoute = this.getRouteArray[currentView];
    const nextRoute = this.getRouteArray[currentView + 1];
    const previousRoute = this.getRouteArray[currentView - 1];
    return (
      <View style={styles.container}>
        <Modal animationType={'slide'} visible={this.state.modalVisible}>
          {this.modalComponent
            ? React.cloneElement(this.modalComponent, {
                openModal: this.openModal,
              })
            : null}
        </Modal>
        <NavigationBar
          {...headerStyles}
          title={{ title: currentRoute, ...headerStyles.title }}
          rightButton={{
            title: nextRoute || '',
            handler: () => (nextRoute ? this.navigate(nextRoute) : null),
            ...headerStyles.leftButton,
          }}
          leftButton={{
            title: previousRoute || '',
            handler: () => (previousRoute ? this.navigate(previousRoute) : null),
            ...headerStyles.rightButton,
          }}
        />
        <Animated.View
          style={[styles.navigator, navigatorWidth, { marginLeft: this.animateMargin }]}>
          {this.getRouteArray.map((item, i) => {
            return React.cloneElement(this.navigatorViews[item].screen, {
              key: i,
              name: item,
              navigate: this.navigate,
              active: this.state.currentView === i,
              openModal: this.openModal,
            });
          })}
        </Animated.View>
      </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  navigator: {
    height: appHeight - (APPBAR_HEIGHT + STATUSBAR_HEIGHT),
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  container: {
    overflow: 'hidden',
  },
});
