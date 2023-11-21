import { ReactNode, useCallback, useEffect, useState } from 'react';
import CardsField from './components/CardsField/CardsField';
import SearchForm from './components/SearchForm/SearchForm';
import { CardsPageState } from './type';
import { getCardsData } from '../../api/PokemonApi';

export function CardsPage(): ReactNode {
    const localStorageInputValue = localStorage.getItem('value') || '';

    const [value, setInputValue] = useState<CardsPageState['value']>(localStorageInputValue);
    const [isDataLoaded, setIsDataLoaded] = useState<CardsPageState['isDataLoaded']>(false);
    const [cardsData, setCardsData] = useState<CardsPageState['cardsData']>({
        data: [],
        page: 0,
        pageSize: 0,
        count: 0,
        totalCount: 0,
    });

    const handleValueChange = useCallback((value: string): void => {
        setInputValue(value);
    }, []);

    const getDataFromApi = useCallback(async (value: string): Promise<void> => {
        try {
            setIsDataLoaded(false);

            let data = null;

            if (value === '') {
                data = await getCardsData();
            } else {
                data = await getCardsData(value);
            }

            setCardsData(data);
            setIsDataLoaded(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    useEffect(() => {
        getDataFromApi(value);
    }, [getDataFromApi, value]);

    return (
        <div className="cards-page">
            <SearchForm onValueChange={handleValueChange} />
            <CardsField cardsData={cardsData} isDataLoaded={isDataLoaded} />
        </div>
    );
}
