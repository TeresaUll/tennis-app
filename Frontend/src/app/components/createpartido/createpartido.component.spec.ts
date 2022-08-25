import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepartidoComponent } from './createpartido.component';

describe('CreatepartidoComponent', () => {
  let component: CreatepartidoComponent;
  let fixture: ComponentFixture<CreatepartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
