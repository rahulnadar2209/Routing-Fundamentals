import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
 public deptId;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deptId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id= parseInt(params.get('id'))
      this.deptId=id;
    })
  }
  goPrevious(){
    let previousId= this.deptId - 1;
    this.router.navigate(['/departments',previousId])

  }

  goNext(){
    let nextId= this.deptId + 1;
    this.router.navigate(['/departments',nextId])
  }

  gotoDept(){
    let selectedId = this.deptId ? this.deptId:null;
    // this.router.navigate(['/departments',{id:selectedId,test:"testvalue"}])
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})

  }
}