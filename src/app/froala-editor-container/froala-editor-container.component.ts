import { Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// import 'froala-editor/js/plugins.pkgd.min.js';

@Component({
  selector: 'app-froala-editor-container',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule],
  template: `<div [froalaEditor]>Hello, Froala!</div>`,
  styles: ``,
})
export class FroalaEditorContainerComponent {}
