import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';


describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent],
      providers: [BsModalService, Renderer2],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
