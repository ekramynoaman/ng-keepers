import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
posts: any = [];
  constructor(
    private postsService: PostsService,
    private ngbModal: NgbModal,
    private toaster: ToastrService) { }

  // Get All Posts
  getAllPosts() {
    this.postsService.getAll().subscribe(res => {
      this.posts = res;
    });
  }


  // Delete post
  deletePost(deleteModal, postId) {

    this.ngbModal.open(deleteModal).result.then(result => {
      this.postsService.deletePost(postId).subscribe(res => {
            this.toaster.success('Post Deleted', 'Success',
            { timeOut: 3000, closeButton: true, progressBar: true});
            this.getAllPosts();
          },
          err => {
            this.toaster.error(err, 'Error',
            { timeOut: 3000, closeButton: true, progressBar: true});
          });
    },
    reason => {
      console.log(reason);
    }
    );
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

}
