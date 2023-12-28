import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxpracComponent } from './ngrxprac.component';

describe('NgrxpracComponent', () => {
  let component: NgrxpracComponent;
  let fixture: ComponentFixture<NgrxpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxpracComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgrxpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
