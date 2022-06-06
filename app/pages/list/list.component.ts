import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  formIn4 = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    sdt: new FormControl(''),
  })
  listIn4: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getIn4();
  }
  getIn4() {
    let data: any = localStorage.getItem('listIn4');
    if (data == null || data == '') {
      this.listIn4 = [];
    } else {
      this.listIn4 = JSON.parse(data);
    }
  }
  submitForm() {
    this.listIn4.push(this.formIn4.value);
    localStorage.setItem('listIn4', JSON.stringify(this.listIn4));
  }

}