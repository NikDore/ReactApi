import React, { useState, useEffect, useCallback } from 'react';
import { SearchFormProps, SearchFormState } from './type';
import { ErrorButton } from '../../../../components/ErrorButton/ErrorButton';

export default function SearchForm({ onValueChange }: SearchFormProps) {
    const localStorageInputValue = localStorage.getItem('value') || '';

    const [value, setInputValue] = useState<SearchFormState['value']>(localStorageInputValue);

    useEffect(() => {
        localStorage.setItem('value', value);
    }, [value]);

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value);
    }, []);

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            onValueChange(value.trim());
        },
        [onValueChange, value]
    );

    return (
        <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
                <label>
                    <input className="search_input" type="text" value={value} onChange={handleChange} />
                </label>
                <input className="search_btn" type="submit" value="Search" />
            </form>
            <ErrorButton />
        </div>
    );
}
