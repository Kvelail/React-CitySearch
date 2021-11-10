import {useEffect, useRef, useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import SearchSuggestions from './SearchSuggestions';

const SearchCity = ({
    cities,
    handleDisplayCity,
    displayList,
    setDisplayList,
    searchTerm,
    setSearchTerm,
}) => {
    const [displayCities, setDisplayCities] = useState([]);
    const isFirstRun = useRef(true);
    const [errorMessage, setErrorMessage] = useState(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        const matches = cities.filter(place => {
            const regex = new RegExp(searchTerm, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        });

        matches.length === 0 ? setErrorMessage(true) : setErrorMessage(false);

        setDisplayCities(matches);

        setDisplayList(prevSett => ({
            ...prevSett,
            display: 'block',
            fadeIN: 'fade-in',
        }));

        if (searchTerm === '') {
            setDisplayCities([]);
            setDisplayList(prevSett => ({
                ...prevSett,
                display: 'none',
                fadeIN: null,
            }));
        }
    }, [searchTerm, cities, setDisplayList]);

    return (
        <div className='search-city'>
            <form className='search-city__form'>
                <input
                    type='text'
                    placeholder='Enter a city name or state (US only)'
                    className='search-city__input'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    autoFocus
                />
                <span className='search-city__icon'>
                    <FaSearch />
                </span>
            </form>
            <SearchSuggestions
                displayCities={displayCities}
                displayList={displayList}
                handleDisplayCity={handleDisplayCity}
                errorMessage={errorMessage}
            />
        </div>
    );
};

export default SearchCity;
