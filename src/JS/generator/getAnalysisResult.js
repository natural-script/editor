import * as Blockly from 'blockly'

export default function (block, props = []) {
    let analysisResult = {
        id: block.type.replace(/(\d+)[A-Z]/, "$1")
    };
    for (const prop of props) {
        if (typeof prop == "object") {
            analysisResult[prop[0]] = prop[1];
        } else {
            if (block.getFieldValue(prop) != null) {
                analysisResult[prop] = block.getFieldValue(prop);
            } else {
                analysisResult[prop] = Blockly.NS.valueToCode(block, prop, 99);
            }
        }
    }
    return analysisResult;
}