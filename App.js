import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

const App = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const getDeviceInfo = async () => {
      const deviceInfo = {
        brand: Device.brand,
        manufacturer: Device.manufacturer,
        model: Device.deviceName,
        modelId: Device.osBuildId,
        deviceName: Device.deviceName,
        osName: Constants.platform.ios ? 'iOS' : 'Android',
        osVersion: Constants.platform.ios ? Constants.platform.ios.systemVersion : Constants.platform.android.versionCode,
        deviceType: Constants.platform.ios ? Constants.platform.ios.userInterfaceIdiom : Constants.platform.android.model,
        isDevice: Device.isDevice,
        isEmulator: Device.isDevice ? false : Constants.isEmulator,
      };
      setDeviceInfo(deviceInfo);
    };
    getDeviceInfo();
  }, []);

  if (!deviceInfo) {
    return null;
  }

  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Text style={styles.subTitle}>Brand: {deviceInfo.brand}</Text>
      <Text style={styles.subTitle}>Manufacturer: {deviceInfo.manufacturer}</Text>
      <Text style={styles.subTitle}>Model: {deviceInfo.model}</Text>
      <Text style={styles.subTitle}>Model ID: {deviceInfo.modelId}</Text>
      <Text style={styles.subTitle}>Device Name: {deviceInfo.deviceName}</Text>
      <Text style={styles.subTitle}>OS Name: {deviceInfo.osName}</Text>
      <Text style={styles.subTitle}>OS Version: {deviceInfo.osVersion}</Text>
      <Text style={styles.subTitle} >Device Type: {deviceInfo.deviceType}</Text>
      <Text style={styles.subTitle}>Is Device: {deviceInfo.isDevice ? 'Yes' : 'No'}</Text>
      <Text style={styles.subTitle}>Is Emulator: {deviceInfo.isEmulator ? 'Yes' : 'No'}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  subTitle:{
    fontSize:17,
    fontWeight:'bold',
  }
})
export default App;
