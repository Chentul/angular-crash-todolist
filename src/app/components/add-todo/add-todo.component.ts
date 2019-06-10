import { 
  Component, 
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.addTodo.emit({
      userId: 1,
      id: null,
      title: this.title, 
      completed: false, 
    });
  }

}
