import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [ UserService ]
})
export class ListaUsuariosComponent {

  public users: Observable<any[]>;
  public user: Observable<any[]>;
  public countUsers: number;
  public userName: any;
  public getUser: Array<any>
  public userCidade: any;

  public basePath = '/usuario_detalhe'

  constructor(private userService:UserService) { 

    this.users = this.getUsers(this.basePath);
    this.users.subscribe(count=>{ this.countUsers = count.length })

  }

  getUsers(path) {
    return this.userService.getUsers(path);
  }

  getAlbumById(albumId: string) {
    this.user = this.userService.getUsers(`${this.basePath}/${btoa(albumId)}`);
    this.user.forEach(user=>{
      this.userName = user[1]
      this.userCidade = user[0]
    })
    
  }


}
