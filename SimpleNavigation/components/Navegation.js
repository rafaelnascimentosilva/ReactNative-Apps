import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button
} from "react-native";

import { Router, Scene } from "react-native-router-flux";

import { GreenScreen } from "../screens/GreenScreen";
import { RedScreen } from "../screens/RedScreen";

export const Nagivation = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="green"
                    component={GreenScreen}
                    title="Green"
                    initial
                />
                
                <Scene
                    key="red"
                    component={RedScreen}
                    title="Red"
                />

            </Scene>
        </Router>
    );
};