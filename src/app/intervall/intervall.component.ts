import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-intervall',
  templateUrl: './intervall.component.html',
  styleUrls: ['./intervall.component.css']
})
export class IntervallComponent implements OnInit {
  tick: Observable<number>;
  multi: Observable<number>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.tick = this.dataService.tick;
    this.tick.subscribe();

    this.multi = this.dataService.siffror.combineLatest(this.dataService.tick, (s1, s2) => s1*s2);
    this.multi.subscribe();
  }

}
