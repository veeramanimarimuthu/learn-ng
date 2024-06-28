import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  allUser: any[] = [];

  userForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('',Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private http: HttpClient){
    this.getAllUser();
  }

  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.allUser = res;
    })
  }

  onEdit(id: number) {
    this.http.get('https://jsonplaceholder.typicode.com/users/'+ id).subscribe((res:any)=>{
      this.userForm = new FormGroup({
        id: new FormControl(res.id),
        name: new FormControl(res.name),
        username: new FormControl(res.username),
        email: new FormControl(res.email)
      });
    })
  }

  onSaveUser() {
    // debugger;
    const obj = this.userForm.value;
    this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
