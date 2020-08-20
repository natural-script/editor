import * as Blockly from 'blockly/core';
import {createMinusField} from '@blockly/block-plus-minus/src/field_minus';
import {createPlusField} from '@blockly/block-plus-minus/src/field_plus';

const numberedListCreateMutator = {
    itemCount_: 0,
    mutationToDom: function () {
        const container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        const targetCount = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_(targetCount);
    },
    updateShape_: function (targetCount) {
        while (this.itemCount_ < targetCount) {
            this.addPart_();
        }
        while (this.itemCount_ > targetCount) {
            this.removePart_();
        }
        this.updateMinus_();
    },
    plus: function () {
        this.addPart_();
        this.updateMinus_();
    },
    minus: function () {
        if (this.itemCount_ == 0) {
            return;
        }
        this.removePart_();
        this.updateMinus_();
    },
    addPart_: function () {
        const itemIndex = this.itemCount_;
        this.appendValueInput(`item${itemIndex}`)
            .appendField(`Item NO. ${itemIndex + 1}:`);
        appendDefaultBlock(this, `item${itemIndex}`, "textDefault");
        this.itemCount_++;
    },
    removePart_: function () {
        this.itemCount_--;
        const itemIndex = this.itemCount_;
        this.removeInput(`item${itemIndex}`);
    },
    updateMinus_: function () {
        const minusField = this.getField('MINUS');
        if (!minusField && this.itemCount_ > 0) {
            this.getInput('EMPTY').insertFieldAt(1, createMinusField(), 'MINUS');
        } else if (minusField && this.itemCount_ < 1) {
            this.getInput('EMPTY').removeField('MINUS');
        }
    },
};
const numberedListCreateHelper = function () {
    this.getInput('EMPTY').insertFieldAt(0, createPlusField(), 'PLUS');
    this.getInput('EMPTY').insertFieldAt(1, new Blockly.FieldImage("./assets/media/blockIcons/numberedList.png", 32, 32, "*"), 'blockIcon');
    this.getInput('EMPTY').insertFieldAt(2, new Blockly.FieldLabel("Numbered List"), 'blockIcon');
    this.updateShape_(1);
};

Blockly.Extensions.registerMutator('numberedListMutator',
    numberedListCreateMutator, numberedListCreateHelper);

const labelledListCreateMutator = {
    itemCount_: 0,
    mutationToDom: function () {
        const container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        const targetCount = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_(targetCount);
    },
    updateShape_: function (targetCount) {
        while (this.itemCount_ < targetCount) {
            this.addPart_();
        }
        while (this.itemCount_ > targetCount) {
            this.removePart_();
        }
        this.updateMinus_();
    },
    plus: function () {
        this.addPart_();
        this.updateMinus_();
    },
    minus: function () {
        if (this.itemCount_ == 0) {
            return;
        }
        this.removePart_();
        this.updateMinus_();
    },
    addPart_: function () {
        const itemIndex = this.itemCount_;
        this.appendValueInput(`name${itemIndex}`)
            .appendField(`Item Name:`);
        this.appendValueInput(`value${itemIndex}`)
            .appendField(`Its value:     `);
        appendDefaultBlock(this, `name${itemIndex}`, "textDefault");
        appendDefaultBlock(this, `value${itemIndex}`, "textDefault");
        this.itemCount_++;
    },
    removePart_: function () {
        this.itemCount_--;
        const itemIndex = this.itemCount_;
        this.removeInput(`name${itemIndex}`);
        this.removeInput(`value${itemIndex}`);
    },
    updateMinus_: function () {
        const minusField = this.getField('MINUS');
        if (!minusField && this.itemCount_ > 0) {
            this.getInput('EMPTY').insertFieldAt(1, createMinusField(), 'MINUS');
        } else if (minusField && this.itemCount_ < 1) {
            this.getInput('EMPTY').removeField('MINUS');
        }
    },
};
const labelledListCreateHelper = function () {
    this.getInput('EMPTY').insertFieldAt(0, createPlusField(), 'PLUS');
    this.getInput('EMPTY').insertFieldAt(1, new Blockly.FieldImage("./assets/media/blockIcons/labelledList.png", 32, 32, "*"), 'blockIcon');
    this.getInput('EMPTY').insertFieldAt(2, new Blockly.FieldLabel("Labelled List"), 'blockIcon');
    this.updateShape_(1);
};

Blockly.Extensions.registerMutator('labelledListMutator',
    labelledListCreateMutator, labelledListCreateHelper);


const CU1To3Mutator = {
    suppressPrefixSuffix: true,
    elseIfCount_: 0,
    hasElse_: true,
    mutationToDom: function () {
        if (!this.elseIfCount_ && !this.hasElse_) {
            return null;
        }
        const container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('elseif', this.elseIfCount_);
        if (this.hasElse_) {
            container.setAttribute('else', 1);
        }
        return container;
    },
    domToMutation: function (xmlElement) {
        const targetCount = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
        this.hasElse_ = !!parseInt(xmlElement.getAttribute('else'), 10) || 0;
        if (this.hasElse_ && !this.getInput('conditionsInf')) {
            this.appendDummyInput("conditionsInf")
                .appendField("Else");
            this.appendStatementInput("nestedCommandsInf");
        }
        this.updateShape_(targetCount);
    },
    updateShape_: function (targetCount) {
        while (this.elseIfCount_ < targetCount) {
            this.addElseIf_();
        }
        while (this.elseIfCount_ > targetCount) {
            this.removeElseIf_();
        }
    },
    plus: function () {
        this.addElseIf_();
    },
    minus: function (index) {
        if (this.elseIfCount_ == 0) {
            return;
        }
        this.removeElseIf_(index);
    },
    addElseIf_: function () {
        this.elseIfCount_++;
        this.appendValueInput('conditions' + this.elseIfCount_)
            .setCheck("condition")
            .appendField("Else in the case that")
            .appendField(
                createMinusField(this.elseIfCount_), 'MINUS' + this.elseIfCount_);
        this.appendStatementInput('nestedCommands' + this.elseIfCount_);
        if (this.getInput('conditionsInf')) {
            this.moveInputBefore('conditionsInf', null);
            this.moveInputBefore('nestedCommandsInf', null);
        }
    },
    removeElseIf_: function (opt_index) {
        if (opt_index !== undefined && opt_index != this.elseIfCount_) {
            const elseIfIndex = opt_index * 2;
            const inputs = this.inputList;
            let connection = inputs[elseIfIndex].connection; // If connection.
            if (connection.isConnected()) {
                connection.disconnect();
            }
            connection = inputs[elseIfIndex + 1].connection; // Do connection.
            if (connection.isConnected()) {
                connection.disconnect();
            }
            this.bumpNeighbours();
            for (let i = elseIfIndex + 2, input;
                (input = this.inputList[i]); i++) {
                if (input.name == 'conditionsInf') {
                    break;
                }
                const targetConnection = input.connection.targetConnection;
                if (targetConnection) {
                    this.inputList[i - 2].connection.connect(targetConnection);
                }
            }
        }

        this.removeInput('conditions' + this.elseIfCount_);
        this.removeInput('nestedCommands' + this.elseIfCount_);
        this.elseIfCount_--;
    },
};
const CU1To3Helper = function () {
    this.getInput('conditions0').insertFieldAt(0, createPlusField(), 'PLUS');
};
Blockly.Extensions.registerMutator('CU1To3Mutator',
    CU1To3Mutator, CU1To3Helper);