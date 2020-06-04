import { Component, OnInit } from '@angular/core';
import { ChuckService } from './../../services/chuck.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-norris',
  templateUrl: './norris.component.html',
  styleUrls: ['./norris.component.css']
})
export class NorrisComponent implements OnInit {

  chuck;
  frasiType;

  constructor(
    private chuckService: ChuckService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.frasiType = this.route.snapshot.params.frasiType;
    this.chuck = this.chuckService.getNorris(this.frasiType);
  }

}
