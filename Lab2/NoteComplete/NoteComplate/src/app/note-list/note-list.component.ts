

import {Component} from "@angular/core";
import {NoteTemplate} from "../services/note-template";

@Component({
  selector : "notelist",
  templateUrl : './note-list.component.html',
  styleUrls : ['./note-list.component.css']



})

export class NotelistComponent {


  public notes : NoteTemplate[];

  constructor(){
    this.notes = [];

    this.notes.push(new NoteTemplate(1,"smith", "THis is the first note"));
    this.notes.push(new NoteTemplate(2,"Evan", "I can take notes?"))

  }


}
