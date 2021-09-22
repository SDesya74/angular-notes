import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoteListComponent } from './note-list/note-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogNoteComponent } from './blog-note/blog-note.component';
import { NewNoteComponent } from './new-note/new-note.component'
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment'
import { NotesState } from 'state/notes.state';
import { EditNoteComponent } from './edit-note/edit-note.component'

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    BlogComponent,
    BlogNoteComponent,
    NewNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([ NotesState ], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
