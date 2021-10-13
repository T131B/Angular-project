import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent  {
  allData: [];

  constructor( private service : ApifunctionsService , private router : Router) {
    this.service.getTeacher().subscribe((data: any) => {
       this.allData = data

    })
   }
   remove(id){
     this.service.delete(id).subscribe(data=>{
      //  this.router.navigateByUrl('/listT');
      window.location.reload();
     })

   }

  

}
