import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionstorgeService {

  constructor() { }
  getSession(key) {
      sessionStorage.getItem(key);
  }

  setSession(key, value) {
      sessionStorage.setItem(key, value);
  }

  removeSession(key) {
      sessionStorage.removeItem(key);
  }
  clearAllSession(){
    sessionStorage.clear();
  }
}
