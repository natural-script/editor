import * as Blockly from 'blockly/core'
import 'thirdParty/simpledrag'

const leftPane = document.getElementById('blocklyDiv');
const rightPane = document.getElementById('preview');
const paneSep = document.getElementById('panes-separator');
const leftLimit = 10;
const rightLimit = 90;

paneSep.sdrag(function (el, pageX, startX, pageY, startY, fix) {

    fix.skipX = true;

    if (pageX < window.innerWidth * leftLimit / 100) {
        pageX = window.innerWidth * leftLimit / 100;
        fix.pageX = pageX;
    }
    if (pageX > window.innerWidth * rightLimit / 100) {
        pageX = window.innerWidth * rightLimit / 100;
        fix.pageX = pageX;
    }

    var cur = pageX / window.innerWidth * 100;
    if (cur < 0) {
        cur = 0;
    }
    if (cur > window.innerWidth) {
        cur = window.innerWidth;
    }


    var right = (100 - cur - 2);
    leftPane.style.width = cur + '%';
    rightPane.style.width = right + '%';
    Blockly.svgResize(Blockly.mainWorkspace);

}, null, 'horizontal');