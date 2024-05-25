# Moe-Counter-Busuanzi

Make your site moe moe 🪄!

It's a fully static version of [Moe-Counter](https://github.com/journey-ad/Moe-counter) that uses [Busuanzi](https://busuanzi.ibruce.info/) to count page views.

## Demo

![](./assets/image.svg)

Visit [here](https://liuly.moe) to see the live demo.

## Usage

```shell
npm install moe-counter-busuanzi
```

- `fetchBusuanziCounter`: get the page view count
- `generateCounterImage`: generate the counter image SVG string, then you can put in some HTML element

```typescript
import { generateCounterImage, fetchBusuanziCounter } from "moe-counter-busuanzi";

const busuanziResult = await fetchBusuanziCounter();
const counterSVGString = generateCounterImage(busuanziResult.page_pv);
document.getElementById("counter").innerHTML = counterSVGString;
```

TypeScript is supported. `fetchBusuanziCounter` is an async function that returns a `Promise<BusuanziResult>`.

```typescript
type BusuanziResult = {
  site_uv: number;
  page_pv: number;
  site_pv: number;
};
```

## Credits

- [Moe-counter](https://github.com/journey-ad/Moe-counter)
- [moebooru](https://github.com/moebooru/moebooru)
- rule34.xxx NSFW
- gelbooru.com NSFW
- [Icons8](https://icons8.com/icons/set/star)
- [CMoe-Counter](https://github.com/fumiama/CMoe-Counter)
