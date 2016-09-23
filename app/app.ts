import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {TabsPage} from "./pages/tabs/tabs";
import {FirebaseService} from "./providers/firebase/firebase.service";

declare var firebase:any;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [FirebaseService]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {

      console.log("firebse heere");
      console.log(firebase);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
