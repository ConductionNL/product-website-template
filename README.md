# Product Website Template 

The [Product Website Template](https://github.com/ConductionNL/product-website-template) by [Conduction](https://www.conduction.nl/) is a powerful tool designed to alleviate the common issue faced by many open-source and Common Ground projects: the lack of a dedicated product page and the cost (in time) to build one. This template enables users to quickly and easily set up a product page based on the contents of their repository.

The template is highly customizable, allowing users to style their product page using their organization's NL design token. This means that you can maintain a consistent look and feel across all your products and services, reinforcing your brand identity.

One of the key advantages of this template is its simplicity. You can have a fully functional product page up and running in a matter of minutes, without the need to write any additional code or documentation. This not only saves time but also makes it accessible to users with varying levels of technical expertise.

Whether you're a seasoned developer or a newcomer to the world of open-source projects, the Product Website Template is a valuable resource that can help you showcase your work in a professional and appealing manner.

## Using this template for your own github repository

1. **Download the GitHub Workflow File**
   Download the [productpage workflow file ](https://github.com/ConductionNL/product-website-template/blob/main/.github/workflows/product-page-deploy.yml) on GitHub.  Download the file to your local machine. For more information on GitHub workflows, you can refer to the [GitHub Actions documentation](https://docs.github.com/en/actions).

2. **Place the Workflow File in Your Repository**
    - *In your browser*, navigate to your repository. Inside the repository, look for a folder named `.github/workflows`. If it doesn't exist, create it. When in the folder press `Add file` (top right corner ) copy paste the content of the product-page-deploy.yml into the edit screen, name the file `product-page-deploy.yml` and hit commit and push
    - OR *On your local machine*, navigate to your repository. Inside the repository, look for a folder named `.github/workflows`. If it doesn't exist, create it. Place the downloaded workflow file into this folder. For more information on the structure of a GitHub repository, you can refer to the [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories).

3. **Configure the Workflow File**
   Open the workflow file in a text editor. Modify the configuration settings according to your needs. Be sure to save your changes. For more information on configuring a workflow file, refer to the [GitHub Actions documentation](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions).

4. **Commit and Push the Workflow File to Your Repository**
   Open a terminal and navigate to your repository. Use the following commands to add the workflow file to your repository, commit the changes, and push them to GitHub:

   ````CLI
   git add .github/workflows/product-page-deploy.yml
   git commit -m "Added workflow file for product page"
   git push
   ````
   
For more information on using Git, refer to the [Git documentation](https://git-scm.com/doc).

If you don't have github pages setup yet, also follow the following steps

1. **Open your web browser and navigate to GitHub.**
   Go to [https://github.com](https://github.com).

2. **Log in to your GitHub account.**
   Click on the "Sign in" button at the top right corner of the page. Enter your username or email address and password, then click "Sign in".

3. **Navigate to the repository where you want to activate GitHub Pages.**
   You can do this by clicking on the name of the repository under "Your repositories" if it's a recent repository, or by clicking on "Repositories", then clicking on the name of the repository.

4. **Switch to the `gh-pages` branch.**
   By default, GitHub shows the `main` or `master` branch of your repository. To switch to the `gh-pages` branch, click on the "Branch" dropdown menu (it's usually a button with the name of the current branch, like `main` or `master`), then select or type `gh-pages` and hit Enter.

   If the `gh-pages` branch doesn't exist, you'll need to create it. Click on the "Branch" dropdown menu, type `gh-pages` into the text box, and hit Enter. Confirm that you want to create a new branch named `gh-pages`.

5. **Activate GitHub Pages.**
   Click on the "Settings" tab at the top of the repository. Scroll down to the "GitHub Pages" section. In the "Source" dropdown, select the `gh-pages` branch. For the folder, make sure it's set to "/ (root)".

6. **Save your changes.**
   Click on the "Save" button to activate GitHub Pages.

7. **Confirm that GitHub Pages has been activated.**
   After saving, scroll down to the "GitHub Pages" section again. You should see a message saying "Your site is published at [link]". This link is where your GitHub Pages site can be accessed.

## Configuration
The Product Website template is configurable trough the workfllow yaml. Or more exactly the env variable of the workflow yaml. When you open the file they should be at the top and look like this:

````yaml
env: # Change these to your preferences any image url can also be a base encoded image
   GITHUB_PAGES_BRANCH: gh-pages

   # Connected Repository
   GITHUB_REPOSITORY_NAME: ${{ github.event.repository.name }}
   GITHUB_REPOSITORY_URL: ${{ github.event.repository.url }}
   GITHUB_API_BASE_URL: https://api.github.com/repos/${{ github.repository }}/contents
   GITHUB_DOCS_DIRECTORY_PATHS: '[{"name": "Features", "location": "/docs/features"}]'

   # Links
   SLACK_URL: "https://join.slack.com/t/conductionworkspace/shared_invite/zt-1y5kerime-amWEvljvnLvo5S3YfU_jzg"
   READ_THE_DOCS_URL: "https://commongateway.readthedocs.io/en/latest/"

   # Navbar
   NAVBAR_LOGO_URL: "https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png"

   # Footer
   FOOTER_LOGO_URL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgd2lkdGg9IjcxLjAwMDAwMHB0IiBoZWlnaHQ9IjcwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNzEuMDAwMDAwIDcwLjAwMDAwMCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw3MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCiAgICAgICBmaWxsPSIjNDM3NkZDIiBzdHJva2U9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik0yMTggNTkyIGwtMTM3IC03NyAwIC0xNjUgMCAtMTY1IDEzMSAtNzQgYzcyIC00MSAxMzcgLTc0IDE0MyAtNzQgNgowIDcwIDMzIDE0MyA3NCBsMTMxIDc0IDEgMTY1IDAgMTY1IC02OCAzNyBjLTM3IDIxIC05OSA1NiAtMTM3IDc3IGwtNzEgNDAKLTEzNiAtNzd6IG0yOTUgLTg1IGw1NyAtMzIgMCAtMTI1IDAgLTEyNSAtMTA2IC02MCBjLTU4IC0zMyAtMTA4IC02MCAtMTExCi01OSAtMyAwIC01MiAyNyAtMTA5IDYwIGwtMTAzIDU5IDAgMTI1IDAgMTI1IDEwNyA2MSAxMDcgNjIgNTAgLTI5IGMyNyAtMTYKNzYgLTQ0IDEwOCAtNjJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTI3OCA0NzIgbC02OCAtMzcgMCAtODUgMCAtODUgNzMgLTM5IDczIC0zOSA2MiAzNCBjMzQgMTggNjIgMzcgNjIKNDEgMCA0IC0xNCAxNSAtMzEgMjMgLTI4IDE1IC0zMyAxNSAtNTQgMSAtMzEgLTIwIC00NiAtMjAgLTg0IDIgLTI3IDE1IC0zMQoyMiAtMzEgNjIgMCA0MCA0IDQ3IDMxIDYzIDM4IDIxIDUzIDIxIDg0IDEgMjEgLTE0IDI2IC0xNCA1NCAxIDE3IDggMzEgMTkgMzEKMjMgMCA4IC0xMTMgNzIgLTEyNiA3MiAtNSAwIC0zOSAtMTcgLTc2IC0zOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
   FOOTER_LOGO_HREF: "https://conduction.nl"

   # Jumbotron
   JUMBOTRON_TITLE: "Product Website Template"
   JUMBOTRON_SUBTITLE: "Product page"
   JUMBOTRON_DESCRIPTION: ${{ github.event.repository.description }}
   JUMBOTRON_SVG: "https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png"

   # NL-Design Theme
   NL_DESIGN_THEME_CLASSNAME: "conduction-theme"
   NL_DESIGN_THEME_CSS_PATH: "@conduction/theme/theme.css"
   NL_DESIGN_THEME_NPM_PACKAGE: "@conduction/theme@1.0.2"

   # Other
   FAVICON_URL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICAgICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgd2lkdGg9IjcxLjAwMDAwMHB0IiBoZWlnaHQ9IjcwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNzEuMDAwMDAwIDcwLjAwMDAwMCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw3MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCiAgICAgICBmaWxsPSIjNDM3NkZDIiBzdHJva2U9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik0yMTggNTkyIGwtMTM3IC03NyAwIC0xNjUgMCAtMTY1IDEzMSAtNzQgYzcyIC00MSAxMzcgLTc0IDE0MyAtNzQgNgowIDcwIDMzIDE0MyA3NCBsMTMxIDc0IDEgMTY1IDAgMTY1IC02OCAzNyBjLTM3IDIxIC05OSA1NiAtMTM3IDc3IGwtNzEgNDAKLTEzNiAtNzd6IG0yOTUgLTg1IGw1NyAtMzIgMCAtMTI1IDAgLTEyNSAtMTA2IC02MCBjLTU4IC0zMyAtMTA4IC02MCAtMTExCi01OSAtMyAwIC01MiAyNyAtMTA5IDYwIGwtMTAzIDU5IDAgMTI1IDAgMTI1IDEwNyA2MSAxMDcgNjIgNTAgLTI5IGMyNyAtMTYKNzYgLTQ0IDEwOCAtNjJ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTI3OCA0NzIgbC02OCAtMzcgMCAtODUgMCAtODUgNzMgLTM5IDczIC0zOSA2MiAzNCBjMzQgMTggNjIgMzcgNjIKNDEgMCA0IC0xNCAxNSAtMzEgMjMgLTI4IDE1IC0zMyAxNSAtNTQgMSAtMzEgLTIwIC00NiAtMjAgLTg0IDIgLTI3IDE1IC0zMQoyMiAtMzEgNjIgMCA0MCA0IDQ3IDMxIDYzIDM4IDIxIDUzIDIxIDg0IDEgMjEgLTE0IDI2IC0xNCA1NCAxIDE3IDggMzEgMTkgMzEKMjMgMCA4IC0xMTMgNzIgLTEyNiA3MiAtNSAwIC0zOSAtMTcgLTc2IC0zOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
````

We currently support the following configurations option's

| Variable Name | Default Value | Optional Values and Their Use |
| --- | --- | --- |
| `GITHUB_PAGES_BRANCH` | `gh-pages` | The branch that GitHub Pages will build from. |
| `GITHUB_REPOSITORY_NAME` | `${{ github.event.repository.name }}` | The name of your GitHub repository. |
| `GITHUB_REPOSITORY_URL` | `${{ github.event.repository.url }}` | The URL of your GitHub repository. |
| `GITHUB_API_BASE_URL` | `https://api.github.com/repos/${{ github.repository }}/contents` | The base URL for the GitHub API. |
| `GITHUB_DOCS_DIRECTORY_PATHS` | `'[{\"name\": \"Features\", \"location\": \"/docs/features\"}]'` | The paths to the directories containing your documentation. |
| `SLACK_URL` | `"https://join.slack.com/t/conductionworkspace/shared_invite/zt-1y5kerime-amWEvljvnLvo5S3YfU_jzg"` | The URL for your Slack workspace. |
| `READ_THE_DOCS_URL` | `"https://commongateway.readthedocs.io/en/latest/"` | The URL for your Read the Docs documentation. |
| `NAVBAR_LOGO_URL` | `"https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png"` | The URL for the logo in your navbar. |
| `FOOTER_LOGO_URL` | `"data:image/svg+xml;base64,..."` | The URL for the logo in your footer. |
| `FOOTER_LOGO_HREF` | `"https://conduction.nl"` | The URL that the footer logo links to. |
| `JUMBOTRON_TITLE` | `"Product Website Template"` | The title in your jumbotron. |
| `JUMBOTRON_SUBTITLE` | `"Product page"` | The subtitle in your jumbotron. |
| `JUMBOTRON_DESCRIPTION` | `${{ github.event.repository.description }}` | The description in your jumbotron. |
| `JUMBOTRON_SVG` | `"https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png"` | The SVG in your jumbotron. |
| `NL_DESIGN_THEME_CLASSNAME` | `"conduction-theme"` | The classname for your NL Design theme. |
| `NL_DESIGN_THEME_CSS_PATH` | `"@conduction/theme/theme.css"` | The CSS path for your NL Design theme. |
| `NL_DESIGN_THEME_NPM_PACKAGE` | `"@conduction/theme@1.0.2"` | The NPM package for your NL Design theme. |
| `FAVICON_URL` | `"data:image/svg+xml;base64,..."` | The URL for your favicon. |
