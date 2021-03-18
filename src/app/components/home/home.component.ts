import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private _accessService: AccessService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
