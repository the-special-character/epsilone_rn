import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Pressable,
  Alert,
} from 'react-native';

import React from 'react';
import {
  BorderlessButton,
  gestureHandlerRootHOC,
  RectButton,
} from 'react-native-gesture-handler';
import FavoriteIcon from '../../../assets/icons/favorite.svg';
import ReactNativeModal from 'react-native-modal';

const ModalContent = gestureHandlerRootHOC(({children}) => {
  return children;
});

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

      <RectButton
        onPress={() => {
          Alert.alert('hello from button');
        }}>
        <Text>Sign In</Text>
      </RectButton>

      <BorderlessButton onPress={() => {}} style={{height: 24, width: 24}}>
        <FavoriteIcon height={24} width={24} fill="red" />
      </BorderlessButton>

      <ReactNativeModal isVisible>
        <ModalContent>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{backgroundColor: '#fff', padding: 16}}>
              <Text>I am the modal content!</Text>

              <RectButton
                onPress={() => {
                  Alert.alert('hello from modal button');
                }}>
                <Text>Sign In</Text>
              </RectButton>
            </View>
          </View>
        </ModalContent>
      </ReactNativeModal>
    </View>
  );
};

export default Home;
