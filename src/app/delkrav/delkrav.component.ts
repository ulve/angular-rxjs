import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Delkrav } from '../delkrav';
import { DataService } from '../data.service';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-delkrav',
  templateUrl: './delkrav.component.html',
  styleUrls: ['./delkrav.component.css']
})
export class DelkravComponent implements OnInit {
  delkrav: Observable<Delkrav[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.delkrav = this.dataService.delkrav;
    this.dataService.loadAllDelkrav();
  }

  onClick() {
        let d: Delkrav = {
      id: 1, 
      belopp: 100,
      delkravstyp: 'fifi'
    };

    this.dataService.createDelkrav(d);
  }

}
