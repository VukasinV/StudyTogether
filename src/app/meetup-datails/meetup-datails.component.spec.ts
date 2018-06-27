import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupDetailsComponent } from './meetup-datails.component';

describe('MeetupDatailsComponent', () => {
  let component: MeetupDetailsComponent;
  let fixture: ComponentFixture<MeetupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
