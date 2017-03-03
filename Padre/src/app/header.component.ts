import {Component, Input} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./app.component.css']
})

export class HeaderComponent {
 @Input()
 private title: string;
}