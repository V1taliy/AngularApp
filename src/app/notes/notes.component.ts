import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  

  constructor(
    private ns: NotesService
  ) {}

  ngOnInit() {
  }


}
