import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;


  constructor() {
  }

  setUser(user: any): void {
    this.user = user;
  }

  isUserLoggedIn(): boolean {
    return this.user != null;
  }
}
