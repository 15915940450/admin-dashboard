import { Component, OnInit,HostBinding } from '@angular/core';
import {slideInDownAnimation} from '../animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [ slideInDownAnimation ]
})
export class IndexComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
