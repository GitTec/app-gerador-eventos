import { View, Text, StyleSheet } from "react-native"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello React Native!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        color: "#fff"
    }
})