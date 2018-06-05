import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "rafa",
    data: "November 5, 1955",
    descricao: "Meu primeiro app com Ionic.",
    qtd_like: "120 ",
    qtd_comment: "48 ",
    time_comment: "6h ago"
  }
  public lista_filmes = new Array<any>();
  public  nome_usuario:string ="Rafa Galvao";
  public loader;
  public refresh;
  public isRefreshing:boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }
  public somaDoisNumeros(num1:number, num2:number): void {
    alert("Soma igual " + (num1 + num2));
  }
  doRefresh(refresher) {
    this.refresh = refresher;  
    this.isRefreshing = true;  
    this.carregaFilmes();
  }
  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      //duration: 3000
    });
    this.loader.present();
  }
  fecharCarregando(){
    this.loader.dismiss();
  }
  ionViewDidEnter() {
    this.carregaFilmes();
  }
  carregaFilmes(){
    this.abrirCarregando();
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = response;
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
        this.fecharCarregando();
        if(this.isRefreshing){
          this.isRefreshing = false;
          this.refresh.complete();
          
        }
      }, error=>{
        console.log(error);
        this.fecharCarregando();
        if(this.isRefreshing){
          this.isRefreshing = false;
          this.refresh.complete();
          
        }
      }
    )
  }
}
