const pm2 = require('pm2');

const listProcess = function () {
    return new Promise((resolve, reject) => {
        pm2.connect(function (err) {
            if (err) {
                console.error(err);
                //process.exit(2);
                reject(err)
            }

            pm2.list(function (err, apps) {
                pm2.disconnect();   // Disconnects from PM2
                if (err) {
                    reject(err)
                } else {
                    resolve(apps)
                }
            });
        });
    });
}

const deleteProcess = function (name) {
    return new Promise((resolve, reject) => {
        pm2.connect(function (err) {
            if (err) {
                console.error(err);
                //process.exit(2);
                reject(err)
            }

            pm2.delete(name, function (err, apps) {
                pm2.disconnect();   // Disconnects from PM2
                if (err) {
                    reject(err)
                } else {
                    resolve(apps)
                }
            });
        });
    })
}

const createProcess = function (params) {
    console.log('file path: ', params)
    return new Promise((resolve, reject) => {
        pm2.connect(function (err) {
            if (err) {
                console.error(err);
                reject(err)
            }
            pm2.start({
                script: params.file,         // Script to be run
                args: params.args,
                instances: 1,                // Optional: Scales your app by 4
                max_memory_restart: '300M',   // Optional: Restarts your app if it reaches 100Mo
                env: params.env,
                name: params.name,
                autorestart: params.autorestart || false,
                interpreter: params.interpreter,
                log_date_format: "YYYY-MM-DD HH:mm:ss"
            }, function (err, apps) {
                console.log('PM2------', err, apps);
                pm2.disconnect();   // Disconnects from PM2
                if (err) {
                    reject(err)
                } else {
                    resolve(apps)
                }
            });
        });
    })
}

module.exports = {
    createProcess,
    listProcess,
    deleteProcess
}