import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import {AuthGuard} from './auth-guard.service';

var myRouteConfig=[
    {
      path:'',
      redirectTo:'/index',
      pathMatch:'full'
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'index',
      // canActivate: [AuthGuard],
      component:IndexComponent
    },
    {
      path:'bussiness',
      // canActivate: [AuthGuard],
      component:BussinessComponent
    },
    {
      path:'**',
      component:NotfoundComponent
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        myRouteConfig,
        { enableTracing: false } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}

