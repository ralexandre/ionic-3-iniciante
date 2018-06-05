import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { FeedPage } from '../feed/feed';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  rootPage = AboutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }
  openPageAbout(){
    this.navCtrl.push(AboutPage)
  }
  openFeeds(){
    this.navCtrl.push(FeedPage)
  }
  openPageIntro(){
    this.navCtrl.push(IntroPage)
  }
}
