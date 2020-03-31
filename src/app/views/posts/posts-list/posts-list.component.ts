import { Component, OnInit, Injector } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
postsService;
  constructor(private injector: Injector) {

    setTimeout(() => {
      this.postsService = this.injector.get(PostsService);
    });
   }

  // Get All Posts
  getAllPosts() {
    this.postsService.getAll().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
