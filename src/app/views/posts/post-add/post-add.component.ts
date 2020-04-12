import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from './../../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private toaster: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.buildAddForm();
  }
  submit() {
    this.submitted = true;
    // Stop here If form is invalid
    if (this.addForm.invalid) {
      return;
    }
    this.postsService.addPost(this.addForm.value).subscribe(
      res => {
        this.toaster.success('Post Added Successfuly', 'Success',
            { timeOut: 3000, closeButton: true, progressBar: true});
        this.router.navigate(['../admin/posts']);
      },
      err => {
        this.toaster.error(err, 'Error',
            { timeOut: 3000, closeButton: true, progressBar: true});
      });
  }

  get f() {return this.addForm.controls; }

  buildAddForm() {
    this.addForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

}
