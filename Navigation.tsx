import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DividerIssue from './src/screens/DividerIssue';
import BottomSheetIssues from './src/screens/BottomSheetIssues/BottomSheetIssues';
import TestInputPrefixIssue from './src/screens/TestInputPrefixIssue';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DividerIssue" component={DividerIssue} />
        <Stack.Screen name="BottomSheetIssues" component={BottomSheetIssues} />
        <Stack.Screen
          name="TestInputPrefixIssue"
          component={TestInputPrefixIssue}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
