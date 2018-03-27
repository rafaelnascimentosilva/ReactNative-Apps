import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export const GreenScreen = () => {
    return (
        <View style={styles.container}>
            <Button style={styles.btnStyles}
                title="GreenScreen"
                style={styles.welcome}
                onPress={() => Actions.red()}
            >

            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    },
    btnStyles: {
        backgroundColor: "gray"
    }
});