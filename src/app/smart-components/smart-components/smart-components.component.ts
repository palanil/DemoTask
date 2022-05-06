import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-smart-components',
  templateUrl: './smart-components.component.html',
  styleUrls: ['./smart-components.component.css']
})
export class SmartComponentsComponent implements OnInit {
  taskData: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  submit(form: any) {
    if (form.valid) {
      var data = {
        taskTitle: form.value.title,
        taskProject: form.value.title,
        taskTime: form.value.time,
        taskAmount: form.value.amount,
        taskDeadline: form.value.deadline,
        taskNotes: form.value.notes
      }
      console.log(this)
      console.log("inserted data", data)
      this.taskData.push(data);
      localStorage.setItem("taskData", JSON.stringify(this.taskData));
      console.log(form)
    }
  }

}
