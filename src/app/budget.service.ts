// budget.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  calculateTotalCost(pages: number, languages: number): number {
    const costPerPage = 30;
    const baseCost = 500;  // Costo base de la página web

    let totalCost = baseCost;

    // Calcula el costo adicional por página solo si se ha utilizado
    if (pages > 1) {
      totalCost += (pages - 1) * costPerPage;
    }

    // Calcula el costo adicional por idioma solo si se ha utilizado
    if (languages > 1) {
      totalCost += (languages - 1) * costPerPage;
    }

    console.log(`Calculating Total Cost: Pages - ${pages}, Languages - ${languages}, Total Cost - ${totalCost}`);
    return totalCost;
  }


}
