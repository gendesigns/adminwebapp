import {Injectable} from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {}

  getUsers(path):Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

}