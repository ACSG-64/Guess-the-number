import {FlatList, Text, View, StyleSheet, Alert} from "react-native";
import {useEffect, useState} from "react";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import GuessAttemptLog from "../components/game/GuessAttemptLog";

const guessBounds = {
    min: 1,
    max: 99,
    reset: function () {
        this.min = 1;
        this.max = 99;
    }
}

export default function InGame({selectedNumber, navigateToGameOver}) {
    const initialGuess = generateRandomNumber(guessBounds.min, guessBounds.max, selectedNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessAttempts, setGuessAttempts] = useState([initialGuess]);
    const [totalGuessAttempts, setTotalGuessAttempts] = useState(1);

    // Reset the guess bounds when this component is rendered for the first time
    useEffect(() => guessBounds.reset(), []);

    // Check if the guess is equal to the selected number when the state changes
    useEffect(() => {
        if (currentGuess === selectedNumber)
            navigateToGameOver(totalGuessAttempts);
    }, [currentGuess, totalGuessAttempts])

    const nextGuessHandler = (bound) => {
        if (bound === 'lower' && selectedNumber < currentGuess) {
            guessBounds.max = currentGuess;
        } else if (bound === 'higher' && selectedNumber > currentGuess) {
            guessBounds.min = currentGuess;
        } else {
            Alert.alert('Invalid hint',
                `The hint could not be lower or higher than your selected number (${selectedNumber})`,
                [{text: 'Got it!', style: 'destructive'}]
            );
            return;
        }

        const guess = generateRandomNumber(guessBounds.min, guessBounds.max, currentGuess);
        setCurrentGuess(guess);
        setGuessAttempts(previousGuesses => [guess, ...previousGuesses]);
        setTotalGuessAttempts(guessAttempts.length);
    }

    return (
        <View style={styles.screen}>
            <View>
                <Title>Computer's guess</Title>
                <View style={styles.numberContainer}>
                    <NumberContainer>{currentGuess}</NumberContainer>
                </View>

                <Text style={styles.buttonsContainerLabel}>Is your number lower or higher?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'lower')}>Lower</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'higher')}>Higher</PrimaryButton>
                    </View>
                </View>
            </View>
            <FlatList
                data={guessAttempts}
                keyExtractor={(item) => item}
                renderItem={
                    (itemData) =>
                        <GuessAttemptLog attemptNumber={totalGuessAttempts - itemData.index}
                                         guess={itemData.item}/>
                }
            />
        </View>
    );
}

function generateRandomNumber(min, max, exclude) {
    while (true) {
        const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
        if (rndNum !== exclude) return rndNum;
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: '10%',
    },
    numberContainer: {
        alignItems: 'center'
    },
    buttonsContainerLabel: {
        fontFamily: 'open-sans',
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})
