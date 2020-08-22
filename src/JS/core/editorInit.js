import * as Blockly from 'blockly/core';
import English from 'translations/en.json'
import { WorkspaceSearch } from 'core/search';

const toolbox = document.getElementById("toolbox");

const options = {
    toolbox: toolbox,
    theme: Blockly.Themes.Dark,
    renderer: "zelos",
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: true,
    toolboxPosition: 'start',
    css: true,
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,
    grid: {
        spacing: 20,
        length: 1,
        colour: '#888',
        snap: false
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 0.9
    }
};

Blockly.setLocale(English)
/* Inject your workspace */
const workspace = Blockly.inject('blocklyDiv', options);

Blockly.updateClipboard_();

const workspaceSearch = new WorkspaceSearch(workspace);

workspaceSearch.init();