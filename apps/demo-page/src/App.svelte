<script lang="ts">
  import { onMount } from "svelte";

  type Swatch = { name: string; token: string; value: string };
  let theme = $state("xianii");
  let copied = $state("");
  let swatches = $state<Swatch[]>([
    { name: "Primary", token: "--color-primary", value: "" },
    { name: "Secondary", token: "--color-secondary", value: "" },
    { name: "Accent", token: "--color-accent", value: "" },
    { name: "Surface", token: "--color-base-100", value: "" },
    { name: "Canvas", token: "--color-base-200", value: "" },
    { name: "Content", token: "--color-base-content", value: "" },
  ]);

  const installCommand = "pnpm add @xianii/design-system";
  const tokenImport = '@import "@xianii/design-system/tokens.css";';
  const adapterImport = '@import "@xianii/design-system/theme.css";';
  const typeScale = [
    ["xs", "12px", "Metadata"],
    ["sm", "14px", "Compact UI"],
    ["base", "16px", "Body and forms"],
    ["xl", "20px", "Small headings"],
    ["3xl", "30px", "Section headings"],
    ["6xl", "60px", "Display"],
  ];

  function readSwatches() {
    const styles = getComputedStyle(document.documentElement);
    swatches = swatches.map((swatch) => ({ ...swatch, value: styles.getPropertyValue(swatch.token).trim() }));
  }

  function toggleTheme() {
    theme = theme === "xianii" ? "xianii-light" : "xianii";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    readSwatches();
  }

  async function copy(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    copied = id;
    window.setTimeout(() => copied === id && (copied = ""), 1600);
  }

  onMount(() => {
    theme = document.documentElement.dataset.theme || "xianii";
    readSwatches();
  });
</script>

<svelte:head>
  <meta name="description" content="Framework-agnostic CSS theme tokens with optional Tailwind CSS and daisyUI adapters." />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<div class="min-h-screen bg-base-200 text-base-content font-sans">
  <header class="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur-sm">
    <nav class="navbar mx-auto max-w-7xl px-4 lg:px-8" aria-label="Primary navigation">
      <div class="navbar-start">
        <a href="#top" class="btn btn-ghost gap-2 px-2 text-lg font-bold" aria-label="Xianii home">
          <img src="xianii.webp" alt="" width="32" height="32" class="rounded-full" /> Xianii
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-1 px-1">
          <li><a href="#tokens">Tokens</a></li><li><a href="#adapters">Adapters</a></li>
          <li><a href="#typography">Typography</a></li><li><a href="#components">Components</a></li>
        </ul>
      </div>
      <div class="navbar-end gap-1">
        <button class="btn btn-ghost btn-circle" onclick={toggleTheme} aria-label={"Switch to " + (theme === "xianii" ? "light" : "dark") + " theme"}>
          {#if theme === "xianii"}
            <svg aria-hidden="true" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg>
          {:else}
            <svg aria-hidden="true" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>
          {/if}
        </button>
        <a href="https://github.com/Nigh/xianii-theme" class="btn btn-ghost btn-circle" target="_blank" rel="noopener" aria-label="View Xianii on GitHub">
          <svg aria-hidden="true" viewBox="0 0 24 24" class="size-5" fill="currentColor"><path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"/></svg>
        </a>
        <details class="dropdown dropdown-end lg:hidden">
          <summary class="btn btn-ghost btn-circle" aria-label="Open navigation">
            <svg aria-hidden="true" viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </summary>
          <ul class="menu dropdown-content z-10 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
            <li><a href="#tokens">Tokens</a></li><li><a href="#adapters">Adapters</a></li>
            <li><a href="#typography">Typography</a></li><li><a href="#components">Components</a></li>
          </ul>
        </details>
      </div>
    </nav>
  </header>

  <main id="main">
    <section id="top" class="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div class="max-w-2xl">
        <h1 class="text-balance text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">Theme tokens that stay out of your way.</h1>
        <p class="mt-6 max-w-[62ch] text-lg leading-relaxed text-base-content/75">Xianii ships framework-agnostic CSS variables first. Add the Tailwind CSS or daisyUI adapters only when your project needs them.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#adapters" class="btn btn-primary btn-lg">Start with CSS</a>
          <a href="https://github.com/Nigh/xianii-theme" target="_blank" rel="noopener" class="btn btn-outline btn-lg">View source</a>
        </div>
        <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-base-content/70" aria-label="Package qualities"><li>Pure CSS default</li><li>Dark and light themes</li><li>Zero runtime</li></ul>
      </div>
      <div class="theme-preview overflow-hidden rounded-box bg-base-100">
        <div class="flex items-center justify-between border-b border-base-300 px-5 py-4">
          <div><p class="font-semibold">Live theme</p><p class="text-sm text-base-content/70">{theme === "xianii" ? "Dark" : "Light"} · updates every token</p></div>
          <button class="btn btn-sm btn-outline" onclick={toggleTheme}>Switch theme</button>
        </div>
        <div class="grid grid-cols-2 gap-px bg-base-300 sm:grid-cols-3">
          {#each swatches as swatch}
            <div class="min-w-0 bg-base-100 p-4">
              <div class="mb-4 h-16 rounded-field border border-base-300" style={"background:" + swatch.value}></div>
              <p class="font-medium">{swatch.name}</p><code class="mt-1 block overflow-hidden text-ellipsis text-xs text-base-content/70">{swatch.token}</code>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-7xl space-y-24 px-4 pb-24 lg:px-8">
      <section id="tokens" class="scroll-mt-24">
        <div class="section-heading"><h2>One source of visual truth</h2><p>Semantic variables cover surfaces, content, brand colors, feedback, type, and shape. Override them in CSS; every adapter follows.</p></div>
        <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div class="space-y-5">
            <h3 class="text-xl font-semibold">Framework-agnostic by default</h3>
            <p class="max-w-[65ch] leading-relaxed text-base-content/70">Import only the tokens when you want complete control over markup and styling. Theme selection is a single <code>data-theme</code> attribute on the document.</p>
            <div class="flex flex-wrap gap-2"><span class="badge badge-primary">Primary</span><span class="badge badge-secondary">Secondary</span><span class="badge badge-accent">Accent</span><span class="badge badge-success">Success</span><span class="badge badge-warning">Warning</span><span class="badge badge-error">Error</span></div>
          </div>
          <div class="code-block">
            <div class="code-bar"><span>CSS</span><button onclick={() => copy(tokenImport, "tokens")}>{copied === "tokens" ? "Copied" : "Copy"}</button></div>
            <pre><code>{tokenImport}

:root &#123;
  background: var(--color-base-100);
  color: var(--color-base-content);
&#125;</code></pre>
          </div>
        </div>
      </section>

      <section id="adapters" class="scroll-mt-24">
        <div class="section-heading"><h2>Use only the adapter you need</h2><p>The default export never requires a framework. Tailwind CSS and daisyUI are optional bridges over the same tokens.</p></div>
        <div class="mt-10 overflow-hidden rounded-box border border-base-300 bg-base-100">
          <div class="grid divide-y divide-base-300 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            <article class="p-6"><h3 class="text-xl font-semibold">CSS tokens</h3><p class="mt-2 text-base-content/70">Variables only. Bring any framework—or none.</p><code class="mt-5 block text-sm">tokens.css</code></article>
            <article class="p-6"><h3 class="text-xl font-semibold">Tailwind adapter</h3><p class="mt-2 text-base-content/70">Maps tokens into Tailwind v4 theme utilities.</p><code class="mt-5 block text-sm">adapters/tailwind.css</code></article>
            <article class="p-6"><h3 class="text-xl font-semibold">daisyUI adapter</h3><p class="mt-2 text-base-content/70">Registers matching dark and light component themes.</p><code class="mt-5 block text-sm">adapters/daisyui.css</code></article>
          </div>
          <div class="code-block rounded-none border-t border-base-300">
            <div class="code-bar"><span>Install both optional adapters</span><button onclick={() => copy(adapterImport, "adapters")}>{copied === "adapters" ? "Copied" : "Copy"}</button></div>
            <pre><code>{adapterImport}</code></pre>
          </div>
        </div>
      </section>

      <section id="typography" class="scroll-mt-24">
        <div class="section-heading"><h2>Typography with a job</h2><p>A finite rem-based scale keeps body text readable and reserves small sizes for compact UI and metadata.</p></div>
        <div class="mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100">
          <table class="table"><thead><tr><th>Token</th><th>Size</th><th>Recommended use</th><th>Sample</th></tr></thead>
            <tbody>{#each typeScale as [name, size, use]}<tr><td><code>--font-size-{name}</code></td><td>{size}</td><td>{use}</td><td><span style={"font-size:var(--font-size-" + name + ");line-height:var(--line-height-snug)"}>Aa 字体</span></td></tr>{/each}</tbody>
          </table>
        </div>
        <article class="mt-8 max-w-[70ch]"><h3 class="text-xl font-semibold">Readable across scripts</h3><p class="mt-3 leading-loose text-base-content/75">好的排版不需要牺牲可读性来显得精致。The default 1rem body size respects browser settings and keeps Chinese, English, numbers, and <code>inline code</code> in the same rhythm.</p></article>
      </section>

      <section id="components" class="scroll-mt-24">
        <div class="section-heading"><h2>Tokens in real components</h2><p>A compact specimen verifies actions, inputs, feedback, and disabled states without pretending to be a product dashboard.</p></div>
        <div class="mt-10 grid gap-8 lg:grid-cols-2">
          <div class="rounded-box border border-base-300 bg-base-100 p-6">
            <h3 class="text-xl font-semibold">Actions and fields</h3>
            <div class="mt-5 flex flex-wrap gap-3"><button class="btn btn-primary">Primary</button><button class="btn btn-secondary">Secondary</button><button class="btn btn-outline">Outline</button><button class="btn" disabled>Disabled</button></div>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <label class="form-control gap-field-label"><span class="label"><span class="label-text">Email address</span></span><input class="input input-bordered w-full" type="email" placeholder="you@example.com" /></label>
              <label class="form-control gap-field-label"><span class="label"><span class="label-text">Framework</span></span><select class="select select-bordered w-full"><option>None</option><option>Tailwind CSS</option><option>daisyUI</option></select></label>
            </div>
          </div>
          <div class="space-y-3" aria-label="Feedback specimens">
            <div role="status" class="alert alert-success"><span><strong>Ready.</strong> Theme tokens loaded successfully.</span></div>
            <div role="alert" class="alert alert-warning"><span><strong>Adapter missing.</strong> Import the adapter before using its utilities.</span></div>
            <div role="alert" class="alert alert-error"><span><strong>Unknown token.</strong> Check the token name in the package reference.</span></div>
          </div>
        </div>
      </section>

      <section class="rounded-box bg-primary px-6 py-10 text-primary-content sm:px-10 sm:py-12">
        <div class="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div><h2 class="text-2xl font-bold">Add the tokens to your project</h2><p class="mt-2 text-primary-content/80">One package, no runtime, adapters when you want them.</p></div>
          <div class="flex w-full max-w-xl flex-col gap-3 sm:flex-row"><code class="min-w-0 flex-1 overflow-x-auto rounded-field bg-base-100 px-4 py-3 text-sm text-base-content">{installCommand}</code><button class="btn bg-base-100 text-base-content hover:bg-base-200" onclick={() => copy(installCommand, "install")}>{copied === "install" ? "Copied" : "Copy command"}</button></div>
        </div>
      </section>
    </div>
  </main>

  <footer class="border-t border-base-300 bg-base-100">
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-base-content/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <p>MIT licensed · CSS-first theme tokens</p>
      <nav class="flex flex-wrap gap-5" aria-label="Footer navigation">
        <a class="link link-hover" href="https://www.npmjs.com/package/@xianii/design-system" target="_blank" rel="noopener">npm</a>
        <a class="link link-hover" href="https://github.com/Nigh/xianii-theme#readme" target="_blank" rel="noopener">Documentation</a>
        <a class="link link-hover" href="https://github.com/Nigh/xianii-theme/blob/main/packages/design-system/LICENSE" target="_blank" rel="noopener">License</a>
      </nav>
    </div>
  </footer>
  <p class="sr-only" aria-live="polite">{copied ? "Copied to clipboard" : ""}</p>
</div>
