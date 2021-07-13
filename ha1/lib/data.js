const fs = require('fs')
const path =require('path')
const lib = {
    baseDir:path.join(__dirname,'/../.data/'),
    create:(dir,file,data,callback)=>{
        fs.open(`${lib.baseDir}${dir}/${file}.json`,'wx',(err,fd)=>{
            if(!err && fd){
                fs.writeFile(fd,JSON.stringify(data),callback);
            }else{
                callback('could not open');
            }
        })
    },
    read:(dir,file,callback)=>{
        fs.readFile(`${lib.baseDir}${dir}/${file}.json`,'utf8',callback);
    }
};
module.exports = lib;