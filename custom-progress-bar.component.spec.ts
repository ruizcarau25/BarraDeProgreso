import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomProgressBarComponent } from './custom-progress-bar.component';

describe('CustomProgressBarComponent', () => {
  let fixture: ComponentFixture<CustomProgressBarComponent>;
  const bar = () => fixture.nativeElement.querySelector('.progress-bar') as HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CustomProgressBarComponent] }).compileComponents();
    fixture = TestBed.createComponent(CustomProgressBarComponent);
  });

  it('aplica el valor como ancho', () => {
    fixture.componentRef.setInput('value', 40);
    fixture.detectChanges();
    expect(bar().style.width).toBe('40%');
  });

  it('limita el valor entre 0 y 100', () => {
    fixture.componentRef.setInput('value', 150);
    fixture.detectChanges();
    expect(bar().style.width).toBe('100%');
  });

  it('usa clase bg-* con colores Bootstrap', () => {
    fixture.componentRef.setInput('color', 'success');
    fixture.detectChanges();
    expect(bar().classList).toContain('bg-success');
  });

  it('usa background-color inline con colores CSS', () => {
    fixture.componentRef.setInput('color', '#ff9800');
    fixture.detectChanges();
    expect(bar().style.backgroundColor).toBe('rgb(255, 152, 0)');
  });

  it('aplica striped y label', () => {
    fixture.componentRef.setInput('striped', true);
    fixture.componentRef.setInput('showLabel', true);
    fixture.componentRef.setInput('value', 30);
    fixture.detectChanges();
    expect(bar().classList).toContain('progress-bar-striped');
    expect(bar().textContent?.trim()).toBe('30%');
  });
});
