import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert("All fields are required");
      return;
    }

    this.userService.userLogin(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
      this.authService.setJwtToken(data.token);
      this.router.navigate(['/home']);

    })
  }
}
