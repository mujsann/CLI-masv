const ALPHABETS = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const solution = (value) => {

    try {


        // each parameter is '<number><string>'
        let param = [...value]
        let param_result = "";

        // separate the number from the string; where number = param[0]
        const num = parseInt(param.splice(0, 1));

        //* validation: if num is not a number type or if param contains number, throw exception
        if (!(num >= 0)) throw `the first character should be a number in '${value}'`;
        if (!/^[A-Za-z]+$/.test(param.join(""))) throw `the string should only contain characters from a-z in '${value}'`;


        //  to get the new strings, perform a slide on each string by incrementing their positions by value of num 
        param.map(x => {

            let sum = num + ALPHABETS.indexOf(x.toLowerCase())
            let new_position = sum > 26 ? sum - 26 : sum
            let new_alph = ALPHABETS[new_position]

            param_result += new_alph;

        })


        return(param_result);




    } catch (e) {
        return e;
    }

}

module.exports = solution