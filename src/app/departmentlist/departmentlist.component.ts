import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  public SelectedId;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id= parseInt(params.get('id'))
      this.SelectedId=id;
    })
  }

  
  departments=[
    {"id":1,"dept":"Angular"},
    {"id":2,"dept":"Node"},
    {"id":3,"dept":"MongoDB"},
    {"id":4,"dept":"Express"},
    {"id":5,"dept":"SpringBoot"},
  ]

  onSelect(dept){
    this.router.navigate(['/departments',dept.id])
  }

  isSelected(dept){
    return dept.id === this.SelectedId;
  }
}