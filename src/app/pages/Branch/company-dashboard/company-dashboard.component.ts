import { ToggleService } from '../../../toggle.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from 'src/app/modal.service';
@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {
  constructor(private toggleService: ToggleService,private authService: AuthService, private router: Router,private modalService: ModalService) {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser || currentUser.role !== 'branch') {
      this.router.navigate(['/']);
    }
  }

  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }
  
  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
