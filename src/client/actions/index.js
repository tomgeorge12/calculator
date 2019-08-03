export const SET_FIRST_NUMBER = 'SET_FIRST_NUMBER';
export const SET_SECOND_NUMBER = 'SET_SECOND_NUMBER';

export const NUMBERS = [
    { text: '1', className: 'btn btn-default col-lg-4'}, 
    { text: '2', className: 'btn btn-default col-lg-4'},
    { text: '3', className: 'btn btn-default col-lg-4'},
    { text: '4', className: 'btn btn-default col-lg-4'},
    { text: '5', className: 'btn btn-default col-lg-4'},
    { text: '6', className: 'btn btn-default col-lg-4'},
    { text: '7', className: 'btn btn-default col-lg-4'},
    { text: '8', className: 'btn btn-default col-lg-4'},
    { text: '9', className: 'btn btn-default col-lg-4'},
    { text: '0', className: 'btn btn-default col-lg-4'},
    { text: '.', className: 'btn btn-default col-lg-4'},
    { text: '=', className: 'btn btn-success col-lg-4'}
];
export const OPERATIONS = [
    { text: 'C', className: 'btn btn-warning col-lg-2' },
    { text: 'Backspace', className: 'btn btn-danger col-lg-8' },                      
    { text: '+', className: 'col-lg-5 btn btn-default' }, 
    { text: '-', className: 'col-lg-5 btn btn-default' },
    { text: '/', className: 'col-lg-5 btn btn-default' },
    { text: '*', className: 'col-lg-5 btn btn-default' }
];

export const store = {
    tempNum: "",
    firstNumber: "",
    op: "",
    result: ""
}

export const setFirstNumber = number => ({
    type: 'SET_FIRST_NUMBER',
    number
})

export const setTempNumber = number => ({
    type: 'SET_TEMP_NUMBER',
    number
})

export const setOperator = op => ({
    type: 'SET_OPERATOR',
    op
})

export const setResult = value => ({
    type: 'SET_RESULT',
    value
})

export const getResult = (number, argOp) => ({
    argOp,
    number
})

