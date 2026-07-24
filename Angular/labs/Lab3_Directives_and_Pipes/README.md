# Lab 3: Directives & Pipes — Built-in and Custom

## Topics Covered
- Structural Directives (`*ngIf`, `*ngFor` with `trackBy`, `*ngSwitch`)
- Attribute Directives (`ngClass`, `ngStyle`)
- Custom Attribute Directives (`@HostListener` integration)
- Custom Pipes (`PipeTransform` integration)

---

## Lab Exercise Goals
1. Render list items conditionally and loop through entries.
2. Apply styles conditionally based on component states.
3. Create a custom hover highlight directive and a credit-label pipe.

---

## Step-by-Step Implementation

1. **Structural Directives:**
   - Use `*ngIf` to toggle loading banners.
   - Use `*ngFor` with `trackBy` to loop through course lists efficiently.
   - Use `*ngSwitch` to display passed/failed/pending badges on course cards.

2. **Attribute Directives:**
   - Apply `[ngClass]` getter object dynamically to attach `card--enrolled` or `card--full`.
   - Apply `[ngStyle]` to color left borders according to grade status.

3. **Custom Directives:**
   - Create `HighlightDirective` configured with `@Input() appHighlight` and mouse hover listeners to change background colors.

4. **Custom Pipes:**
   - Create `CreditLabelPipe` to format number inputs into human-readable strings like '3 Credits', returning 'No Credits' for zero/null.
