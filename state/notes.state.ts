import { Injectable } from '@angular/core'
import { State, Action, StateContext } from '@ngxs/store'
import { Note } from './notes.actions'
import { patch, updateItem } from '@ngxs/store/operators'

export type NoteModel = {
  id: string
  title: string
  content: string
}

export class NotesStateModel {
  public items: NoteModel[] = [];
}

const defaults: { items: NoteModel[] } = {
  items: [
    {
      id: "1",
      title: "First note",
      content: "First note content"
    },
    {
      id: "2",
      title: "Second note",
      content: "Second note content"
    },
    {
      id: "3",
      title: "Third note",
      content: "Third note content"
    },
    {
      id: "4",
      title: "Fourth note",
      content: "Fourth note content"
    },
    {
      id: "5",
      title: "Fifth note",
      content: "Fifth note content"
    }
  ]
}

@State<NotesStateModel>({
  name: 'notes',
  defaults
})
@Injectable()
export class NotesState {
  @Action(Note.Create)
  create({ getState, setState }: StateContext<NotesStateModel>, { id, title, content }: Note.Create) {
    const state = getState()
    setState({ items: [ ...state.items, { id, title, content } ] })
  }

  @Action(Note.Delete)
  delete({ getState, setState }: StateContext<NotesStateModel>, { id }: Note.Delete) {
    const { items } = getState()
    setState({ items: [ ...items.filter(note => note.id != id) ] })
  }

  @Action(Note.Save)
  save({ setState }: StateContext<NotesStateModel>, { id, title, content }: Note.Save) {
    setState(
      patch({
        items: updateItem((note: any) => note.id === id, patch({ title, content }))
      })
    )
  }
}

