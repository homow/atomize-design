// BASE_PATH reflects the public base path defined in vite.config.js via defineConfig.base.
// Example vite.config.js:
// export default defineConfig({ base: "/my-project/" })

// This becomes essential when deploying the project under a subdirectory (e.g. GitHub Pages).
// For instance, if your site is hosted at: https://homow.github.io/my-project/
// Then BASE_PATH will be "/my-project/" and should prefix all static asset URLs.

// ⚠️ Why this is necessary:
// Vite cannot automatically rewrite static string paths inside JS/JSX files during build,
// because they are treated as plain strings—not importable or resolvable assets.
// Using import.meta.env.BASE_URL ensures that asset paths adapt correctly to the configured base.

// Example usage in JSX:
// <img src={`${BASE_PATH}static/img/main/Feature.webp`} alt="Feature Image" />
export const BASE_PATH = import.meta.env.BASE_URL;