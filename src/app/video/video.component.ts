import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  id: string;
  songName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer

  ) {

    this.activatedRoute.params.subscribe( params => {
      this.id = params.videoId;
      this.songName = params.songName;
    });

  }

  ngOnInit() {
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
