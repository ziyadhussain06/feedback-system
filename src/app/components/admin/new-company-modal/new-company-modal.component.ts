import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-company-modal',
  templateUrl: './new-company-modal.component.html',
  styleUrls: ['./new-company-modal.component.css']
})
export class NewCompanyModalComponent {
  // @ViewChild('modal') modaal!: ElementRef;

  // openModal() {
  //   const modalElement = this.modaal.nativeElement;
  //   modalElement.classList.add('show', 'd-block');
  // }

  // closeModal() {
  //   const modalElement = this.modaal.nativeElement;
  //   modalElement.classList.remove('show', 'd-block');
  // }
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
