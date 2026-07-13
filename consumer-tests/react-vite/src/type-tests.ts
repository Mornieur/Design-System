import type { RefObject } from 'react';
import type {
  ButtonProps,
  CardProps,
  SurfaceProps,
  SurfaceVariant
} from '@feitoza-ui/core';

const validSurfaceVariant: SurfaceVariant = 'default';

const buttonProps: ButtonProps = {
  type: 'button',
  disabled: false
};

const cardProps: CardProps = {
  id: 'card-props-check'
};

const surfaceProps: SurfaceProps = {
  variant: validSurfaceVariant
};

const buttonElementRefCheck: RefObject<HTMLButtonElement | null> = { current: null };
const divElementRefCheck: RefObject<HTMLDivElement | null> = { current: null };

void buttonProps;
void cardProps;
void surfaceProps;
void buttonElementRefCheck;
void divElementRefCheck;

// @ts-expect-error -- invalid Surface variant should not be accepted
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
