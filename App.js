import {useState} from "react";
import {ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

import StartGame from "./screens/StartGame";
import InGame from "./screens/InGame";
import GameOver from "./screens/GameOver";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('StartGame');
    const [selectedNumber, setSelectedNumber] = useState(-1);
    const [attemptsNumber, setAttemptsNumber] = useState(-1);

    const [fontsLoaded] = useFonts({
        "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
        "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) return <AppLoading/>; // While the fonts are loading, keep showing the splash screen

    const navigateToStartGameScreen = () => {
        setSelectedNumber(-1);
        setAttemptsNumber(0);
        setCurrentScreen('StartGame');
    }

    const navigateToInGameScreen = (inputNumber) => {
        setSelectedNumber(inputNumber);
        setCurrentScreen('InGame');
    }

    const navigateToGameOverScreen = (attemptsNumber) => {
        setAttemptsNumber(attemptsNumber);
        setCurrentScreen('GameOver');
    }

    let currentScreenComponent;
    switch (currentScreen) {
        case 'InGame':
            currentScreenComponent =
                <InGame selectedNumber={selectedNumber} navigateToGameOver={navigateToGameOverScreen}/>;
            break;
        case 'GameOver':
            currentScreenComponent =
                <GameOver guessedNumber={selectedNumber} attemptsNumber={attemptsNumber}
                          navigateToStartGame={navigateToStartGameScreen}/>;
            break;
        default:
            currentScreenComponent = <StartGame navigateToStartGame={navigateToInGameScreen}/>;
            break;
    }

    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.screen}>
            <ImageBackground
                style={styles.screen}
                source={require('./assets/images/background.png')}
                resizeMode="cover"
                imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.screen}>
                    {currentScreenComponent}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
});
