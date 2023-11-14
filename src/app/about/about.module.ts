import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AboutModule { }
