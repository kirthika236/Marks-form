import{UserService} from'./user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  m1:number;
  m2:number;
  m3:number;
  result:number;
  newUserName:string;

  typesOfResult=['poor','Average','Good',"Excellent"]
  currentDate=new Date();

  constructor(public userService:UserService){
     
  }

    sum(){
      this.result=(this.m1 ? this.m1:0) +
                  (this.m2 ? this.m2:0) +
                  (this.m3 ? this.m3:0)
      this.userService.changeUserName(this.newUserName);
                }
}
