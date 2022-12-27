# **JS/TS Project config with Pre-commit hooks**

`@author Valeriy Liashuk Free2ex.com`

## About

This commands allows you to setup JS/TS application, with pre-commit hooks

## Installing
1. Create project only with Node.JS
2. Install required dependencies for ur project
 
- Need to execute this command to install ESLint, Lint-Staged, Husky, Prettier one by one:
```hgignore
    npm i --save-dev eslint husky lint-staged prettier husky-init
```
- If u using TS instead of JS add this:
```hgignore
    npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
- Creating script for installing husky
```hgignore
    npm set-script prepare "husky install" && npm run prepare
```
- Before executing this script create folder .husky in root of your project
```hgignore
    npx husky add .husky/pre-commit "npx lint-staged"
```
3. Create & fill .prettierrc,  .prettierignore, .eslintrc files
4. Add following lines to package.json
```hgignore
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint components/ pages/",
      "prettier --write .",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```
5. All done and ready for testing ;)

## Additional part (GitHub Commit Lint)

If u want to complete all GitHib Commits Conventional follow this steps:

1. 
```hgignore
    npm i --save-dev @commitlint/config-conventional @commitlint/cli
```
2. Create & fill .commitlintrc.json
```hgignore
{"extends": ["@commitlint/config-conventional"]}
```
- Init script which will check our commits
```hgignore
    npx husky add .husky/commit-msg  "npx --no -- commitlint --edit ${1}" 
```

