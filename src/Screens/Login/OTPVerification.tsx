import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Image, StatusBar, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate, navigationRef } from '../../Navigator/Utils';


const BackButton = require('../../assets/Image/arrow-left.png')


const OTPVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '',]);
    const inputs = useRef([]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                inputs.current[index - 1].focus();
            }
        }
    };

    const handleContinue = () => {
        navigate("CreactNewPassword", {type: "CreactNewPassword"})
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <Pressable onPress={() => navigationRef.goBack()} style={styles.back}>
                <Image source={BackButton} style={styles.icon} />
            </Pressable>
            <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
            <View style={styles.container}>
                <Text style={Typography.main_heading}>OTP Verification</Text>
                <Text style={[styles.text, Typography.body]}>Enter the Verification code we just sent on your phone number.</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(input) => inputs.current[index] = input}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                style={styles.otpInput}
                                maxLength={1}
                                keyboardType="numeric"
                            />
                        ))}
                    </View>
                </ScrollView>
                <Button title='Continue' mainStyle={styles.btn} onPress={handleContinue} />
            </View>
        </SafeAreaView>
    );
};

export default OTPVerification;

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
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(0),
    },
    otpInput: {
        width: 70,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#FF5A60',
        backgroundColor: '#ffa7aa',
        color: Color.black,
        textAlign: 'center',
        fontSize: 24,
        marginHorizontal: 5,
        marginTop: moderateScale(20)
    },
    icon: {
        height: moderateScale(30),
        width: moderateScale(30),

    },
    back: {
        marginTop: moderateScale(50),
        backgroundColor: Color.boxBg,
        borderWidth: 1,
        borderColor: Color.border,
        marginLeft: moderateScale(16),
        alignItems: "center",
        justifyContent: "center",
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50)
    }
});