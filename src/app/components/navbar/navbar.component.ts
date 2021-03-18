import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _accessService: AccessService,
              private router: Router ) { }

  ngOnInit(): void {
    this._accessService.backmenuAccess.subscribe(res => { this.backmenuAccess = res });
    this._accessService.menuAccess.subscribe(res => { this.menuAccess = res });
    this._accessService.loggerAccess.subscribe(res => { this.loggerAccess = res });
    this._accessService.contactAccess.subscribe(res => { this.contactAccess = res });
    this._accessService.loggedUser.subscribe(res => { this.loggedUser = res })
  }

  backmenuAccess;
  menuAccess: boolean = true;
  loggerAccess: boolean = true;
  contactAccess: boolean= false;
  loggedUser;

  logout() {
    this._accessService.loggedUser.next(false)
    this.router.navigate(['login']);
  }

}
