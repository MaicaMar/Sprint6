// checkboxes.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
  optionsForm: FormGroup;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    // Inicializar el formulario con los controles correspondientes a los servicios
    this.optionsForm = this.fb.group({
      seo: false,
      ads: false,
      web: false,
      numPages: new FormControl(1), // Puedes ajustar este valor inicial según tus necesidades
      numIdiomas: new FormControl(1),
      totalBudget: 0  // Asegúrate de tener este campo en tu formulario
    });
  }

  // Método para calcular el presupuesto total
  calculateTotalBudget() {
    let totalBudget = 0;

    if (this.optionsForm.get('seo')!.value) {
      totalBudget += 300;
    }
    if (this.optionsForm.get('ads')!.value) {
      totalBudget += 400;
    }
    if (this.optionsForm.get('web')!.value) {
      totalBudget += this.budgetService.calculateTotalCost(
        this.optionsForm.get('numPages')!.value,
        this.optionsForm.get('numIdiomas')!.value
      );
    }

    this.optionsForm.get('totalBudget')!.setValue(totalBudget);
    console.log(`Total Presupuesto en CheckboxesComponent: ${totalBudget}`);
  }


  incrementPages() {
    const currentNumPages = this.optionsForm.get('numPages')!.value;
    this.optionsForm.get('numPages')!.setValue(currentNumPages + 1);
    this.calculateTotalBudget();
  }

  decrementPages() {
    const currentNumPages = this.optionsForm.get('numPages')!.value;
    console.log(`Número de páginas actual: ${currentNumPages}`);

    if (currentNumPages > 1) {
      this.optionsForm.get('numPages')!.setValue(currentNumPages - 1);
      console.log(`Después de restar número de páginas: ${currentNumPages - 1}`);
      this.calculateTotalBudget();
    }
  }

  incrementLanguages() {
    const currentNumLanguages = this.optionsForm.get('numIdiomas')!.value;
    this.optionsForm.get('numIdiomas')!.setValue(currentNumLanguages + 1);
    this.calculateTotalBudget();
  }

  decrementLanguages() {
    const currentNumLanguages = this.optionsForm.get('numIdiomas')!.value;
    console.log(`Número de idiomas actual: ${currentNumLanguages}`);

    if (currentNumLanguages > 1) {
      this.optionsForm.get('numIdiomas')!.setValue(currentNumLanguages - 1);
      console.log(`Después de restar número de idiomas: ${currentNumLanguages - 1}`);
      this.calculateTotalBudget();
    }
  }


  onPagesChange(newPages: number) {
    this.optionsForm.get('numPages')!.setValue(newPages);
    this.calculateTotalBudget();
  }

  onLanguagesChange(newLanguages: number){
    this.optionsForm.get('numIdiomas')!.setValue(newLanguages);
    this.calculateTotalBudget();
  }
}

