import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnDestroy {

  constructor(private _accessService: AccessService) { }

  ngOnInit(): void {
    this._accessService.backmenuAccess.next({text:'Back to Gallary', url:'/gallery'});
    this._accessService.menuAccess.next(false);
  }

  ngOnDestroy() {
    this._accessService.backmenuAccess.next('');
    this._accessService.menuAccess.next(true);
  }

}
