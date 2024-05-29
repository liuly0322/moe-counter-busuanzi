import { moebooruImages } from './themes/mb.js';
// Moe-counter, MIT License
// https://github.com/journey-ad/Moe-counter
const counterSVGTemplate = (imageStrs) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="270" height="100" version="1.1"><title>Moe Count</title><g>${imageStrs.map((str, i) => `<image x="${45 * i}" y="0" width="45" height="100" xlink:href="${str}"></image>`).join('')}</g></svg>`;
export function generateCounterImage(count, length, useDefaultTheme, theme) {
    if (useDefaultTheme) {
        theme = moebooruImages;
    }
    const rawStr = count.toString().padStart(length, '0');
    const countStr = rawStr.length > length ? '9'.repeat(length) : rawStr;
    const imageStrs = countStr.split('').map(digit => theme[parseInt(digit)]);
    return counterSVGTemplate(imageStrs);
}
export async function fetchBusuanziCounter() {
    const busuanziCallbackID = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
    const url = "//busuanzi.ibruce.info/busuanzi?jsonpCallback=" + busuanziCallbackID;
    const scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript", scriptTag.defer = !0, scriptTag.src = url, document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
    return new Promise((resolve) => {
        window[busuanziCallbackID] = (result) => {
            resolve(result), scriptTag?.parentElement?.removeChild(scriptTag);
        };
    });
}
