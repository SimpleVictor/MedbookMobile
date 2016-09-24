import {Injectable, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var firebase:any;

@Injectable()
export class FirebaseService implements OnInit{

  constructor(private http: Http) {}

  ngOnInit(){

  }

  watchForSpeech(){
    console.log("we're straight");
    var EmployeeRefs = firebase.database().ref();

    EmployeeRefs.on('value', (snapshot) => {
      console.log("something has been changed");

      console.log(snapshot.val());

      let obj = snapshot.val();

      return obj;
    });

  }

}

