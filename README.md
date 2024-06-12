# Moe-Counter-Busuanzi

Make your site moe moe 🪄!

A static version of [Moe-Counter](https://github.com/journey-ad/Moe-counter), so you don't need a server to deploy. [Busuanzi](https://busuanzi.ibruce.info/) is used to count page views.

## Demo

![](./assets/image.svg)

Check [Moe-Counter](https://github.com/journey-ad/Moe-counter) to see more themes.

Visit [here](https://liuly.moe) to see the live demo.

## Installation

**Recommended (npm):**

```shell
npm install moe-counter-busuanzi
```

## Usage

- `fetchBusuanziCounter`: get the page view count
- `generateCounterImage`: generate the counter image SVG string

```HTML
<!-- Remember to add type="module" to the script tag -->
<script type="module">
import { generateCounterImage, fetchBusuanziCounter } from "moe-counter-busuanzi";
// Or import it from jsdelivr CDN:
// import { generateCounterImage, fetchBusuanziCounter } from 'https://cdn.jsdelivr.net/npm/moe-counter-busuanzi@2'

const busuanziResult = await fetchBusuanziCounter();
const counterSVGString = generateCounterImage(
  busuanziResult.page_pv,   // site_uv, page_pv, site_pv
  6,                        // The length of the counter
  true                      // use the default theme, moebooru
);
document.getElementById("counter")!.innerHTML = counterSVGString;
</script>
```

You can also import or customize themes. Check all themes under `themes` folder.

```TypeScript
import { moebooruEcchiImages } from 'moe-counter-busuanzi/dist/themes/mbh.js'
const counterSVGString = generateCounterImage(
  busuanziResult.page_pv,
  6,
  false,                 // don't use the default theme
  moebooruEcchiImages    // custom theme
);
```

Notice that the default theme (about 10KB) will be tree-shaken if you are using rollup >= 4.18.0, otherwise you may want to host a modified version.

## Credits

- [Moe-counter](https://github.com/journey-ad/Moe-counter)
- [moebooru](https://github.com/moebooru/moebooru)
- rule34.xxx NSFW
- gelbooru.com NSFW
- [Icons8](https://icons8.com/icons/set/star)
- [Busuanzi](https://busuanzi.ibruce.info/)
- [CMoe-Counter](https://github.com/fumiama/CMoe-Counter)
