import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { AbcModule } from './module/abc/abc.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ReModule } from './module/re/re.module';
import { OeModule } from './module/oe/oe.module';
import { CmModule } from './module/cm/cm.module';
import { EmiModule } from './module/emi/emi.module';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  }, 
  {
    path:'gallary',
    component: GallaryComponent
  },  
  {
    path:"log",component:LoginComponent
  },
  {
    path:"about-us",component:AboutUsComponent
  },

  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
       {path:'operation',loadChildren:()=>OperationexecutiveModule},
     
       {path:'oe',loadChildren:()=>OeModule},
      
      {path:'re',loadChildren:()=>ReModule},

      {path:'cm',loadChildren:()=>CmModule},

      {path:'emi',loadChildren:()=>EmiModule},
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];





