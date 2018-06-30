import { Component, OnInit, Inject } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;

  public languages: string[] = ['Java', 'C++', 'Python'];
  language: string = 'Java'; // default

  sessionId: string;

  defaultContent = {
    'Java': `public class Example {
       public static void main(String[] args) {
         // Your solution goes here
       }
    }`,
    'C++': `#include <iostream>
    using namespace std;

    int main() {
    	// Your solution goes here
    	return 0;
    }`,
    'Python': `class Solution:
    def solution():
		# Your solution goes here`
  };

  constructor(@Inject('collaboration') private collaboratiion, private route: ActivatedRoute) {

   }

  ngOnInit() {
  	this.route.params
  		.subscribe(params => {
  			this.sessionId = params['id'];
  			this.initEditor();
  		});
  	}

  initEditor() {
  	this.editor = ace.edit('editor');
  	this.editor.setTheme('ace/theme/eclipse');
  	this.resetEditor();
  	this.editor.$blockScrolling = Infinity;

  	document.getElementsByTagName('textarea')[0].focus();
  	this.collaboratiion.init(this.editor, this.sessionId);
  	this.editor.lastApplieddChange = null;

  	this.editor.on('change', (e) => { // every time we click a keyboard
  		console.log('editor changes: ' + JSON.stringify(e));
  		if (this.editor.lastAppliedChange != e) { // only send once
  			this.collaboratiion.change(JSON.stringify(e));
  		}
  	});

  	this.editor.getSession().getSelection().on("changeCursor", () => {
  		let cursor = this.editor.getSession().getSelection().getCursor();
  		console.log('cursor moves: ' + JSON.stringify(cursor));
  		this.collaboratiion.cursorMove(JSON.stringify(cursor));
  	})
  }

  setLanguage(language: string): void {
  	this.language = language;
  	this.resetEditor();
  }

  resetEditor(): void {
  	this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
  	this.editor.setValue(this.defaultContent[this.language]);
  }

  submit(): void {
  	let userCode = this.editor.getValue();
  	console.log(userCode);
  }
}
