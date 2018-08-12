import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bnb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string = '';
  notifyMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    this.activatedRoute.params.subscribe((params) => {
      if(params['registered'] === 'success'){
        this.notifyMessage = 'You have been successfully registered'
      }
    })
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, 
                    Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', Validators.required]
    })
  }

  isInvalidInput(input): boolean {
    return  this.loginForm.controls[input].invalid && 
            (this.loginForm.controls[input].dirty || this.loginForm.controls[input].touched);
  }

  isRequired(input): boolean {
    return this.loginForm.controls[input].errors.required
  }

  isValidEmail(input): boolean {
    return this.loginForm.controls[input].errors.pattern
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(['/rentals']);
      },
      (err) => {
        this.error = err.error;
      }
    )
  }
}
