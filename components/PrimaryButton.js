import {Text, View, Pressable, StyleSheet} from "react-native";

export default function PrimaryButton({children}) {
    return (
        <Pressable style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.content}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})
