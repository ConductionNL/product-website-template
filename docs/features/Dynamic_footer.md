# The Dynamic Footer: A Flexible Tool for Organizing Your Content

<!-- The dynamic footer in the Product Website Template is a powerful feature that allows you to add folders to the main footer of your product page. This provides a flexible and intuitive way to organize and navigate your content. -->

<!-- When you add a folder to the main menu, the template automatically creates a submenu item for each markdown file in that folder. This means that each markdown file becomes its own page under the corresponding main menu item. It's a simple and efficient way to structure your content and make it easily accessible to visitors.

There's one exception to this rule: the `README.md` file. Instead of becoming a submenu item, the `README.md` file is used as the page for the main menu item itself. This means that when a visitor clicks on the main menu item, they're taken to a page displaying the content of the `README.md` file.

This feature also provides a neat trick for creating a menu item without a submenu. If you want a menu item to lead directly to a single page without any subpages, you can simply create a folder that contains only a `README.md` file. When a visitor clicks on this menu item, they'll be taken directly to the page displaying the content of the `README.md` file. -->

A column on the footer consists of the following properties

| Property Name                          | Options/Type      | Optional Values and Their Use                                                                                                                         |
| -------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                | `string`          | The title of the footer column.                                                                                                                       |
| `items`                                | `object`          | The items displayed in the column                                                                                                                     |
| `items.ariaLabel`                      | `string`          | The ariaLabel of the displayed item.                                                                                                                  |
| `items.value`                          | `string`          | The text that wil be displayed.                                                                                                                       |
| `items.link`                           | `string`          | The url that the item wil be linked to when clicked.                                                                                                  |
| `items.internalMarkdown`               | `object`          | An object that contains the directoryName and fileName to internally link to.                                                                         |
| `items.internalMarkdown.directoryName` | `string`          | The directory name set the `github_docs_directory_paths` variable e.g. `Features`.                                                                    |
| `items.internalMarkdown.fileName`      | `string`          | The file name thats in the directory set at `directoryName` e.g. `README` [Read more](#directoryName).                                                |
| `items.icon`                           | `object`          | The object of the icon containing de properties of a [Font Awesome](https://fontawesome.com/) icon.                                                   |
| `items.icon.prefix`                    | `fas`/`fab`/`far` | The prefix of the Font Awesome icon (`fas` Solid icon), (`fab` Brand icon), (`far` Regular icon).                                                     |
| `items.icon.icon`                      | `string`          | The name of the Font Awesome icon e.g. `github`.                                                                                                      |
| `items.icon.placement`                 | `left`/`right`    | The placement of the Font Awesome icon on the `left` or `right`.                                                                                      |
| `items.customIcon`                     | `object`          | An object containing properties for a customIcon.                                                                                                     |
| `items.customIcon.icon`                | `string`          | The full lenght string of an icon e.g. `"<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.0\" ........ -2 0 -27 -23 -54 -50z\" /> </g> </svg>"`. |
| `items.customIcon.placement`           | `left`/`right`    | The placement of the Font Awesome icon on the `left` or `right`.                                                                                      |

> [!WARNING]
>
> #### directoryName
>
> The directoryName must be equal to the a name set in the `GITHUB_DOCS_DIRECTORY_PATHS`. <br />
> e.g.: `Features`. If not set correctly the requested files can not be found and will result in a `404` error.
> <br />
>
> ```yaml
> GITHUB_DOCS_DIRECTORY_PATHS: '[{"name": "Features", "location": "/docs/features"}, {"name": "Roadmap", "location": "/docs/roadmap"}, {"name": "Usecases", "location": "/docs/usecases"}]'
> ```

## Configuration

Dynamic footer items can be passed to the json file like this:

```json
[
  {
    "title": "Links",
    "items": [
      {
        "ariaLabel": "Home",
        "value": "Home",
        "link": "/",
        "icon": { "prefix": "fas", "icon": "home", "placement": "left" }
      },
      {
        "ariaLabel": "Github",
        "value": "Github",
        "link": "https://github.com/ConductionNL/product-website-template",
        "icon": { "prefix": "fab", "icon": "github", "placement": "left" }
      },
      {
        "ariaLabel": "Roadmap",
        "value": "Roadmap",
        "link": "/Roadmap",
        "icon": { "prefix": "fas", "icon": "arrow-right", "placement": "left" }
      }
    ]
  },
  {
    "title": "Features",
    "items": [
      {
        "ariaLabel": "Features README",
        "value": "README",
        "link": "/Features",
        "icon": { "prefix": "fas", "icon": "arrow-right", "placement": "left" }
      },
      // ............
      // ............
      {
        "ariaLabel": "NL Design",
        "value": "NL Design",
        "internalMarkdown": {
          "directoryName": "Features",
          "fileName": "NL_Design"
        },
        "icon": { "prefix": "fas", "icon": "arrow-right", "placement": "left" }
      }
      // ............
    ]
  }
]
```
