import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Constants } from '../../constants';

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  portalName: string = Constants.PortalName;

  constructor() { }

  ngOnInit() {
  }

}
