
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
   registerForm:FormGroup
  constructor(private formBuilder:FormBuilder, private authService: AuthService) { }

  ngOnInit() {
   this.init()
  }

  init() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
      
  }

  onSubmit(formData) {
    console.log("bdfbf")
    this.authService.register(formData).subscribe((data) => {
      console.log(data)
    })
  }

}
