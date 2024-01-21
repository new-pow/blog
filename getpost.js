const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/_posts")
let postlist = []

const getPosts = async () => {
    await fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: "+err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) =>{
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1,
                            metadataIndices[1])
                            metadata.forEach(line => {
                                obj[line.split(":")[0]] = line.split(":")[1].trim()
                            })
                            return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                post = {
                    id: i + 1,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author",
                    data: metadata.data ? metadata.data : "No data given",
                    content: content ? content : "No content given"
                }
                postlist.push(post)
            })
        })
    })
}

getPosts()