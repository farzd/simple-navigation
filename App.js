import React from 'react';
import Navigator from './navigator/navigator';
import Card from './components/card';

const navigatorViews = {
  Settings: {
    screen: <Card goTo={'Feed'} color={'#2980B9'} />,
  },
  Feed: {
    screen: <Card goTo={'Matches'} color={'#3498DB'} />,
  },
  Matches: {
    screen: <Card goTo={'Feed'} color={'#E79700'} />,
  },
  Etc1: {
    screen: <Card goTo={'Etc2'} color={'#E74C3C'} />,
  },
  Etc2: {
    screen: <Card goTo={'Etc1'} color={'#2C3E50'} />,
  },
};

const routeConfig = {
  initialRouteName: 'Settings',
};

const headerStyles = {
  tintColor: '#E87EAC',
  statusBar: {
    style: 'light-content',
  },
  title: {
    tintColor: '#fff',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <Navigator
        navigatorViews={navigatorViews}
        routeConfig={routeConfig}
        headerStyles={headerStyles}
      />
    );
  }
}
