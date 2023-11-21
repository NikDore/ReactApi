import { PokemonCard } from '../../types/types';

export interface CardsPageState {
    value: string;
    isDataLoaded: boolean;
    cardsData: PokemonCard;
}
