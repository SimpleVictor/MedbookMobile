import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {EmployeesPage} from "../employees/employees";
import {SettingsPage} from "../settings/settings";
import {SurgeriesPage} from "../surgeries/surgeries";

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = EmployeesPage;
    this.tab3Root = SurgeriesPage;
    this.tab4Root = SettingsPage;
  }
}
