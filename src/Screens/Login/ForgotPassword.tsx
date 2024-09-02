import { SafeAreaView, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate } from '../../Navigator/Utils';



// const BackButton = require('../assets/Image/back.png')

const ForgotPassword = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            {/* <Image source={BackButton} style={styles.icon} /> */}
            <View style={styles.container}>
                <Text style={Typography.main_heading}>Forgot Password?</Text>
                <Text style={[styles.text, Typography.body]}>Don’t worry! It occurs. Please enter the email address linked with your account.</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <NameInput
                            placeholder='Enter your email'
                            nameStyle
                        />
                    </View>
                </ScrollView>
                <Button title='Send Code' mainStyle={styles.btn} onPress={() => navigate("OTPVerification", {})} />
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: moderateScale(20),
        // alignItems:"center"
    },
    content: {
        flexGrow: 1,
        marginTop: moderateScale(10),
        gap: moderateScale(20),
    },
    btn: {
        marginTop: moderateScale(30),
    },
    text: {
        marginTop: moderateScale(3),
        color: Color.chatBg
    },
    icon: {
        height: moderateScale(50),
        width: moderateScale(50),
        // alignSelf: 'center',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
    },
});
