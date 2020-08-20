import * as Blockly from 'blockly/core';

Blockly.mainWorkspace.registerToolboxCategoryCallback(
    'SEARCH',
    function () {
        const searchstring = $($('.blockly-ws-search-input').children()[0]).val();
        let results = [];
        const searchworkspace = new Blockly.Workspace(); // a headless workspace for searching block attributes
        recursiveSearch(Blockly.mainWorkspace.toolbox_.tree_);

        function recursiveSearch(child) {
            if (child.children_.length != 0) {
                for (var i = 1; i < child.children_.length; i++) {
                    recursiveSearch(child.children_[i]);
                }
            } else {
                if (child.contents) {
                    for (const block of child.contents) {
                        var searchblock = searchworkspace.newBlock(block.type);
                        if (typeof (searchblock.tooltip) === 'string' && searchblock.tooltip.search(searchstring) > -1) {
                            results.push(block.blockxml);
                        }
                        searchworkspace.clear();
                    }
                }
            }
        }
        searchworkspace.dispose();
        return results;
    });

$(Blockly.mainWorkspace.toolbox_.tree_.children_[0].element_).hide();