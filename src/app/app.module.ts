import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import{AppComponent}from'./app.component';
import{UserService} from'./user.service';
import{RouterModule,Routes} from'@angular/router';
import { MarksFormComponent } from './marks-form/marks-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes:Routes=[
  {path:'',component:MarksFormComponent},
  {path:'user',component:UserDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MarksFormComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
