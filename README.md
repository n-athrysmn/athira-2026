<!-- ABOUT THE PROJECT -->

## About The Project

This portfolio showcases my work as a Full Stack Engineer, highlighting projects
in web and enterprise application development. It demonstrates my experience
building scalable systems using modern technologies such as React, Node.js, and
cloud platforms, as well as my focus on performance, usability, and real-world
impact.

### Built With

The following technologies were used in this project:

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![MaterialUI](https://img.shields.io/badge/Material%20UI-%23FFFFFF?style=for-the-badge&logo=MUI&logoColor=#007FFF)
- ![GitHub][GitHub]
- ![GitHubPages][GitHubPages]
- ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
- ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<!-- GETTING STARTED -->

## Getting Started

To get this application running in your system, please follow the instructions
below:

### Prerequisites

To get started, you must have the following in your local machine:

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

VS Code is optional, you can use other code editor/IDE that you prefer and it's
only needed if you want to change the code.

## Installation

After having the prerequisites technologies, you can follow the step below to
run this project in your local machine.

1. Clone the repo
   ```sh
   git clone https://github.com/n-athrysmn/athira-2026.git
   ```
2. Install NPM packages. You can also open terminal and type the following
   ```sh
   npm install
   ```
3. Run the project
   ```js
   npm run dev
   ```
4. If you want to edit the code in VS Code, you can open any terminal and type
   the following
   ```sh
   code .
   ```
   for Cursor, you can type the following, but do make sure that you are in the
   right folder path if you do this
   ```sh
   cursor .
   ```
   Otherwise you can just open the project by right clicking on the folder and
   click the
   ```sh
   Open folder with {code editor/IDE of your choice}
   ```
5. To push the changes to your repository, you need to add the remote origin of
   your repository
   ```sh
   git remote add origin https://github.com/{username}/{repo_name}.git
   ```
6. After making changes, stage the changes first
   ```sh
   git add .
   ```
   then write a commit message for the changes
   ```sh
   git commit -m "first commit"
   ```
7. Push the changes to your remote repository
   ```sh
   git push -u origin main
   ```
   for subsequent code push (after the first commit), just run the command below
   ```sh
   git push
   ```

## Deployment

There are multiple ways to deploy this project, depending on your preference.
Please check them out below:

### GitHub Pages

1. For deployment to GitHub pages purposes, go to the package.json file and
   change the homepage link according to the format below

   ```sh
   https://your-github-username.github.io/this-project-repository-name/
   ```

   You can skip this step and the next two steps if you want to deploy to
   Vercel.

2. Be sure to push all changes before you start deploying the project then
   create a build
   ```sh
   npm run build
   ```
   after build is done, run the command below in the terminal to deploy the
   project in GitHub Pages
   ```sh
   npm run deploy
   ```
3. After a few minutes, you will be able to see the project live on the link you
   put on step 1. If you made more changes, you can just commit the changes and
   run the command in step 2 to redeploy.

### Vercel

1. For deployment to Vercel, you can visit the website here
   `https://vercel.com/`
2. If you are new to Vercel, I'd suggest to sign up with GitHub account or with
   account where you have your codes stored.
3. Create or Add new project on Vercel, I'd suggest to keep the project name
   consistent as the repository name but you can name it however you want.
4. Then import your git repository. You might have to adjust permissions, adjust
   them as you see fits.
5. After the import, Vercel will automatically deploy it for you.
6. After the first successful deployment, you will only need to push the changes
   to your Git account and Vercel will redeploy again automatically.

## Commit Message Structure

To make your commits easier to understand, you can follow the structure below:

- feat: A new feature
- fix: A bug fix
- chore: Routine tasks, maintenance, or miscellaneous - changes
- docs: Documentation changes
- test: Adding or modifying tests
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- perf: Performance improvements
- build: Changes to the build system or external dependencies
- ci: Changes to the continuous integration configuration
- revert: Reverting a previous commit

## Things to note (IMPORANT)

- If you are not using Vercel, you can remove `<Analytics />` component and the
  `import { Analytics } from "@vercel/analytics/next";` from
  `src/app/layout.tsx`. You will also need to uninstall the package, use the
  command below
  ```sh
  npm uninstall @vercel/analytics
  ```
- GitHub pages can only serve static pages
- If you are deploying on GitHub pages, you need to edit the `next.config.ts`
  file, and replace the `nextConfig` with this
  ```sh
  const nextConfig: NextConfig = {
   output: "export",
   images: {
      unoptimized: true,
   },
  };
  ```
- Since GitHub pages can only serve static pages, you will need to remove the
  `api` folder (`src/app/api`), `lib` folder (`src/lib`) and the `api.ts` file
  inside `src/helpers` folder. You need to uninstall the `Firebase Firestore`
  package as well, use the command below
  ```sh
  npm uninstall firebase
  ```
- Due to the GitHub pages constraint, you will also need to remove the
  `Feedbacks.tsx` component at `src/app/components` folder.
- I am using Firebase Firestore to save the comments, but you can also use
  MongoDB or any other database.

<!-- CONTACT -->

## Contact

Nora Athira Yasmin Binti Kassim -
[LinkedIn Profile](https://www.linkedin.com/in/norakassim/) -
athira.ysmn@gmail.com

Project Link: [Link to github pages](https://n-athrysmn.github.io/athira-2026/)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Get technologies badges for your README file from the link below!

- [GitHub badges](https://github.com/Ileriayo/markdown-badges)

Get free awesome customizeable illustration for your projects from Storyset!

- [Storyset](https://storyset.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[GitHub]:
  https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[GitHubPages]:
  https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com/
