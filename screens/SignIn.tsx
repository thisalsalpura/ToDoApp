import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function SignIn() {
    return (
        <SafeAreaView className="h-full w-full bg-cus-bg">
            <View>
                <View className="h-20 w-full">
                    <LinearGradient colors={["#DCB5A4", "#CC876A"]} className="h-full w-full" start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                </View>
                <View className="h-auto w-full py-4 px-8">
                    <Text className="text-2xl text-black font-gilroyHeavy">My To-Do</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
