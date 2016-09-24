import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EmployeesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var firebase:any;

@Component({
  templateUrl: 'build/pages/employees/employees.html',
})
export class EmployeesPage implements OnInit {

  clockedInEmp:any[]=[];

  constructor(private navCtrl: NavController) {

  }

  ngOnInit(){


    this.getClockedIn();
    // var comment/sRef = firebase.database().ref('post-comments/' + postId);
    // EmployeeRefs.on('child_added', function(data) {
    //   console.log(data.key, data.val().text, data.val());
    // });
    //
    // EmployeeRefs.on('child_changed', function(data) {
    //   console.log(data.key, data.val().text);
    // });
    //
    // EmployeeRefs.on('child_removed', function(data) {
    //   console.log(data.key);
    // });

  }


  getClockedIn(){

    var EmployeeRefs = firebase.database().ref('/patient_report');

    EmployeeRefs.on('value', (snapshot) => {
      let obj = snapshot.val();
      for(let i in obj){
        this.clockedInEmp.push(obj[i]);
      };
    });

  }



}
