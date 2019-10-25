import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  filterPlaylist: any[];

  playlist = [
    {id: 'CX11yw6YL1w', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'},
    {id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    // all songs
    this.filterPlaylist = this.playlist;

    // when search text is emitted
    this.searchService.listen().subscribe(searchText => {
      this.filterPlaylist = this.playlist.filter(video => video.song.includes(searchText));
    });
  }

}
