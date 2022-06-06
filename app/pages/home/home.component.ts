import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listIn4: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getIn4();
  }

  getIn4() {
    let data: any = localStorage.getItem('listIn4');
    if (data != null || data != '') {
      this.listIn4 = JSON.parse(data);
    } else {
      this.listIn4 = [];
    }
  }
  delete(i: number) {
    this.listIn4.splice(i, 1);
    localStorage.setItem('listIn4', JSON.stringify(this.listIn4));
    this.getIn4();
  }
  edit(i: number) {
    let box = document.getElementById(`box${i}`) as HTMLDivElement | null;
    let saveBut = document.getElementById(`saveBut${i}`) as HTMLDivElement | null;
    let inpName = document.getElementById(`name${i}`) as HTMLDivElement | null;
    let inpAdress = document.getElementById(`address${i}`) as HTMLDivElement | null;
    let inpSDT = document.getElementById(`sdt${i}`) as HTMLDivElement | null;
    saveBut?.classList.remove('d-none');
    box?.classList.add('d-none');
    inpName?.classList.add('borderInput');
    inpAdress?.classList.add('borderInput');
    inpSDT?.classList.add('borderInput');
  }
  saveEdit(i: number) {
    let box = document.getElementById(`box${i}`) as HTMLDivElement | null;
    let saveBut = document.getElementById(`saveBut${i}`) as HTMLDivElement | null;
    let inpName = document.getElementById(`name${i}`) as HTMLDivElement | null;
    let inpAdress = document.getElementById(`address${i}`) as HTMLDivElement | null;
    let inpSDT = document.getElementById(`sdt${i}`) as HTMLDivElement | null;
    saveBut?.classList.add('d-none');
    box?.classList.remove('d-none');
    inpName?.classList.remove('borderInput');
    inpAdress?.classList.remove('borderInput');
    inpSDT?.classList.remove('borderInput');
    localStorage.setItem('listIn4', JSON.stringify(this.listIn4));
    this.getIn4();
  }
}