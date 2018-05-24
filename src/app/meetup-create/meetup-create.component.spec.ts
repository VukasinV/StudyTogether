import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupCreateComponent } from './meetup-create.component';

describe('MeetupCreateComponent', () => {
  let component: MeetupCreateComponent;
  let fixture: ComponentFixture<MeetupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
