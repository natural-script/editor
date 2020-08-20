import * as Blockly from 'blockly/core';
import appendDefaultBlock from 'blocks/appendDefaultBlock'
const importBlockIcon = require.context("media/blockIcons", true, /\.(png|svg)$/);
import {FieldSlider} from '@blockly/field-slider';
const attributesCommonProps = {
    "inputsInline": true,
    "previousStatement": "prop",
    "nextStatement": "prop",
    "colour": "#E91E63",
}
const utilsCommonProps = {
    "inputsInline": true,
    "previousStatement": "parent",
    "nextStatement": "parent",
    "colour": "#00E5FF",
}
const eventsCommonProps = {
    "inputsInline": true,
    "previousStatement": "parent",
    "nextStatement": "parent",
    "colour": "#FFBF00"
}
const commandsCommonProps = {
    "inputsInline": true,
    "previousStatement": "command",
    "nextStatement": "command",
    "colour": "#ff5722"
}
const componentsCommonProps = {
    "inputsInline": true,
    "previousStatement": "parent",
    "nextStatement": "parent",
    "colour": "#2196F3"
}
const blockIconCommonProps = {
    "width": 32,
    "height": 32,
    "alt": "blockIcon",
    "flipRtl": true
}


Blockly.Blocks['CU8'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("After finishing executing the previous command,");
        this.appendDummyInput()
            .appendField("get the value of the returned");
        this.appendValueInput('varName');
        this.appendStatementInput('nestedCommands')
            .appendField('then do the following:')
            .setCheck('command');
        this.setPreviousStatement(true, "parent");
        this.setNextStatement(true, "parent");
        this.setInputsInline(true);
        this.setColour('#00E5FF');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "varName", "textDefault");
    }
};
Blockly.Blocks['CU9'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./labelledList.png").default), 32, 32, "*")
            .appendField("For every");
        this.appendValueInput('varName');
        this.appendDummyInput()
            .appendField("in the list");
        this.appendValueInput('listName');
        this.appendStatementInput('nestedCommands')
            .setCheck('command');
        this.setPreviousStatement(true, "parent");
        this.setNextStatement(true, "parent");
        this.setInputsInline(true);
        this.setColour('#00E5FF');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "varName", "textDefault");
        appendDefaultBlock(this, "listName", "textDefault");
    }
};
Blockly.Blocks['CU10'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("After finishing executing the previous command,");
        this.appendStatementInput('nestedCommands')
            .appendField("do the following:")
            .setCheck('command');
        this.setPreviousStatement(true, "parent");
        this.setNextStatement(true, "parent");
        this.setInputsInline(true);
        this.setColour('#00E5FF');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['logicOperator'] = {
    init: function () {
        this.appendValueInput('LHS')
            .setCheck('condition');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["and", "and"],
                ["or", "or"]
            ]), "operator");
        this.appendValueInput('RHS')
            .setCheck('condition');
        this.setOutput(true, "logicalOperator");
        this.setInputsInline(true);
        this.setColour('#02ee12');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Co1:4'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./comparator.png").default, 32, 32, "*"))
        this.appendValueInput('LHS');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["is greater than", "G"],
                ["is smaller than", "S"],
                ["is greater than or equal", "GE"],
                ["is smaller than or equal", "SE"],
                ["equals", "E"],
                ["not equals", "NE"]
            ]), "operator");
        this.appendValueInput('RHS');
        this.setOutput(true, "condition");
        this.setInputsInline(true);
        this.setColour('#02ee12');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "LHS", "O14Default");
        appendDefaultBlock(this, "RHS", "textDefault");
    }
};
Blockly.Blocks['Co5'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./keyboard.png").default, 32, 32, "*"))
            .appendField("The keyboard is shown")
        this.setOutput(true, "condition");
        this.setInputsInline(true);
        this.setColour('#02ee12');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Co6:8'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./multipleDevices.png").default, 32, 32, "*"))
            .appendField("The device is a")
            .appendField(new Blockly.FieldDropdown([
                ["phone", "phone"],
                ["tablet", "tablet"],
                ["desktop", "desktop"]
            ]), "deviceType");
        this.setOutput(true, "condition");
        this.setInputsInline(true);
        this.setColour('#02ee12');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Co9:10'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./bt.png").default, 32, 32, "*"))
            .appendField("The bluetooth is turned")
            .appendField(new Blockly.FieldDropdown([
                ["on", "on"],
                ["off", "off"]
            ]), "btState");
        this.setOutput(true, "condition");
        this.setInputsInline(true);
        this.setColour('#02ee12');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Co11:12'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./wifi.png").default, 32, 32, "*"))
            .appendField("The WIFI is turned")
            .appendField(new Blockly.FieldDropdown([
                ["on", "on"],
                ["off", "off"]
            ]), "wifiState");
        this.setOutput(true, "condition");
        this.setInputsInline(true);
        this.setColour('#02ee12');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./quoteLeft.png").default, 32, 32, "*"))
            .appendField(new Blockly.FieldTextInput(""), "text")
            .appendField(new Blockly.FieldImage(importBlockIcon("./quoteRight.png").default, 32, 32, "*"));
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['textMultiline'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./multiline.png").default, 32, 32, "*"))
            .appendField(new Blockly.FieldMultilineInput(""), "text");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O1:7'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./bold.svg").default, 32, 32, "*", function () {
                if (this.getSourceBlock().isBold) {
                    this.getSourceBlock().isBold = false;
                    this.doValueUpdate_(importBlockIcon("./bold.svg").default)
                } else {
                    this.getSourceBlock().isBold = true;
                    this.doValueUpdate_(importBlockIcon("./bold_selected.svg").default)
                }
            }))
            .appendField(new Blockly.FieldImage(importBlockIcon("./italic.svg").default, 32, 32, "*", function () {
                if (this.getSourceBlock().isItalic) {
                    this.getSourceBlock().isItalic = false;
                    this.doValueUpdate_(importBlockIcon("./italic.svg").default)
                } else {
                    this.getSourceBlock().isItalic = true;
                    this.doValueUpdate_(importBlockIcon("./italic_selected.svg").default)
                }
            }))
            .appendField(new Blockly.FieldImage(importBlockIcon("./underlined.svg").default, 32, 32, "*", function () {
                if (this.getSourceBlock().isUnderlined) {
                    this.getSourceBlock().isUnderlined = false;
                    this.doValueUpdate_(importBlockIcon("./underlined.svg").default)
                } else {
                    this.getSourceBlock().isUnderlined = true;
                    this.doValueUpdate_(importBlockIcon("./underlined_selected.svg").default)
                }
            }))
            .appendField(" ");
        this.appendValueInput('text');
        this.appendDummyInput()
            .appendField(" ");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.isBold = false;
        this.isItalic = false;
        this.isUnderlined = false;
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "text", "textDefault");
    }
};
Blockly.Blocks['O8'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./window.png").default, 32, 32, "*"))
            .appendField("The window height");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O9'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./window.png").default, 32, 32, "*"))
            .appendField("The window width");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O10'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./screen.png").default, 32, 32, "*"))
            .appendField("The screen height");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O11'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./screen.png").default, 32, 32, "*"))
            .appendField("The screen width");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O12'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./icon.png").default, 32, 32, "*"))
            .appendField("An icon of");
        this.appendValueInput('iconName');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "iconName", "textDefault");
    }
};
Blockly.Blocks['O13'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./text.png").default, 32, 32, "*"))
            .appendField("A line break");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O14'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("The value of");
        this.appendValueInput('componentName');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "componentName", "textDefault");
    }
};
Blockly.Blocks['O14Default'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("The value of");
        this.appendValueInput('componentName');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "componentName", "textDefault");
    }
};
Blockly.Blocks['O15'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./userName.png").default, 32, 32, "*"))
            .appendField("The user's name");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O16'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./email.png").default, 32, 32, "*"))
            .appendField("The user's email");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['O17'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./label.png").default, 32, 32, "*"))
            .appendField("Call the following text");
        this.appendValueInput('textName');
        this.appendDummyInput()
            .appendField(":");
        this.appendValueInput('textValue');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "textName", "textDefault");
        appendDefaultBlock(this, "textValue", "textDefault");
    }
};
Blockly.Blocks['O18'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./variable.png").default, 32, 32, "*"))
            .appendField("The parameter");
        this.appendValueInput('paramName');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "paramName", "textDefault");
    }
};
Blockly.Blocks['O20'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./variable.png").default, 32, 32, "*"))
            .appendField("The value of the variable");
        this.appendValueInput('varName');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "varName", "textDefault");
    }
};
Blockly.Blocks['O21'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./math.png").default, 32, 32, "*"))
            .appendField("The result of the mathematical expression");
        this.appendValueInput('mathExp');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "mathExp", "textDefault");
    }
};
Blockly.Blocks['O22'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./label.png").default, 32, 32, "*"))
            .appendField("the name of the item number");
        this.appendValueInput('itemNo');
        this.appendDummyInput()
            .appendField("in the dropdown menu");
        this.appendValueInput('dropdownMenuName');
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendShadowBlocks();
    },
    appendShadowBlocks: function () {
        appendDefaultBlock(this, "itemNo", "textDefault");
        appendDefaultBlock(this, "dropdownMenuName", "textDefault");
    }
};
Blockly.Blocks['O23'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./userID.png").default, 32, 32, "*"))
            .appendField("The user's unique ID");
        this.appendValueInput('nextText');
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['textDefault'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./quoteLeft.png").default, 32, 32, "*"))
            .appendField(new Blockly.FieldTextInput(""), "text")
            .appendField(new Blockly.FieldImage(importBlockIcon("./quoteRight.png").default, 32, 32, "*"));
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['textMultilineDefault'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(importBlockIcon("./multiline.png").default, 32, 32, "*"))
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=", 15, 15, "*"));
        this.setOutput(true, "textOperator");
        this.setInputsInline(true);
        this.setColour('#575E75');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.defineBlocksWithJsonArray([{
        "type": "S1A",
        "message0": "%{BKY_S1A}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./remove.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S1B",
        "message0": "%{BKY_S1B}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./remove.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S1BExtention"],
        ...commandsCommonProps
    }, {
        "type": "S2A",
        "message0": "%{BKY_S2A}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./website.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S2AExtention"],
        ...commandsCommonProps
    }, {
        "type": "S2B",
        "message0": "%{BKY_S2B}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./newMsg.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S2BExtention"],
        ...commandsCommonProps
    }, {
        "type": "S2C",
        "message0": "%{BKY_S2C}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./webpage.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S2CExtention"],
        ...commandsCommonProps
    }, {
        "type": "S2D",
        "message0": "%{BKY_S2D}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./webpage.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S2DExtention"],
        ...commandsCommonProps
    }, {
        "type": "S2E",
        "message0": "%{BKY_S2E}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./popup.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S2EExtention"],
        ...commandsCommonProps
    }, {
        "type": "S3A",
        "message0": "%{BKY_S3A}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./play.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S3B",
        "message0": "%{BKY_S3B}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./play.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S3BExtention"],
        ...commandsCommonProps
    }, {
        "type": "S4A",
        "message0": "%{BKY_S4A}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./pause.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S4B",
        "message0": "%{BKY_S4B}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./pause.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S4BExtention"],
        ...commandsCommonProps
    }, {
        "type": "S5A",
        "message0": "%{BKY_S5A}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./timeMachine.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S5AExtention"],
        ...commandsCommonProps
    }, {
        "type": "S5B",
        "message0": "%{BKY_S5B}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./timeMachine.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S5BExtention"],
        ...commandsCommonProps
    }, {
        "type": "S6A",
        "message0": "%{BKY_S6A}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./timeMachine.png").default,
            ...blockIconCommonProps
        }, {
            "type": "field_dropdown",
            "name": "thingToBeChanged",
            "options": [
                ["value", "value"],
                ["width", "width"],
                ["height", "height"],
                ["font color", "fontColor"],
                ["background", "background"]
            ]
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S6AExtention", "S6Mixin"],
        ...commandsCommonProps
    }, {
        "type": "S6B",
        "message0": "%{BKY_S6B}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./timeMachine.png").default,
            ...blockIconCommonProps
        }, {
            "type": "field_dropdown",
            "name": "thingToBeChanged",
            "options": [
                ["value", "value"],
                ["width", "width"],
                ["height", "height"],
                ["font color", "fontColor"],
                ["background", "background"]
            ]
        }, {
            "type": "input_value",
            "name": "target"
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["S6BExtention", "S6Mixin"],
        ...commandsCommonProps
    }, {
        "type": "S7",
        "message0": "%{BKY_S7}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./light.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S8",
        "message0": "%{BKY_S8}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./lightOn.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S9",
        "message0": "%{BKY_S9}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./lightOff.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S10",
        "message0": "%{BKY_S10}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./wifi.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S11",
        "message0": "%{BKY_S11}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./wifi.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S12",
        "message0": "%{BKY_S12}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./bt.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S13",
        "message0": "%{BKY_S13}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./keyboard.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "S14",
        "message0": "%{BKY_S14}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./keyboard.png").default,
            ...blockIconCommonProps
        }],
        "tooltip": "",
        "helpUrl": "",
        ...commandsCommonProps
    }, {
        "type": "numberedList",
        "message0": "%1",
        "args0": [{
            "type": "input_dummy",
            "name": "EMPTY",
        }],
        "output": "String",
        "colour": "#1DE9B6",
        "helpUrl": "",
        "tooltip": "",
        "mutator": "numberedListMutator",
    }, {
        "type": "labelledList",
        "message0": "%1",
        "args0": [{
            "type": "input_dummy",
            "name": "EMPTY",
        }],
        "output": "String",
        "colour": "#1DE9B6",
        "helpUrl": "",
        "tooltip": "",
        "mutator": "labelledListMutator"
    }, {
        "type": "E1",
        "message0": "%{BKY_E1}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target"
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E1Extention"],
        ...eventsCommonProps
    }, {
        "type": "E2",
        "message0": "%{BKY_E2}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E2Extention"],
        ...eventsCommonProps
    }, {
        "type": "E3",
        "message0": "%{BKY_E3}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E3Extention"],
        ...eventsCommonProps
    }, {
        "type": "E4",
        "message0": "%{BKY_E4}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E4Extention"],
        ...eventsCommonProps
    }, {
        "type": "E5",
        "message0": "%{BKY_E5}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E5Extention"],
        ...eventsCommonProps
    }, {
        "type": "E6",
        "message0": "%{BKY_E6}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E6Extention"],
        ...eventsCommonProps
    }, {
        "type": "E7",
        "message0": "%{BKY_E7}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E7Extention"],
        ...eventsCommonProps
    }, {
        "type": "E8",
        "message0": "%{BKY_E8}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E8Extention"],
        ...eventsCommonProps
    }, {
        "type": "E9",
        "message0": "%{BKY_E9}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./keyboard.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E9Extention"],
        ...eventsCommonProps
    }, {
        "type": "E10",
        "message0": "%{BKY_E10}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./keyboard.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E10Extention"],
        ...eventsCommonProps
    }, {
        "type": "E11",
        "message0": "%{BKY_E11}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./edit.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E11Extention"],
        ...eventsCommonProps
    }, {
        "type": "E12",
        "message0": "%{BKY_E12}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./focus.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E12Extention"],
        ...eventsCommonProps
    }, {
        "type": "E13",
        "message0": "%{BKY_E13}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./focus.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E13Extention"],
        ...eventsCommonProps
    }, {
        "type": "E14",
        "message0": "%{BKY_E14}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./focus.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E14Extention"],
        ...eventsCommonProps
    }, {
        "type": "E15",
        "message0": "%{BKY_E15}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./send.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E15Extention"],
        ...eventsCommonProps
    }, {
        "type": "E16",
        "message0": "%{BKY_E16}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./mouse.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E16Extention"],
        ...eventsCommonProps
    }, {
        "type": "E17",
        "message0": "%{BKY_E17}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./speech.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E17Extention"],
        ...eventsCommonProps
    }, {
        "type": "E18",
        "message0": "%{BKY_E18}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./visible.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E18Extention"],
        ...eventsCommonProps
    }, {
        "type": "E19",
        "message0": "%{BKY_E19}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./invisible.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "target",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["E19Extention"],
        ...eventsCommonProps
    }, {
        "type": "CU1:3",
        "message0": "In the case that %1",
        "args0": [{
            "type": "input_value",
            "name": "conditions0",
            "check": ["condition", "logicalOperator"]
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands0",
            "check": "command"
        }],
        "helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
        "mutator": "CU1To3Mutator",
        ...utilsCommonProps
    }, {
        "type": "CU4",
        "message0": "%{BKY_CU4}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./alarm.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "period",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["CU4Extention"],
        ...utilsCommonProps
    }, {
        "type": "CU5",
        "message0": "%{BKY_CU5}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./timer.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "period",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["CU5Extention"],
        ...utilsCommonProps
    }, {
        "type": "CU6",
        "message0": "%{BKY_CU6}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./function.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "name",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "nestedCommands",
            "check": "command"
        }],
        "extensions": ["CU6Extention"],
        ...utilsCommonProps
    }, {
        "type": "CU7",
        "message0": "%{BKY_CU7}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./design.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "name",
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "props",
            "check": "prop"
        }],
        "extensions": ["CU7Extention"],
        ...utilsCommonProps
    }, {
        "type": "font",
        "message0": "%1",
        "args0": [{
            "type": "field_dropdown",
            "name": "font",
            "options": [
                ["Roboto", "Roboto"],
                ["Times New Roman", "Times New Roman"],
                ["Lucida Console", "Lucida Console"],
                ["Impact", "Impact"],
                ["Charcoal", "Charcoal"],
                ["Courier", "Courier"],
                ["Monospace", "monospace"]
            ]
        }],
        "output": null,
        "colour": "#607D8B",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "lengthField",
        "message0": "%1 %2",
        "args0": [{
            "type": "input_value",
            "name": "magnitude"
        }, {
            "type": "field_dropdown",
            "name": "unit",
            "options": [
                ["pixels", "pixels"],
                ["centimeters", "centimeters"],
                ["millimeters", "millimeters"],
                ["inches", "inches"],
                ["%", "percents"]
            ]
        }],
        "output": null,
        "colour": "#607D8B",
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["lengthFieldExtention"]
    }, {
        "type": "timeField",
        "message0": "%1 %2",
        "args0": [{
            "type": "input_value",
            "name": "magnitude"
        }, {
            "type": "field_dropdown",
            "name": "unit",
            "options": [
                ["milliseconds", "milliseconds"],
                ["seconds", "seconds"],
                ["minuits", "minuits"],
                ["hours", "hours"],
                ["days", "days"],
                ["months", "months"],
                ["years", "years"]
            ]
        }],
        "output": null,
        "colour": "#607D8B",
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["timeFieldExtention"]
    }, {
        "type": "color",
        "message0": "%1",
        "args0": [{
            "type": "field_dropdown",
            "name": "color",
            "options": [
                ["Black", "black"],
                ["White", "white"],
                ["Red", "red"],
                ["Blue", "blue"],
                ["Cyan", "cyan"],
                ["Green", "green"],
                ["Gray", "gray"]
            ]
        }],
        "output": null,
        "colour": "#607D8B",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "sliderDefault",
        "message0": "%1",
        "args0": [{
            "type": "field_slider",
            "name": "value",
            "value": 100
        }],
        "output": "textOperator",
        "colour": "#575E75",
        "tooltip": "",
        "helpUrl": ""
    }, {
        "type": "PROP_container",
        "message0": "%{BKY_PROP_CONTAINER}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./box.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_containerExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_position",
        "message0": "%{BKY_PROP_POSITION}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./design.png").default,
            ...blockIconCommonProps
        }, {
            "type": "field_dropdown",
            "name": "position",
            "options": [
                ["statically", "static"],
                ["relative to its normal position", "relative"],
                ["relative to the viewport", "fixed"],
                ["relative to its container", "absolute"]
            ]
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_positionExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_relativeDistance",
        "message0": "%{BKY_PROP_RELATIVEDISTANCE}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./dimension.png").default,
            ...blockIconCommonProps
        }, {
            "type": "field_dropdown",
            "name": "relativeDirection",
            "options": [
                ["top", "top"],
                ["bottom", "bottom"],
                ["right", "right"],
                ["left", "left"]
            ]
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_relativeDistanceExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_width",
        "message0": "%{BKY_PROP_WIDTH}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./dimension.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_widthExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_height",
        "message0": "%{BKY_PROP_HEIGHT}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./dimension.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_heightExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_text",
        "message0": "%{BKY_PROP_TEXT}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./text.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_textExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_title",
        "message0": "%{BKY_PROP_TITLE}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./text.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_titleExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_description",
        "message0": "%{BKY_PROP_DESCRIPTION}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./link.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_descriptionExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_source",
        "message0": "%{BKY_PROP_SOURCE}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./link.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_sourceExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_backgroundColor",
        "message0": "%{BKY_PROP_BACKGROUNDCOLOR}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./image.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_backgroundColorExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_fontColor",
        "message0": "%{BKY_PROP_FONTCOLOR}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./text.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_fontColorExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_fontStyle",
        "message0": "%{BKY_PROP_FONTSTYLE}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./text.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_fontStyleExtention"],
        ...attributesCommonProps
    }, {
        "type": "PROP_transparency",
        "message0": "%{BKY_PROP_TRANSPARENCY}",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./opacity.png").default,
            ...blockIconCommonProps
        }, {
            "type": "input_value",
            "name": "value"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["PROP_transparencyExtention"],
        ...attributesCommonProps
    }, {
        "type": "CI1",
        "message0": "%1 Configure this %2 with the following properties:",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./settings.png").default,
            ...blockIconCommonProps
        }, {
            "type": "field_dropdown",
            "name": "component",
            "options": [
                ["site", "site"],
                ["app", "app"]
            ]
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "props",
            "check": "prop"
        }],
        "tooltip": "",
        "helpUrl": "",
        ...componentsCommonProps
    }, {
        "type": "CI2",
        "message0": "%1 Add a %2 called %3 with the following properties:",
        "args0": [{
            "type": "field_image",
            "src": importBlockIcon("./addNew.png").default,
            ...blockIconCommonProps
        }, {
            "type": "field_dropdown",
            "name": "appType",
            "options": [
                ["app bar", "appBar"],
                ["audio player", "audioPlayer"],
                ["button", "button"],
                ["checkbox", "checkbox"],
                ["container", "container"],
                ["curousel", "curousel"],
                ["curousel item", "curouselItem"],
                ["dialog box", "dialogBox"],
                ["FAB", "FAB"],
                ["icon", "icon"],
                ["image", "image"],
                ["loader", "loader"],
                ["page", "page"],
                ["select menu", "selectMenu"],
                ["slider", "slider"],
                ["table", "table"],
                ["text", "text"],
                ["text field", "textField"],
                ["toggle", "toggle"],
                ["video", "video"]
            ]
        }, {
            "type": "input_value",
            "name": "name"
        }],
        "message1": "%1",
        "args1": [{
            "type": "input_statement",
            "name": "props",
            "check": "prop"
        }],
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["CI2Extention", "CI2Mixin"],
        ...componentsCommonProps
    }

]);