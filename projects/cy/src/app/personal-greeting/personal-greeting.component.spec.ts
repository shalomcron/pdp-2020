import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGreetingComponent } from './personal-greeting.component';

describe('PersonalGreetingComponent', () => {
  let component: PersonalGreetingComponent;
  let fixture: ComponentFixture<PersonalGreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalGreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
