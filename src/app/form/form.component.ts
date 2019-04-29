import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  name = this.fb.control('', [ Validators.required ]);
  email = this.fb.control('', [ Validators.required, Validators.email ]);
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.name,
      email: this.email
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    alert('ENVIANDO DADOS');
  }

}
