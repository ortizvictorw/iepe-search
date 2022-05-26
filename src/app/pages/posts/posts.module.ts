import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { MaterialModule } from 'src/app/material.module';
import { SafePipe } from 'src/app/safe.pipe';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    SafePipe
  ],
  imports: [
    MaterialModule,
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
