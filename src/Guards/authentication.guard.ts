import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const name = next.queryParamMap.get('name');
    const jobTitle = next.queryParamMap.get('jobTitle');
  
    if (name && jobTitle) {
      const user = this.authService.getUserByNameAndJobTitle(name, jobTitle);
  
      if (user) {
        console.log(user);
        return true; 
      } else {
        console.log("idk")
        this.router.navigate(['/login']);
        return false; 
      }
    } else {
      console.log("missing parameters")
      return false; 
    }
  }
  
}
