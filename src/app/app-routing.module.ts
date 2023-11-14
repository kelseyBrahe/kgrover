import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  // {path: 'about', component: AboutComponent},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)}
  // {path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
