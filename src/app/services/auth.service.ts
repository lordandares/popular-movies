import { Injectable } from '@angular/core';
import {  of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() { }

    authObj = { authenticated: false }

    isAuthenticated() {
        if(localStorage.getItem('session') === 'true'){
          this.authObj.authenticated = true;
          return  of(this.authObj);
        }
        return  of(this.authObj);
    }
}
