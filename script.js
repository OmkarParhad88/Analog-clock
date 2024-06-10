setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotetion = 30 * htime + mtime / 2;
    mrotetion = 6 * mtime;
    srotetion = 6 * stime;

    hour.style.transform = `rotate(${hrotetion}deg)`;
    minute.style.transform = `rotate(${mrotetion}deg)`;
    second.style.transform = `rotate(${srotetion}deg)`;
}, 1000);
