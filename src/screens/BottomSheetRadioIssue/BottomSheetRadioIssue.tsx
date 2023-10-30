import React, {useState} from 'react';
import SimSelectionBottomSheet from './SimSelectionBottomSheet';
import {ArrowRightIcon, Button, Text, Box} from '@razorpay/blade/components';

const BottomSheetRadioIssue = () => {
  const [isSimSelectionBottomSheetOpen, setIsSimSelectionBottomSheetOpen] =
    useState(false);
  const [isSimVerificationLoading, setIsSimVerificationLoading] =
    useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleSimSelectionDismiss = () => {
    if (isSimSelectionBottomSheetOpen) {
      setIsSimSelectionBottomSheetOpen(false);
    }
  };

  const handleCtaClick = () => {
    if (!isSimSelectionBottomSheetOpen) {
      setIsSimSelectionBottomSheetOpen(true);
    }
  };

  const handleSimVerification = (selectedPhoneNumber: string) => {
    console.log(
      'BottomSheetRadioIssue: handleSimVerification -> selectedPhoneNumber=',
      selectedPhoneNumber,
    );
    setSelectedNumber(selectedPhoneNumber);
    setIsSimVerificationLoading(true);
    setTimeout(() => {
      setIsSimVerificationLoading(false);
    }, 2000);
  };

  return (
    <Box marginTop={'spacing.11'}>
      <Button
        variant="primary"
        size="large"
        icon={ArrowRightIcon}
        iconPosition="right"
        onClick={handleCtaClick}>
        Open Sim Selection BottomSheet
      </Button>

      <Text textAlign="center" marginTop="spacing.4">
        Selected Phone Number: {selectedNumber}
      </Text>

      <SimSelectionBottomSheet
        isOpen={isSimSelectionBottomSheetOpen}
        isCtaLoading={isSimVerificationLoading}
        onDismiss={handleSimSelectionDismiss}
        onCtaClick={handleSimVerification}
        phoneNumbers={['+91 999 999 9999', '+61 888 888 8888']}
      />
    </Box>
  );
};

export default BottomSheetRadioIssue;
