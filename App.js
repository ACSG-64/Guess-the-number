import {ImageBackground, StyleSheet} from 'react-native';
import StartGame from "./screens/StartGame";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.screen}>
            <ImageBackground
                style={styles.screen}
                source={require('./assets/images/background.png')}
                resizeMode="cover"
                imageStyle={styles.backgroundImage}>
                <StartGame/>
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
