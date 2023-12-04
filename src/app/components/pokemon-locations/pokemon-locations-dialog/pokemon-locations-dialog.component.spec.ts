import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLocationsDialogComponent } from './pokemon-locations-dialog.component';

describe('PokemonLocationsDialogComponent', () => {
  let component: PokemonLocationsDialogComponent;
  let fixture: ComponentFixture<PokemonLocationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLocationsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonLocationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
