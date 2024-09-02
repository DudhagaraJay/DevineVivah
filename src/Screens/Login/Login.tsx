import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import NameInput from '../../Component/Placeholder/NameInput'
import { Typography } from '../../Theme/Typography'
import Button from '../../Component/Buttons/Button'
import { moderateScale } from '../../Theme/ResposiveSize'
import Authenticate from '../../Component/Cards/Authenticate'
import { Color } from '../../Theme'
import { FontSize } from '../../Theme/FontSize'
import { navigate } from '../../Navigator/Utils'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userlogin = () => {
        navigate("HomeScreen", {})
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={[styles.heading, Typography.main_heading]}>Welcome back! Glad to see you, Again!</Text>
                    <NameInput
                        placeholder='Enter your Email'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <NameInput
                        placeholder='Enter Your Password '
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text onPress={() => navigate("ForgotPassword",{})} style={[styles.forget, Typography.small]}>Forgot Password?</Text>
                    <Button mainStyle={styles.btn} title='Login' onPress={userlogin} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(40)
                    }}>
                        <View style={styles.line} />
                        <Text style={[styles.text, Typography.small]}>Or Login with</Text>
                        <View style={styles.line} />
                    </View>
                    <Authenticate />
                    <Text style={styles.register}>Don’t have an account? <Text style={{ fontWeight: "bold", color: Color.orange }}>Register Now</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: "center",

    },
    heading: {
        marginBottom: moderateScale(25)
    },
    container: {
        marginTop: moderateScale(110),
    },
    forget: {
        color: Color.orange,
        textAlign: "right",
        paddingVertical: moderateScale(10)
    },
    btn: {
        marginTop: moderateScale(10)
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E8ECF4',
    },
    text: {
        marginHorizontal: 10,
        color: "#8391A1",
    },
    register: {
        textAlign: "center",
        marginTop: moderateScale(40),
        fontSize: FontSize.Font16,
        fontFamily: "Urbanist-Medium",
        color: Color.darkBlack

    }
})