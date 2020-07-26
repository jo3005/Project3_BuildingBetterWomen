const fs = require("fs");

const pic1="https://carbongroup.com.au/assets/images/logo.svg"

function picToBuffer (url) {
    console.log(url);
    const filename= url;
    const urlInBuffer= fs.readFile(filename, (err, data) => {
        if (err) throw err; // Fail if the file can't be read.
        var oldData = data;
        let str = data.toString('base64')
        data = Buffer.from(str, 'base64');
    });
    return urlInBuffer;

}


console.log(picToBuffer(pic1));