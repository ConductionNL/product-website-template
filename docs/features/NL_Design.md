# NL Design Themes installation

> Info: implemented themes should include Conduction and Utrecht design tokens

This product website template fully supports NL-design. Simply update the `product-page-deploy.yml` variables to your theme's values.

- `NL_DESIGN_THEME_CLASSNAME`: we will dynamically set your theme class name to the document
- `NL_DESIGN_THEME_CSS_PATH`: we load the `.css` from your theme, we expect the relative path after `node_modules/...this/path/to/theme.css`
- `NL_DESIGN_THEME_NPM_PACKAGE`: the name (and optionally the version) of your package

## List of tested themes

The following themes are previously tested and implemented.

|Organization|NL_DESIGN_THEME_CLASSNAME|NL_DESIGN_THEME_CSS_PATH|NL_DESIGN_THEME_NPM_PACKAGE|
|---|---|---|---|
|Conduction|`conduction-theme`|`@conduction/theme/theme.css`|`@conduction/theme@1.0.2`|
|Rotterdam|`rotterdam-theme`|`@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css`|`@nl-design-system-unstable/rotterdam-design-tokens`|
