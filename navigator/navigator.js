import React from 'react';
import { StyleSheet, View, Dimensions, Animated, Easing, Platform } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Constants } from 'expo';
import Modal from './Modal';
import NavBar from './NavBar';
const { height: appHeight, width: appWidth } = Dimensions.get('window');

export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.navigatorViews = this.props.navigatorViews;
    this.routeConfig = this.props.routeConfig;
    this.getRouteArray = Object.keys(this.navigatorViews);
    const startPosition = -appWidth * this.getRouteLocation(this.routeConfig.initialRouteName);
    this.animateMargin = new Animated.Value(startPosition);

    this.state = {
      currentView: this.getRouteLocation(this.routeConfig.initialRouteName),
      modals: [],
    };

    this.navigate = this.navigate.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(modalContent) {
    const newModal = (
      <Modal
        key={'modal' + this.state.modals.length}
        zIndex={1 + this.state.modals.length}
        closeModalAction={this.closeModal}
        openModalAction={this.openModal}>
        {modalContent}
      </Modal>
    );

    this.setState({
      modals: [newModal, ...this.state.modals],
    });
  }

  closeModal() {
    this.setState({
      modals: this.state.modals.filter((_, i) => i !== 0),
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
        {this.state.modals.map(modal => {
          return modal;
        })}
        {/* <NavBar
          navigatorViews={this.navigatorViews}
          routeArray={this.getRouteArray}
          currentView={this.state.currentView}
          navigate={this.navigate}
        /> */}
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
            return (
              <View key={item} style={styles.wrapper}>
                {React.cloneElement(this.navigatorViews[item].screen, {
                  key: i,
                  name: item,
                  navigate: this.navigate,
                  active: this.state.currentView === i,
                  openModal: this.openModal,
                })}
              </View>
            );
          })}
        </Animated.View>
      </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  wrapper: {
    width: appWidth,
  },
  navigator: {
    height: appHeight - (APPBAR_HEIGHT + Constants.statusBarHeight),
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
