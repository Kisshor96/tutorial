import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _accessService: AccessService,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  signInForm(uname, pass) {
    console.log(uname.value, pass.value)
    this._accessService.loggedUser.next(uname.value);
    this.router.navigate(['home'])
  }

}
