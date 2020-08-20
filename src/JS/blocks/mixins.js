import * as Blockly from 'blockly/core';
import appendDefaultBlock from 'blocks/appendDefaultBlock'

Blockly.Extensions.registerMixin('S6Mixin', {
    onchange: function (e) {
        if (e.type == "change" && e.element == "field" && e.name == "thingToBeChanged") {
            const newValue = e.newValue;
            if (newValue == 'value') {
                appendDefaultBlock(this, "value", "textDefault", true);
            } else if (newValue == 'width' || newValue == 'height') {
                appendDefaultBlock(this, "value", "lengthField", true);
            } else if (newValue == 'fontColor' || newValue == 'background') {
                appendDefaultBlock(this, "value", "color", true);
            }
        }
    }
});
Blockly.Extensions.registerMixin('CI2Mixin', {
    onchange: function (e) {
        if (e.type == "change" && e.element == "field" && e.name == "component") {
            const newValue = e.newValue;
            this.removeInput('attrs', true);
            if (newValue == 'checkbox') {
                this.appendDummyInput("attrs")
                    .appendField("It's attributed by being:")
                    .appendField(" ")
                    .appendField(new Blockly.FieldCheckbox(false), 'isChecked').appendField('Checked')
                    .appendField(" ")
                    .appendField(new Blockly.FieldCheckbox(false), 'isDisabled')
                    .appendField('Disabled');
            } else if (newValue == 'VALUE') {
                this.appendValueInput('VALUE');
            }
            appendDefaultBlock(this, "name", "textDefault");
        }
    }
});