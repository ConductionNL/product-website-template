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