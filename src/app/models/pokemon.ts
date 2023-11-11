export interface Pokemon {
    url: string;
    id: number;
    order: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    weight: number;
    sprites: any;
    location_area_encounters: string;
}