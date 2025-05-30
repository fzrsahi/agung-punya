# Astro FloodMap

Aplikasi simulasi banjir menggunakan Astro dan Cesium untuk visualisasi 3D peta banjir.

## 🌊 Tentang Proyek

Proyek ini adalah aplikasi web yang menampilkan simulasi dan visualisasi banjir menggunakan:
- **Astro** - Framework web modern untuk performa optimal
- **Cesium** - Library 3D globe dan peta untuk visualisasi geospasial

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk otomatis deploy ke GitHub Pages. Berikut langkah-langkahnya:

### 1. Setup Repository di GitHub
1. Push kode ke repository GitHub Anda
2. Pastikan repository bernama `Astro-FloodMap` atau sesuaikan konfigurasi di `astro.config.mjs`

### 2. Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Pergi ke **Settings** > **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**

### 3. Deploy Otomatis
- Setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis:
  - Build aplikasi Astro
  - Deploy ke GitHub Pages
- Anda juga bisa trigger deploy manual dari tab **Actions**

### 4. Akses Aplikasi
Setelah deploy berhasil, aplikasi akan tersedia di:
```
https://agungdunggio.github.io/Astro-FloodMap/
```

### 5. Troubleshooting
- Pastikan Node.js version di workflow (18.20.8+) kompatibel dengan Astro
- Cek tab **Actions** untuk melihat status build dan deploy
- Pastikan konfigurasi `site` dan `base` di `astro.config.mjs` sesuai dengan repository Anda

## 📋 Persyaratan

- Node.js 18.20.8 atau lebih baru
- npm atau package manager lainnya

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# agung-punya
