import { AutenticacaoModule } from './../autenticacao/autenticacao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, FormsModule, HomeRoutingModule, AutenticacaoModule],
  exports: [HomeComponent],
})
export class HomeModule {}
