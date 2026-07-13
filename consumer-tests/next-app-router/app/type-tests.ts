import type {
  ButtonProps,
  CardProps,
  SurfaceProps,
  SurfaceVariant
} from '@feitoza-ui/core';

const validVariant: SurfaceVariant = 'default';

const buttonProps: ButtonProps = {
  type: 'button',
  children: 'Action'
};

const cardProps: CardProps = {
  role: 'group'
};

const surfaceProps: SurfaceProps = {
  variant: validVariant
};

void buttonProps;
void cardProps;
void surfaceProps;

// @ts-expect-error -- invalid Surface variant should be rejected
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
