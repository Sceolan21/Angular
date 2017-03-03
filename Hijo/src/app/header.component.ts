import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./app.component.css']
})

export class HeaderComponent {
@Output()
hidden = new EventEmitter<boolean>();
visible = true;
click(){
this.visible = !this.visible;
this.hidden.emit(this.visible);
}
}