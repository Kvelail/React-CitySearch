import ReactMapGL from 'react-map-gl';
import {API_KEY} from '../helper';

const SearchMap = ({displayInfo, viewport, setViewport}) => {
    return (
        <div
            className={'search-map__box ' + displayInfo.fadeIN}
            style={{
                display: displayInfo.display,
                animationDuration: '1s',
            }}>
            <ReactMapGL
                {...viewport}
                width='100%'
                height='100%'
                onViewportChange={viewport => setViewport(viewport)}
                mapboxApiAccessToken={API_KEY}
            />
        </div>
    );
};

export default SearchMap;
