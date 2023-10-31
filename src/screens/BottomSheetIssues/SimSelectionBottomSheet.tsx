import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetHeader,
  Button,
  Box,
  ArrowRightIcon,
  RadioGroup,
  Radio,
} from '@razorpay/blade/components';
import {useState} from 'react';

type ValidationState = 'none' | 'success' | 'error';

interface Props {
  isOpen?: boolean;
  onDismiss: () => void;
  onCtaClick: (selectedPhoneNumber: string) => void;
  isCtaLoading?: boolean;
  phoneNumbers: Array<string>;
}

const SimSelectionBottomSheet: React.FC<Props> = ({
  isOpen = false,
  onCtaClick,
  isCtaLoading = false,
  phoneNumbers = [],
  onDismiss,
}) => {
  // FIXME: ideally it should be true by default, but the button doesn't re-render it's loading state when one radio is selected
  const [isCtaDisabled, setIsCtaDisabled] = useState(true);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<
    string | undefined
  >(undefined);
  const [simSelectionError, setSimSelectionError] = useState<
    string | undefined
  >(undefined);

  const handleSimChange = ({value}: {value: string}): void => {
    console.log('SimSelectionBottomSheet - handleSimChange -> value =', value);
    setSimSelectionError(undefined);
    setSelectedPhoneNumber(value);
    setIsCtaDisabled(false);
  };

  const handleCtaClick = (): void => {
    console.log(
      'SimSelectionBottomSheet - handleCtaClick selectedPhoneNumber',
      selectedPhoneNumber,
    );
    if (selectedPhoneNumber !== undefined && selectedPhoneNumber.length > 0) {
      setSimSelectionError(undefined);
      setIsCtaDisabled(false);
      onCtaClick(selectedPhoneNumber);
    } else {
      setSimSelectionError('Please select a SIM to verify mobile number');
      setIsCtaDisabled(true);
    }
  };

  const radioGroupValidationState: ValidationState = simSelectionError
    ? 'error'
    : 'none';

  return (
    <Box>
      <BottomSheet isOpen={isOpen} onDismiss={onDismiss}>
        <BottomSheetHeader title="Select SIM" onBackButtonClick={onDismiss} />
        <BottomSheetBody>
          <RadioGroup
            name="select-sim"
            label="Please select a SIM to verify your mobile number"
            value={selectedPhoneNumber}
            onChange={handleSimChange}
            size="medium"
            errorText={simSelectionError}
            validationState={radioGroupValidationState}>
            {phoneNumbers.map((number, index) => {
              return (
                <Radio value={number} key={`sim-${index}`}>
                  {number}
                </Radio>
              );
            })}
          </RadioGroup>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            gap="spacing.4">
            <Button
              icon={ArrowRightIcon}
              iconPosition="right"
              isLoading={isCtaLoading}
              isDisabled={isCtaDisabled}
              isFullWidth
              onClick={handleCtaClick}>
              Verify
            </Button>
            {/* FIXME: Clicking on Close button doesn't close bottomsheet, it works on web */}
            <Button onClick={onDismiss} variant="secondary" isFullWidth>
              Close
            </Button>
          </Box>
        </BottomSheetFooter>
      </BottomSheet>
    </Box>
  );
};

export default SimSelectionBottomSheet;
