import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('renders title and initial summary', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Task Board');
    expect(compiled.textContent).toContain('1 of 2 tasks done');
  });

  it('adds a task through the component API', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.title = 'Write integration tests';
    component.add();

    expect(
      component.tasks.some(task => task.title === 'Write integration tests'),
    ).toBeTrue();
    expect(component.completedTasks).toBe(1);
  });
});
