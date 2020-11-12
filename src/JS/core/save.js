import * as Blockly from 'blockly/core'
import { saveAs } from 'file-saver';

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyS') {
        event.preventDefault();
        const xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        const blob = new Blob([Blockly.Xml.domToPrettyText(xml)], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "My-Site.xml");
    }
});