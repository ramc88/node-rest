const io = global.io;
const bullInt = require('../../lib/bullIntegration');

const work = () => {
    io.on('connection', (socket) => {
        console.log('connected')
        socket.on('insertDb', (data) => {
            // DATA MUST BE PARSED AND READY TO INSERT TO DB, TABLE_NAME REQUIRED
            console.log('================================================================', data);
            // console.log('data to insert :', JSON.stringify(data));
            // INSERT THE DATA USING global.mySqlPool
            global.mySqlPool.query(data.query, async (error, results, fields) => {
                console.log('--------1------------------');
                if (error || results.affectedRows === 0) {
                    console.log('--------2------------------');
                    // IF INSERT FAILS, JOB SHOULD BE MARKED AS FAILED
                    console.log(`Error insertig to db: ${error ? error : 'no row affected'}`);
                    throw new Error(error);
                } else {
                    console.log('--------3------------------', data.executionId);
                    // ENQUEUE JOBID IN PM2_DELETE_QUEUE AND DELETE PROCESS
                    await bullInt.addToQueue('deleteJobs', { id: data.executionId });
                    console.log('The solution is: ', results);
                };
            });
        });
    });
    
    io.on('disconnect', () => { console.log('disconnect') });
};

module.exports = {
    work
}