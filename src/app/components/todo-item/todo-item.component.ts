import { 
  Component, 
  OnInit, 
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  setClasses(): Object {
    return {
      todo: true,
      'is-completed': this.todo.completed
    };
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.onToggle(todo).subscribe((todo) => {
      console.log(todo)
    });
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

}
