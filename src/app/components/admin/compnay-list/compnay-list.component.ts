import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService} from 'src/app/auth.service';
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
  companies: any[] | undefined;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.authservice.getAllCompanies().subscribe(
    
      data => {
    
        this.companies = data;
        console.log(this.companies)
      },
      // error => {
      //   console.error('Error fetching companies:', error);
      // }
    );
  }
}
