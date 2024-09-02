import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Image, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';
import { moderateScale } from '../../Theme/ResposiveSize';
import { navigate } from '../../Navigator/Utils';

// const BackButton = require('../assets/Image/back.png')

const CreactNewPassword = () => {
    const [otp, setOtp] = useState(['', '', '', '',]);
    const inputs = useRef([]);

    const handleContinue = () => {
    navigate("PasswordChangeSuccess", {})
        console.warn('OTP entered:', otp.join(''));
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            {/* <Image source={BackButton} style={styles.icon} /> */}
            <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
            <View style={styles.container}>
                <Text style={Typography.main_heading}>Create new password</Text>
                <Text style={[styles.text, Typography.body]}>Your new password must be unique from those previously used.</Text>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <NameInput
                        placeholder='New Password'
                    />

                    <NameInput
                        placeholder='Confirm Password'
                    />
                </ScrollView>
                <Button title='Update' mainStyle={styles.btn} onPress={handleContinue} />
            </View>
        </SafeAreaView>
    );
};

export default CreactNewPassword;

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