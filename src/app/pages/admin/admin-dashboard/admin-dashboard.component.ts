import { ToggleService } from '../../../toggle.service';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from '../../../modal.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private toggleService: ToggleService, private authService: AuthService, private router: Router,private modalService: ModalService) { }
  @ViewChild('modaal') modaal!: ElementRef;
  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }
  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
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
}
