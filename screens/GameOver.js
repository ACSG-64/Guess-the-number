import {Image, StyleSheet, Text, View} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../values/colors";

export default function GameOver({attemptsNumber, guessedNumber, navigateToStartGame}) {
    return (
        <View style={styles.screen}>
            <Title>Game over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/robot-aha.jpg')}/>
            </View>
            <Text style={styles.feedbackText}>
                The computer took <Text style={styles.highlightedText}>{attemptsNumber}</Text> attempts to guess
                the number <Text style={styles.highlightedText}>{guessedNumber}</Text>
            </Text>
            <PrimaryButton onPress={navigateToStartGame}>
                Go to the main screen
            </PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
    },
    imageContainer: {
        height: 215,
        width: 215,
        borderRadius: 200,
        overflow: 'hidden',
        margin: 10,
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    feedbackText: {
        fontSize: 17,
        fontFamily: 'open-sans',
        color: 'white',
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 26,
    },
    highlightedText: {
        color: Colors.deepCarmine,
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold'
    }
});
