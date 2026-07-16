'use client';

import type { ExampleKey } from '@/app/_content/components';
import { ButtonPrimaryActionExample } from './button/ButtonPrimaryActionExample';
import { ButtonVariantMatrixExample } from './button/ButtonVariantMatrixExample';
import { CheckboxIndeterminateSelectionExample } from './checkbox/CheckboxIndeterminateSelectionExample';
import { CheckboxNotificationPreferencesExample } from './checkbox/CheckboxNotificationPreferencesExample';
import { CardContextualActionsExample } from './card/CardContextualActionsExample';
import { CardRelatedContentExample } from './card/CardRelatedContentExample';
import { SurfaceContainmentExample } from './surface/SurfaceContainmentExample';
import { SurfaceHierarchyExample } from './surface/SurfaceHierarchyExample';

export const exampleRenderers = {
  'button-primary-action': ButtonPrimaryActionExample,
  'button-variant-matrix': ButtonVariantMatrixExample,
  'checkbox-notification-preferences': CheckboxNotificationPreferencesExample,
  'checkbox-indeterminate-selection': CheckboxIndeterminateSelectionExample,
  'surface-containment': SurfaceContainmentExample,
  'surface-hierarchy': SurfaceHierarchyExample,
  'card-related-content': CardRelatedContentExample,
  'card-contextual-actions': CardContextualActionsExample
} as const satisfies Record<ExampleKey, React.ComponentType>;
