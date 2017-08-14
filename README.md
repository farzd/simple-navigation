# simple-navigation
- Simple, Stackless navigation for react-native
- Uses the official [react-native-navbar](https://github.com/react-native-community/react-native-navbar), also contains custom Header component, simply remove react-native-bar reference and import the Header component
- Ability to push/view Modals
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

//API for styles https://github.com/react-native-community/react-native-navbar
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
      <Navigator navigatorViews={navigatorViews} routeConfig={routeConfig} headerStyles={headerStyles} />
    );
  }
}
```
- To add a Modal,
```
//Inside your Component i.e Settings/Feed/Matches 

import Modal1 from './modal1';

render() {
 const { openModal } = this.props;
  return (
    <Button title={'open Modal 1'} onPress={() => openModal(true, <Modal1 />)} />
  );
}

/**
openModal prop is automatically added to every component inside the Navigator,
each Modal automatically receives the same prop, so you can call openModal(false) to close it
**/
```


![simple-nav](https://user-images.githubusercontent.com/1423413/29241836-b6275d2e-7f79-11e7-9b25-1c40ef80581f.gif)
