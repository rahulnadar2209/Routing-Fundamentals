import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes=[
  {path:'', redirectTo:'/departments',pathMatch:'full'},
  {path:'departments', component:DepartmentlistComponent},
  {path:'departments/:id', component:DepartmentDetailComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:"**",component:PageNoFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents=[DepartmentlistComponent,EmployeeListComponent,PageNoFoundComponent,DepartmentDetailComponent]