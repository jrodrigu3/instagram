import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  stories = [
    { img: 'assets/story1.jpg' },
    { img: 'assets/story2.jpg' },
    { img: 'assets/story3.jpg' }
  ];

  posts = [
    { img: 'assets/post1.jpg', description: 'Descripción de la publicación 1' },
    { img: 'assets/post2.jpg', description: 'Descripción de la publicación 2' },
    { img: 'assets/post3.jpg', description: 'Descripción de la publicación 3' }
  ];
}
