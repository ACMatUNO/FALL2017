

import {Component} from "../../../../NoteComplete/node_modules/@angular/core/src/metadata/directives";
import {NoteTemplate} from "../services/note-template";

@Component({
  selector: "note-list",
  templateUrl: './note-list.component.html',
  styleUrls : ['./note-list.component.css']


})

export class NoteListComponent {


  public notes : NoteTemplate[];

  constructor(){
    this.notes = [];

    this.notes.push(new NoteTemplate(1,"smith", "THis is the first note"));
    this.notes.push(new NoteTemplate(2,"Evan", "I can take notes?"))

  }

}
