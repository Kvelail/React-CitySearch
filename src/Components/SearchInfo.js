import numberWithCommas from '../helper';

const SearchInfo = ({cityToDisplay, displayInfo}) => {
    return (
        <div
            className={'search-info ' + displayInfo.fadeIN}
            style={{display: displayInfo.display, animationDuration: '1s'}}>
            <div className='search-info__box'>
                <div className='search-info-box__header'>
                    <h3 className='search-info-box__city'>
                        {cityToDisplay.city}
                    </h3>
                    <h3 className='search-info-box__state'>
                        {cityToDisplay.state}
                    </h3>
                </div>
                <ul className='search-info-box__list'>
                    <li className='search-info-box__item'>
                        Population :
                        <span className='search-info-box__span'>
                            {numberWithCommas(cityToDisplay.population)}
                        </span>
                    </li>
                    <li className='search-info-box__item'>
                        Growth From 2000 To 2013 :
                        <span className='search-info-box__span'>
                            {cityToDisplay.growth_from_2000_to_2013}
                        </span>
                    </li>
                    <li className='search-info-box__item'>
                        Latitude :
                        <span className='search-info-box__span'>
                            {cityToDisplay.latitude}
                        </span>
                    </li>
                    <li className='search-info-box__item'>
                        Longitude :
                        <span className='search-info-box__span'>
                            {cityToDisplay.longitude}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchInfo;
