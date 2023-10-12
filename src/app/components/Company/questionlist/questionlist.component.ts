import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent {
  @ViewChild('modal') modal!: ElementRef;

  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
}
