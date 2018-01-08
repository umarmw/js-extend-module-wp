import {Button} from 'myScoreUILib';
import {$} from 'myScoreUILib';

class Box extends Button {
  constructor(obj){
    super(obj);
    this.log();
  }
  log() {
    console.log("box module loaded from button!")
  }
}

$(document).ready(function() {
  let box = $('.score-box');
  if (box.length) {
    box.each(function() {
      new Box($(this));
    });
  }
});

