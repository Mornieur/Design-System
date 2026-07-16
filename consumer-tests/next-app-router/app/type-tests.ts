import type {
  CardProps,
  CheckboxProps,
  SurfaceProps,
  SurfaceVariant
} from '@feitoza-ui/core';

const validVariant: SurfaceVariant = 'default';

const checkboxProps: CheckboxProps = {
  name: 'releaseNotes',
  value: 'enabled',
  defaultChecked: false,
  indeterminate: true
};

const cardProps: CardProps = {
  role: 'group'
};

const surfaceProps: SurfaceProps = {
  variant: validVariant
};

void checkboxProps;
void cardProps;
void surfaceProps;

// @ts-expect-error -- invalid Surface variant should be rejected
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
