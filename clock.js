const clock = document.querySelector("#clock");

// const date = new Date();
// date.getDate();
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getMinutes();
// date.getSeconds();

const getClock = (e) => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    const s = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${h}:${m}:${s}`;
}
getClock(); // 한번 실행하고 그 다음부터 1초마다 실행
setInterval(getClock , 1000); // 로딩 된 후 1초 지나서부터 실행이 시작됨

