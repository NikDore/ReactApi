import React, { useState, useEffect, useCallback } from 'react';
import { SearchFormProps, SearchFormState } from './type';
import { ErrorButton } from '../../../../components/ErrorButton/ErrorButton';

export default function SearchForm({ onValueChange }: SearchFormProps) {
    const localStorageInputValue = localStorage.getItem('inputValue') || '';

    const [inputValue, setInputValue] = useState<SearchFormState['inputValue']>(localStorageInputValue);

    useEffect(() => {
        localStorage.setItem('inputValue', inputValue);
    }, [inputValue]);

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            onValueChange(inputValue.trim());
        },
        [onValueChange, inputValue]
    );

    return (
        <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
                <label>
                    <input className="search_input" type="text" value={inputValue} onChange={handleChange} />
                </label>
                <input className="search_btn" type="submit" value="Search" />
            </form>
            <ErrorButton />
        </div>
    );
}
