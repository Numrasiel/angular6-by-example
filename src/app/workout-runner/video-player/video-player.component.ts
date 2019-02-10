import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { VideoDialogComponent, VideoDialogContext } from './video-dialog/video-dialog.component';
import { overlayConfigFactory } from 'ngx-modialog';

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styles: []
})
export class VideoPlayerComponent implements OnInit {

  @Input() videos: Array<string>;

  @Output() videoDialogOpened: EventEmitter<void> =  new EventEmitter<void>();
  @Output() videoDialogClosed: EventEmitter<void> =  new EventEmitter<void>();

  constructor(private modal: Modal) { }

  ngOnInit() {
  }

  playVideo(videoId: string) {
    this.videoDialogOpened.emit();
    var dialog=this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
    dialog.result
    .then(() => { this.videoDialogClosed.emit(); }, (error) => { this.videoDialogClosed.emit(); });
  };
}