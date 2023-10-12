import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from '../../../modal.service';
@Component({
  selector: 'app-branchsidenav',
  templateUrl: './branchsidenav.component.html',
  styleUrls: ['./branchsidenav.component.css']
})
export class BranchsidenavComponent {
  constructor(private authService: AuthService, private router: Router,private modalService: ModalService) {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser || currentUser.role !== 'company') {
      this.router.navigate(['/']);
    }
  }
  @Input() menuId: any;
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
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
}
