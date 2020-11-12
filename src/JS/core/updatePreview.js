import * as Blockly from 'blockly/core'

let oldNsCode;
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyP') {
        event.preventDefault();
        const nsCode = Blockly.NS.workspaceToCode(Blockly.mainWorkspace);
        if (nsCode != oldNsCode) {
            oldNsCode = nsCode;
            const htmlcode =
                `<html><head><meta charset="UTF-8"><script src="http://localhost:8080/src/bundle.js" defer><\/script><\/head><body><jste>${nsCode}<\/jste><\/body><\/html>`
            const iframe = document.getElementById("preview");
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(htmlcode);
            iframe.contentWindow.document.close();
        }
    }
});