import {Box, Button} from '@razorpay/blade/components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const {navigate} = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Box marginTop="spacing.4">
          <Button onClick={() => navigate('BottomSheetRadioIssue')}>
            Go to BottomSheetRadioIssue
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
