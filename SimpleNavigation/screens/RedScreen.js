import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export const RedScreen = () => {
    return ( 
        <View style={styles.container}>
            <Button
                title="RedScreen"
                style={styles.welcome}
                onPress={() => Actions.green()}
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
        backgroundColor: "red",
    }
});