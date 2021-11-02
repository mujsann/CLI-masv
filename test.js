const solution = require('./solution'); //program that solves the problem
const chai = require('chai')
const expect = chai.expect()
const should = chai.should()

//data
const INPUTS = require('./mock-inputs')
const { mock_inputs, expected_outputs, mock_inputs2, expected_outputs2, mock_inputs3, expected_output3 } = INPUTS


//tests
describe('code-challenge', function () {

    const flat_expected_outputs = expected_outputs.join("")
    const flat_expected_outputs2 = expected_outputs2.join("")
    const flat_expected_outputs3 = expected_output3.join("")

    it('should return strings that match the expected output', function () {
        let results = ""
        mock_inputs.map(input => results += solution(input))
        results.should.equal(flat_expected_outputs)
    });

    it('should return error if the first character is not an integer', function () {
        let results = ""
        mock_inputs2.map(input => results += solution(input))
        results.should.equal(flat_expected_outputs2)
    });

    it('should return error if the string has characters other than a-z', function () {
        let results = ""
        mock_inputs3.map(input => results += solution(input))
        results.should.equal(flat_expected_outputs3)
    });


});