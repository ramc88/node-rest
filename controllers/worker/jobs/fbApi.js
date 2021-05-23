const axios = require('axios');
const io = require("socket.io-client");

const job = async (config, facebookSearchBase, socketConfig) => {
    // config must be stringified
    console.log('--------------JOB-----------------')
    if (!socketConfig || !socketConfig.server) {
        throw new Error('Not socket config or server specified');
    };
    if (!facebookSearchBase || typeof facebookSearchBase !== 'string') {
        throw new Error('Invalid facebook search config');
    }

    const socket = io(socketConfig.server);
    socket.on("connect", async () => {
        // either with send()
        const request = {
            method: 'GET',
            //url: `${global.config.FACEBOOK_SEARCH_BASE_URL}/act_${AD_ACCOUNT_ID}/delivery_estimate?access_token=${TOKEN}
            //&include_headers=false&method=get&optimization_goal=REACH&pretty=0&suppress_http_code=1&targeting_spec=${config}`
            url: `${facebookSearchBase}/act_43038309/delivery_estimate?access_token=EAAK9ynZCluTYBAKDxswwEp1ZBZBhag5TwU3NX3fufcSoIeopEUT3GJMFZAZBU5zJLWprqHSY2zNZByHBiizfTONydk6ZBaiHSjCs8iZBRN2OZBemjkg1if9O3yZCT7o7ZC9nosiDMez1OEYAirEOOKlSLXtU8eVuZC2TDQABMQayhzs6VoKItYBq0aEzisVrgv7oK7YZD
            &include_headers=false&method=get&optimization_goal=REACH&pretty=0&suppress_http_code=1&targeting_spec=${config}`
        };
        console.log('URL: ', request.url);
        try {
            const response = await axios(request);
            console.log('AXIOS RESPONSE:: ', response.status, response.data);
            socket.emit('insertDb', response.data)
            return response.data;
        } catch (e) {
            console.log('AXIOS ERROR:: ', e);
            return e
        }
    });
};

console.log('ARGV:: ', process.argv);
job(process.argv[2], process.argv[3], JSON.parse(process.argv[4]));