# Crooked Lines - Official Repository

## Hosting

```sh
npm run start # or yarn dev
```
   
Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

It is suggested to use VS Code for this project. 

The compiled CSS files will reside in the same directory as the SCSS files. To avoid confusion, I made a workspace setting for vscode that hides the compiled CSS files within VS Code. So while importing the stylesheets, you'll have to import the file with the extension .css.

If you are using some other IDE, please look for a way to hide the compiled CSS files so you won't have any confusion.

## Commit naming conventions

<details>
<summary>Read more</summary>

For now, we'll use just these:

- `fix:` - fixes a bug
- `feat:` - new feature
- `chore:` - other changes and cleanups

Example:

- `fix: fixed navigation bar`
- `feat: added new sign in feature`
- `chore: Removed all comments and print statements`

If theres a specific file thats changed or a specific sub category of the project has changes, you can specify it like so:

- `fix(NavBar): fixed overflowing image in nav bar`
- `feat(SignIn): Added user verification before sign In`

These are just good practices and it'll be easy to revert back if some new merge is breaking the project.

</details>


## Pull requests

<details>
<summary>Read more</summary>

Each contributing member should make a separate branch for completing their tasks.
You can follow these commands to do so:

- `git checkout -b <branch name>`
- `git add .`
- `git commit -m "<Meaningful message following the convention>"`
- `git push origin <branch name>`

Then in the github repo, you can create a new pull request under pull requests tab.

To keep your branch up-to-date with the master branch, you can use the following commands:

- `git merge main`
- `git push`

<em>Note: Make sure there are no changes in your branch before merging. If there are any, you'll lose the progress.</em>

</details>



## New page

<details>
<summary>Read more</summary>

This one's quite tricky. I've setup `demo.js` and `demo.css` in project.

When you want to make a new page, you can create a new file in the appropriate directory and copy the contents of `demo.js` and `demo.css` into it.

Make sure to:

- Change path of stylesheet on the js file.
- Change the function name(Doesn't matter but just for consistency)
- Change the class name.

For a clean project structure, We'll be adding stylesheets to directories same as js files inside `styles/routes/` directory.

</details>



## New Component

<details>
<summary>Read more</summary>
Components won't have much difference compared to React components.

Just create a folder followed by a `.js` file and a `.css` file with the same name(The function should also be named same as the folder name).

One additional step is to import the `.css` file in the `styles/root/components.css` directory.

For example:
```css
@import "../../Components/MockNavigator/MockNavigator.css";
```

<em>Note: Don't name two components with same name. Since all components are styled from same file, we don't want overlaps of style. That'll mess everything up.</em>

</details>