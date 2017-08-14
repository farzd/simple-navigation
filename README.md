# simple-navigation
- Simple, Stackless navigation for react-native
- Expo : https://exp.host/@farzd/simple-navigation
```
import Navigator from './Navigator';
import Settings from './SettingsComponent';
import Feed from './FeedComponent';
import Matches from './MatchesComponent';

const navigatorViews = {
  Settings: {
    screen: <Settings goTo={'Feed'}/>
  },
  Feed: {
    screen: <Feed goTo={'Matches'}/>
  },
  Matches: {
    screen: <Matches goTo={'Feed'}/>
  },
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
```

- You can also use the official [react-native-navbar](https://github.com/react-native-community/react-native-navbar) instead of the custom Header that comes with simple-navigation
- See this [branch](https://github.com/farzd/simple-navigation/tree/react-native-navbar) for a working example
```
import NavigationBar from 'react-native-navbar';
  render() {
    return (
      const { currentView } = this.state;
      const currentRoute = this.getRouteArray[currentView];
      const nextRoute = this.getRouteArray[currentView + 1];
      const previousRoute = this.getRouteArray[currentView - 1];
      return (
        <NavigationBar
          title={{ title: currentRoute }}
          rightButton={{
            title: nextRoute || '',
            handler: () => (nextRoute ? this.navigate(nextRoute) : null),
          }}
          leftButton={{
            title: previousRoute || '',
            handler: () => (previousRoute ? this.navigate(previousRoute) : null),
          }}
        />
      )
   }
```

![simple-nav](https://user-images.githubusercontent.com/1423413/29241836-b6275d2e-7f79-11e7-9b25-1c40ef80581f.gif)
