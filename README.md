# Niket Custom Theme

Shopify Online Store 2.0 theme with custom sections and Tailwind CSS build pipeline.

## Structure
- `layout/` global layout wrappers
- `templates/` JSON templates for pages
- `sections/` section components
- `snippets/` shared partials
- `assets/` static assets (CSS/JS/images)
- `config/` theme settings
- `locales/` translations
- `css/` Tailwind entry files

## Tailwind CSS
Tailwind is compiled into `assets/application.css.liquid`.

### Install
```
npm install
```

### Build (watch + minify)
```
npm run build
```

## Notes
- `assets/application.css.liquid` is generated and ignored by git.
- Theme styles include `base.css` and `application.css` via `snippets/stylesheets.liquid`.
