import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 @Input() user!:User;
 @Output() e = new EventEmitter<User>();
 EnvoiVersParent(user:User){
    this.e.emit(user);
 }
}
