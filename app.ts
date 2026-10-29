import { Component, signal } from '@angular/core';
import { CustomProgressBarComponent } from './custom-progress-bar/custom-progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [CustomProgressBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('BarraDeProgresoRaul');

  // Valor dinámico para demostrar que el input reacciona a cambios
  protected readonly valor = signal(50);

  protected cambiar(delta: number): void {
    this.valor.update((v) => Math.min(100, Math.max(0, v + delta)));
  }
}
