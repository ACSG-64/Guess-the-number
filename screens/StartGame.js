import {useState} from "react";
import {Alert, View, TextInput, StyleSheet, Text} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../values/colors";
import Title from "../components/ui/Title";

export default function StartGame({navigateToStartGame}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (input) => {
        // Only accept positive integers as input
        const intInput = parseInt(input);
        setEnteredNumber(!isNaN(intInput) ? `${intInput}` : '')
    }

    const confirmInputHandler = () => {
        let alertMsg = 'Please provide a valid input!'
        const enteredNumberInt = parseInt(enteredNumber);
        if (!enteredNumberInt) {
            alertMsg = 'Please provide a numeric input!'
        } else if (enteredNumberInt <= 0) {
            alertMsg = 'The number must be greater than 0'
        } else if (enteredNumberInt >= 100) {
            alertMsg = 'The number must be lower than 100'
        } else {
            navigateToStartGame(enteredNumberInt);
            return;
        }
        Alert.alert('Invalid input', alertMsg, [{
            text: 'Ok',
            style: 'destructive',
            onPress: resetHandler
        }]);
    }

    const resetHandler = () => setEnteredNumber(''); // Clear the input text component

    return (
        <View style={styles.screen}>
            <Title>Guess a number</Title>
            <View style={styles.inputContainer}>
                <Text style={styles.textInputLabel}>Enter a number:</Text>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType={"numeric"}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: '8%',
        alignItems: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 35,
        padding: '10%',
        backgroundColor: Colors.darkPurple,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    textInputLabel: {
        fontFamily: 'open-sans',
        fontSize: 22,
        color: Colors.gold,
        textAlign: 'center',
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.gold,
        borderBottomWidth: 2,
        color: Colors.gold,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});
