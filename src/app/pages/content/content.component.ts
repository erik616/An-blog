import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datas } from '../../data/articles';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photo?: string;
  title?: string;
  description?: string;
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id: string | null) {
    const result = datas.filter((article) => article.id === id)[0];

    if (result) {
      this.description = result.description;
      this.photo = result.photo;
      this.title = result.title;
    }
  }
}
