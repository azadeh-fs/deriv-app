import { localize } from '@deriv/translations';

Blockly.Blocks.rsia_statement = {
    protected_statements : ['STATEMENT'],
    required_child_blocks: ['input_list', 'period'],
    init() {
        this.jsonInit(this.definition());
    },
    definition() {
        return {
            message0: localize('set %1 to Relative Strength Index Array %2'),
            message1: '%1',
            args0   : [
                {
                    type    : 'field_variable',
                    name    : 'VARIABLE',
                    variable: 'rsia',
                },
                {
                    type: 'input_dummy',
                },
            ],
            args1: [
                {
                    type : 'input_statement',
                    name : 'STATEMENT',
                    check: null,
                },
            ],
            colour           : Blockly.Colours.Base.colour,
            colourSecondary  : Blockly.Colours.Base.colourSecondary,
            colourTertiary   : Blockly.Colours.Base.colourTertiary,
            tooltip          : localize('Calculates Relative Strength Index (RSI) list from a list of values with a period'),
            previousStatement: null,
            nextStatement    : null,
            category         : Blockly.Categories.Indicators,
        };
    },
    meta() {
        return {
            'display_name': localize('Relative Strength Index Array (RSIA)'),
            'description' : localize('Similar to RSI, this block gives you a list of values for each entry in the input list.'),
        };
    },
    onchange: Blockly.Blocks.bb_statement.onchange,
};

Blockly.JavaScript.rsia_statement = block => {
    // eslint-disable-next-line no-underscore-dangle
    const var_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    const input    = block.childValueToCode('input_list', 'INPUT_LIST');
    const period   = block.childValueToCode('period', 'PERIOD');
    const code     = `${var_name} = Bot.rsia(${input}, ${period});\n`;

    return code;
};
