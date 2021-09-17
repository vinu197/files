import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import messaging from '@react-native-firebase/messaging';

function Fir() {

    useEffect(() => {
     messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('onNotificationOpenedApp:' , JSON.stringify(remoteMessage) );
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          JSON.stringify(remoteMessage),
        );
      }
    });
}, []);
}

const Fire = () => {
  return (
    <View style={styles.center}>
      <Text>Firebase</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Fire;


