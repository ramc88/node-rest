const io = global.io;

const work = () => {
    io.on('connection', (socket) => {
        console.log('connected')
        socket.on('insertDb', (data) => {
            console.log('================================================================');
            console.log('data to insert :', data);
        })
    });
    
    io.on('disconnect', () => { console.log('disconnect') });
        
};

module.exports = {
    work
}