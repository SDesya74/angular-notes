import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { Note } from 'state/notes.actions'

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: [ './new-note.component.sass' ]
})
export class NewNoteComponent implements OnInit {
  public title: string = ""
  public content: string = ""

  // TODO: Создать компонент для редактирования заметки, наследованный от этого, который будет висеть на роуте /edit с аргументов - id
  constructor(private store: Store, private router: Router) {
    console.log({ store })
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(new Note.Create(form.value.title, form.value.content)).subscribe(e => {
      this.router.navigate(['/']);
    })
  }

  onDelete(form: NgForm) {
    console.log({ form })
    alert("Form deleted!")
  }

}
