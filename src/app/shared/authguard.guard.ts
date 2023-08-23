import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { AuthguardService } from "./authguard.service";

  
@Injectable({
  providedIn: 'root' // ADDED providedIn root here.
})
export class authguardGuard implements CanActivate {
    constructor(
        private authService: AuthguardService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
  
        if (this.authService.isLoggedIn()) {
            return true;
        }

          this.router.navigate(['/patientlogin']);
          return false;
        
        
    }
}