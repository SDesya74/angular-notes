import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BlogComponent } from './blog/blog.component'
import { EditNoteComponent } from './edit-note/edit-note.component'
import { NewNoteComponent } from './new-note/new-note.component'

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'new', component: NewNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
