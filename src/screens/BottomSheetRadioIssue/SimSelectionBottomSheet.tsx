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
  const [isCtaDisabled, setIsCtaDisabled] = useState(false); // TODO: check why true value is not working, ideally it should be true
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<
    string | undefined
  >(undefined);
  const [simSelectionError, setSimSelectionError] = useState<
    string | undefined
  >(undefined);

  console.log('SimSelectionBottomSheet', {
    selectedPhoneNumber,
    simSelectionError,
    isCtaDisabled,
  });

  // useEffect(() => {
  //   if (selectedPhoneNumber !== undefined && selectedPhoneNumber.length > 0) {
  //     setSimSelectionError(undefined);
  //     setIsCtaDisabled(false);
  //   }
  // }, [selectedPhoneNumber]);

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
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Button
              icon={ArrowRightIcon}
              iconPosition="right"
              isLoading={isCtaLoading}
              isDisabled={isCtaDisabled}
              isFullWidth
              onClick={handleCtaClick}>
              Verify
            </Button>
          </Box>
        </BottomSheetFooter>
      </BottomSheet>
    </Box>
  );
};

export default SimSelectionBottomSheet;
