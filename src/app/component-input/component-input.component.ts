import { Component } from '@angular/core';
import{orderBy}from 'lodash-es';

export interface User{
  firstname:string;
  lastname:string;
  age:number;
}


@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css']
})
export class ComponentInputComponent {
    userData: User[]=[
    {firstname: 'John', lastname: 'Doe', age:20},
    {firstname: 'Jane', lastname: 'Smith', age:22},
    {firstname: 'Joe', lastname: 'ASmith', age:30},
    {firstname: 'Janin', lastname: 'Brown', age:99},
    {firstname: 'Alex', lastname: 'BWhite', age:30}
  ]

  sortByAgeDesc(){
    this.userData = orderBy(this.userData, ['age'],['desc']);
  }

    sortByAgeAsc(){
    this.userData = orderBy(this.userData, ['age'],['asc']);
  }

  sortByAgeDescLastDesc(){
    this.userData = orderBy(this.userData, ['age', 'lastname'],['desc','desc']);
  }
  
  init(){
    this.userData =[
    {firstname: 'John', lastname: 'Doe', age:20},
    {firstname: 'Jane', lastname: 'Smith', age:22},
    {firstname: 'Joe', lastname: 'ASmith', age:30},
    {firstname: 'Janin', lastname: 'Brown', age:99},
    {firstname: 'Alex', lastname: 'BWhite', age:30}
  ]
  }

}
