<script lang="ts">
  let showModal = $state(false);
  let activeTab = $state("preview");
  let toggleVal = $state(true);
  let rangeVal = $state(60);
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
        <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a href="#components">Components</a></li>
          <li><a href="#typography">Typography</a></li>
          <li><a href="#layout">Layout</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost text-xl font-bold gap-2">
        <span class="text-primary">◆</span> Xianii
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
      <button class="btn btn-ghost btn-circle" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <button class="btn btn-primary btn-sm">Get Started</button>
    </div>
  </nav>

  <!-- ═══════════════════ HERO ═══════════════════ -->
  <section class="hero bg-base-100 py-16 lg:py-24">
    <div class="hero-content text-center max-w-3xl">
      <div>
        <div class="badge badge-primary badge-lg mb-4">Tailwind CSS v4 + daisyUI v5</div>
        <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight">
          Xianii <span class="text-primary">Design System</span>
        </h1>
        <p class="py-6 text-lg text-base-content/70 max-w-xl mx-auto">
          A CSS-first, themeable design system built on the latest Tailwind v4 architecture.
          Zero config files — just import and go.
        </p>
        <div class="flex gap-3 justify-center flex-wrap">
          <button class="btn btn-primary btn-lg">Explore Components</button>
          <button class="btn btn-outline btn-lg">View Source</button>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-4 lg:px-8 pb-20 space-y-16">

    <!-- ═══════════════════ COLOR PALETTE ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Color Palette</h2>
      <p class="text-base-content/60 mb-6">Brand tokens defined in <code class="kbd kbd-sm">@theme</code> — usable as Tailwind utilities.</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div class="rounded-box overflow-hidden shadow">
          <div class="h-20 bg-primary"></div>
          <div class="bg-base-100 p-3"><p class="font-semibold text-sm">Primary</p><p class="text-xs text-base-content/50">oklch(0.65 0.24 275)</p></div>
        </div>
        <div class="rounded-box overflow-hidden shadow">
          <div class="h-20 bg-secondary"></div>
          <div class="bg-base-100 p-3"><p class="font-semibold text-sm">Secondary</p><p class="text-xs text-base-content/50">oklch(0.7 0.2 180)</p></div>
        </div>
        <div class="rounded-box overflow-hidden shadow">
          <div class="h-20 bg-accent"></div>
          <div class="bg-base-100 p-3"><p class="font-semibold text-sm">Accent</p><p class="text-xs text-base-content/50">oklch(0.75 0.18 60)</p></div>
        </div>
        <div class="rounded-box overflow-hidden shadow">
          <div class="h-20 bg-neutral"></div>
          <div class="bg-base-100 p-3"><p class="font-semibold text-sm">Neutral</p><p class="text-xs text-base-content/50">oklch(0.5 0.03 260)</p></div>
        </div>
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
    <section>
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Image Card -->
        <div class="card bg-base-100 shadow-sm image-full">
          <figure>
            <div class="w-full h-48 bg-gradient-to-br from-primary/40 to-secondary/40"></div>
          </figure>
          <div class="card-body justify-end">
            <h3 class="card-title text-base-100">Gradient Card</h3>
            <p class="text-base-100/80">Image overlay with gradient background.</p>
            <div class="card-actions">
              <button class="btn btn-sm btn-primary">View</button>
            </div>
          </div>
        </div>

        <!-- Stats Card -->
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">↑</div>
              <div>
                <p class="text-sm text-base-content/50">Revenue</p>
                <p class="text-2xl font-bold">$48,290</p>
              </div>
            </div>
            <div class="flex items-center gap-1 text-success text-sm font-medium">
              <span>↑ 12.5%</span>
              <span class="text-base-content/40">vs last month</span>
            </div>
            <div class="mt-4 h-16 flex items-end gap-1">
              {#each [40, 65, 45, 80, 55, 70, 90, 75, 85, 60, 95, 70] as h}
                <div class="flex-1 bg-primary/20 rounded-t" style="height: {h}%"></div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Feature Card -->
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl mb-2">⚡</div>
            <h3 class="card-title">Zero Config</h3>
            <p class="text-base-content/60">No tailwind.config.js needed. CSS-native configuration via Tailwind v4's <code class="kbd kbd-xs">@theme</code> directive.</p>
            <div class="card-actions justify-end mt-2">
              <button class="btn btn-sm btn-ghost">Learn More →</button>
            </div>
          </div>
        </div>

        <!-- Product Card -->
        <div class="card bg-base-100 shadow-sm">
          <figure class="px-4 pt-4">
            <div class="w-full h-40 bg-gradient-to-r from-info/20 to-success/20 rounded-xl"></div>
          </figure>
          <div class="card-body">
            <h3 class="card-title">Pro Plan</h3>
            <p class="text-base-content/60">Everything you need for production applications.</p>
            <div class="flex items-baseline gap-1 mt-2">
              <span class="text-3xl font-bold">$29</span>
              <span class="text-base-content/40">/month</span>
            </div>
            <div class="card-actions mt-2">
              <button class="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>

        <!-- Testimonial -->
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <div class="flex gap-1 text-warning text-sm mb-2">
              {#each Array(5) as _}★{/each}
            </div>
            <p class="italic text-base-content/70">"This design system saved us weeks of work. The CSS-first approach is exactly what we needed."</p>
            <div class="flex items-center gap-3 mt-4">
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
        <div class="card bg-primary text-primary-content shadow-sm">
          <div class="card-body">
            <h3 class="card-title">Ready to Start?</h3>
            <p class="text-primary-content/80">Install the design system and begin building beautiful interfaces in minutes.</p>
            <div class="card-actions mt-2">
              <button class="btn btn-sm bg-white text-primary border-none">Install Now</button>
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
      <div class="stats shadow w-full">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div class="stat-title">Total Downloads</div>
          <div class="stat-value text-primary">31K</div>
          <div class="stat-desc">Jan 1 – Jun 8</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div class="stat-title">New Users</div>
          <div class="stat-value text-secondary">1,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div class="stat">
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
    <section>
      <h2 class="text-3xl font-bold mb-2">Typography</h2>
      <p class="text-base-content/60 mb-6">Font families defined in <code class="kbd kbd-sm">@theme</code>.</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-base-100 shadow-sm">
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
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Serif — Noto Serif</h3>
            <p class="font-serif text-3xl">The quick brown fox jumps over the lazy dog.</p>
            <p class="font-serif text-xl">Body text in serif for long-form reading, articles, and editorial content.</p>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-sm mt-6">
        <div class="card-body">
          <h3 class="card-title">Monospace — JetBrains Mono</h3>
          <pre class="bg-base-200 rounded-field p-4 text-sm font-mono overflow-x-auto"><code>import "@xianii/design-system/theme.css";

@theme &#123;
  --color-primary: oklch(0.65 0.24 275);
  --font-sans: "Inter", sans-serif;
&#125;</code></pre>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div class="bg-base-100 rounded-box p-6 shadow-sm text-center">
          <p class="text-6xl font-extrabold text-primary">Aa</p>
          <p class="text-sm text-base-content/50 mt-2">Display</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 shadow-sm text-center">
          <p class="text-4xl font-bold">H1</p>
          <p class="text-sm text-base-content/50">3rem / 48px</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 shadow-sm text-center">
          <p class="text-2xl font-semibold">H2</p>
          <p class="text-sm text-base-content/50">1.5rem / 24px</p>
        </div>
        <div class="bg-base-100 rounded-box p-6 shadow-sm text-center">
          <p class="text-lg font-medium">H3</p>
          <p class="text-sm text-base-content/50">1.125rem / 18px</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ FORMS ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Forms</h2>
      <p class="text-base-content/60 mb-6">Form controls styled with daisyUI.</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-base-100 shadow-sm">
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

        <div class="card bg-base-100 shadow-sm">
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
                <span class="label-text">Dark mode {toggleVal ? "on" : "off"}</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
          <span>Legacy config detected — consider migrating to CSS-native setup.</span>
        </div>
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Build failed — missing required theme token.</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ TABLE ═══════════════════ -->
    <section>
      <h2 class="text-3xl font-bold mb-2">Table</h2>
      <p class="text-base-content/60 mb-6">Tabular data display.</p>
      <div class="overflow-x-auto rounded-box border border-base-300">
        <table class="table table-zebra">
          <thead>
            <tr class="bg-base-200">
              <th>Component</th>
              <th>Category</th>
              <th>Status</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-medium">Button</td>
              <td>Action</td>
              <td><span class="badge badge-success badge-sm">Stable</span></td>
              <td class="font-mono text-sm">v5.0.0</td>
            </tr>
            <tr>
              <td class="font-medium">Card</td>
              <td>Layout</td>
              <td><span class="badge badge-success badge-sm">Stable</span></td>
              <td class="font-mono text-sm">v5.0.0</td>
            </tr>
            <tr>
              <td class="font-medium">Modal</td>
              <td>Overlay</td>
              <td><span class="badge badge-warning badge-sm">Beta</span></td>
              <td class="font-mono text-sm">v5.0.0-beta</td>
            </tr>
            <tr>
              <td class="font-medium">Data Table</td>
              <td>Data</td>
              <td><span class="badge badge-info badge-sm">New</span></td>
              <td class="font-mono text-sm">v5.1.0</td>
            </tr>
            <tr>
              <td class="font-medium">Toast</td>
              <td>Feedback</td>
              <td><span class="badge badge-success badge-sm">Stable</span></td>
              <td class="font-mono text-sm">v5.0.0</td>
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
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body space-y-4">
            <h3 class="card-title">Progress Bars</h3>
            <progress class="progress progress-primary w-full" value="10" max="100"></progress>
            <progress class="progress progress-secondary w-full" value="40" max="100"></progress>
            <progress class="progress progress-accent w-full" value="70" max="100"></progress>
            <progress class="progress progress-success w-full" value="100" max="100"></progress>
          </div>
        </div>
        <div class="card bg-base-100 shadow-sm">
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
    <section>
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
      <div class="card bg-base-100 shadow-sm">
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
  <footer class="footer bg-base-100 text-base-content p-10 border-t border-base-300">
    <aside>
      <p class="text-lg font-bold"><span class="text-primary">◆</span> Xianii</p>
      <p class="text-sm text-base-content/50">CSS-first design system for Tailwind v4 + daisyUI v5.</p>
    </aside>
    <nav>
      <h6 class="footer-title">Resources</h6>
      <a href="#docs" class="link link-hover">Documentation</a>
      <a href="#components" class="link link-hover">Components</a>
      <a href="#templates" class="link link-hover">Templates</a>
    </nav>
    <nav>
      <h6 class="footer-title">Community</h6>
      <a href="#github" class="link link-hover">GitHub</a>
      <a href="#discord" class="link link-hover">Discord</a>
      <a href="#twitter" class="link link-hover">Twitter</a>
    </nav>
    <nav>
      <h6 class="footer-title">Legal</h6>
      <a href="#license" class="link link-hover">MIT License</a>
      <a href="#privacy" class="link link-hover">Privacy</a>
    </nav>
  </footer>
</div>
