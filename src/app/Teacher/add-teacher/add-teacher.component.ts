import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  invalidMessage ;
  object = new Teacher();

  constructor( private service : ApifunctionsService , private router : Router) { }

  ngOnInit(): void {
  }
  save(teacherName , course){
    if (teacherName.errors == null && course.errors == null){
      this.service.post(this.object).subscribe(data =>{
        this.router.navigateByUrl('/listT')
  
      })

    }else{
      this.invalidMessage ="Please enter Valid Data"
    }
    

    
  }

}
