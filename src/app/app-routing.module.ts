import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sharedUI/home/home.component';
import { AddTeacherComponent } from './Teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './Teacher/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './Teacher/update-teacher/update-teacher.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"" , component:HomeComponent},
  {path:"listT",component:ListTeacherComponent},
  {path:"addT",component:AddTeacherComponent},
  {path:"update/:", component:UpdateTeacherComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
