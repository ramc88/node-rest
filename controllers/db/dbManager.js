const io = global.io;

const work = () => {
    io.on('connection', (socket) => {
        console.log('connected')
        socket.on('insertDb', (data) => {
            // DATA MUST BE PARSED AND READY TO INSERT TO DB, TABLE_NAME REQUIRED
            console.log('================================================================', data);
            // console.log('data to insert :', JSON.stringify(data));
            // INSERT THE DATA USING global.mySqlPool
            global.mySqlPool.query(data, function (error, results, fields) {
                if (error) throw new Error(error);
                console.log('The solution is: ', results);
            });
            // ENQUEUE JOBID IN PM2_DELETE_QUEUE AND DELETE PROCESS
        })
    });
    
    io.on('disconnect', () => { console.log('disconnect') });
        
};

module.exports = {
    work
}