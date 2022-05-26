import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './interfaces/post.interface';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .pipe(tap((posts:Post[]) => this.posts = posts))
      .subscribe();
  }
  saveLike(post:Post):void{
    console.log(post)
  }
}
