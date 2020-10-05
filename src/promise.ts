//GeoPos//
/*
const getGeoPos = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

getGeoPos()
  .then((successLog) => console.log(successLog))
  .catch((errorLog: PositionError) => console.log(errorLog.message));
*/

//Timer//
const setTimer = (duration: number, isTimer: boolean) => {
  const promise = new Promise((resolve, reject) => {
    if (isTimer) {
      setTimeout(() => {
        resolve(`Done with ${duration}`);
      }, duration);
    } else {
      reject("Timer set to off");
    }
  });
  return promise;
};
/*setTimer(1000, false).then(
  (log) => console.log(log),
  (errLog) => console.log(errLog)
);

setTimer(1000, true).then(
  (log) => console.log(log),
  (elseLog) => console.log(elseLog)
);*/

const setTimerAsync = (duration: number, timerNum: number) => {
  const promise: Promise<string> = new Promise((success, reject) => {
    if (timerNum > 2) {
      setTimeout(() => success(timerNum.toString()), duration);
    } else {
      reject("Less then true");
    }
  });
  return promise;
};

const twoTimers = async () => {
  try {
    const timer1: string = await setTimerAsync(400, 3);
    console.log("timer:" + timer1);
    const timer2 = await setTimer(1000, true);
    console.log("timer2: " + timer2);
  } catch (error) {
    console.log(error);
  }
  console.log("After try catch");
};

// twoTimers();

// Who faster among promises //
Promise.race([setTimerAsync(4444, 3), setTimerAsync(2000, 1)])
  .then((result: string) => console.log(result))
  .catch((result) => console.log(result));

//All messages //
Promise.all([setTimerAsync(100, 3), setTimerAsync(200, 4)])
  .then((result: string[]) => console.log(result))
  .catch((error) => console.log(error));

//All messages //
Promise.allSettled([
  setTimerAsync(100, 2),
  setTimerAsync(200, 4),
]).then((result) => console.log(result));
