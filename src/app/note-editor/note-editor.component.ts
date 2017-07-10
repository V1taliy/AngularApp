import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.sass'],
  providers: [NotesService]
})
export class NoteEditorComponent implements OnInit {

  defaultColor="white";
  
  constructor(
    private ns: NotesService
  ) { }

  ngOnInit() {
  }

  addNote( newNote ){
    let note = {
      text: newNote.value,
      color: this.defaultColor
    }
    this.ns.addNote(note);
    newNote.value = '';
  }

  chooseColor( newColor ){
    this.defaultColor = newColor;
  }

}
