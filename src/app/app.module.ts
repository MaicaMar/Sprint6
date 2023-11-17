import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { PanelComponent } from './panel/panel.component';
import { BudgetService } from './budget.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalPanelComponent } from './panel/modal-panel/modal-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxesComponent,
    PanelComponent,
    ModalPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  exports: [CheckboxesComponent, PanelComponent, ModalPanelComponent],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
