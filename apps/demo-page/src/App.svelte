<script lang="ts">
  import { onMount } from "svelte";

  let showModal = $state(false);
  let activeTab = $state("preview");
  let toggleVal = $state(true);
  let rangeVal = $state(60);

  let theme = $state(typeof document !== "undefined" ? document.documentElement.getAttribute("data-theme") || "xianii" : "xianii");

  let swatches = $state<{ name: string; value: string }[]>([
    { name: "Primary", value: "" },
    { name: "Secondary", value: "" },
    { name: "Accent", value: "" },
    { name: "Neutral", value: "" },
  ]);

  function readSwatches() {
    const style = getComputedStyle(document.documentElement);
    swatches = swatches.map((s) => ({
      ...s,
      value: style.getPropertyValue(`--color-${s.name.toLowerCase()}`).trim(),
    }));
  }

  function toggleTheme() {
    theme = theme === "xianii" ? "xianii-light" : "xianii";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    readSwatches();
  }

  let revenueBars = $state([40, 65, 45, 80, 55, 70, 90, 75, 85, 60, 95, 70]);

  onMount(() => {
    readSwatches();
    const interval = setInterval(() => {
      revenueBars = revenueBars.map(() => Math.floor(Math.random() * 65) + 25);
    }, 2500);
    return () => clearInterval(interval);
  });
</script>

<div class="min-h-screen bg-base-200 font-sans">
  <!-- ═══════════════════ NAVBAR ═══════════════════ -->
  <nav class="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-8">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a href="#components">Components</a></li>
          <li><a href="#typography">Typography</a></li>
          <li><a href="#layout">Layout</a></li>
        </ul>
      </div>
      <a href="https://github.com/Nigh" target="_blank" rel="noopener" class="btn btn-ghost text-xl font-bold gap-2">
        <img src="xianii.webp" alt="Xianii" class="w-8 h-8 rounded-full" />
        Xianii
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-1">
        <li><a href="#components" class="font-medium">Components</a></li>
        <li><a href="#typography" class="font-medium">Typography</a></li>
        <li><a href="#layout" class="font-medium">Layout</a></li>
        <li><a href="#colors" class="font-medium">Colors</a></li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <button class="btn btn-ghost btn-circle" onclick={toggleTheme} aria-label="Toggle theme">
        {#if theme === "xianii"}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        {/if}
      </button>
      <a href="https://github.com/Nigh/xianii-theme" target="_blank" rel="noopener" class="btn btn-ghost btn-circle" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <button class="btn btn-primary btn-sm">Get Started</button>
    </div>
  </nav>

  <!-- ═══════════════════ HERO ═══════════════════ -->
  <section class="hero bg-base-100 min-h-[calc(100vh-4rem)] relative overflow-hidden">
    <div class="absolute top-[8%] left-[22%] w-[34rem] h-[34rem] rounded-full bg-primary/20 blur-3xl animate-float" aria-hidden="true"></div>
    <div class="absolute top-[22%] right-[18%] w-[38rem] h-[38rem] rounded-full bg-secondary/15 blur-3xl animate-float [animation-delay:-2s]" aria-hidden="true"></div>
    <div class="absolute bottom-[6%] left-[34%] w-[32rem] h-[32rem] rounded-full bg-accent/15 blur-3xl animate-float [animation-delay:-4s]" aria-hidden="true"></div>
    <div class="hero-content text-center max-w-3xl relative z-10">
      <div>
        <div class="badge badge-secondary badge-outline badge-lg mb-4">Tailwind CSS v4 + daisyUI v5</div>
        <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight">
          Xianii <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Design System</span>
        </h1>
        <p class="py-6 text-lg text-base-content/70 max-w-xl mx-auto">
          A CSS-first, themeable design system built on the latest Tailwind v4 architecture.
          Zero config files — just import and go.
        </p>
        <div class="flex gap-3 justify-center flex-wrap">
          <a href="#components" class="btn btn-primary btn-lg">Explore Components</a>
          <a href="https://github.com/Nigh/xianii-theme" target="_blank" rel="noopener" class="btn btn-outline btn-lg">View Source</a>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-4 lg:px-8 pb-20 space-y-16 pt-16">

    <!-- ═══════════════════ COLOR PALETTE ═══════════════════ -->
    <section id="colors">
      <h2 class="text-3xl font-bold mb-2">Color Palette</h2>
      <p class="text-base-content/60 mb-6">Brand tokens defined in <code class="kbd kbd-sm">@theme</code> — usable as Tailwind utilities.</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {#each swatches as swatch (swatch.name)}
          <div class="rounded-box overflow-hidden shadow">
            <div class="h-20" style="background-color: var(--color-{swatch.name.toLowerCase()})"></div>
            <div class="bg-base-100 p-3"><p class="font-semibold text-sm">{swatch.name}</p><p class="text-xs text-base-content/50">{swatch.value}</p></div>
          </div>
        {/each}
        <div class="rounded-box overflow-hidden shadow">
          <div class="h-20 bg-base-300"></div>
          <div class="bg-base-100 p-3"><p class="font-semibold text-sm">Base</p><p class="text-xs text-base-content/50">Three shades</p></div>
        </div>
      </div>
      <div class="flex flex-wrap gap-3 mt-6">
        <span class="badge badge-info">Info</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-error">Error</span>
        <span class="badge badge-neutral">Neutral</span>
        <span class="badge badge-primary badge-outline">Primary Outline</span>
      </div>
    </section>

    <!-- ═══════════════════ BUTTONS ═══════════════════ -->
    <section id="components">
      <h2 class="text-3xl font-bold mb-2">Buttons</h2>
      <p class="text-base-content/60 mb-6">All button variants and sizes from daisyUI.</p>

      <div class="space-y-4">
        <div class="flex flex-wrap gap-3 items-center">
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-neutral">Neutral</button>
          <button class="btn btn-ghost">Ghost</button>
          <button class="btn btn-link">Link</button>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
          <button class="btn btn-outline">Outline</button>
          <button class="btn btn-dash">Dash</button>
        </div>
        <div class="flex flex-wrap gap-3 items-center">
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary">Default</button>
          <button class="btn btn-primary btn-lg">Large</button>
          <button class="btn btn-primary btn-square"><span>★</span></button>
          <button class="btn btn-primary btn-circle">+</button>
          <button class="btn btn-primary" disabled>Disabled</button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CARDS ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Cards</h2>
      <p class="text-base-content/60 mb-6">Flexible card layouts for dashboards and content.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <!-- Image Card -->
        <div class="card shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <figure class="absolute inset-0">
            <div class="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent"></div>
          </figure>
          <div class="card-body justify-end relative z-10">
            <h3 class="card-title text-primary-content drop-shadow">Gradient Card</h3>
            <p class="text-primary-content/90">Image overlay with gradient background.</p>
            <div class="card-actions">
              <button class="btn btn-sm bg-base-100/90 border-none text-base-content backdrop-blur">View</button>
            </div>
          </div>
        </div>

        <!-- Stats Card -->
        <div class="card bg-base-100 border border-base-300/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div class="card-body">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">↑</div>
                <div>
                  <p class="text-sm text-base-content/50">Revenue</p>
                  <p class="text-2xl font-bold">$48,290</p>
                </div>
              </div>
              <span class="badge badge-success badge-sm badge-soft">+12.5%</span>
            </div>
            <div class="mt-auto pt-4 h-28 flex items-end gap-1.5 border-b border-base-300">
              {#each revenueBars as h, i (i)}
                <div class="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/35 transition-[height] duration-1000 ease-in-out" style="height: {h}%"></div>
              {/each}
            </div>
            <div class="flex justify-between text-[10px] text-base-content/40 pt-1 font-mono">
              <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
            </div>
          </div>
        </div>

        <!-- Feature Card -->
        <div class="card bg-base-100 border border-base-300/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div class="card-body">
            <div class="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent text-2xl mb-2">⚡</div>
            <h3 class="card-title">Zero Config</h3>
            <p class="text-base-content/60">No tailwind.config.js needed. CSS-native configuration via Tailwind v4's <code class="kbd kbd-xs">@theme</code> directive.</p>
            <ul class="mt-2 space-y-1.5 text-sm text-base-content/60">
              <li class="flex items-center gap-2"><span class="text-success">✓</span> One-line install</li>
              <li class="flex items-center gap-2"><span class="text-success">✓</span> Dark / light themes built-in</li>
              <li class="flex items-center gap-2"><span class="text-success">✓</span> Pure CSS, zero JS runtime</li>
            </ul>
            <div class="card-actions justify-end mt-auto">
              <button class="btn btn-sm btn-ghost">Learn More →</button>
            </div>
          </div>
        </div>

        <!-- Product Card -->
        <div class="card bg-base-100 border border-base-300/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <figure class="px-4 pt-4">
            <div class="w-full h-32 bg-gradient-to-br from-secondary/25 via-accent/15 to-primary/25 rounded-xl flex items-center justify-center">
              <span class="text-4xl opacity-60">✦</span>
            </div>
          </figure>
          <div class="card-body">
            <div class="flex items-center justify-between">
              <h3 class="card-title">Pro Plan</h3>
              <span class="badge badge-secondary badge-outline badge-sm">Popular</span>
            </div>
            <p class="text-base-content/60">Everything you need for production applications.</p>
            <div class="flex items-baseline gap-1 mt-2">
              <span class="text-3xl font-bold">$29</span>
              <span class="text-base-content/40">/month</span>
            </div>
            <div class="card-actions mt-auto">
              <button class="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Testimonial -->
        <div class="card bg-base-100 border border-base-300/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div class="card-body">
            <div class="flex items-center justify-between mb-2">
              <div class="flex gap-1 text-warning text-sm">
                {#each Array(5) as _}★{/each}
              </div>
              <span class="text-5xl leading-none text-primary/20 font-serif select-none" aria-hidden="true">”</span>
            </div>
            <p class="italic text-base-content/70">"This design system saved us weeks of work. The CSS-first approach is exactly what we needed."</p>
            <div class="flex items-center gap-3 mt-auto pt-4">
              <div class="avatar placeholder">
                <div class="bg-primary text-primary-content w-10 rounded-full">
                  <span class="text-sm">JD</span>
                </div>
              </div>
              <div>
                <p class="font-semibold text-sm">Jane Doe</p>
                <p class="text-xs text-base-content/40">CTO, Acme Corp</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Card -->
        <div class="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div class="card-body">
            <h3 class="card-title">Ready to Start?</h3>
            <p class="text-primary-content/80">Install the design system and begin building beautiful interfaces in minutes.</p>
            <pre class="bg-base-100/20 rounded-field px-3 py-2 font-mono text-xs mt-2 overflow-x-auto"><code>pnpm add @xianii/design-system</code></pre>
            <div class="card-actions mt-auto">
              <button class="btn btn-sm bg-base-100 text-base-content border-none">Install Now</button>
              <button class="btn btn-sm btn-ghost text-primary-content">Documentation</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ STATS ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Stats</h2>
      <p class="text-base-content/60 mb-6">Data display components for dashboards.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stat bg-base-100 rounded-box border border-base-300 shadow-sm">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div class="stat-title">Total Downloads</div>
          <div class="stat-value text-primary">31K</div>
          <div class="stat-desc">Jan 1 – Jun 8</div>
        </div>
        <div class="stat bg-base-100 rounded-box border border-base-300 shadow-sm">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div class="stat-title">New Users</div>
          <div class="stat-value text-secondary">1,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div class="stat bg-base-100 rounded-box border border-base-300 shadow-sm">
          <div class="stat-figure text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div class="stat-title">Components</div>
          <div class="stat-value text-accent">48</div>
          <div class="stat-desc">All themed</div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ TYPOGRAPHY ═══════════════════ -->
    <section id="typography">
      <h2 class="text-3xl font-bold mb-2">Typography</h2>
      <p class="text-base-content/60 mb-6">Font families defined in <code class="kbd kbd-sm">@theme</code>.</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-base-100 border border-base-300/60 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Sans-Serif — Inter</h3>
            <p class="font-sans text-4xl font-light">Light 300</p>
            <p class="font-sans text-3xl font-normal">Regular 400</p>
            <p class="font-sans text-2xl font-medium">Medium 500</p>
            <p class="font-sans text-xl font-semibold">Semibold 600</p>
            <p class="font-sans text-lg font-bold">Bold 700</p>
            <p class="font-sans font-extrabold">ExtraBold 800</p>
          </div>
        </div>
        <div class="card bg-base-100 border border-base-300/60 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Serif — Noto Serif</h3>
            <p class="font-serif text-3xl">The quick brown fox jumps over the lazy dog.</p>
            <p class="font-serif text-xl">Body text in serif for long-form reading, articles, and editorial content.</p>
            <div class="divider"></div>
            <p class="font-serif text-3xl">敏捷的棕色狐狸跳过了懒狗。</p>
            <p class="font-serif text-xl">使用衬线字体进行长文阅读、文章和社论内容的排版。</p>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 border border-base-300/60 shadow-sm mt-6">
        <div class="card-body">
          <h3 class="card-title">Monospace — JetBrains Mono</h3>
          <pre class="bg-base-200 rounded-field p-4 text-sm font-mono overflow-x-auto"><code>import "@xianii/design-system/theme.css";

@theme &#123;
  --color-primary: oklch(81% 0.117 11.638);
  --font-sans: "Inter", sans-serif;
&#125;</code></pre>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div class="bg-base-100 rounded-box p-6 border border-base-300/60 shadow-sm text-center">
          <p class="text-6xl font-extrabold text-primary">Aa</p>
          <p class="text-sm text-base-content/50 mt-2">Display</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 border border-base-300/60 shadow-sm text-center">
          <p class="text-4xl font-bold">H1</p>
          <p class="text-sm text-base-content/50">3rem / 48px</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 border border-base-300/60 shadow-sm text-center">
          <p class="text-2xl font-semibold">H2</p>
          <p class="text-sm text-base-content/50">1.5rem / 24px</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 border border-base-300/60 shadow-sm text-center">
          <p class="text-lg font-medium">H3</p>
          <p class="text-sm text-base-content/50">1.125rem / 18px</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div class="bg-base-100 rounded-box p-6 border border-base-300/60 shadow-sm">
          <p class="text-sm text-base-content/50 mb-3 font-medium">English</p>
          <p class="font-sans text-2xl leading-relaxed">Design is not just what it looks like and feels like. Design is how it works.</p>
          <p class="text-xs text-base-content/40 mt-3">— Steve Jobs</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 border border-base-300/60 shadow-sm">
          <p class="text-sm text-base-content/50 mb-3 font-medium">中文</p>
          <p class="font-sans text-2xl leading-relaxed">道生一，一生二，二生三，三生万物。人法地，地法天，天法道，道法自然。</p>
          <p class="text-xs text-base-content/40 mt-3">— 老子《道德经》</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ FORMS ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Forms</h2>
      <p class="text-base-content/60 mb-6">Form controls styled with daisyUI.</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-base-100 border border-base-300/60 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Input Fields</h3>
            <label class="floating-label">
              <span>Email</span>
              <input type="email" placeholder="name@example.com" class="input input-bordered w-full" />
            </label>
            <label class="floating-label">
              <span>Password</span>
              <input type="password" placeholder="••••••••" class="input input-bordered w-full" />
            </label>
            <label class="floating-label">
              <span>Search</span>
              <input type="text" placeholder="Search components..." class="input input-bordered w-full" />
            </label>
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-3">
                <input type="checkbox" checked class="checkbox checkbox-primary" />
                <span class="label-text">Remember me</span>
              </label>
            </div>
            <button class="btn btn-primary w-full">Sign In</button>
          </div>
        </div>

        <div class="card bg-base-100 border border-base-300/60 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Selects &amp; Toggles</h3>
            <select class="select select-bordered w-full">
              <option disabled selected>Choose a framework</option>
              <option>Svelte 5</option>
              <option>React 19</option>
              <option>Vue 3</option>
              <option>Angular 19</option>
            </select>
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-3">
                <input type="checkbox" class="toggle toggle-primary" bind:checked={toggleVal} />
                <span class="label-text">Notifications {toggleVal ? "on" : "off"}</span>
              </label>
            </div>
            <div class="form-control">
              <span class="label"><span class="label-text">Progress</span></span>
              <input type="range" min="0" max="100" bind:value={rangeVal} class="range range-primary" />
              <div class="flex justify-between text-xs text-base-content/40 px-1">
                <span>0</span><span>{rangeVal}</span><span>100</span>
              </div>
            </div>
            <div class="form-control">
              <span class="label"><span class="label-text">Rating</span></span>
              <div class="rating rating-lg">
                <input type="radio" name="rating" class="rating-hidden" />
                <input type="radio" name="rating" class="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating" class="mask mask-star-2 bg-primary" checked />
                <input type="radio" name="rating" class="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating" class="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating" class="mask mask-star-2 bg-primary" />
              </div>
            </div>
            <textarea class="textarea textarea-bordered w-full" placeholder="Write a message..."></textarea>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ ALERTS ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Alerts</h2>
      <p class="text-base-content/60 mb-6">Notification styles for feedback messages.</p>
      <div class="space-y-3">
        <div role="alert" class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>New update available — version 2.0 is ready to install.</span>
        </div>
        <div role="alert" class="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Design system installed successfully!</span>
        </div>
        <div role="alert" class="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
          <span>Legacy config detected — consider migrating to CSS-native setup.</span>
        </div>
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Build failed — missing required theme token.</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ TABLE ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Table</h2>
      <p class="text-base-content/60 mb-6">Tabular data display.</p>
      <div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 shadow-sm">
        <table class="table table-zebra">
          <thead>
            <tr class="bg-base-200 text-xs uppercase tracking-wider text-base-content/60">
              <th>Component</th>
              <th>Category</th>
              <th>Status</th>
              <th class="text-right">Version</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-base-300/30 transition-colors">
              <td class="font-medium">Button</td>
              <td class="text-base-content/60">Action</td>
              <td><span class="badge badge-success badge-soft badge-sm">Stable</span></td>
              <td class="font-mono text-sm text-right">v5.0.0</td>
            </tr>
            <tr class="hover:bg-base-300/30 transition-colors">
              <td class="font-medium">Card</td>
              <td class="text-base-content/60">Layout</td>
              <td><span class="badge badge-success badge-soft badge-sm">Stable</span></td>
              <td class="font-mono text-sm text-right">v5.0.0</td>
            </tr>
            <tr class="hover:bg-base-300/30 transition-colors">
              <td class="font-medium">Modal</td>
              <td class="text-base-content/60">Overlay</td>
              <td><span class="badge badge-warning badge-soft badge-sm">Beta</span></td>
              <td class="font-mono text-sm text-right">v5.0.0-beta</td>
            </tr>
            <tr class="hover:bg-base-300/30 transition-colors">
              <td class="font-medium">Data Table</td>
              <td class="text-base-content/60">Data</td>
              <td><span class="badge badge-info badge-soft badge-sm">New</span></td>
              <td class="font-mono text-sm text-right">v5.1.0</td>
            </tr>
            <tr class="hover:bg-base-300/30 transition-colors">
              <td class="font-medium">Toast</td>
              <td class="text-base-content/60">Feedback</td>
              <td><span class="badge badge-success badge-soft badge-sm">Stable</span></td>
              <td class="font-mono text-sm text-right">v5.0.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ═══════════════════ MODAL ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Modal</h2>
      <p class="text-base-content/60 mb-6">Dialog overlays for focused interactions.</p>
      <button class="btn btn-primary" onclick={() => (showModal = true)}>Open Modal</button>

      <dialog class="modal" class:modal-open={showModal}>
        <div class="modal-box">
          <h3 class="text-lg font-bold">Confirm Action</h3>
          <p class="py-4 text-base-content/70">Are you sure you want to proceed? This action will apply the Xianii design system to your project.</p>
          <div class="modal-action">
            <button class="btn btn-ghost" onclick={() => (showModal = false)}>Cancel</button>
            <button class="btn btn-primary" onclick={() => (showModal = false)}>Confirm</button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button onclick={() => (showModal = false)}>close</button>
        </form>
      </dialog>
    </section>

    <!-- ═══════════════════ TABS ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Tabs</h2>
      <p class="text-base-content/60 mb-6">Content switching with tabs.</p>
      <div role="tablist" class="tabs tabs-border">
        <button role="tab" class="tab" class:tab-active={activeTab === "preview"} onclick={() => (activeTab = "preview")}>Preview</button>
        <button role="tab" class="tab" class:tab-active={activeTab === "code"} onclick={() => (activeTab = "code")}>Code</button>
        <button role="tab" class="tab" class:tab-active={activeTab === "docs"} onclick={() => (activeTab = "docs")}>Docs</button>
      </div>
      <div class="bg-base-100 rounded-b-box rounded-tr-box border border-base-300 p-6">
        {#if activeTab === "preview"}
          <p class="text-base-content/70">This is the <strong>preview</strong> tab. Components render here with live theme tokens applied.</p>
        {:else if activeTab === "code"}
          <pre class="font-mono text-sm bg-base-200 p-4 rounded-field"><code>&lt;button class="btn btn-primary"&gt;Click Me&lt;/button&gt;</code></pre>
        {:else}
          <p class="text-base-content/70">Read the full <a href="#docs" class="link link-primary">documentation</a> for usage guidelines and API reference.</p>
        {/if}
      </div>
    </section>

    <!-- ═══════════════════ PROGRESS & LOADING ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Progress &amp; Loading</h2>
      <p class="text-base-content/60 mb-6">Feedback indicators for async operations.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card bg-base-100 border border-base-300/60 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Progress Bars</h3>
            <progress class="progress progress-primary w-full" value="10" max="100"></progress>
            <progress class="progress progress-secondary w-full" value="40" max="100"></progress>
            <progress class="progress progress-accent w-full" value="70" max="100"></progress>
            <progress class="progress progress-success w-full" value="100" max="100"></progress>
          </div>
        </div>
        <div class="card bg-base-100 border border-base-300/60 shadow-sm">
          <div class="card-body space-y-6">
            <h3 class="card-title">Spinners</h3>
            <div class="flex gap-6 items-center">
              <span class="loading loading-spinner loading-sm text-primary"></span>
              <span class="loading loading-spinner loading-md text-secondary"></span>
              <span class="loading loading-spinner loading-lg text-accent"></span>
            </div>
            <div class="flex gap-6 items-center">
              <span class="loading loading-dots loading-sm text-primary"></span>
              <span class="loading loading-dots loading-md text-secondary"></span>
              <span class="loading loading-dots loading-lg text-accent"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ LAYOUT PATTERNS ═══════════════════ -->
    <section id="layout">
      <h2 class="text-3xl font-bold mb-2">Layout Patterns</h2>
      <p class="text-base-content/60 mb-6">Common responsive layout structures.</p>

      <!-- 3-column grid -->
      <h3 class="text-xl font-semibold mb-3">Three-Column Grid</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {#each Array(3) as _, i}
          <div class="bg-primary/10 border-2 border-dashed border-primary/30 rounded-box p-8 text-center">
            <p class="text-primary font-semibold">Column {i + 1}</p>
          </div>
        {/each}
      </div>

      <!-- Sidebar layout -->
      <h3 class="text-xl font-semibold mb-3">Sidebar + Content</h3>
      <div class="flex flex-col md:flex-row gap-4 mb-8">
        <aside class="w-full md:w-64 shrink-0">
          <div class="bg-secondary/10 border-2 border-dashed border-secondary/30 rounded-box p-6 text-center h-full">
            <p class="text-secondary font-semibold">Sidebar</p>
            <p class="text-sm text-base-content/40 mt-1">w-64</p>
          </div>
        </aside>
        <div class="flex-1">
          <div class="bg-accent/10 border-2 border-dashed border-accent/30 rounded-box p-6 text-center h-full min-h-[160px]">
            <p class="text-accent font-semibold">Main Content</p>
            <p class="text-sm text-base-content/40 mt-1">flex-1</p>
          </div>
        </div>
      </div>

      <!-- Holy grail -->
      <h3 class="text-xl font-semibold mb-3">Holy Grail Layout</h3>
      <div class="flex flex-col gap-4">
        <div class="bg-info/10 border-2 border-dashed border-info/30 rounded-box p-4 text-center">
          <p class="text-info font-semibold">Header</p>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-48 shrink-0 bg-warning/10 border-2 border-dashed border-warning/30 rounded-box p-4 text-center">
            <p class="text-warning font-semibold">Nav</p>
          </div>
          <div class="flex-1 bg-success/10 border-2 border-dashed border-success/30 rounded-box p-4 text-center min-h-[120px]">
            <p class="text-success font-semibold">Content</p>
          </div>
          <div class="w-full md:w-48 shrink-0 bg-error/10 border-2 border-dashed border-error/30 rounded-box p-4 text-center">
            <p class="text-error font-semibold">Aside</p>
          </div>
        </div>
        <div class="bg-neutral/10 border-2 border-dashed border-neutral/30 rounded-box p-4 text-center">
          <p class="text-neutral font-semibold">Footer</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CODE BLOCK ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Quick Start</h2>
      <p class="text-base-content/60 mb-6">Get running in seconds.</p>
      <div class="card bg-base-100 border border-base-300/60 shadow-sm">
        <div class="card-body">
          <div class="tabs tabs-sm mb-4">
            <button class="tab tab-active font-mono text-xs">pnpm</button>
            <button class="tab font-mono text-xs">npm</button>
          </div>
          <pre class="bg-base-200 rounded-field p-4 font-mono text-sm overflow-x-auto"><code>pnpm add @xianii/design-system</code></pre>
          <p class="text-sm text-base-content/50 mt-3">Then in your main CSS file:</p>
          <pre class="bg-base-200 rounded-field p-4 font-mono text-sm overflow-x-auto mt-2"><code>@import "@xianii/design-system/theme.css";</code></pre>
        </div>
      </div>
    </section>
  </main>

  <!-- ═══════════════════ FOOTER ═══════════════════ -->
  <footer class="footer bg-base-100 text-base-content border-t border-base-300">
    <div class="max-w-7xl mx-auto w-full px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <aside class="flex items-center gap-3">
        <a href="https://github.com/Nigh" target="_blank" rel="noopener">
          <img src="xianii.webp" alt="Xianii" class="w-8 h-8 rounded-full" />
        </a>
        <div>
          <p class="text-lg font-bold">Xianii</p>
          <p class="text-xs text-base-content/50">CSS-first design system for Tailwind v4 + daisyUI v5.</p>
        </div>
      </aside>
      <div class="flex flex-wrap gap-8 text-sm">
        <div class="flex flex-col gap-2">
          <span class="footer-title text-xs">Resources</span>
          <a href="#components" class="link link-hover">Components</a>
          <a href="#typography" class="link link-hover">Typography</a>
        </div>
        <div class="flex flex-col gap-2">
          <span class="footer-title text-xs">Community</span>
          <a href="https://github.com/Nigh/xianii-theme" target="_blank" rel="noopener" class="link link-hover">GitHub</a>
        </div>
        <div class="flex flex-col gap-2">
          <span class="footer-title text-xs">Legal</span>
          <a href="#license" class="link link-hover">MIT License</a>
        </div>
      </div>
    </div>
  </footer>
</div>
