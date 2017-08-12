import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

export default class Header extends React.Component {
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
        return left ? <Button
                        style={[styles.button, styles.buttonLeft]}
                        title={'< ' + left}
                        onPress={ ()=> this.navigate(left)  }/> : <View style={styles.empty} />;
    }    

    getRightButton(currentView) {
        const right = this.routeArray[currentView + 1];
        return right ? <Button
                        style={[styles.button, styles.buttonLeft]}
                        title={right + ' >'}
                        onPress={ ()=> this.navigate(right) }/> : <View style={styles.empty} />;
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
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
    container: {
        paddingTop: STATUSBAR_HEIGHT,
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        backgroundColor: Platform.OS === 'ios' ? '#F7F7F7' : '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
        fontSize: 17,
        fontWeight: '600',
        color: 'rgba(0,0,0,.9)',
        textAlign: 'center',
        flexDirection: 'column' 
    },
    button: {
        color: 'blue',
        flexDirection: 'column',
        alignItems: 'center',
        width: 70
    },
    empty: {
        width: 70
    },
    buttonLeft: {
        textAlign: 'left',
        paddingLeft: 10
    },
    buttonRight: {
        textAlign: 'right',
        paddingRight: 10
    }
});
