import { Component, computed, input } from '@angular/core';

const BOOTSTRAP_COLORS = [
  'primary', 'secondary', 'success', 'danger',
  'warning', 'info', 'light', 'dark',
];

@Component({
  selector: 'app-custom-progress-bar',
  standalone: true,
  templateUrl: './custom-progress-bar.component.html',
})
export class CustomProgressBarComponent {
  // --- Inputs obligatorios del ejercicio ---
  /** Valor de la barra (0-100). Se limita al rango válido. */
  value = input(0, {
    transform: (v: number | string) => Math.min(100, Math.max(0, Number(v) || 0)),
  });

  /** Color: nombre Bootstrap (success, danger...) o cualquier color CSS (#ff9800, teal...). */
  color = input<string>('primary');

  // --- AMPLIACIÓN ---
  /** Muestra el estilo rayado (progress-bar-striped). */
  striped = input(false);
  /** Anima las rayas (progress-bar-animated). Requiere striped. */
  animated = input(false);
  /** Muestra el porcentaje como texto dentro de la barra. */
  showLabel = input(false);
  /** Altura de la barra en píxeles. */
  height = input(16);

  /** ¿El color es uno de los contextuales de Bootstrap? */
  private isBootstrapColor = computed(() => BOOTSTRAP_COLORS.includes(this.color()));

  /** Clases CSS dinámicas del .progress-bar */
  barClasses = computed(() => ({
    [`bg-${this.color()}`]: this.isBootstrapColor(),
    'progress-bar-striped': this.striped() || this.animated(),
    'progress-bar-animated': this.animated(),
  }));

  /** Si no es color Bootstrap, se aplica como background-color inline. */
  customColor = computed(() => (this.isBootstrapColor() ? null : this.color()));
}
