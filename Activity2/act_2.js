let fs = require('fs');
let path = require('path');

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];
let subDirectories = inputArr.slice(1);

let mainDirPath = path.join(process.cwd(),mainDir);
if(!fs.existsSync(mainDirPath))
{
    fs.mkdirSync(mainDirPath);
}

for(let i=0;i<subDirectories.length;i++)
{
    let folder = path.join(mainDirPath,subDirectories[i]);
    if(!fs.existsSync(folder))
    {
        fs.mkdirSync(folder)
    }
    for(let j=1;j<=3;j++)
    {
        let module = path.join(folder,`Module${j}`);
        fs.mkdirSync(module);
        let fileName = path.join(module,`content.md`);
        fs.writeFileSync(fileName,'#Hello Everyone');
    }
}