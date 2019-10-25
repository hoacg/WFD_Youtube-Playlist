import { Component } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtubeplayer';

  searchText: string;

  constructor(private searchService: SearchService) {
  }

  onSearchComplete() {
    console.log('From Sarah with love: ', this.searchText);
    this.searchService.send(this.searchText);
  }
}
