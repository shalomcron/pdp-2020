import { Component, OnInit } from '@angular/core';
import {ArticleStoreService} from '../article-store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private articleStore: ArticleStoreService) { }

  ngOnInit(): void {
  }

}
