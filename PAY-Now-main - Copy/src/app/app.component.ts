import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalvService } from './services/globalv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private g: GlobalvService, private router: Router) {}
  title = 'PayNow';
  pass = 'hello';
  builder() {
    console.log('whatsa up nigga');
  }
  loginForm = new FormGroup({
    inputt: new FormControl(),
  });
  hello() {
    console.log(this.g.flag);
    if (this.g.flag == 0) {
      if (this.g.flag == 0 && this.loginForm.value.inputt == this.pass) {
        this.builder();
        this.g.flag += 1;
      } else {
        this.g.flag = 0;
      }
    } else if (this.g.flag === 1) {
      console.log('its on level two nigga');
      this.g.flag += 1;
    } else if (this.g.flag == 2) {
      console.log('its on level 3');
    }
    console.log(this.g.flag);
  }
}
