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
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Angular Golden Template',
    );
    expect(compiled.textContent).toContain(
      'Standardized Clean Architecture & Tailwind CSS',
    );
    expect(compiled.textContent).toContain('Atomic Components');
    expect(compiled.textContent).toContain('Testing & DevOps');
  });
});
