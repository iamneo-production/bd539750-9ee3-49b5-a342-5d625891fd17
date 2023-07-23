import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private role$ = new BehaviorSubject<string>('');
  private nameid$ = new BehaviorSubject<any>('');

  constructor() { }

  public getRoleFromStore() {
    return this.role$.asObservable();
  }

  public setRoleForStore(role: string) {
    this.role$.next(role);
  }

  public getIdFromStore() {
    return this.nameid$.asObservable();
  }

  public setIdForStore(nameid: any) {
    this.nameid$.next(nameid);
  }
}