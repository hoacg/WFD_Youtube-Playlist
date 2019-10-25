import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaylistComponent} from './playlist/playlist.component';
import {VideoComponent} from './video/video.component';


const routes: Routes = [
  {
    path: 'playlist', component: PlaylistComponent
  },

  {
    path: 'video/:videoId/:songName', component: VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
