import { ConfigHelper } from './../../app/helpers/configHelper';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { ListaPedidosModel } from './../../app/models/ListaPedidosModel';
import { CarrinhoProvider } from './../../providers/carrinho/carrinho';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoModel } from '../../app/models/carrinhoModel';

@IonicPage()
@Component({
  selector: 'page-meus-pedidos',
  templateUrl: 'meus-pedidos.html',
})
export class MeusPedidosPage {

  lista: Array<ListaPedidosModel> = new Array<ListaPedidosModel>();
  page: number = 0;
  usuarioLogado: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private carrinhoSrv: CarrinhoProvider,
    private usuarioSrv: UsuarioProvider) {
  }

  ionViewDidLoad() {
    this.LoadData();
    this._getPedidos();
  }


  private async _getPedidos(): Promise<void> {
    try {
      let pedidosResult = await this.carrinhoSrv.GetMeusPedidos();
      console.log(pedidosResult);
      if (pedidosResult.success) {
        this.lista = <Array<ListaPedidosModel>>pedidosResult.data;
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo: ', error);
    }
  }

  public contaItem(item: ListaPedidosModel): number {
    return ListaPedidosModel.getTotalItens(item.itens);
  }

  async LoadData(): Promise<void> {
    try {
      let user = <UsuarioModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
      let userResult = await this.usuarioSrv.getByUid(user._id);
      if (userResult.success) {
        this.usuarioLogado = <UsuarioModel>userResult.data;
      }
    } catch (error) {
      console.log('Problema ao carregar os dados do usuário.')
    }
  }

  visualizarPedido() {
    this.navCtrl.setRoot('MinhaContaPage');
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

}
