import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule.forChild(routes),
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    FlexLayoutModule,
    NzCardModule
  ]
})
export class LoginModule { }
