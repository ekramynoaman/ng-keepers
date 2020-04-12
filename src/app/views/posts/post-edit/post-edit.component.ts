import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from './../../../shared/services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
postId;
postDetails = {};
updateForm: FormGroup;
submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the post id
    this.route.params.subscribe(params => {
      this.postId = params.id;
      console.log(this.postId);
      // Get the post
      this.postsService.getPost(params.id).subscribe(res => {
      this.postDetails = res;
      console.log(this.postDetails);
    });
    });

    this.buildUpdateForm();
  }

  submit() {
    this.submitted = true;
    // Stop here If form is invalid
    if (this.updateForm.invalid) {
      return;
    }
    this.postsService.updatePost(this.updateForm.value, this.postId).subscribe(
      res => {
        this.toaster.success('Post Updated Successfuly', 'Success',
            { timeOut: 3000, closeButton: true, progressBar: true});
        this.router.navigate(['../admin/posts']);
      },
      err => {
        this.toaster.error(err, 'Error',
            { timeOut: 3000, closeButton: true, progressBar: true});
      });
  }

  get f() {return this.updateForm.controls; }

  buildUpdateForm() {
    this.updateForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }




}
