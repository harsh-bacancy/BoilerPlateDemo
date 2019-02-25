/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ActivityIndicator, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
import Demo from './Demo'
const { persistor, store } = configureStore();

//import liraries
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ActivityIndicatorHome = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
});





export default class Entrypoint extends Component {

    render() {

        const theme = {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                primary: 'tomato',
                accent: 'yellow',
            },
        };

        return (
            <StoreProvider store={store}>
                <PersistGate
                    loading={<ActivityIndicatorHome/>}
                    persistor={persistor}
                >
                    <PaperProvider theme={theme}>
                        {/* <Navigator /> */}
                        <Demo />
                    </PaperProvider>
                </PersistGate>
            </StoreProvider>
        );
    }
}
