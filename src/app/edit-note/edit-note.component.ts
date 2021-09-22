import { state } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { NoteModel } from 'state/notes.state'
import { Note } from 'state/notes.actions'

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: [ './edit-note.component.sass' ]
})
export class EditNoteComponent implements OnInit {

  id: string
  title: string
  content: string

  constructor(private store: Store, private activateRoute: ActivatedRoute, private router: Router) {
    this.id = activateRoute.snapshot.params[ 'id' ]
    this.store.select((state: any) => {
      return state.notes.items.find((note: NoteModel) => note.id == this.id)
    }).subscribe(note => {
      if (!note) {
        this.router.navigate([ '/' ])
        return
      }

      this.title = note.title
      this.content = note.content
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(new Note.Save(this.id, this.title, this.content)).subscribe(e => {
      this.router.navigate(['/']);
    })
  }

  onDelete() {
    this.store.dispatch(new Note.Delete(this.id)).subscribe(e => {
      this.router.navigate(['/']);
    })
  }

}
