export class NoteTemplate {
  constructor(public id : number, author : string, body: string) {
    this.body = body;
    this.author = author

  }

  author : string;
  body : string;




}
