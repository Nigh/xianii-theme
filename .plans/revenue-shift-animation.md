# Revenue Bar Chart: True Left-Shift Animation

## Problem

Current code keys bars by index `(i)`, so Svelte morphs each bar's height in-place. No visual left-translation — each bar changes its own height independently.

## Solution: 13-bar overflow trick

Use CSS `transform: translateX` on the bar row to physically slide all bars left, then grow the new bar from 0 on the right.

### How it works

| Phase | Items | Translate | Visual |
|-------|-------|-----------|--------|
| Idle  | 12    | 0         | bars 0-11 |
| Shift | 13    | -100%/13  | bars 1-12 visible (13th revealed, 0th hidden) |
| Reset | 12    | 0 (instant) | bars 1-12 same position (0th removed) |
| Grow  | 12    | 0         | last bar height 0 -> target |

1. Overflow-hidden container clips to 12-bar width
2. Append 13th bar at height=0 (hidden by overflow)
3. `translateX(-100%/13)` slides row left by exactly 1 bar width, reveals 13th bar
4. After translate: remove 1st bar + reset translate to 0 (synchronous batch, no flash)
5. Grow last bar height from 0 to target value

### Changes to `apps/demo-page/src/App.svelte`

**Script** — replace `revenueBars`/`revenueNext`/`onMount`:

```ts
let revenueBars = $state([40, 65, 45, 80, 55, 70, 90, 75, 85, 60, 95, 70]);
let shifting = $state(false);

onMount(() => {
  const interval = setInterval(() => {
    revenueBars = [...revenueBars, 0];
    shifting = true;
    setTimeout(() => {
      shifting = false;
      revenueBars = revenueBars.slice(1);
      requestAnimationFrame(() => {
        const target = Math.floor(Math.random() * 60) + 30;
        revenueBars = [...revenueBars.slice(0, -1), target];
      });
    }, 600);
  }, 2000);
  return () => clearInterval(interval);
});
```

**Template** — replace bars area:

```svelte
<div class="mt-4 h-16 overflow-hidden">
  <div class="flex h-full items-end" class:shift-left={shifting}>
    {#each revenueBars as h, i (i)}
      <div class="flex-1 h-full px-[1px]">
        <div class="bg-primary/30 rounded-t transition-[height] duration-500 ease-out" style="height: {h}%"></div>
      </div>
    {/each}
  </div>
</div>
```

**Style** — add `<style>` block at bottom of file:

```svelte
<style>
  .shift-left {
    transform: translateX(calc(-100% / 13));
    transition: transform 600ms ease-in-out;
  }
</style>
```
