export default function (block_svg, input_name, block_name, isDynamic = false) {
    if (block_svg.getInput(input_name)) {
        let shadowBlock = block_svg.workspace.newBlock(block_name);
        if (shadowBlock.initSvg) {
            if (!["lengthField", "timeField"].includes(block_name)) {
                shadowBlock.setShadow(true);
            } else if (!isDynamic) {
                if (block_svg.isInFlyout) {
                    shadowBlock.setDeletable(false);
                    shadowBlock.setMovable(false);
                } else if (!block_svg.isInFlyout) {
                    return;
                }
            } else {
                shadowBlock.setDeletable(false);
                shadowBlock.setMovable(false);
            }
            if (block_svg.getInput(input_name).connection.targetConnection) {
                block_svg.getInput(input_name).connection.targetConnection.sourceBlock_.dispose(true, false)
            }
            shadowBlock.initSvg();
            shadowBlock.render();
            let ob = shadowBlock.outputConnection;
            let cc = block_svg.getInput(input_name).connection;
            cc.connect(ob);
        }
    }
};