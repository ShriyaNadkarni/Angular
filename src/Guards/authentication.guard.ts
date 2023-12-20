// authentication.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/service/authentication.service';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toaster : ToastrService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.getAuthenticatedUser();

    if (user) {
      // User is authenticated, allow access
      this.authService.setIsAuthenticated(true);
      this.authService.setIsAdmin(user.isAdmin || false); 
      return true;
    } else {
      // User not authenticated, redirect to login
      this.toaster.error("user not authenticated!!");
      // console.log("User not authenticated, redirecting to login");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
