import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-compnay-list',
  templateUrl: './compnay-list.component.html',
  styleUrls: ['./compnay-list.component.css']
})
export class CompnayListComponent {
  @ViewChild('modaal') modaal!: ElementRef;

  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  
}
