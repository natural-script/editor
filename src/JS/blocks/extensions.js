import * as Blockly from 'blockly/core';
import appendDefaultBlock from 'blocks/appendDefaultBlock'

const defaultBlocksData = {
	"lengthField": [["magnitude", "textDefault"]],
	"timeField": [["magnitude", "textDefault"]],
	"S1B": [["target", "textDefault"]],
	"S2A": [["target", "textDefault"]],
	"S2B": [["target", "textDefault"]],
	"S2C": [["target", "textDefault"]],
	"S2D": [["target", "textDefault"]],
	"S2E": [["target", "textDefault"]],
	"S3B": [["target", "textDefault"]],
	"S4B": [["target", "textDefault"]],
	"S5A": [["value", "timeField"]],
	"S5B": [["target", "textDefault"], ["value", "timeField"]],
	"S6A": [["value", "textDefault"]],
	"S6B": [["target", "textDefault"], ["value", "textDefault"]],
	"CU4": [["period", "timeField"]],
	"CU5": [["period", "timeField"]],
	"CU6": [["name", "textDefault"]],
	"CU7": [["name", "textDefault"]],
	"CU8": [["varName", "textDefault"]],
	"CU9": [["varName", "textDefault"], ["listName", "textDefault"]],
	"PROP_container": [["value", "textDefault"]],
	"PROP_position": [["value", "textDefault"]],
	"PROP_relativeDistance": [["value", "textDefault"]],
	"PROP_width": [["value", "lengthField"]],
	"PROP_height": [["value", "lengthField"]],
	"PROP_text": [["value", "textDefault"]],
	"PROP_title": [["value", "textDefault"]],
	"PROP_description": [["value", "textDefault"]],
	"PROP_source": [["value", "textDefault"]],
	"PROP_backgroundColor": [["value", "textDefault"]],
	"PROP_fontColor": [["value", "textDefault"]],
	"PROP_fontStyle": [["value", "textDefault"]],
	"PROP_transparency": [["value", "sliderDefault"]],
	"E1": [["target", "textDefault"]],
	"E2": [["target", "textDefault"]],
	"E3": [["target", "textDefault"]],
	"E4": [["target", "textDefault"]],
	"E5": [["target", "textDefault"]],
	"E6": [["target", "textDefault"]],
	"E7": [["target", "textDefault"]],
	"E8": [["target", "textDefault"]],
	"E9": [["target", "textDefault"]],
	"E10": [["target", "textDefault"]],
	"E11": [["target", "textDefault"]],
	"E12": [["target", "textDefault"]],
	"E13": [["target", "textDefault"]],
	"E14": [["target", "textDefault"]],
	"E15": [["target", "textDefault"]],
	"E16": [["target", "textDefault"]],
	"E17": [["hotword", "textDefault"]],
	"E18": [["target", "textDefault"]],
	"E19": [["target", "textDefault"]],
	"CI2": [["name", "textDefault"]],
}
for (const parentBlockName in defaultBlocksData) {
	Blockly.Extensions.register(`${parentBlockName}Extention`,
		function () {
			for (const defaultBlock of defaultBlocksData[parentBlockName])
				appendDefaultBlock(this, defaultBlock[0], defaultBlock[1]);
		});
}