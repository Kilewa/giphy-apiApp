import { Component, OnInit } from '@angular/core';
import { GifsDataService} from '../gifs-data.service';

@Component({
  selector: 'app-gifs-display',
  templateUrl: './gifs-display.component.html',
  styleUrls: ['./gifs-display.component.css']
})
export class GifsDisplayComponent implements OnInit {
  gifs: any[] = [];

  constructor(private gifsdataservice: GifsDataService) { }

  ngOnInit(): void {
    this.gifsdataservice.getTrendingGifs()
    .subscribe(( Response: any) => {
      this.gifs = Response.data;
    });
  }

}
