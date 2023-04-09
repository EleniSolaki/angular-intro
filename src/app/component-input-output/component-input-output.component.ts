import { Component } from '@angular/core';
import { User } from '../app-interfaces';

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent {
    userData: User[]=[
    {firstname: 'John', lastname: 'Doe', age:20},
    {firstname: 'Jane', lastname: 'Smith', age:22},
    {firstname: 'Joe', lastname: 'ASmith', age:30},
    {firstname: 'Janin', lastname: 'Brown', age:99},
    {firstname: 'Alex', lastname: 'BWhite', age:30}
  ];

  receivedUser: User | undefined;

  onDeleteUser(index:number){
    console.log(index);
    this.userData.splice(index,1);
  }

  onReceivedUser(user:User){
    this.receivedUser=user
  }

}
