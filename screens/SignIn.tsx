import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SvgUri } from "react-native-svg";

export default function SignIn() {
    return (
        <SafeAreaView className="flex-1 bg-cus-bg">
            <View>
                <View className="h-20 w-full">
                    <LinearGradient colors={["#DCB5A4", "#CC876A"]} className="flex-1" start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                </View>
                <View className="h-auto w-full flex flex-row justify-start items-center py-4 px-6 gap-4">
                    <SvgUri height={35} width={35} uri={"https://raw.githubusercontent.com/thisalsalpura/ToDoApp/master/assets/icons/todo-logo.svg"} />
                    <Text className="text-2xl text-black font-gilroyHeavy">My To-Do</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
