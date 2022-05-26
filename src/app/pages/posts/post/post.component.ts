import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Post } from '../interfaces/post.interface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post
  @Output() likeTouch = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}

  onClick():void{
    this.likeTouch.emit(this.post)
  }
}
