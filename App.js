import React from 'react';
import Navigator from './Navigator';
import Card from './card';

const navigatorViews = {
  Settings: {
    screen: <Card goTo={'Feed'}/>
  },
  Feed: {
    screen: <Card goTo={'Matches'}/>
  },
  Matches: {
    screen: <Card goTo={'Feed'}/>
  },
  Etc1: {
    screen: <Card goTo={'Etc2'}/>
  },
  Etc2: {
    screen: <Card goTo={'Etc1'}/>
  }  
}

const routeConfig = {
  initialRouteName: 'Settings'
}

export default class App extends React.Component {
  render() {
    return (
      <Navigator navigatorViews={navigatorViews} routeConfig={routeConfig}/>
    );
  }
}
