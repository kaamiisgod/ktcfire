# Design System Documentation: The Precision Engineering Framework

## 1. Overview & Creative North Star
**Creative North Star: The Technical Architect**

This design system moves beyond the "corporate template" to embody the precision, safety, and authoritative clarity required in fire protection engineering. Our aesthetic is **"High-Trust Structuralism"**—a style that favors intentional asymmetry, generous editorial whitespace, and sophisticated layering over rigid grids and standard borders. 

We don't just display information; we curate it with engineering-grade intent. By utilizing high-contrast typography scales and overlapping surface planes, we create an experience that feels as meticulously planned as a fire safety blueprint.

---

## 2. Colors: Tonal Architecture
The palette is rooted in the engineering heritage of Teal and Deep Blue, but executed through a modern Material 3-inspired tonal logic.

### Palette Strategy
- **Primary (`#006565`)**: Used for high-priority actions and structural accents.
- **Secondary (`#5355aa`)**: Our "Safety Deep Blue," providing a grounded, authoritative contrast to the vibrant Teal.
- **Surface Tiers**: We use a range of surfaces (`surface-container-lowest` to `highest`) to define hierarchy without relying on lines.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containment. Boundaries are defined strictly through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. The change in tone is the boundary.

### The "Glass & Gradient" Rule
To elevate the "out-of-the-box" feel, use **Glassmorphism** for floating elements (navbars, modals) using `surface` colors at 80% opacity with a `20px` backdrop-blur. 
- **Signature Texture:** Apply a subtle linear gradient from `primary` (#006565) to `primary_container` (#008080) at a 135-degree angle for Hero CTAs. This adds a "soul" to the interface that flat colors cannot achieve.

---

## 3. Typography: The Editorial Authority
We utilize a dual-font system to balance technical precision with modern accessibility.

| Role | Font Family | Character | Usage |
| :--- | :--- | :--- | :--- |
| **Display** | Manrope | Bold, Geometric | Hero sections, high-impact statements. |
| **Headline** | Manrope | Authoritative | Page section headers. |
| **Title** | Inter | Functional | Component headers, card titles. |
| **Body** | Inter | Highly Readable | All long-form technical content. |
| **Label** | Inter | Technical | Captions, metadata, overlines. |

**Hierarchy Note:** Use `display-lg` (3.5rem) sparingly to create "Editorial Moments" where the typography itself becomes a visual element, breaking the horizontal flow of the page.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is a matter of physics and light, not just "shadows."

### The Layering Principle
Achieve depth by stacking surface tiers. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural "lift." 
- **Physicality:** Treat the UI as stacked sheets of fine, semi-translucent technical paper.

### Ambient Shadows
When a floating effect is required (e.g., a critical Alert or Navigation):
- **Spec:** `0px 12px 32px rgba(0, 40, 40, 0.08)`
- **Rule:** Shadows must never be pure grey. They are always tinted with the `on-surface` or `primary` hue to mimic natural ambient light.

### The "Ghost Border" Fallback
If accessibility requires a container definition (e.g., Input Fields), use a **Ghost Border**:
- **Spec:** `outline-variant` token at **15% opacity**. 100% opaque borders are strictly forbidden as they clutter the technical aesthetic.

---

## 5. Components: Precision Primitives

### Buttons: The Action Pillars
- **Primary:** Gradient-filled (`primary` to `primary_container`), `lg` (0.5rem) roundedness. No border.
- **Secondary:** Surface-tinted with a Ghost Border.
- **Tertiary:** Text-only in `primary` weight, using `label-md` for a technical feel.

### Cards & Information Modules
- **Rule:** No divider lines. Use `spacing-8` (2rem) or `spacing-12` (3rem) to separate content sections within a card.
- **Background:** Always use a shift in surface tier (e.g., `surface-container-highest` for a header area within a `surface-container-low` card).

### Technical Input Fields
- **Style:** Understated. Use `surface-container-high` for the field background.
- **Focus State:** Transition to a `2px` bottom-bar in `primary`. Do not "outline" the whole box on focus; it breaks the vertical flow.

### Engineering Progress Steppers
- Use `tertiary_fixed` for completed safety steps to provide a distinct visual "all-clear" signal that differs from the primary branding.

---

## 6. Do’s and Don'ts

### Do:
- **Use Asymmetric Layouts:** Shift a headline 2 units to the left of the body copy to create a sophisticated, engineered look.
- **Embrace Whitespace:** Treat whitespace as a structural component, like the "clear zone" in a fire safety plan.
- **Use "Display" Scales:** Use massive typography for numbers (e.g., "99% Reliability") to anchor the page.

### Don't:
- **Don't Use Dividers:** Never use a horizontal rule `<hr>` to separate content. Use a `surface` color shift.
- **Don't Use Default Shadows:** Avoid "drop shadow" presets in design tools. Always use the Ambient Shadow spec.
- **Don't Use Sharp Corners:** While we are technical, we are human-centric. Stick to the `md` (0.375rem) and `lg` (0.5rem) roundedness scale to keep the interface approachable.
- **Don't Overcrowd:** If a screen feels "busy," increase the `spacing` tokens rather than adding borders to "organize" it. Let the hierarchy breathe.

---

## 7. Spacing & Grid
We utilize a 4px-base increment system. 
- **Standard Padding:** `spacing-6` (1.5rem)
- **Section Gaps:** `spacing-20` (5rem) or `spacing-24` (6rem)
- **Logic:** The larger the gap, the more "Premium" and "Planned" the engineering consultancy feels. Narrow gaps feel "standard"; wide gaps feel "bespoke."