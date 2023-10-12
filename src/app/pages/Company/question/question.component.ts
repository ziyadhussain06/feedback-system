import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
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
