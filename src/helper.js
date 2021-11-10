export const API_KEY =
    'pk.eyJ1Ijoia3ZlbGFpbCIsImEiOiJja3Y4Z2hpbHIxemZzMm5zMzFsNTRndXdmIn0.1_X2iTEbGkMi5Xk1r0pbEw';

const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default numberWithCommas;
