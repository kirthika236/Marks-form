import{ Injectable}from'@angular/core';

@Injectable()
export class UserService{
    //shared attribute
   username:string;
  //Initialize data
   constructor(){
       this.username='Kirthika';
   }
   //shared method
   changeUserName(username:string):void{
          this.username=username;
   }
}