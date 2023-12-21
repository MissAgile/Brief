import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  public userId: any = ''; // ou tout autre type d'identifiant que vous utilisez

  setUserId(id: any) {
    this.userId = id;
  }

  getUserId(): any {
    return this.userId;
  }

}
