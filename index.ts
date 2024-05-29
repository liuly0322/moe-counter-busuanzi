import { moebooruImages } from './themes/mb.js';

// Moe-counter, MIT License
// https://github.com/journey-ad/Moe-counter
const counterSVGTemplate = (imageStrs: string[]) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="270" height="100" version="1.1"><title>Moe Count</title><g>${imageStrs.map((str, i) => `<image x="${45 * i}" y="0" width="45" height="100" xlink:href="${str}"></image>`).join('')}</g></svg>`;

export type generateCounterImageOptions = {
    length?: number,
    theme?: string[]
}

export function generateCounterImage(count: number, generateOptions?: generateCounterImageOptions) {
    if (generateOptions === undefined) {
        generateOptions = {};
    }
    generateOptions.length = generateOptions.length || 6;
    generateOptions.theme = generateOptions.theme || moebooruImages;

    const rawStr = count.toString().padStart(generateOptions.length, '0')
    const countStr = rawStr.length > generateOptions.length ? '9'.repeat(generateOptions.length) : rawStr
    const imageStrs = countStr.split('').map(digit => generateOptions.theme![parseInt(digit)]);
    return counterSVGTemplate(imageStrs);
}

export type BusuanziResult = {
    site_uv: number,
    page_pv: number,
    site_pv: number
}

export async function fetchBusuanziCounter(): Promise<BusuanziResult> {
    const busuanziCallbackID = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
    const url = "//busuanzi.ibruce.info/busuanzi?jsonpCallback=" + busuanziCallbackID;
    const scriptTag = document.createElement("script")
    scriptTag.type = "text/javascript", scriptTag.defer = !0, scriptTag.src = url, document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
    return new Promise((resolve) => {
        (window as any)[busuanziCallbackID] = (result: BusuanziResult) => {
            resolve(result), scriptTag?.parentElement?.removeChild(scriptTag)
        }
    })
}
