import React, {useState, useEffect} from 'react';
import SimSelectionBottomSheet from './SimSelectionBottomSheet';
import {ArrowRightIcon, Button, Text, Box} from '@razorpay/blade/components';

const BottomSheetRadioIssue = () => {
  // FIXME: passing default value true here doesn't work on RN
  const [isSimSelectionBottomSheetOpen, setIsSimSelectionBottomSheetOpen] =
    useState(false);
  const [isSimVerificationLoading, setIsSimVerificationLoading] =
    useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  // useEffect(() => {
  // FIXME: setting this as true on render also doesn't work to let it open on navigation
  // setIsSimSelectionBottomSheetOpen(true);
  // FIXME: This works on RN to open the bottomsheet by default after navigating to a screen.
  // setTimeout(() => {
  //   setIsSimSelectionBottomSheetOpen(true);
  // }, 1000);
  // }, []);

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
    // FIXME: `selectedPhoneNumber` is undefined here, works fine on web
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

      {/* FIXME: selectedNumber is undefined here, works on web */}
      <Text textAlign="center" marginTop="spacing.4">
        Selected Phone Number: {selectedNumber}
      </Text>

      {/* FIXME: If I pass isOpen={true} to open it on mount/navigation, it doesn't work. Works fine on web. */}
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
