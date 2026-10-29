# BarraDeProgresoRaul

Proyecto Angular 21 (standalone) con Bootstrap 5.3 que incluye `CustomProgressBarComponent`.

## Arrancar
    npm install
    npm start        # http://localhost:4200
    npm test         # tests unitarios

(Si `npm install` diera error de peer dependencies: `npm install --legacy-peer-deps`)

## Componente: src/app/custom-progress-bar/
| Input     | Tipo    | Defecto   | Descripción                                  |
|-----------|---------|-----------|----------------------------------------------|
| value     | number  | 0         | Valor 0-100 (se limita al rango)             |
| color     | string  | 'primary' | Color Bootstrap (success...) o color CSS     |
| striped   | boolean | false     | Estilo rayado                                |
| animated  | boolean | false     | Rayas animadas                               |
| showLabel | boolean | false     | Muestra el % dentro de la barra              |
| height    | number  | 16        | Altura en px                                 |

Ejemplo:
    <app-custom-progress-bar [value]="75" color="success" [striped]="true" [showLabel]="true" />
