import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControlName, FormControl} from '@angular/forms'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  title="registration";
  registration:FormGroup;

  constructor(private re:FormBuilder){
     this.registration=this.re.group({
      firstname:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      num:['',[Validators.required]],
      interest:['',[Validators.required]],
      delivery:['',[Validators.required]],
      comunication:['',[Validators.required]]
     })
}
get lastName(){
  return this.registration.get('lastname');
  }

onSubmit(){
  console.log(this.registration);
}
}
