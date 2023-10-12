import { Component , EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-new-branchmodal',
  templateUrl: './new-branchmodal.component.html',
  styleUrls: ['./new-branchmodal.component.css']
})
export class NewBranchmodalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
