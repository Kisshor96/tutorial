import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {

  constructor(private _accessService: AccessService) { }

  ngOnInit(): void {
    this._accessService.backmenuAccess.next({text:'Back to Product', url:'/products'});
    this._accessService.menuAccess.next(false);
  }

  ngOnDestroy() {
    this._accessService.backmenuAccess.next('');
    this._accessService.menuAccess.next(true);
  }

}
