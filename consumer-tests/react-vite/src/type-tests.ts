import type { RefObject } from 'react';
import type {
  CardProps,
  CheckboxProps,
  SurfaceProps,
  SurfaceVariant
} from '@feitoza-ui/core';

const validSurfaceVariant: SurfaceVariant = 'default';

const checkboxProps: CheckboxProps = {
  name: 'releaseNotes',
  value: 'weekly',
  defaultChecked: true,
  indeterminate: false
};

const cardProps: CardProps = {
  id: 'card-props-check'
};

const surfaceProps: SurfaceProps = {
  variant: validSurfaceVariant
};

const checkboxElementRefCheck: RefObject<HTMLInputElement | null> = { current: null };
const divElementRefCheck: RefObject<HTMLDivElement | null> = { current: null };

void checkboxProps;
void cardProps;
void surfaceProps;
void checkboxElementRefCheck;
void divElementRefCheck;

// @ts-expect-error -- invalid Surface variant should not be accepted
const invalidVariant: SurfaceVariant = 'elevated';

void invalidVariant;
