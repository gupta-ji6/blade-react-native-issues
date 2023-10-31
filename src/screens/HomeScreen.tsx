import {Box, Button} from '@razorpay/blade/components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Box
        marginTop="spacing.4"
        justifyContent="center"
        alignItems="center"
        gap={'spacing.3'}
        paddingX={'spacing.11'}
        flex={1}>
        <Button isFullWidth onClick={() => navigate('BottomSheetIssues')}>
          See BottomSheet Issues
        </Button>

        <Button isFullWidth onClick={() => navigate('DividerIssue')}>
          See Divider Issues
        </Button>

        <Button isFullWidth onClick={() => navigate('TestInputPrefixIssue')}>
          See Text Input Prefix
        </Button>
      </Box>
    </SafeAreaView>
  );
}

export default HomeScreen;
