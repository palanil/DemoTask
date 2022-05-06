import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartComponentsComponent } from './smart-components/smart-components.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SmartComponentsComponent,
    // children: [
    //   {
    //     path: 'child-a', // child route path
    //     component: ChildAComponent, // child route component that the router renders
    //   },
    //   {
    //     path: 'child-b',
    //     component: ChildBComponent, // another child route component that the router renders
    //   },
    // ],
  },
];
@NgModule({
  declarations: [
    SmartComponentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SmartComponentsModule { }
