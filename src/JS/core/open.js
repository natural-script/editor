import * as Blockly from 'blockly/core'

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyO') {
        event.preventDefault();
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = readerEvent => {
                const content = readerEvent.target.result;
                const xml = Blockly.Xml.textToDom(content);
                Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
            }
        }
        input.click();
    }
});