import{ Injectable}from'@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{
    //shared attribute
   username:string;
  //Initialize data
   constructor(public http:HttpClient){
      // this.username='Anonomous Name';
    http.get('https://jsonplaceholder.typicode.com/users/1')
    .subscribe(Response =>{
       console.log('Response: ',JSON.stringify(Response));
    });
    this.username=Response['Name'];
    console.log('service created');
    }
   //shared method
   changeUserName(username:string):void{
          this.username=username;
   }
}