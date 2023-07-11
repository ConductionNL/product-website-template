# NL Design

The Product Website Template harnesses the power of the NL Design System to provide a user-centered interface that is both intuitive and accessible. The NL Design System is a comprehensive design system developed in the Netherlands, which focuses on creating digital solutions that are user-friendly, inclusive, and accessible.

One of the key strengths of the NL Design System is its commitment to user testing and validation. Every component and design pattern in the system has been tested with real users in the field. This ensures that the interface elements used in the Product Website Template are not only aesthetically pleasing but also effective in facilitating user interaction and engagement.

In addition to its user-centered approach, the NL Design System also adheres to WCAG (Web Content Accessibility Guidelines) compliance. This means that the Product Website Template is designed to be accessible to a wide range of people, including those with disabilities. By adhering to WCAG guidelines, the template ensures that your product page is inclusive and accessible to all users.

But the benefits of the NL Design System don't stop there. The system also provides a flexible framework that can be easily customized to match an organization's style. In the Product Website Template, you can style your product page using your organization's NL design token. This allows you to maintain a consistent look and feel across all your products and services, reinforcing your brand identity.

By leveraging the NL Design System, the Product Website Template provides a user-centered, accessible, and customizable solution for showcasing your open-source project.

## Configuration
The NL Design template can be configured (or changed) trough the workflow yaml. There are three properties governing the NL Design system

````yaml
   # NL-Design Theme
   NL_DESIGN_THEME_CLASSNAME: "conduction-theme"
   NL_DESIGN_THEME_CSS_PATH: "@conduction/theme/theme.css"
   NL_DESIGN_THEME_NPM_PACKAGE: "@conduction/theme@1.0.2"
````
They can be configured as

| Variable Name | Default Value | Optional Values and Their Use                                                                         |
| --- | --- |-------------------------------------------------------------------------------------------------------|
| `NL_DESIGN_THEME_CLASSNAME` | `"conduction-theme"` | The classname for your NL Design theme.                                                               |
| `NL_DESIGN_THEME_CSS_PATH` | `"@conduction/theme/theme.css"` | The CSS path for your NL Design theme.                                                                |
| `NL_DESIGN_THEME_NPM_PACKAGE` | `"@conduction/theme@1.0.2"` | The NPM package for your NL Design theme.                                                             |

In theory NL Design functions with any official and non-official token packadge (following the design rules). But this product page was tested with.

| Organsiation | Packadge             | CSS Path        | CLASSNAME               |
|--------------|----------------------|-----------------|-------------------------|
| Conduction   | `"@conduction/theme@1.0.2"` | `"@conduction/theme/theme.css"` | `"conduction-theme"`    |
