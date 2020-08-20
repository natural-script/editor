import * as Blockly from 'blockly/core'

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
		const generatedCode = Blockly.NS.workspaceToCode(Blockly.mainWorkspace);
		console.log(generatedCode);
    }
});