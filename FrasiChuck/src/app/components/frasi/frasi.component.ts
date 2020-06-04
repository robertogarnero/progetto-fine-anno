import { ChuckService } from './../../services/chuck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frasi',
  templateUrl: './frasi.component.html',
  styleUrls: ['./frasi.component.css']
})
export class FrasiComponent implements OnInit {

  frasi;

  constructor(
    private chuckService: ChuckService,
  ) { }

  ngOnInit(): void {
    this.frasi = this.chuckService.getFrasi();
  }

}
