import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioModel } from './usuario.model';
import { UserModule } from './user-form.module';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersDataSubject: BehaviorSubject<UsuarioModel[]> = new BehaviorSubject<UsuarioModel[]>([]);
  public usersData$: Observable<UsuarioModel[]> = this.usersDataSubject.asObservable();

  updateUsuarioData(usuarioData: UsuarioModel): void {

    const updatedUsers = this.usersDataSubject.value.map((user) => {
      if (user.cpf === usuarioData.cpf) {
        return usuarioData; // Substitui os dados do usuário existente pelos novos dados
      }
      return user;
    });

    this.usersDataSubject.next(updatedUsers);
  }

  updateUserList(newUser: UsuarioModel): void {
    const currentUsers = this.usersDataSubject.value;
    this.usersDataSubject.next([...currentUsers, newUser]);
  }

  lerDadosUsuario(): Observable<UsuarioModel[]> {
    return this.usersData$;
  }

}
