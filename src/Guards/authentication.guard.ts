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
    const password = next.queryParamMap.get('password');
   
    if (name && password) {
      const user = this.authService.getUserByNameAndJobTitle(name, password);

      if (user) {
        console.log("working finally!");
        return true;
      } else {
        console.log("idk");
        this.router.navigate(['/login']);
        return false;
      }
    } else if (name) {
      return true;
    } else {
      console.log("missing parameters");
      this.router.navigate(['/login']);
      return false;
    }
  }
}

























// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
// import { AuthenticationService } from 'src/service/authentication.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthenticationGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthenticationService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     const name = next.queryParamMap.get('name');
//     const password = next.queryParamMap.get('password');
    
//     if (name && password) {
//       const user = this.authService.getUserByNameAndJobTitle(name, password);

//       if (user) {
      
//         this.authService.authenticateUser(user);
//         console.log("its fine");
//         return true;
//       } else {
        
//         console.log("invalid credentials");
//         this.router.navigate(['/login']);
//         return false;
//       }
//     } else if (this.authService.isAuthenticated()) {
//       console.log("navbar access ");
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       console.log("missing");
//       return false;
//     }
//   }
// }
