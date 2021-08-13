const mysql = require('mysql2/promise');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const filesDir = 'csvFiles';
const { uuid } = require('uuidv4');

const fbApiStandarQuery = 'select * from facebook_api';
const fbApiFilterIdQuery = (projectId, startDate, endDate) => 
    `select * from facebook_api where project_id = '${projectId}' ${startDate ? ` and ts >= '${startDate}'` : ''} ${endDate ? ` and ts <= '${endDate}'`: ''}`;

const credentials = process.env.MYSQL ? JSON.parse(process.env.MYSQL) : undefined || global.config.db.mysql;

const exportReportByQuery = async (query, params) => {
    const fullPathDir = `${__dirname}/../../${filesDir}`;
    if (!fs.existsSync(fullPathDir)){
        fs.mkdirSync(fullPathDir);
    }
    const connection = await mysql.createConnection(credentials);

    const [rows, fields] = await connection.execute(query, params || []);
    const csvFields = fields.map(field => field.name);
    const json2csvParser = new Json2csvParser({ csvFields });
    const csv = json2csvParser.parse(rows);
    const filename = uuid();
    await connection.end();

    fs.writeFileSync(`${fullPathDir}/${filename}.csv`, csv);

    return `${fullPathDir}/${filename}.csv`;
};

const exportReportFbApi = async (projectId, startDate, endDate) => {
    return exportReportByQuery(fbApiFilterIdQuery(projectId, startDate, endDate));
};

const deleteReport = (fileName) => {
    fs.rmSync(fileName);
}

module.exports = {
    exportReportByQuery,
    exportReportFbApi,
    deleteReport,
}