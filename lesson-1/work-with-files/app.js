// import fs from "fs";
import fs from "fs/promises";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

const func = async()=> {
    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile("./files/file.txt", "utf-8");
    // console.log(text);
    // const {encoding} = await DetectFileEncodingAndLanguage("./files/file.txt");
    // const text = await fs.readFile("./files/file.txt", encoding);
    // console.log(text);
    // await fs.appendFile("./files/file.txt", "\nPHP forever");
    // await fs.writeFile("./files/file.txt", "Mojo the best");
    // await fs.readFile("./files/file4.txt");
    // await fs.appendFile("./files/file2.txt", "\nPHP forever");
    // await fs.writeFile("./files/file3.txt", "Mojo the best");
    // await fs.unlink("./files/file3.txt")
}

func();

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log("error", error);
//     console.log("data", data);
// })