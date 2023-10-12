import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
@Component({
  selector: 'app-branchnavbar',
  templateUrl: './branchnavbar.component.html',
  styleUrls: ['./branchnavbar.component.css']
})
export class BranchnavbarComponent {
  currentUser: any;
  constructor(private authService: AuthService, private router: Router) {
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser || currentUser.role !== 'branch') {
      this.router.navigate(['/']);
    }
  }
  @Input() menuId: any;
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
