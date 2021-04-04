"use strict";
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
const setTimerAsync = (duration, timerNum) => {
    const promise = new Promise((success, reject) => {
        if (timerNum > 2) {
            setTimeout(() => success(timerNum.toString()), duration);
        }
        else {
            reject("Less then true");
        }
    });
    return promise;
};
const twoTimers = async () => {
    try {
        const timer1 = await setTimerAsync(400, 3);
        console.log("timer:" + timer1);
        const timer2 = await setTimer(1000, true);
        console.log("timer2: " + timer2);
    }
    catch (error) {
        console.log(error);
    }
    console.log("After try catch");
};
Promise.race([setTimerAsync(4444, 3), setTimerAsync(2000, 1)])
    .then((result) => console.log(result))
    .catch((result) => console.log(result));
Promise.all([setTimerAsync(100, 3), setTimerAsync(200, 4)])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
Promise.allSettled([
    setTimerAsync(100, 2),
    setTimerAsync(200, 4),
]).then((result) => console.log(result));
