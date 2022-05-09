import {StyleSheet, Text, View} from "react-native";
import Colors from "../../values/colors";

export default function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.gold,
        padding: 24,
        margin: 24,
        borderRadius: 8,
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.gold,
    }
})
