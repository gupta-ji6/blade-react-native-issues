import {Box, Heading, TextInput} from '@razorpay/blade/components';
import React from 'react';

function TestInputPrefixIssue() {
  return (
    <Box
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      paddingX={'spacing.9'}>
      <Heading
        color="feedback.positive.action.text.primary.default.lowContrast"
        marginBottom={'spacing.6'}>
        Prefix is not centered with input ✅
      </Heading>
      <TextInput
        prefix="+91"
        placeholder="Enter mobile number"
        label="Login"
        defaultValue="9999999999"
      />
    </Box>
  );
}

export default TestInputPrefixIssue;
