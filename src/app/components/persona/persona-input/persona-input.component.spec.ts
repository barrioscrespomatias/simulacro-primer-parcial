import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaInputComponent } from './persona-input.component';

describe('PersonaInputComponent', () => {
  let component: PersonaInputComponent;
  let fixture: ComponentFixture<PersonaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
