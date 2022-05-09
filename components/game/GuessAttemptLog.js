import {StyleSheet, Text, View} from "react-native";

import Colors from "../../values/colors";

export default function GuessAttemptLog({attemptNumber, guess}) {
    return(
        <View style={styles.listItem}>
            <Text style={styles.text}>Computer's guess: {guess}</Text>
            <Text style={[styles.text, styles.italic]}>#{attemptNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.gold,
        borderColor: Colors.darkPurple,
        borderWidth: 1,
        borderRadius: 40,
        padding: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    text: {
        fontFamily: 'open-sans',
    },
    italic: {
        fontStyle: 'italic',
    }
});
