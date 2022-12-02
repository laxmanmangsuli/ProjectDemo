import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    

    if (u.username === 're' && u.password === 're') {
      console.log('in re');
      sessionStorage.setItem('role', 're');
      this.router.navigateByUrl("role/re");
    }
    if (u.username === 'oe' && u.password === 'oe') {
      console.log('in oe');
      sessionStorage.setItem('role', 'oe');
      this.router.navigateByUrl("role/oe");
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log('in cm');
      sessionStorage.setItem('role', 'cm');
      this.router.navigateByUrl("role/cm");
    }
    if (u.username === 'emi' && u.password === 'emi') {
      console.log('in emi');
      sessionStorage.setItem('role', 'emi');
      this.router.navigateByUrl("role/emi");
    }

 
 // if (u.username === 'ad' && u.password === 'ad') {
 //   console.log('in admin');
 //   sessionStorage.setItem('role', 'admin');
 //   this.router.navigateByUrl("role/admin/adminbash");
 // }
 // if (u.username === 'emp' && u.password === 'emp') {
 //   console.log('in emp');
 //   sessionStorage.setItem('role', 'emp');
 //   this.router.navigateByUrl("role/emp/empdash");
 // }
 // if (u.username === 'oe' && u.password === 'oe') {
  
 //   sessionStorage.setItem('role', 'operation');
 //   this.router.navigateByUrl("role/operation/oedash");
 // }
 // if (u.username === 'cm' && u.password === 'cm') {
 //   console.log(u.username,u.password);
 //   sessionStorage.setItem('role', 'cr');
 //   this.router.navigateByUrl("role/cr/credit");
 // }
 // if (u.username === 're' && u.password === 're') {
 //   console.log(u.username,u.password);
 //   sessionStorage.setItem('role', 'relation');
 //   this.router.navigateByUrl("role/relation/oecustomer");
 // }
 // if (u.username === 'abc' && u.password === 'abc') {
 //   console.log(u.username,u.password);
 //   sessionStorage.setItem('role', 'ab');
 //   this.router.navigateByUrl("role/ab/abcdash");
 // }
 
}
signup(u) {
 console.log("signup");
}
}
