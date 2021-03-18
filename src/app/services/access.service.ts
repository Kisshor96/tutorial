import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() { }

  menuAccess = new BehaviorSubject<any>(true);
  contactAccess = new BehaviorSubject<any>(false);
  loggerAccess = new BehaviorSubject<any>(true);
  loggedUser = new BehaviorSubject<any>('');
  backmenuAccess = new BehaviorSubject<any>({text:'', url:''});
}
