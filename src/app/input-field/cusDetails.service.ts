import { Injectable } from '@angular/core';

export type User = {
    id: number;
    name: string;
    ph_no: number;
    Email: string;
  };

@Injectable()

  export class CusDetailService{
    public users: User[] = [{ id: 1, name: "sathya", ph_no: 9888888777,Email: "sat@xyz.com" }];
    public count = 2;

    public addUser(user: User) {
        this.users.push({...user, id: this.count++});
      }
  }