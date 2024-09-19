// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Singup = () => {
//   return (
//     <View>
//       <Text>Singup</Text>
//     </View>
//   )
// }

// export default Singup

// const styles = StyleSheet.create({})

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import NameInput from '../../Component/Placeholder/NameInput'
import { Typography } from '../../Theme/Typography'
import Button from '../../Component/Buttons/Button'
import { height, moderateScale } from '../../Theme/ResposiveSize'
import Authenticate from '../../Component/Cards/Authenticate'
import { Color } from '../../Theme'
import { FontSize } from '../../Theme/FontSize'
import { navigate } from '../../Navigator/Utils'
import CheckBox from '../../Component/CheckBox/CheckBox'


const Singup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullName] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    const userlogin = () => {
        navigate("CreationSteps", {})
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={[styles.heading, Typography.main_heading]}>Hello! Register to get started</Text>
                    <NameInput
                        placeholder='Full Name'
                        value={fullname}
                        onChangeText={setFullName}
                    />
                    <NameInput
                        placeholder='Phone No'
                        value={email}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={setEmail}
                    />
                    <NameInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                    />
                    <NameInput
                        placeholder='Confirm Password'
                        value={confirmpassword}
                        onChangeText={setConfirmPassword}
                    />
                    <View style={{flexDirection: "row", alignItems: "center", marginHorizontal: 16}}>
                        <CheckBox checkstyle />
                        <Text onPress={() => navigate("ForgotPassword", {})} style={[styles.forget, Typography.small]}>
                            <Text style={{ color: Color.chatBg }}>I agree to the</Text>
                            Terms and Services <Text style={{ color: Color.chatBg }}>and</Text> Privacy Policy.</Text>

                    </View>
                    <Button mainStyle={styles.btn} title='Register' onPress={userlogin} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(40)
                    }}>
                        <View style={styles.line} />
                        <Text style={[styles.text, Typography.small]}>Or Register with</Text>
                        <View style={styles.line} />
                    </View>
                    <Authenticate />
                    <Text style={styles.register}>Already have an account? <Text onPress={() => navigate("Login", {})} style={{ fontWeight: "bold", color: Color.orange }}>Login Now</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Singup

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: moderateScale(110),
        padding: moderateScale(16),
        flex: 1,

    },
    heading: {
        marginBottom: moderateScale(25)
    },
    container: {
    },
    forget: {
        color: Color.orange,
        marginHorizontal: 10,
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