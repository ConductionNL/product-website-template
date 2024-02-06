# The Dynamic Menu: A Flexible Tool for Organizing Your Content

The dynamic menu in the Product Website Template is a powerful feature that allows you to add folders to the main menu of your product page. This provides a flexible and intuitive way to organize and navigate your content.

<!-- When you add a folder to the main menu, the template automatically creates a submenu item for each markdown file in that folder. This means that each markdown file becomes its own page under the corresponding main menu item. It's a simple and efficient way to structure your content and make it easily accessible to visitors. -->

<!-- There's one exception to this rule: the `README.md` file. Instead of becoming a submenu item, the `README.md` file is used as the page for the main menu item itself. This means that when a visitor clicks on the main menu item, they're taken to a page displaying the content of the `README.md` file. -->

<!-- This feature also provides a neat trick for creating a menu item without a submenu. If you want a menu item to lead directly to a single page without any subpages, you can simply create a folder that contains only a `README.md` file. When a visitor clicks on this menu item, they'll be taken directly to the page displaying the content of the `README.md` file. -->

A menu item consists of the following properties

| Property Name                                | Options/Type           | Optional Values and Their Use                                                                                                                              |
| -------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`                                      | `string`               | The name of the menu item.                                                                                                                                 |
| `type`                                       | `internal`/`extrernal` | The type of the menu item of which it links to, to an external or internal page.                                                                           |
| `current`                                    | `object`               | An object that when true will set the menu item to current.                                                                                                |
| `current.pathname`                           | `string`               | The pathname on whitch path the menu item is current. pathname = "/Roadmap" is current at https://conductionnl.github.io/product-website-template/Roadmap/ |
| `handleClick`                                | `object`               | An object that tells the menu item what to do when clicked on.                                                                                             |
| `handleClick.link`                           | `string`               | The url to link to.                                                                                                                                        |
| `handleClick.internalMarkdown`               | `object`               | An object that contains the directoryName and fileName to internally link to.                                                                              |
| `handleClick.internalMarkdown.directoryName` | `string`               | The directory name set the `github_docs_directory_paths` variable e.g. `Roadmap`.                                                                          |
| `handleClick.internalMarkdown.fileName`      | `string`               | The file name thats in the directory set at `directoryName` e.g. `README`.                                                                                 |
| `subItems`                                   | `object`               | The subItems object contains all the previous properties.                                                                                                  |

By leveraging the dynamic menu, you can create a user-friendly navigation system that adapts to the structure of your content.

## Configuration

Dynamic menu items can be passed to the

```json
[
  {
    "label": "Home",
    "type": "internal",
    "current": {
      "pathname": "/"
    },
    "handleClick": {
      "link": "/"
    }
  },
  {
    "label": "Roadmap",
    "type": "internal",
    "current": {
      "pathname": "/Roadmap"
    },
    "handleClick": {
      "link": "/Roadmap"
    }
  },
  {
    "label": "Features",
    "current": {
      "pathname": "/Features"
    },
    "subItems": [
      {
        "label": "README",
        "type": "internalMarkdown",
        "current": {
          "pathname": "/Features/README"
        },
        "handleClick": {
          "internalMarkdown": {
            "directoryName": "Features",
            "fileName": "README"
          }
        }
      },
      // ............
      // ............
      {
        "label": "NL Design",
        "type": "internalMarkdown",
        "current": {
          "pathname": "/Features/NL_Design"
        },
        "handleClick": {
          "internalMarkdown": {
            "directoryName": "Features",
            "fileName": "NL_Design"
          }
        }
      }
      // ............
    ]
  }
]
```

Keep in mind that in order to actually pass the json configuraiton trough the worflow yaml it needs to be both stringified and put to one line.

```yaml
GITHUB_DOCS_DIRECTORY_PATHS: '[{"name": "Features", "location": "/docs/features"}, {"name": "Roadmap", "location": "/docs/roadmap"}, {"name": "Usecases", "location": "/docs/usecases"}]'
```
