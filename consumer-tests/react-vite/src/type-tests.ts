import type { RefObject } from 'react';
import type {
  CardProps,
  RadioProps,
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

const cardProps: CardProps = {
  id: 'card-props-check'
};

const surfaceProps: SurfaceProps = {
  variant: validSurfaceVariant
};

const radioElementRefCheck: RefObject<HTMLInputElement | null> = { current: null };
const divElementRefCheck: RefObject<HTMLDivElement | null> = { current: null };

void radioProps;
void cardProps;
void surfaceProps;
void radioElementRefCheck;
void divElementRefCheck;

// @ts-expect-error -- invalid Surface variant should not be accepted
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
