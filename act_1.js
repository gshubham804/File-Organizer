let fs = require('fs');
let path = require('path');
let inputarr = process.argv.slice(2);
let inputDir = inputarr[0];

let allEntities = fs.readdirSync(inputDir);
console.log(allEntities);
let content ="";
for(let i=0;i<allEntities.length;i++)
{
    let entityName = allEntities[i];
    let eName = path.join(inputDir,entityName);
    let stats = fs.statSync(eName);
    let isFile = stats.isFile();
    if(isFile)
    {
        let extName = path.extname(eName);
        if(extName=='.txt')
        {
            content+=fs.readFileSync(eName);
        }
    }
}
console.log(content);
let summaryFile ='C:\\Users\\Shweta\\OneDrive\\Desktop\\Activity\\summaryFile.txt'
fs.writeFileSync(summaryFile,content);