import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';  // Asegúrate de importar tu AppModule
import { CheckboxesComponent } from './checkboxes.component';

describe('CheckboxesComponent', () => {
  let component: CheckboxesComponent;
  let fixture: ComponentFixture<CheckboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AppModule],  // Asegúrate de incluir AppModule aquí
      declarations: [CheckboxesComponent],
    });

    fixture = TestBed.createComponent(CheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
