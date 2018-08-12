import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bnb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {};
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.formData = {};
  }

  register(): void {
    console.log(this.formData)
    this.authService.register(this.formData).subscribe(
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
      },
      (err) => {
        console.log(err.error)
        this.error = err.error;
      }
    )
  }

}
