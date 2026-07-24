import { CanDeactivateFn } from '@angular/router';

export interface HasUnsavedChanges {
  enrollForm?: {
    dirty: boolean;
  };
  submitted?: boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component, currentRoute, currentState, nextState) => {

  if (component.submitted) {
    return true;
  }

  if (component.enrollForm?.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
