# Lab 2: Data Binding, Lifecycle Hooks & Component Communication

## Topics Covered
- Property Binding & Event Binding
- Two-Way Binding (`ngModel`)
- Lifecycle Hooks (`ngOnInit`, `ngOnDestroy`, `ngOnChanges`)
- `@Input` and `@Output` Decorators
- `EventEmitter`

---

## Lab Exercise Goals
1. Implement all four types of Angular data bindings.
2. Add lifecycle logging to monitor component startup and cleanup.
3. Pass values to child components using `@Input()` and notify parents of changes using `@Output()`.

---

## Step-by-Step Implementation

1. **Four Binding Types (HomeComponent):**
   - **Interpolation:** Render `portalName` using `<h1>{{ portalName }}</h1>`.
   - **Property Binding:** Disable/enable button using `[disabled]="!isPortalActive"`.
   - **Event Binding:** Handle click using `(click)="onEnrollClick()"`.
   - **Two-Way Binding:** Sync search term using `[(ngModel)]="searchTerm"` after importing `FormsModule`.

2. **Lifecycle Hooks:**
   - Implement `ngOnInit` in `HomeComponent` to load course totals and log startup diagnostics.
   - Implement `ngOnDestroy` in `HomeComponent` to log cleanup diagnostics when navigating away.
   - Implement `ngOnChanges` in `CourseCard` component to log property changes.

3. **Parent-Child Communication:**
   - Add `@Input() course` to `CourseCard` component.
   - Add `@Output() enrollRequested = new EventEmitter<number>()` to emit events back to parent `CourseList` component.
