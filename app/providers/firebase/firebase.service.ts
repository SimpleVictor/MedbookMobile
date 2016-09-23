import {Injectable, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var firebase:any;

@Injectable()
export class FirebaseService implements OnInit{

  constructor(private http: Http) {}

  ngOnInit(){
    console.log(firebase);
  }

  watchData(){
    console.log("bang bang");
  }

}

