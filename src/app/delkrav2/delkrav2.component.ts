import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Delkrav } from '../delkrav';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delkrav2',
  templateUrl: './delkrav2.component.html',
  styleUrls: ['./delkrav2.component.css']
})
export class Delkrav2Component implements OnInit {
  delkrav: Observable<Delkrav[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.delkrav = this.dataService.delkrav.map(delkravs => delkravs.filter((x, i) => { return x.belopp > 50; }));
    this.delkrav.subscribe();
  }

}
