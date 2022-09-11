import { INoteRequestDTO } from '../dtos/NoteRequestDTO';

export class Note {
  readonly userId: number;
  readonly title: string;
  readonly text: string;

  constructor(props: INoteRequestDTO) {
    this.userId = props.userId;
    this.title = props.title;
    this.text = props.text;
  }
}
