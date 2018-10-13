import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// Import rxjs map operator
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  containers: any[] = [];

  images: any[] = [];

  fGroup: FormGroup;


  constructor(private http: HttpClient) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {


  }

  // Add one person to the API
  /*
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
    .map(res => JSON.parse(JSON.stringify(res)))
    .subscribe(() => {
        this.getAllPeople();
      })
  }*/

  // Get all users from the API





}
