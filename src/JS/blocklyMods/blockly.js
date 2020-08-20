import * as Blockly from 'blockly/core';

Blockly.copy_ = function (toCopy) {
    const serializeXML = new XMLSerializer();
    const data = toCopy.toCopyData();
    localStorage.setItem("blocksClipboard", serializeXML.serializeToString(data.xml));
    localStorage.setItem("blocksClipboardTypeCounts", JSON.stringify(data.typeCounts));
    Blockly.updateClipboard_();
};

Blockly.updateClipboard_ = function () {
    Blockly.clipboardXml_ = $(localStorage.getItem("blocksClipboard"))[0];
    Blockly.clipboardSource_ = Blockly.mainWorkspace;
    Blockly.clipboardTypeCounts_ = JSON.parse(localStorage.getItem("blocksClipboardTypeCounts"));
}