import { ToggleService } from '../../../toggle.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from 'src/app/modal.service';
@Component({
  selector: 'app-branch-dashboard',
  templateUrl: './branch-dashboard.component.html',
  styleUrls: ['./branch-dashboard.component.css']
})
export class BranchDashboardComponent {
 
  constructor(private toggleService: ToggleService,private authService: AuthService, private router: Router,private modalService: ModalService) {
    // const currentUser = this.authService.getCurrentUser();

    // if (!currentUser || currentUser.role !== 'company') {
    //   this.router.navigate(['/']);
    // }
  }

  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }
  
  // signOut() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
//Add company Modal
openModal() {
  this.modalService.openModal();
}

closeModal() {
  this.modalService.closeModal();
}

isModalOpen() {
  return this.modalService.getIsOpen();
}
// Analysis: any[] | undefined;
// ngOnInit() {
//   const companyID = localStorage.getItem('companyId');
//     if(companyID){
//     this.authService.getAllreviewanalysis(companyID ).subscribe(
//       data => {
//         this.Analysis = data;
//         console.log(this.Analysis)
//       },
//       error => {
//         console.error('Error fetching analysis:', error);
//       }
//     );
//   }
// }
  
}

