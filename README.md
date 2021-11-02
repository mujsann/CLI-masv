## Description
A command-line program that:

Accepts any number of parameters as command line arguments.

Each parameter should be of the form <number><string> where <number> is a single digit from 0 to 9 and <string> is a lower case string composed of the characters from a to z with length of at least 1.

Each parameter should be processed in the following way with the output from each parameter printed on its own line:

The digit indicates how many character positions each character should be increased by, with wraparound from "z" to "a".

The modified string, without its digit prefix, should be printed to STDOUT.

## Usage

To run this program, download it or clone it. 

```bash
git clone https://www.github.com/mujsann/cli
```

## Running the code

You can run the code by passing arguments through the CLI to the app.js file.

```bash
Examples

# logs 'apple' to the console
node app 0apple

# logs 'masv' to the console, goes to the next line and logs 'masv' again
node app 1lzru 6gump

```

## Testing the code
First, you need to install the dependencies. 

```bash
npm install
```
The test file has mock data that can be changed to test the code. Call the test script to run the test.  

``` bash
npm run test
```


## License
[MIT](https://choosealicense.com/licenses/mit/)