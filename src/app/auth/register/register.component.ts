import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bnb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {};

  constructor() { }

  ngOnInit() {
  }

}
