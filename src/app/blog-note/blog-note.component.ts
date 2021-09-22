import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-blog-note',
  templateUrl: './blog-note.component.html',
  styleUrls: [ './blog-note.component.sass' ]
})
export class BlogNoteComponent implements OnInit {

  @Input() id: string
  @Input() title: string
  @Input() content: string

  constructor() {
  }

  ngOnInit(): void {

  }

}
