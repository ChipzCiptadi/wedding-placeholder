"use strict";

const $ = (id) => document.getElementById(id);
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const weddingURL = "https://hi.possiblewedding.com/ciptadi-widya";
const dear = params.dear ?? "dearest";

$("invitation").href = weddingURL + "?u=" + dear;

let today = new Date();
const dday = 1651683600000; // 2022-05-05 00:00:00.000

if (today.getTime() < dday) {
    $("kidung").style.display = "none";
    $("zoom").style.display = "none";
}
