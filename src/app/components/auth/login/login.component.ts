import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService, IAuth } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authToken: IAuth = { token: '' };

  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  //if more than one validators use array
  loginForm = new FormGroup({
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new FormControl<string | null>(null, Validators.required),
  });
  onSubmit() {
    this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: (token) => {
          console.log(token);
          // this.authToken = token;
          //localStorage.setItem('authtoken', token.token);
          this.router.navigateByUrl('/grocery');
        },
        error: (e) => {
          console.log(e.error.errors);
          this.errorMessage = e.error.errors;
        },
        complete: () => {
          console.info('complete');
        },
      });
  }
}
