import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  id: string;


  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( params => {
      this.id = params.videoId;
    });

  }

  ngOnInit() {
  }

}
