// panel.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BudgetService } from '../budget.service';  // Asegúrate de que la ruta sea correcta
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPanelComponent } from './modal-panel/modal-panel.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  @Input() pagesNumber: number = 1;
  @Input() languagesNumber: number = 1;
  @Output() pagesChange = new EventEmitter<number>();
  @Output() languagesChange = new EventEmitter<number>();
  @Output() totalBudgetChange = new EventEmitter<number>();

  modalRef: BsModalRef | undefined;

  constructor(private budgetService: BudgetService, private modalService: BsModalService) {}

  openModal(title: string, content: string) {
    const initialState = {title, content};
    this.modalRef = this.modalService.show(ModalPanelComponent, { initialState } );
  }

  openPagesModal() {
    this.openModal('Número de pàgines', 'Afegeix les pàgines que tindrà el teu projecte. El cost de cada pàgina és de 30€');
  }

  openLanguagesModal() {
    this.openModal('Número de llenguatges', 'Afegeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€');
  }

  incrementPages() {
    this.pagesNumber++;
    this.pagesChange.emit(this.pagesNumber);
    this.calculateTotalBudget();
  }

  decrementPages() {
    if (this.pagesNumber > 1) {
      this.pagesNumber--;
      this.pagesChange.emit(this.pagesNumber);
      this.calculateTotalBudget();
    }
  }

  incrementLanguages() {
    this.languagesNumber++;
    this.languagesChange.emit(this.languagesNumber);
    this.calculateTotalBudget();
  }

  decrementLanguages() {
    if (this.languagesNumber > 1) {
      this.languagesNumber--;
      this.languagesChange.emit(this.languagesNumber);
      this.calculateTotalBudget();
    }
  }

  calculateTotalBudget() {
    const totalBudget = this.budgetService.calculateTotalCost(
      this.pagesNumber,
      this.languagesNumber
    );
    this.totalBudgetChange.emit(totalBudget);
    console.log(`Total Budget: ${totalBudget}`);
  }
}
