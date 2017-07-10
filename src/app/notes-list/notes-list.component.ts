import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass'],
  providers: [NotesService]
})
export class NotesListComponent implements OnInit {
  
  notes = this.ns.getNotes();

  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
  }

  removeNote( i ){
    this.ns.removeNote( i );
  }

  changeColor( i, newColor ){
    this.ns.changeColor( i, newColor );
  }

}
