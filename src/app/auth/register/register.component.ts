import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bnb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formData = {};
  }

  register(): void {
    console.log(this.formData)
    this.authService.register(this.formData).subscribe(
      () => {
        console.log('success')
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
