import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-reviews-branch',
  templateUrl: './reviews-branch.component.html',
  styleUrls: ['./reviews-branch.component.css']
})
export class ReviewsBranchComponent implements OnInit {
  @ViewChild('modaaal') modaaal!: ElementRef;

  openModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  branchreview: any[] | undefined;
  constructor(private authservice: AuthService) {}
  branchId!:any ;

  ngOnInit() {
    if(localStorage.getItem('branchId')){
      this.branchId = localStorage.getItem('branchId');
    }
    this.authservice.getAllbranchreview(this.branchId).subscribe(
      data => {
        this.branchreview = data;
        console.log(data)
      },
      error => {
        console.error('Error fetching branchreview:', error);
      }
    );
  }
}
