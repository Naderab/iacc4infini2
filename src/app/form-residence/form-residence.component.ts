import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  //userName: FormControl = new FormControl('');
  /*formUser: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl({value:'Abdellaoui',disabled:true}),
    address: new FormGroup({
      street: new FormControl('',[Validators.pattern('[0-9]+')]),
      city: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  });

  get street() {
    return this.formUser.get('address')!.get('street');
  }
  showUserName() {
    console.log(this.userName.value);
  }

  showFormUser() {
    console.log(this.formUser)
    console.log(this.formUser.controls)
    console.log(this.formUser.value)
    console.log(this.formUser.getRawValue());
  }*/
  constructor(private rs:ResidenceService,private r:Router){}
  formResidence : FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+')]),
    address: new FormControl('',[Validators.required,Validators.minLength(5)]),
    image: new FormControl('',[Validators.required])
  })

  get name():FormControl{
    return this.formResidence.get('name') as FormControl;
  }
  get address(){
    return this.formResidence.get('address') as FormControl;
  }
  get image(){
    return this.formResidence.get('image') as FormControl;
  }

  add() {
    //this.formResidence.value.id=5;
    //this.rs.addToList(this.formResidence.value)
    this.rs.addResidence(this.formResidence.value).subscribe({
      next : ()=>this.r.navigate(['/residences'])
    })
    
  }
}
