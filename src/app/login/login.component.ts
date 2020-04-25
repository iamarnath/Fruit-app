import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public appService: AppService
  ) {}
  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  onLogin() {
    this.appService.doLogin().subscribe((data: any) => {
      if(this.loginForm.value.username === data['user1'].name && this.loginForm.value.password === data['user1'].password ){
        this.appService.checkAdmin();
        const redirectUrl = '/home';
        this.router.navigate([redirectUrl]);
      }
      else{
        this.appService.uncheckAdmin();
        alert("Access denied")
      }
     
    });
  }
}
