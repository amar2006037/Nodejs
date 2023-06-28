import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"


inquirer
    .prompt([{
        message: "Type in your URL:",
        name: "URL"
    }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("QR_Cod.png"));

        fs.writeFile('url.txt',url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


/*
1. use the inquirer npm packege to get user input.
2. Use the qr-image npm packege to turn the user entered url to QR code image.
3. Create a text file to save the user input using the native fs native node module
*/
