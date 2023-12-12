import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  submitRegistration() {
    
    alert('Registration request submitted!');
    console.log( this.user)
  }
  // constructor(private httpClient: HttpClient) {}
  // submitRegistration() {
  //   this.httpClient.post('http://localhost:3000/api/register', this.user)
  //     .subscribe(
  //       (response: any) => {
  //         console.log('Registration request submitted!', response);
          
  //       },
  //       (error) => {
  //         console.error('Registration request failed:', error);
          
  //       }
  //     );
  //     }
    }
