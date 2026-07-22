import type {
  CardProps,
  RadioProps,
  RadioGroupProps,
  SurfaceProps,
  SurfaceVariant
} from '@feitoza-ui/core';

const validVariant: SurfaceVariant = 'default';

const radioProps: RadioProps = {
  name: 'releaseChannel',
  value: 'email',
  defaultChecked: false,
  required: true
};

const radioGroupProps: RadioGroupProps = {
  legend: 'Release channel',
  helperText: 'Choose the channel used by this rollout.'
};

const cardProps: CardProps = {
  role: 'group'
};

const surfaceProps: SurfaceProps = {
  variant: validVariant
};

void radioProps;
void radioGroupProps;
void cardProps;
void surfaceProps;

// @ts-expect-error -- invalid Surface variant should be rejected
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
