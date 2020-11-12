import * as Blockly from 'blockly/core';

Blockly.mainWorkspace.registerToolboxCategoryCallback(
    'SEARCH',
    function () {
        const searchstring = $($('.blockly-ws-search-input').children()[0]).val();
        let results = [];
        const searchworkspace = new Blockly.Workspace(); // a headless workspace for searching block attributes
        recursiveSearch(Blockly.mainWorkspace.toolbox_);

        function recursiveSearch(child) {
            console.log(child)
            if (child.contents_.length != 0) {
                for (var i = 1; i < child.contents_.length; i++) {
                    const currentCategory = child.contents_[i]
                    if (currentCategory.getContents()) {
                        for (const block of currentCategory.getContents()) {
                            var searchblock = searchworkspace.newBlock(block.type);
                            if (typeof (searchblock.tooltip) === 'string' && searchblock.tooltip.search(searchstring) > -1) {
                                results.push(block.blockxml);
                            }
                            searchworkspace.clear();
                        }
                    }
                }
            } else {
                if (child.getContents()) {
                    for (const block of child.getContents()) {
                        var searchblock = searchworkspace.newBlock(block.type);
                        if (typeof (searchblock.tooltip) === 'string' && searchblock.tooltip.search(searchstring) > -1) {
                            results.push(block.blockxml);
                            console.log("HE")
                        }
                        searchworkspace.clear();
                    }
                }
            }
        }
        searchworkspace.dispose();
        return results;
    });
Blockly.mainWorkspace.toolbox_.contents_[0].hide();