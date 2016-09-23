import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseService} from "../../providers/firebase/firebase.service";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private firebaseService: FirebaseService) {

  }


  ngOnInit(){
    console.log("dsfsdfsdf");
    console.log(this.firebaseService.watchData());
  }
}
