export const SET_FIRST_NUMBER = 'SET_FIRST_NUMBER';
export const SET_SECOND_NUMBER = 'SET_SECOND_NUMBER';

export const NUMBERS = [
    { text: '1', className: 'btn btn-default col-lg-4 bttn'}, 
    { text: '2', className: 'btn btn-default col-lg-4 bttn'},
    { text: '3', className: 'btn btn-default col-lg-4 bttn'},
    { text: '4', className: 'btn btn-default col-lg-4 bttn'},
    { text: '5', className: 'btn btn-default col-lg-4 bttn'},
    { text: '6', className: 'btn btn-default col-lg-4 bttn'},
    { text: '7', className: 'btn btn-default col-lg-4 bttn'},
    { text: '8', className: 'btn btn-default col-lg-4 bttn'},
    { text: '9', className: 'btn btn-default col-lg-4 bttn'},
    { text: '0', className: 'btn btn-default col-lg-4 bttn'},
    { text: '.', className: 'btn btn-default col-lg-4 bttn'},
    { text: '=', className: 'btn btn-success col-lg-4 bttn'}
];
export const OPERATIONS = [
    { text: 'BK', className: 'btn btn-warning col-lg-8 bttn' },
    { text: 'C', className: 'btn btn-danger col-lg-2 bttn' },
    { text: '+', className: 'col-lg-5 btn btn-default bttn' }, 
    { text: '-', className: 'col-lg-5 btn btn-default bttn' },
    { text: '/', className: 'col-lg-5 btn btn-default bttn' },
    { text: '*', className: 'col-lg-5 btn btn-default bttn' },
    { text: 'X2', className: 'col-lg-5 btn btn-default bttn' },
    { text: 'SQ', className: 'col-lg-5 btn btn-default bttn' }
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

export const getResult = (op, number) => ({
    op,
    number
})

