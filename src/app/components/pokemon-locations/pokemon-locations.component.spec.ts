import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLocationsComponent } from './pokemon-locations.component';

describe('PokemonLocationsComponent', () => {
  let component: PokemonLocationsComponent;
  let fixture: ComponentFixture<PokemonLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
