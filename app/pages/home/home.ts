import {Component, OnInit, OnChanges, AfterContentChecked, NgZone} from '@angular/core';
import {NavController, Events} from 'ionic-angular';
import {FirebaseService} from "../../providers/firebase/firebase.service";

declare var firebase:any;
// declare var $:any;


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit , AfterContentChecked{

  echoSpeech:any[] = [];
  zone;

  constructor(public navCtrl: NavController, private events: Events) {
    var EmployeeRefs = firebase.database().ref();

    this.zone = new NgZone({enableLongStackTrace: false});

    EmployeeRefs.on('value', (snapshot) => {
      // console.log("2321");
      let obj = snapshot.val();
      // console.log(obj);


      this.zone.run(()=>{
        this.echoSpeech.push(obj.loggedMobile.outputSpeech.text);
      });
    });

  }

  clearData(){
    this.echoSpeech = [];
  }



ngOnInit(){


  //Start functions when jquery is ready
  // $("document").ready(function() {
  //   handleTyping();
  // });

  //This handles the typing animation on the front page
  //the typed method is coming from typed.js in
  // */public/assets/typed.js*
  // function handleTyping () {
  //   $('.myelement').typed({
  //     strings: [".", "..", "...", "...."],
  //     typeSpeed: 50,
  //     starDelay: 200,
  //     backDelay: 600,
  //     loop: false,
  //     showCursor: true,
  //     cursorChar: "|"
  //   });
  //
  // }




  }

  ngAfterContentChecked(){
    // console.log("asdasasd");
    // this.echoSpeech = this.echoSpeech;
  }



  testButton(){
    console.log(this.echoSpeech);
  }

}
