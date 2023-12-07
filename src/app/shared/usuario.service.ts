
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private baseUrl = 'http://localhost:9090/usuario';

  constructor(private http: HttpClient) { }

  public insert(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.baseUrl}/new`, UsuarioModel)
  }

  public update(usuario: UsuarioModel) {
    const newUrl = `${this.baseUrl}/${usuario.cpf}`
    return this.http.put<UsuarioModel>(newUrl, usuario)
  }

  getByCpf(cpf: string) {
    const newUrl = `${this.baseUrl}/${cpf}`
    return this.http.get<UsuarioModel>(newUrl)
  }
  // cadastrarNovoUsuario(usuarioData: string): Observable<any> {
  //   const url = `${this.baseUrl}/new-user`;
  //   return this.http.post<any>(url, { usuarioData }).pipe(
  //     tap((response: any) => {
  //       const newUser: UsuarioModel = response;
  //       if (newUser) {
  //         this.userDataService.updateUserList(newUser);
  //       }
  //     })
  //   );
  // }
}
