import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirassaComponent } from './dirassa.component';

describe('DirassaComponent', () => {
  let component: DirassaComponent;
  let fixture: ComponentFixture<DirassaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirassaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
