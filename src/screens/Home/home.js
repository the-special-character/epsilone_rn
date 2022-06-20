import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';

import React from 'react';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>

      {/* on Click no effects will be visible */}
      <TouchableWithoutFeedback onPress={() => {}}>
        <Text>Sign In</Text>
      </TouchableWithoutFeedback>

      {/* on Click background color change */}
      <TouchableHighlight
        onPress={() => {}}
        underlayColor="#1A1A1A"
        activeOpacity={0.3}>
        <Text>Sign In</Text>
      </TouchableHighlight>

      {/* on Click text color change */}
      <TouchableOpacity onPress={() => {}}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      {/* only available for IOS */}
      <TouchableNativeFeedback onPress={() => {}}>
        <View>
          <Text>Sign In</Text>
        </View>
      </TouchableNativeFeedback>

      <Pressable
        onPress={() => {}}
        android_ripple={{
          color: 'red',
          radius: 20,
        }}
        style={{
          height: 40,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Home;
