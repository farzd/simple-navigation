import React from 'react';
import Navigator from './navigator/Navigator';
import Card from './components/Card';

const navigatorViews = {
  Settings: {
    screen: <Card goTo={'Feed'} color={'#2980B9'} />,
  },
  Feed: {
    screen: <Card goTo={'Matches'} color={'#2980B9'} />,
  },
  Matches: {
    screen: <Card goTo={'Feed'} color={'#2980B9'} />,
  },
  Etc1: {
    screen: <Card goTo={'Etc2'} color={'#2980B9'} />,
  },
  Etc2: {
    screen: <Card goTo={'Etc1'} color={'#2980B9'} />,
  },
};

const routeConfig = {
  initialRouteName: 'Feed',
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
