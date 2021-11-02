
const mock_inputs = ['0apple', '1lzru', '6gump', '8hello', '5zyo', '3abc', '4abc', '1xyz', '0mnp']
const expected_outputs = ['apple', 'masv', 'masv', 'pmttw', 'edt', 'def', 'efg', 'yza', 'mnp' ]

const mock_inputs2 = ['0apple', 'l1zru', '6gump', 'he8llo', '5zyo', '3abc']
const expected_outputs2 = ['apple', "the first character should be a number in 'l1zru'", 'masv', "the first character should be a number in 'he8llo'", 'edt', 'def']

const mock_inputs3 = ['0apple', '1lzru', '6gu1mp', '8hello', '5zyo', '3abc6']
const expected_output3 = ['apple', 'masv', "the string should only contain characters from a-z in '6gu1mp'", 'pmttw', 'edt', "the string should only contain characters from a-z in '3abc6'"]


const data = { mock_inputs, expected_outputs, mock_inputs2, expected_outputs2, mock_inputs3, expected_output3 }


module.exports = data