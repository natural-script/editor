import 'normalize.css/normalize.css'
import 'blocklyMods/blockly'
import 'blocklyMods/toolbox'
import 'blocks/appendDefaultBlock'
import 'blocks/mutators'
import 'blocks/mixins'
import 'blocks/extensions'
import 'blocks/definitions'
import 'core/editorInit'
import 'generator/init'
import 'generator/blocks'
import 'core/splitView'
import 'core/toolboxSearch'
import 'core/open'
import 'core/updatePreview'
import 'core/save'
import 'core/export'

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then(registration => {
			console.log('SW registered: ', registration);
		}).catch(registrationError => {
			console.log('SW registration failed: ', registrationError);
		});
	});
}