import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Delkrav } from './delkrav';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  delkrav: Observable<Delkrav[]>;
  private _delkrav: BehaviorSubject<Delkrav[]>;
  private baseUrl: string;
  private delkravStore: {
    delkrav: Delkrav[]
  }

  siffror: Observable<number>;
  private _siffror: BehaviorSubject<number>;
  private siffrorStore: {
    siffror: number;
  }
  constructor(private http: Http) { 
    this.baseUrl = 'http://5820290b8b129a110026d7c6.mockapi.io/api/v1';

    this.delkravStore = {delkrav: []};
    this._delkrav = <BehaviorSubject<Delkrav[]>> new BehaviorSubject([]);
    this.delkrav = this._delkrav.asObservable();

    this.siffrorStore = {siffror: 0};
    this._siffror = <BehaviorSubject<number>> new BehaviorSubject(0);
    this.siffror = this._siffror.asObservable();
  }


  loadAllDelkrav() {
    console.log('Anropar webbservice');
    this.http.get(`${this.baseUrl}/delkrav`)
      .map(response => response.json())
      .subscribe(data => {
        this.delkravStore.delkrav = data;
        this._delkrav.next(Object.assign({}, this.delkravStore).delkrav);
      }, error => console.log('Kunde inte ladda delkrav.'), 
         ()    => console.log('Klar!'));     
  }

  createDelkrav(delkrav: Delkrav) {
    console.log('lägger till delkrav');

    this.http.post(`${this.baseUrl}/delkrav`, JSON.stringify(delkrav))
      .map(response => response.json()).subscribe(data => {
        this.delkravStore.delkrav.push(delkrav);  
        this._delkrav.next(Object.assign({}, this.delkravStore).delkrav);
    }, error => console.log('Kunde inte skapa delkrav.'), 
       ()    => console.log('Klar med tilläggning'));
  }

  addSiffra(siffra: number) {
    this.siffrorStore.siffror = siffra;
    this._siffror.next(this.siffrorStore.siffror);
  }
}
