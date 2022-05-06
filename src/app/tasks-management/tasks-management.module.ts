import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SmartComponentsComponent } from '../tasks-management/smart-components/smart-components.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/smart',
    pathMatch: 'full',
  },
  {
    path: 'smart',
    component: SmartComponentsComponent,
    children: [
      {
        path: 'addTask',
        component: AddTaskComponent,
      },
      {
        path: 'taskList',
        component: AddTaskComponent,
      },


    ],
  },

];
@NgModule({
  declarations: [
    SmartComponentsComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TasksManagementModule { }
