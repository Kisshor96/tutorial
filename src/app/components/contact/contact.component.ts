import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{

  constructor(private _accessService: AccessService) { }

  ngOnInit(): void {
    this._accessService.contactAccess.next(true);
    this._accessService.loggerAccess.next(false);
  }

  ngOnDestroy(): void {
    this._accessService.contactAccess.next(false);
    this._accessService.loggerAccess.next(true);
  }

}
