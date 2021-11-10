const SearchSuggestions = ({
    displayCities,
    displayList,
    handleDisplayCity,
    errorMessage,
}) => {
    return (
        <ul
            className={'search-sugg ' + displayList.fadeIN}
            style={{display: displayList.display}}>
            {errorMessage && (
                <p className='search-sugg__error'>
                    Wrong input, please try again.
                </p>
            )}
            {displayCities.map(city => (
                <li
                    className='search-sugg__item'
                    key={city.rank}
                    onClick={() => handleDisplayCity(city.rank)}>
                    {city.city}, {city.state}
                </li>
            ))}
        </ul>
    );
};

export default SearchSuggestions;
