import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchCity from '../SearchCity';
import SearchInfo from '../SearchInfo';
import SearchMap from '../SearchMap';
import './App.css';

const App = () => {
    const [cities, setCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayList, setDisplayList] = useState({
        display: 'none',
        fadeIN: null,
    });
    const [cityToDisplay, setCityToDisplay] = useState({
        city: '',
        state: '',
        population: '',
        growth_from_2000_to_2013: '',
        latitude: '',
        longitude: '',
    });
    const [displayInfo, setDisplayInfo] = useState({
        display: 'none',
        fadeIN: null,
    });
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 4,
    });

    const handleDisplayCity = id => {
        const city = cities.find(city => city.rank === id);

        setCityToDisplay(city);

        setDisplayList(prevSett => ({
            ...prevSett,
            display: 'none',
            fadeIN: null,
        }));

        setDisplayInfo(prevSett => ({
            ...prevSett,
            display: 'block',
            fadeIN: 'fade-in',
        }));

        setSearchTerm('');

        setViewport(prev => ({
            ...prev,
            latitude: city.latitude,
            longitude: city.longitude,
        }));
    };

    useEffect(() => {
        const getCities = async () => {
            try {
                const endpoint =
                    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

                const data = await (await axios.get(endpoint)).data;

                setCities(data);
            } catch (e) {
                console.error(e);
            }
        };

        getCities();
    }, []);

    return (
        <div className='container'>
            <SearchCity
                cities={cities}
                handleDisplayCity={handleDisplayCity}
                displayList={displayList}
                setDisplayList={setDisplayList}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <SearchInfo
                cityToDisplay={cityToDisplay}
                displayInfo={displayInfo}
            />
            <SearchMap
                displayInfo={displayInfo}
                viewport={viewport}
                setViewport={setViewport}
            />
        </div>
    );
};

export default App;
