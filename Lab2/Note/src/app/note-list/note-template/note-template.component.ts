import {Component, Input, Output} from "@angular/core";
import {NoteTemplate} from "../../services/note-template";

@Component({

  selector: 'note-template',
  templateUrl: './note-template.component.html'

})

export class NoteTemplateComponent {

  @Input()
  note : NoteTemplate;





}
