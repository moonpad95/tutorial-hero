import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

hero={
  id: "1",
  name: "edgar"
}
formGroup!:FormGroup;

  constructor(private formB:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup=this.formB.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      tel:["",[Validators.required,Validators.maxLength(10)]]
    })
  }
  submit(){
    console.log(this.formGroup.value)
  }

}
