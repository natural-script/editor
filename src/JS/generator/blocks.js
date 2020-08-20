import * as Blockly from 'blockly/core';
import getJSCode from 'generator/getJSCode';
import getAnalysisResult from 'generator/getAnalysisResult'

Blockly.NS['CI1'] = function (block) {
    const appType = block.getFieldValue('appType');
    const props = Blockly.NS.statementToCode(block, 'props');
    const code = `Configure this ${appType} with the following properties:\n${props}`;
    return code;
};
Blockly.NS['CI2'] = function (block) {
    const component = block.getFieldValue('component');
    const name = Blockly.NS.valueToCode(block, 'name', 99) || '0'
    const props = Blockly.NS.statementToCode(block, 'props');
    const code = `Add a ${component} with the following properties:\n\t* its name is ${name}\n${props}`;
    return code;
};
Blockly.NS['CU1:3'] = function (block) {
    const conditions = (i) => Blockly.NS.valueToCode(block, `conditions${i}`, 99) || '0'
    const nestedCommands = (i) => Blockly.NS.statementToCode(block, `nestedCommands${i}`);
    const nestedCommandsInf = Blockly.NS.statementToCode(block, "nestedCommandsInf");
    let elements = new Array(block.elseIfCount_ + ((nestedCommandsInf.length > 0) ? 2 : 1));
    elements[0] = `if (${conditions(0)}){
        ${nestedCommands(0)
        }`;
    for (var i = 0; i < block.elseIfCount_; i++) {
        elements[i + 1] = `else if (${conditions(i + 1)}) {}
        ${nestedCommands(i + 1)}
        }`;
    }
    if (nestedCommandsInf.length > 0) {
        elements[block.elseIfCount_ + 1] = `else {
            ${nestedCommandsInf}
        }`;
    }
    const code = elements.join('\n') + ";";
    return code;
};
Blockly.NS['CU2'] = function (block) {
    const conditions = Blockly.NS.valueToCode(block, 'conditions', 99) || '0'
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `Else in the case that ${conditions}:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU3'] = function (block) {
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `Else:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU4'] = function (block) {
    const timeMagnitude = Blockly.NS.valueToCode(block, 'timeMagnitude', 99) || '0'
    const timeUnit = block.getFieldValue('timeUnit');
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `After a period of ${timeMagnitude} ${timeUnit}:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU5'] = function (block) {
    const timeMagnitude = Blockly.NS.valueToCode(block, 'timeMagnitude', 99) || '0'
    const timeUnit = block.getFieldValue('timeUnit');
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `Every a period of ${timeMagnitude} ${timeUnit}:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU6'] = function (block) {
    const timeMagnitude = Blockly.NS.valueToCode(block, 'timeMagnitude', 99) || '0'
    const timeUnit = block.getFieldValue('timeUnit');
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `Every a period of ${timeMagnitude} ${timeUnit}:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU6'] = function (block) {
    const name = Blockly.NS.valueToCode(block, 'name', 99) || '0'
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `Define the function ${name} with following commands:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU7'] = function (block) {
    const name = Blockly.NS.valueToCode(block, 'name', 99) || '0'
    const props = Blockly.NS.statementToCode(block, 'props');
    const code = `Define the style ${name} with following properties:\n${props}`;
    return code;
};
Blockly.NS['CU8'] = function (block) {
    const varName = Blockly.NS.valueToCode(block, 'varName', 99) || '0'
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `After finishing executing the previous command, get the value of the returned ${varName} then do the following:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU9'] = function (block) {
    const varName = Blockly.NS.valueToCode(block, 'varName', 99) || '0'
    const listName = Blockly.NS.valueToCode(block, 'listName', 99) || '0'
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `for every ${varName} in the list ${listName}:\n${nestedCommands}`;
    return code;
};
Blockly.NS['CU10'] = function (block) {
    const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
    const code = `After finishing executing the previous command, do the following:\n${nestedCommands}`;
    return code;
};
for (let i = 1; i <= 19; i++) {
    Blockly.NS[`E${i}`] = function (block) {
        const analysisResult = getAnalysisResult(block, [(i == 17) ? "hotword" : "target"]);
        const nestedCommands = Blockly.NS.statementToCode(block, 'nestedCommands');
        return getJSCode(analysisResult, nestedCommands);
    };
}
for (const commandID of Object.keys(Blockly.Blocks).filter((id) => id.match(/^S\d+?[a-zA-Z]/))) {
    Blockly.NS[commandID] = function (block) {
        let props = []
        switch (commandID) {
            case "S1A":
            case "S3A":
            case "S4A":
                props = [["target", "itself"]];
                break;
            case "S1B":
            case "S3B":
            case "S4B":
                props = ["target"];
                break;
            case "S2A":
                props = ["target", ["targetType", "url"]];
                break;
            case "S2B":
                props = ["target", ["targetType", "email"]];
                break;
            case "S2C":
                props = ["target", ["targetType", "page"]];
                break;
            case "S2D":
                props = ["target", ["targetType", "element"]];
                break;
            case "S2E":
                props = ["target", ["targetType", "dialogBox"]];
                break;
        }
        const analysisResult = getAnalysisResult(block, props);
        return getJSCode(analysisResult);
    };
}
for (const propID of Object.keys(Blockly.Blocks).filter((id) => id.match(/^PROP_[a-zA-Z]+/))) {
    Blockly.NS[propID] = function (block) {
        const analysisResult = getAnalysisResult(block, ["value"]);
        return getJSCode(analysisResult);
    };
}
Blockly.NS['O1:7'] = function (block) {
    let prefix;
    if (block.isBold && block.isItalic && block.isUnderlined) {
        prefix = "Write this text in a bold, italic and underlined font";
    } else if (block.isBold && block.isItalic) {
        prefix = "Write this text in a bold and italic font";
    } else if (block.isBold && block.isUnderlined) {
        prefix = "Write this text in a bold and underlined font";
    } else if (block.isItalic && block.isUnderlined) {
        prefix = "Write this text in an underlined and italic font";
    } else if (block.isBold) {
        prefix = "Write this text in a bold font";
    } else if (block.isItalic) {
        prefix = "Write this text in an italic font";
    } else if (block.isItalic) {
        prefix = "Write this text in an underlined font";
    }
    const text = `<< ${prefix}: ${Blockly.NS.valueToCode(block, 'text', 99)} >>`;
    const nextText = Blockly.NS.valueToCode(block, 'nextText', 99) || ''
    const code = text + nextText;
    return [code, 99];
};
Blockly.NS['S1A'] = function (block) {
    const analysisResult = getAnalysisResult(block);
    return getJSCode(analysisResult);
};
Blockly.NS['Co5'] = function (block) {
    const code = "the keyboard is shown";
    return [code, 99];
};
Blockly.NS['numberedList'] = function (block) {
    let elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = `${i + 1}. ${Blockly.NS.valueToCode(block, `item${i}`, 99) || '0'}`;
    }
    const code = elements.join('\n');
    return code;
};
Blockly.NS['labelledList'] = function (block) {
    let elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = `* ${Blockly.NS.valueToCode(block, `name${i}`, 99) || '0'}: ${Blockly.NS.valueToCode(block, `value${i}`, 99) || '0'}`;
    }
    const code = elements.join('\n');
    return code;
};
Blockly.NS['width'] = function (block) {
    const magnitude = Blockly.NS.valueToCode(block, 'magnitude', 99) || '0';
    const unit = Blockly.NS.valueToCode(block, 'unit', 99) || '0';
    const code = `* Its width is ${magnitude} ${unit}\n`;
    return code;
};
Blockly.NS['height'] = function (block) {
    const magnitude = Blockly.NS.valueToCode(block, 'magnitude', 99) || '0';
    const unit = Blockly.NS.valueToCode(block, 'unit', 99) || '0';
    const code = `* Its height is ${magnitude} ${unit}\n`;
    return code;
};
Blockly.NS['relativeDistance'] = function (block) {
    const relativeDirection = block.getFieldValue('relativeDirection');
    const magnitude = Blockly.NS.valueToCode(block, 'magnitude', 99) || '0';
    const unit = Blockly.NS.valueToCode(block, 'unit', 99) || '0';
    const code = `* Its distance from the ${relativeDirection} is ${magnitude} ${unit}\n`;
    return code;
};
Blockly.NS['title'] = function (block) {
    const title = Blockly.NS.valueToCode(block, 'title', 99) || '0';
    const code = `* Its title is ${title}\n`;
    return code;
};
Blockly.NS['container'] = function (block) {
    const containerName = Blockly.NS.valueToCode(block, 'containerName', 99) || '0';
    const code = `* ${Blockly.getTranslatedCode("CONTAINER", [containerName])}\n`;
    return code;
};
Blockly.NS['source'] = function (block) {
    const src = Blockly.NS.valueToCode(block, 'src', 99) || '0';
    const code = `* Its source is ${src}\n`;
    return code;
};
Blockly.NS['color'] = function (block) {
    const color = block.getFieldValue('color');
    const code = color;
    return [code, 99];
};
Blockly.NS['measuringUnit'] = function (block) {
    const unit = block.getFieldValue('unit');
    const code = unit;
    return [code, 99];
};
Blockly.NS['text'] = function (block) {
    const text = block.getFieldValue('text');
    const nextText = Blockly.NS.valueToCode(block, 'nextText', 99) || ''
    const code = text + nextText;
    return [code, 99];
};
Blockly.NS['textDefault'] = function (block) {
    const text = block.getFieldValue('text');
    const code = text;
    return [code, 99];
};