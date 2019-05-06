import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AuthService } from './login/auth.service';

import { FormsModule }   from '@angular/forms';//формы
import { HttpClientModule } from '@angular/common/http';
import { SilkiComponent } from './silki/silki.component';
import { TestComponent } from './test/test.component';
import { NewsContentComponent } from './content/news-content/news-content.component';
import { RegistratorComponent } from './registrator/registrator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';//get запросы

const appRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registrator',component:RegistratorComponent},
  {path:'1',component:NewsContentComponent},
  {path:'content/:category',component:ContentComponent},
  {path:'silki',component:SilkiComponent},
  {path:'test/:id/:category',component:TestComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    SilkiComponent,
    TestComponent,
    NewsContentComponent,
    RegistratorComponent,
    LoginComponent,
    ProfileComponent,
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
