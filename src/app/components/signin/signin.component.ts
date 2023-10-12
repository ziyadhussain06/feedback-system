import { Component } from '@angular/core';
import { ToggleService } from '../../toggle.service'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  isSidebarVisible: boolean =true;

  constructor(private toggleService: ToggleService,private authService: AuthService, private router: Router) {
    this.toggleService.sidebarState$.subscribe(state => {
      this.isSidebarVisible = state;
    });
  }
  username: string = '';
  password: string='';

  signIn() {
    const user = this.authService.login(this.username, this.password);

    if (user) {
      if (user.role === 'admin') {
        this.router.navigate(['/AdminDashboard']);
      } else if (user.role === 'company') {
        this.router.navigate(['/CompanyDashboard']);
      }else if (user.role === 'branch') {
        this.router.navigate(['/BranchDashboard']);
      }

    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

}
