import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,  Routes} from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'todos',component:ListTodosComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule
  ],
  exports:[
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
