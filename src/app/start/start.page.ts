import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  navToLogin() {
    this.navCtrl.navigateForward("login");
  }

  navToRegister() {
    this.navCtrl.navigateForward("register");
  }

  ngOnInit() {
  }

}
