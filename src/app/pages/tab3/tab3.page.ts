import { Component, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServicesService } from '../../services/ui-services.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService,
               private uiService: UiServicesService,
               private postService: PostsService ) {}

  ngOnInit() {

    this.usuario = this.usuarioService.getUSuario();

  }

  async actualizar( fActualizar: NgForm ) {

    if ( fActualizar.invalid ) {
      return;
    }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );

    if ( actualizado ) {
      this.uiService.presentToast('Usuario actualizado');
    } else {
      this.uiService.presentToast('No se actualizó');
    }

  }

  logout() {

    this.usuarioService.logout();
    this.postService.paginaPost = 0;

  }

}
