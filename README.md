# Moe-Counter-Busuanzi

Make your site moe moe 🪄!

A static version of [Moe-Counter](https://github.com/journey-ad/Moe-counter), so you don't have to deploy it on a server.

[Busuanzi](https://busuanzi.ibruce.info/) is used to count page views.

## Demo

![](./assets/image.svg)

Visit [here](https://liuly.moe) to see the live demo.

## Installation

```shell
npm install moe-counter-busuanzi
```

You can also self-host `dist/index.js` along with your site, or use a CDN.

## Usage

- `fetchBusuanziCounter`: get the page view count
- `generateCounterImage`: generate the counter image SVG string, then you can put in some HTML element

```HTML
<!-- We are writing es module code, so wrap it in a <script type="module"></script> tag. -->
<script type="module">
import { generateCounterImage, fetchBusuanziCounter } from "moe-counter-busuanzi";
// If you want to import it from CDN:
// import { generateCounterImage, fetchBusuanziCounter } from 'https://cdn.jsdelivr.net/npm/moe-counter-busuanzi/+esm'

// You can also import/use custom themes, which is just a string[]
import { gelbooruImages } from "moe-counter-busuanzi/themes/gb.js";

const busuanziResult = await fetchBusuanziCounter();
// simply generate the counter image
// const counterSVGString = generateCounterImage(busuanziResult.page_pv);
// or customize options
const counterSVGString = generateCounterImage(busuanziResult.page_pv, {
  length: 6, // The length of the counter, default is 6
  theme: gelbooruImages // The theme of the counter, default is moebooruImages
});
document.getElementById("counter")!.innerHTML = counterSVGString;
</script>
```

TypeScript is supported.

```typescript
type BusuanziResult = {
  site_uv: number;
  page_pv: number;
  site_pv: number;
};

type generateCounterImageOptions = {
  length?: number;
  theme?: string[];
};
```

## Credits

- [Moe-counter](https://github.com/journey-ad/Moe-counter)
- [moebooru](https://github.com/moebooru/moebooru)
- rule34.xxx NSFW
- gelbooru.com NSFW
- [Icons8](https://icons8.com/icons/set/star)
- [Busuanzi](https://busuanzi.ibruce.info/)
- [CMoe-Counter](https://github.com/fumiama/CMoe-Counter)
