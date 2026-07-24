import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { unsavedChangesGuard, HasUnsavedChanges } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {
  const executeGuard: CanDeactivateFn<HasUnsavedChanges> = (component, currentRoute, currentState, nextState) =>
      TestBed.runInInjectionContext(() => unsavedChangesGuard(component, currentRoute, currentState, nextState));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow navigation if form is clean', () => {
    const mockComponent: HasUnsavedChanges = {
      enrollForm: { dirty: false }
    };
    const result = executeGuard(mockComponent, {} as any, {} as any, {} as any);
    expect(result).toBe(true);
  });
});
