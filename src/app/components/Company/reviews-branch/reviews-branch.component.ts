import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-reviews-branch',
  templateUrl: './reviews-branch.component.html',
  styleUrls: ['./reviews-branch.component.css']
})
export class ReviewsBranchComponent {
  @ViewChild('modaaal') modaaal!: ElementRef;

  openModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
}
