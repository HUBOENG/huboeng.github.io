# HUBO Company Website

Marketing site for **HUBO Company** — engineering & IT solutions, Banepa, Nepal.
Built with **Vite + React + Tailwind CSS v4**, deployed to **GitHub Pages** at
[hubo.com.np](https://hubo.com.np).

## Develop

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The custom domain is preserved via
`public/CNAME`.

**One-time setup:** in the repo on GitHub → **Settings → Pages → Build and
deployment → Source**, select **GitHub Actions**.

## Structure

```
public/assets/images/   images (logo, photos, client logos)
public/CNAME            custom domain (hubo.com.np)
src/components/         Navbar, Hero, Services, Stats, Clients, Contact, Footer
src/index.css          Tailwind theme (brand colors, fonts)
```

## Contact form

GitHub Pages has no backend, so the contact form opens the visitor's email
client (`mailto:`). To collect submissions automatically, create a
[Formspree](https://formspree.io) form and update `handleSubmit` in
`src/components/Contact.jsx`.

> The previous Mobirise site is preserved in git history (`index.old.html`).
