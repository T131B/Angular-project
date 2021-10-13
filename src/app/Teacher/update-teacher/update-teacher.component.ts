import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  
  id;
  invalidMessage;
  object = new Teacher();

  constructor(private service: ApifunctionsService, private router: Router
    , private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.service.getById(this.id).subscribe((data: any) => {
      this.object = data;
    })
  }

  ngOnInit(): void {
  }
  update(teacherName , course) {
    if (teacherName.errors == null && course.errors == null) {

      this.service.put(this.object, this.id).subscribe(data => {
        this.router.navigateByUrl('/listT')

      })
    } else {
      this.invalidMessage = "Please enter Valid Data"
    }
  }
}


