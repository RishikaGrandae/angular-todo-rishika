import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Form
  public todoTitle: string = '';
  public Catagories: any[];
  public Todos: any[];
  public filteredTodos: any[];
  public viewMode: string = 'default';
  public showForm: boolean = false;
  public selectedCategory: string;

  constructor() {
    this.Catagories = ['Test'];
    this.Todos = []
  }

  updateView(mode: string) {
    this.viewMode = mode;
  }

  onFormReset() {
    this.viewMode = 'default';
  }

  handleCategorySelect(t) {
    this.selectedCategory = t;
    this.filteredTodos = this.Todos.filter(todo => todo.selectedCategory == this.selectedCategory)
  }

  onAddTodo() {
    switch (this.viewMode) {
      case 'form-cat':
        this.Catagories.push({ title: this.todoTitle, isSelected: false });
        this.todoTitle = '';
        this.viewMode = 'default';
        break;
      case 'form-todo':
        // this.Todos[].push({ title: this.todoTitle, isSelected: false });
        this.Todos.push({
          title: this.todoTitle,
          isSelected: false,
          selectedCategory: this.selectedCategory
        });
        this.filteredTodos = this.Todos.filter(todo => todo.selectedCategory == this.selectedCategory)
        this.todoTitle = '';
        this.viewMode = 'default';
        break;
      default:
        break;
    }
  }
}
