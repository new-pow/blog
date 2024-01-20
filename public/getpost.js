const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/_posts")
let postlist = []

const getPosts = async () => {
    await fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: "+err)
        }
        console.log(files)
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) =>{

            })
        })
    })
}

getPosts()