"use strict";
const getGeoPos = () => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((success) => {
            resolve(success);
        }, (error) => {
            reject(error);
        });
    });
    return promise;
};
getGeoPos()
    .then((successLog) => console.log(successLog))
    .catch((errorLog) => console.log(errorLog.message));
const setTimer = (duration, isTimer) => {
    const promise = new Promise((resolve, reject) => {
        if (isTimer) {
            setTimeout(() => {
                resolve(`Done with ${duration}`);
            }, duration);
        }
        else {
            reject("Timer set to off");
        }
    });
    return promise;
};
setTimer(1000, false).then((log) => console.log(log), (errLog) => console.log(errLog));
setTimer(1000, true).then((log) => console.log(log), (elseLog) => console.log(elseLog));
