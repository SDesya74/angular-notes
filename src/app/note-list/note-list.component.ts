import { Component, OnInit } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { NoteModel, NotesState, NotesStateModel } from 'state/notes.state'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: [ './note-list.component.sass' ]
})
export class NoteListComponent implements OnInit {

  @Select((state: any) => state.notes.items) notes$: Observable<NoteModel[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
