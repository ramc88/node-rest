const axios = require('axios');

const job = async (config) => {
    console.log
    const request = {
        method: 'GET',
        //url: `${global.config.FACEBOOK_SEARCH_BASE_URL}/act_${AD_ACCOUNT_ID}/delivery_estimate?access_token=${TOKEN}
        //&include_headers=false&method=get&optimization_goal=REACH&pretty=0&suppress_http_code=1&targeting_spec=${JSON.stringify(config)}`
        url: `${global.config.FACEBOOK_SEARCH_BASE_URL}/act_43038309/delivery_estimate?access_token=EAAK9ynZCluTYBAKDxswwEp1ZBZBhag5TwU3NX3fufcSoIeopEUT3GJMFZAZBU5zJLWprqHSY2zNZByHBiizfTONydk6ZBaiHSjCs8iZBRN2OZBemjkg1if9O3yZCT7o7ZC9nosiDMez1OEYAirEOOKlSLXtU8eVuZC2TDQABMQayhzs6VoKItYBq0aEzisVrgv7oK7YZD
        &include_headers=false&method=get&optimization_goal=REACH&pretty=0&suppress_http_code=1&targeting_spec=${JSON.stringify(config)}`
    };

    try {
        const response = await axios(request);
        console.log('AXIOS RESPONSE:: ', response.status, response.data);
        return response.data;
    } catch (e) {
        console.log('AXIOS ERROR:: ', e);
        return e
    }
};

module.exports = {
    job,
};