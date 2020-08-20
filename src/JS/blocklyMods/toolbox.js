import * as Blockly from 'blockly/core';

Blockly.Toolbox.prototype.addColour_ = function(opt_tree) {
	var tree = opt_tree || this.tree_;
	var children = tree.getChildren(false);
	for (var i = 0, child; (child = children[i]); i++) {
	  var element = child.getRowElement();
	  if (element) {
		if (this.hasColours_) {
		  var border = (child.hexColour || '#ddd');
		} else {
		  var border = '#FFFFFF';
		}
		if (this.workspace_.RTL) {
		  element.children[0].style.backgroundColor = border;
		} else {
		  element.children[0].style.backgroundColor = border;
		}
	  }
	  this.addColour_(child);
	}
  };