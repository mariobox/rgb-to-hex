# RGB to HEX Converter

This js application captures input from the user in RGB format and translates it to HEX format.

## Steps

1. Create the form to capture info. It should have three input fields: one for R, one for G and one for B. It should also have a button of the type `input submit`.

2. Upon clicking the button, the page should not refresh. This may  entail implementing an instruction to prevent default behavior.

3. The captured input should be assigned to variables and passed through a function that somehow converts the RGB number (e.g. 255) into its hex equivalent (in the case of RGB 255 it would be FF). In the process, digits higher than 9 will need to be converted to a letter.

4. You will then need to assemble the 6-character hex value by piecing together the three converted numbers

5. The hex value needs to be displayed between `h2` tags and the page background should switch to the converted color after clicking the submit button.

6. You should also implement a reset button or find a way to enable repeated queries.
