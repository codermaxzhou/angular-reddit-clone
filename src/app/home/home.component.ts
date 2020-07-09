import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  posts$: Array<PostModel> = [];
  upvoteColor: any;
  downvoteColor: any;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts$ = posts;
    });
  }

  ngOnInit(): void {
  }

  upvotePost() {
    
  }

  downvotePost() {
    
  }

  goToPost(id: number) {
    
  }
}
