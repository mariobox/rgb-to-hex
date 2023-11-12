document.addEventListener('DOMContentLoaded', function() {

    // initialize variables to clean user interface
    var hexList = []
    document.querySelector('#error').innerHTML = ""
    
    // assign input fields to variables
    let r = document.querySelector('input[name="r"]')
    let g = document.querySelector('input[name="g"]')
    let b = document.querySelector('input[name="b"]')

    let button = document.querySelector('input[type="submit"]')
    
    // what do to after user clicks submit button
    button.addEventListener('click', function(e) {
        e.preventDefault()
        
        // capture rgb input values
        let r_val=r.value
        let g_val=g.value
        let b_val=b.value

        // run validation: rgb values must be between 0 and 255 and fields can't be left empty
        if (!(r_val >= 0 && r_val <= 255) ||
            !(g_val >= 0 && g_val <= 255) ||
            !(b_val >= 0 && b_val <= 255)) {
            document.querySelector('#error').innerHTML = "RGB values must be positive and no greater than 255. Try again."
            hexList = []
        }
        else if (!r_val || !g_val || !b_val) {
            document.querySelector('#error').innerHTML = "Values can't be empty. Please fill in the R, G and B values."
            hexList = []
        }
        else {
            
        // if values have been properly validated convert each value to its hex equivalent and concatenate the hex values from r to b, left to right
        // conversion to hex includes a function to assign letters to values higher than 9 (since we're working with base 16)
        concatenateHexs(convertToHex(r_val))
        concatenateHexs(convertToHex(g_val))
        concatenateHexs(convertToHex(b_val))

        // convert the concatenated array of hex values for r, g and b into a string to display to the user
        let convertedHex = hexList.join('')

        // output to display to the user
        document.querySelector('h2').innerHTML = "#" + convertedHex
        document.querySelector('body').style.backgroundColor = "#" + convertedHex
        document.querySelector('#error').innerHTML = ""
        hexList = []
        }

        
})
    
    // converts decimal r, g, b numbers into hex
    function convertToHex(x) {
        color_hex = ['','']
        
        let quotient = Math.floor(x/16)
        let remainder = x%16
        
        if (remainder > 9) {
            remainder = hexLetters(remainder)
        }
        else {
            remainder = remainder.toString()
        }
        color_hex[1] = remainder

        if (quotient <= 15 && quotient > 9) {
            quotient = hexLetters(quotient)
        }
        else {
            quotient = quotient.toString()
        }
        color_hex[0] = quotient

        console.log(color_hex)
        
        return color_hex
        
    }

    // converts numbers higher than 9 into the appropriate letter in base 16
    function hexLetters(x) {
        switch(x) {
        case 10:
            return 'A';
            break;
        case 11:
            return 'B';
            break;
        case 12:
            return 'C';
            break;
        case 13:
            return 'D';
            break;
        case 14:
            return 'E';
            break;
        case 15:
            return 'F';
            break;
    }
 }
   
    // concatenate the hex values for r, g or b into its hex equivalent (2 characters). 
    function concatenateHexs(x) {
        hexList.push(x[0])
        hexList.push(x[1])
    }
})
