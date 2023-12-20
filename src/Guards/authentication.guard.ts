// authentication.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.authService.getAuthenticatedUser();

    if (user) {
      // User is authenticated, allow access
      this.authService.setIsAuthenticated(true);
      this.authService.setIsAdmin(user.isAdmin || false); // Ensure isAdmin is set correctly
      return true;
    } else {
      // User not authenticated, redirect to login
      console.log("User not authenticated, redirecting to login");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
