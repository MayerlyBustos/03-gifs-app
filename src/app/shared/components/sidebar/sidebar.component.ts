import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService){ }

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string){
    
    this.gifsService.searchTag(tag);
  }
}
