import React from "react";
import { View, Text, TextInput, Pressable } from 'react-native';
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
    return (
        <SafeAreaView className="flex-1 bg-cus-bg" edges={['bottom']}>
            <View className="flex-1">
                <Header />

                <KeyboardAwareScrollView className="flex-1 py-8 px-4" contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} showsVerticalScrollIndicator={false} extraScrollHeight={20} enableOnAndroid={true}>
                    <View className="h-auto w-full flex flex-col justify-start items-center gap-8">
                        <Text className="text-4xl text-black font-sairaCondensedBold">Register</Text>
                        <Text className="text-2xl text-gray-500 font-sairaCondensedRegular tracking-wider">Register to ToDoApp!</Text>
                    </View>

                    <View className="mt-16 h-auto w-full flex flex-col justify-start items-center gap-8">
                        <TextInput className="h-16 w-11/12 border-2 border-cus-dark-brown rounded-2xl px-3 text-xl text-gray-500 font-sairaCondensedRegular" placeholder="First Name" />
                        <TextInput className="h-16 w-11/12 border-2 border-cus-dark-brown rounded-2xl px-3 text-xl text-gray-500 font-sairaCondensedRegular" placeholder="Last Name" />
                        <TextInput className="h-16 w-11/12 border-2 border-cus-dark-brown rounded-2xl px-3 text-xl text-gray-500 font-sairaCondensedRegular" placeholder="Email" keyboardType="email-address" />
                        <TextInput className="h-16 w-11/12 border-2 border-cus-dark-brown rounded-2xl px-3 text-xl text-gray-500 font-sairaCondensedRegular" placeholder="Mobile" keyboardType="phone-pad" />
                        <TextInput className="h-16 w-11/12 border-2 border-cus-dark-brown rounded-2xl px-3 text-xl text-gray-500 font-sairaCondensedRegular" placeholder="Password" secureTextEntry />
                    </View>

                    <View className="mt-16 h-auto w-full flex flex-col justify-start items-center gap-8">
                        <Pressable className="h-20 w-11/12 flex justify-center items-center bg-cus-dark-brown border-2 border-cus-dark-brown rounded-2xl">
                            <Text className="text-3xl text-black font-sairaCondensedBold">Register</Text>
                        </Pressable>
                        <Pressable className="h-20 w-11/12 flex justify-center items-center border-2 border-cus-dark-brown rounded-2xl">
                            <Text className="text-3xl text-black font-sairaCondensedBold">Sign In</Text>
                        </Pressable>
                    </View>
                </KeyboardAwareScrollView>

                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
