import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  Task,
  addTask,
  doneCount,
  removeTask,
  toggleTask,
} from './domain/task.logic';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly initialTasks: Task[] = [
    { id: 'bootstrap', title: 'Set up lint, tests and formatter', done: true },
    { id: 'feature', title: 'Build first user-facing feature', done: false },
  ];

  title = '';
  tasks: Task[] = [...this.initialTasks];

  get completedTasks(): number {
    return doneCount(this.tasks);
  }

  add(): void {
    this.tasks = addTask(this.tasks, this.title);
    this.title = '';
  }

  toggle(taskId: string): void {
    this.tasks = toggleTask(this.tasks, taskId);
  }

  remove(taskId: string): void {
    this.tasks = removeTask(this.tasks, taskId);
  }
}
