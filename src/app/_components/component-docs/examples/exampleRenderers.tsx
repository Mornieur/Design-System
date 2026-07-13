'use client';

import { lazy } from 'react';
import type { ExampleKey } from '@/app/_content/components';

export const exampleRenderers = {
  'button-primary-action': lazy(() =>
    import('./button/ButtonPrimaryActionExample').then((module) => ({
      default: module.ButtonPrimaryActionExample
    }))
  ),
  'button-variant-matrix': lazy(() =>
    import('./button/ButtonVariantMatrixExample').then((module) => ({
      default: module.ButtonVariantMatrixExample
    }))
  ),
  'surface-containment': lazy(() =>
    import('./surface/SurfaceContainmentExample').then((module) => ({
      default: module.SurfaceContainmentExample
    }))
  ),
  'surface-hierarchy': lazy(() =>
    import('./surface/SurfaceHierarchyExample').then((module) => ({
      default: module.SurfaceHierarchyExample
    }))
  ),
  'card-related-content': lazy(() =>
    import('./card/CardRelatedContentExample').then((module) => ({
      default: module.CardRelatedContentExample
    }))
  ),
  'card-contextual-actions': lazy(() =>
    import('./card/CardContextualActionsExample').then((module) => ({
      default: module.CardContextualActionsExample
    }))
  )
} as const satisfies Record<ExampleKey, React.ComponentType>;
