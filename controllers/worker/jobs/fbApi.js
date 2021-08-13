const axios = require('axios');
const io = require("socket.io-client");
const insertQueryTemplate = (values, executionId, projectId) => {
    return `INSERT INTO facebook_api(
        daily_outcomes_curve_spend, 
        daily_outcomes_curve_reach, 
        daily_outcomes_curve_impressions, 
        daily_outcomes_curve_actions, 
        estimate_dau, 
        estimate_mau, 
        estimate_ready, 
        execution_id,
        project_id)
VALUES (
    ${values[0].daily_outcomes_curve[0].spend}, 
    ${values[0].daily_outcomes_curve[0].reach}, 
    ${values[0].daily_outcomes_curve[0].impressions}, 
    ${values[0].daily_outcomes_curve[0].actions}, 
    ${values[0].estimate_dau}, 
    ${values[0].estimate_mau}, 
    ${values[0].estimate_ready},
    '${executionId}',
    '${projectId}')`
};

const job = async (config, facebookSearchBase, socketConfig, executionId, projectId) => {
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
            socket.emit('insertDb', {
                query: insertQueryTemplate(response.data.data, executionId, projectId),
                executionId,
                projectId,
            });
            return response.data;
        } catch (e) {
            console.log('AXIOS ERROR:: ', e);
            return e
        }
    });
};

console.log('ARGV:: ', process.argv);
// [config stringified, currentFbBaseURl, socketConfig stringified, executionId, projectId]
job(process.argv[2], process.argv[3], JSON.parse(process.argv[4]), process.argv[5], process.argv[6]);