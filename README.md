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

![simple-nav](https://user-images.githubusercontent.com/1423413/29241836-b6275d2e-7f79-11e7-9b25-1c40ef80581f.gif)
