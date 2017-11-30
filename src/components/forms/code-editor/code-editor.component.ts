/*
import 'brace/mode/html';
import 'brace/mode/json';
import 'brace/mode/javascript';
import 'brace/mode/typescript';
import 'brace/mode/css';
import 'brace/theme/chrome';
import 'brace/ext/beautify';

import * as Ace from 'brace';

import { AfterViewInit, Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'uni-code',
    templateUrl: 'code-editor.component.html',
    styleUrls: ['code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit, OnChanges, AfterViewInit {

    @HostBinding('class.uni-code') componentClass = true;
    @Input() code = '';
    @Output() codeChange = new EventEmitter();

    @Input() editable = false;
    @Input() language: 'html' | 'json' | 'javascript' | 'css' = 'html';

    @ViewChild('editorContainer') editorContainer;

    editor: Ace.Editor = null;

    constructor() { }
    ngOnInit() { }

    ngAfterViewInit() {
        const element = this.editorContainer.nativeElement;
        this.editor = Ace.edit(element);
        this.configureEditor();
        this.setCode();
        this.setLanguage();
        this.editor.on('change', _ => {
            this.code = this.editor.getValue();
            this.codeChange.emit(this.code);
        });
    }

    ngOnChanges(changes) {
        if (!this.editor) { return; }
        if (changes.code) { this.setCode(); }
        if (changes.language) { this.setLanguage(); }
        if (changes.editable) { this.configureEditor(); }
    }
    configureEditor() {
        this.editor.setTheme(`ace/theme/chrome`);
        this.editor.getSession().setUseWrapMode(true);
        this.editor.setShowPrintMargin(false);
        this.editor.setHighlightSelectedWord(true);
        if (!this.editable) {
            this.editor.setReadOnly(true);
            this.editor.setHighlightActiveLine(false);
            this.editor.renderer.setShowGutter(false);
            this.editor.renderer.hideCursor();
        } else {
            this.editor.setBehavioursEnabled(true);
            this.editor.renderer.setShowGutter(true);
            this.editor.renderer.showCursor();
        }
        this.editor.$blockScrolling = Infinity;
        this.editor.resize();
    }
    setCode(code = this.code) {
        if (!code) { return; }
        this.code = code;
        this.editor.setValue(this.code);
        this.editor.clearSelection();
        this.editor.focus();
    }
    setLanguage(language = this.language) {
        if (['html', 'json', 'javascript', 'typescript', 'css'].indexOf(language) === -1) { return; }
        this.language = language;
        this.editor.getSession().setMode(`ace/mode/${this.language}`);
    }
}

*/
