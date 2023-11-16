// modal-panel.component.ts

import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-panel',
  templateUrl: './modal-panel.component.html',
  styleUrls: ['./modal-panel.component.css']
})
export class ModalPanelComponent {
  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';

  constructor(public modalRef: BsModalRef) {}
}
