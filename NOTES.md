# Next TypeScript

- Converted `.js` to `.ts` to support TypeScript, then re-ran `yarn dev`
- Converted `.ts` to `.tsx` to support JSX syntax within TypeScript files
- Which preference:
  ```
  const Page: NextPage<Props> = ({ title, children }) => (
    - OR -
  const Page: NextPage = ({ title, children }: Props) => (
  ```

# VS Code

- Perhaps add import organization on save (VS Code)
  ```
  "editor.codeActionsOnSave": {
      "source.organizeImports": true
  }
  ```
- Added the `clg` snippet to `typescriptreact`
