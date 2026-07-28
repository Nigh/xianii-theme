#!/usr/bin/env node
/**
 * Reads tokens.css → writes docs/preview.svg for README.
 * Run locally after token changes: pnpm generate:preview
 * ponytail: no CSS parser dep; regex + hand-rolled oklch→hex is enough for our token file.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "tokens.css"), "utf8");
const outDir = join(root, "docs");
const outFile = join(outDir, "preview.svg");

function parseTheme(name) {
	const needle = `[data-theme="${name}"]`;
	const idx = css.indexOf(needle);
	if (idx < 0) throw new Error(`theme not found: ${name}`);
	// dark block is `:root, [data-theme="xianii"] { ... }`
	const start = name === "xianii" ? css.lastIndexOf(":root", idx) : idx;
	const brace = css.indexOf("{", start);
	const end = css.indexOf("}", brace);
	const vars = {};
	for (const line of css.slice(brace + 1, end).split(";")) {
		const kv = line.match(/--([\w-]+)\s*:\s*([^;]+)/);
		if (kv) vars[kv[1]] = kv[2].trim();
	}
	return vars;
}

/** oklch(L% C H) | #hex → #rrggbb (safer for GitHub SVG rendering). */
function toHex(value) {
	const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (hex) {
		const h = hex[1];
		if (h.length === 3)
			return `#${[...h].map((c) => c + c).join("")}`.toLowerCase();
		return `#${h}`.toLowerCase();
	}
	const oklch = value.match(
		/oklch\(\s*([\d.]+)%?\s+([\d.]+)\s+([\d.]+)\s*\)/i,
	);
	if (!oklch) return value;
	let L = Number(oklch[1]);
	if (L > 1) L /= 100;
	const C = Number(oklch[2]);
	const H = (Number(oklch[3]) * Math.PI) / 180;
	const a = C * Math.cos(H);
	const b = C * Math.sin(H);
	const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
	const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
	const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
	const l = l_ ** 3;
	const m = m_ ** 3;
	const s = s_ ** 3;
	const r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
	const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
	const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
	const enc = (x) => {
		x = Math.min(1, Math.max(0, x));
		return x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
	};
	const byte = (x) =>
		Math.round(enc(x) * 255)
			.toString(16)
			.padStart(2, "0");
	return `#${byte(r)}${byte(g)}${byte(bl)}`;
}

function remPx(value, fallback = 8) {
	const m = String(value).match(/([\d.]+)rem/);
	if (m) return Number(m[1]) * 16;
	const px = String(value).match(/([\d.]+)px/);
	if (px) return Number(px[1]);
	return fallback;
}

function esc(s) {
	return String(s)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/"/g, "&quot;");
}

const swatchKeys = [
	"color-primary",
	"color-secondary",
	"color-accent",
	"color-neutral",
	"color-base-100",
	"color-base-200",
	"color-base-300",
	"color-info",
	"color-success",
	"color-warning",
	"color-error",
];

const short = {
	"color-primary": "primary",
	"color-secondary": "secondary",
	"color-accent": "accent",
	"color-neutral": "neutral",
	"color-base-100": "base-100",
	"color-base-200": "base-200",
	"color-base-300": "base-300",
	"color-info": "info",
	"color-success": "success",
	"color-warning": "warning",
	"color-error": "error",
};

function panel(vars, title, x, y, w, h) {
	const c = (k) => toHex(vars[k] ?? "#888");
	const content = c("color-base-content");
	const muted = `${content}99`;
	const rSel = remPx(vars["radius-selector"]);
	const rField = remPx(vars["radius-field"]);
	const rBox = remPx(vars["radius-box"]);

	const sw = 34;
	const gap = 5;
	const swatches = swatchKeys
		.map((key, i) => {
			const sx = 16 + i * (sw + gap);
			const sy = 48;
			return `
    <rect x="${sx}" y="${sy}" width="${sw}" height="${sw}" rx="6" fill="${c(key)}" stroke="${c("color-base-300")}" stroke-width="1"/>
    <text x="${sx + sw / 2}" y="${sy + sw + 12}" text-anchor="middle" fill="${muted}" font-size="8" font-family="ui-sans-serif,system-ui,sans-serif">${esc(short[key])}</text>`;
		})
		.join("");

	const ctrlY = 120;
	const btnX = 16;
	const fieldX = 126;
	const boxX = 296;

	return `
  <g transform="translate(${x},${y})">
    <rect width="${w}" height="${h}" rx="12" fill="${c("color-base-100")}" stroke="${c("color-base-300")}" stroke-width="1"/>
    <text x="16" y="28" fill="${content}" font-size="14" font-weight="600" font-family="ui-sans-serif,system-ui,sans-serif">${esc(title)}</text>
    ${swatches}

    <rect x="${btnX}" y="${ctrlY}" width="96" height="36" rx="${rSel}" fill="${c("color-primary")}"/>
    <text x="${btnX + 48}" y="${ctrlY + 23}" text-anchor="middle" fill="${c("color-primary-content")}" font-size="12" font-weight="600" font-family="ui-sans-serif,system-ui,sans-serif">Button</text>
    <text x="${btnX}" y="${ctrlY + 54}" fill="${muted}" font-size="10" font-family="ui-monospace,monospace">selector ${esc(vars["radius-selector"] ?? "")}</text>

    <rect x="${fieldX}" y="${ctrlY}" width="150" height="36" rx="${rField}" fill="${c("color-base-200")}" stroke="${c("color-base-300")}" stroke-width="1"/>
    <text x="${fieldX + 12}" y="${ctrlY + 23}" fill="${muted}" font-size="12" font-family="ui-sans-serif,system-ui,sans-serif">Input field</text>
    <text x="${fieldX}" y="${ctrlY + 54}" fill="${muted}" font-size="10" font-family="ui-monospace,monospace">field ${esc(vars["radius-field"] ?? "")}</text>

    <rect x="${boxX}" y="${ctrlY - 4}" width="152" height="72" rx="${rBox}" fill="${c("color-base-200")}" stroke="${c("color-base-300")}" stroke-width="1"/>
    <rect x="${boxX + 12}" y="${ctrlY + 10}" width="72" height="10" rx="3" fill="${c("color-accent")}"/>
    <rect x="${boxX + 12}" y="${ctrlY + 28}" width="120" height="8" rx="2" fill="${c("color-base-300")}"/>
    <rect x="${boxX + 12}" y="${ctrlY + 42}" width="96" height="8" rx="2" fill="${c("color-base-300")}"/>
    <text x="${boxX}" y="${ctrlY + 86}" fill="${muted}" font-size="10" font-family="ui-monospace,monospace">box ${esc(vars["radius-box"] ?? "")}</text>
  </g>`;
}

const darkVars = parseTheme("xianii");
const lightVars = parseTheme("xianii-light");
for (const k of ["radius-selector", "radius-field", "radius-box"]) {
	if (!lightVars[k]) lightVars[k] = darkVars[k];
}

const W = 980;
const H = 300;
const panelW = 464;
const panelH = 220;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Xianii theme palette preview">
  <title>Xianii theme preview</title>
  <rect width="${W}" height="${H}" fill="#0a0a0a"/>
  <text x="16" y="22" fill="#eee" font-size="13" font-weight="700" font-family="ui-sans-serif,system-ui,sans-serif">@xianii/design-system</text>
  <text x="200" y="22" fill="#777" font-size="11" font-family="ui-sans-serif,system-ui,sans-serif">palette · controls · radius (from tokens.css)</text>
${panel(darkVars, "xianii (dark)", 16, 36, panelW, panelH)}
${panel(lightVars, "xianii-light", 500, 36, panelW, panelH)}
</svg>
`;

// self-check: parse + oklch round-trip sanity
{
	const assert = (cond, msg) => {
		if (!cond) throw new Error(msg);
	};
	assert(darkVars["color-primary"]?.startsWith("oklch"), "dark primary");
	assert(lightVars["color-primary"]?.startsWith("oklch"), "light primary");
	assert(/^#[0-9a-f]{6}$/.test(toHex(darkVars["color-primary"])), "hex primary");
	assert(toHex("#44403c") === "#44403c", "passthrough hex");
	assert(remPx("0.5rem") === 8, "rem→px");
	assert(svg.includes(toHex(darkVars["color-primary"])), "svg embeds primary");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, svg);
console.log(`wrote ${outFile}`);
