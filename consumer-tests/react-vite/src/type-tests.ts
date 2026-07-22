import type { RefObject } from 'react';
import type {
  CardProps,
  RadioProps,
  RadioGroupProps,
  SurfaceProps,
  SurfaceVariant
} from '@feitoza-ui/core';

const validSurfaceVariant: SurfaceVariant = 'default';

const radioProps: RadioProps = {
  name: 'releaseChannel',
  value: 'email',
  defaultChecked: true,
  required: true
};

const radioGroupProps: RadioGroupProps = {
  legend: 'Release channel',
  helperText: 'Choose the delivery channel for the rollout.'
};

const cardProps: CardProps = {
  id: 'card-props-check'
};

const surfaceProps: SurfaceProps = {
  variant: validSurfaceVariant
};

const radioElementRefCheck: RefObject<HTMLInputElement | null> = { current: null };
const fieldsetElementRefCheck: RefObject<HTMLFieldSetElement | null> = { current: null };
const divElementRefCheck: RefObject<HTMLDivElement | null> = { current: null };

void radioProps;
void radioGroupProps;
void cardProps;
void surfaceProps;
void radioElementRefCheck;
void fieldsetElementRefCheck;
void divElementRefCheck;

// @ts-expect-error -- invalid Surface variant should not be accepted
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
