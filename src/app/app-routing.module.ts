import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes=[
  {path:'', redirectTo:'/departments',pathMatch:'full'},
  {path:'departments', component:DepartmentlistComponent},
  {path:'departments/:id', 
    component:DepartmentDetailComponent,
  children:[
    {path:'overview', component:DepartmentOverviewComponent},
    {path:'contact', component:DepartmentContactComponent},
  ]},
  {path:'employees',component:EmployeeListComponent},
  {path:"**",component:PageNoFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents=[DepartmentlistComponent,EmployeeListComponent,PageNoFoundComponent,DepartmentDetailComponent,DepartmentContactComponent,DepartmentOverviewComponent]