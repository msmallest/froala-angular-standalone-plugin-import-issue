# Froala Angular Standalone Plugin Import Issue

Regarding ticket to make running Froala pluging in Angular 17 work with the default standalone application and components and new default builder. Context for the error is below this section on how to run this example.

## HOW TO RUN EXAMPLE
- You can run the example in browser using Stackblitz. Link: https://stackblitz.com/~/github.com/msmallest/froala-angular-standalone-plugin-import-issue


## Issue

`MY-COMPONENT-FILE-HERE.ts:11`

```ts
import '../../../../../../../../../../node_modules/froala-editor/js/plugins.pkgd.min.js';
```

```
main.js:29 Uncaught Error: Dynamic require of "froala-editor" is not supported
  at main.js:29:9
  at plugins.pkgd.min.js:8:66
  at node_modules/froala-editor/js/plugins.pkgd.min.js (plugins.pkgd.min.js:9:1)
  at __require2 (main.js:32:50)
  at MY-COMPONENT-FILE-HERE.ts:11:8
(anonymous) @ main.js:29
(anonymous) @ plugins.pkgd.min.js:8
node_modules/froala-editor/js/plugins.pkgd.min.js @ plugins.pkgd.min.js:9
__require2 @ main.js:32
(anonymous) @ MY-COMPONENT-FILE-HERE.ts:11
```

## Key Issue
- Error when importing Froala plugins
  - App will not run
  - Something due to a `require`
- Likely due in some part due to
  - CommonJS usage in Froala with Angular's new `application` default builder
  - Standalone application and component default, not documented from what I can find. Any resources are appreciated.
---

## Angular App Running + Building Info 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
