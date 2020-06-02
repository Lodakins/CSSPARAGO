const path = require('path');

exports.index= (req,res)=>{
    res.sendFile(path.join(__dirname).substring(0,__dirname.length-11)+"/view/index.html");
}

exports.textshadow= (req,res)=>{  
    res.sendFile(path.join(__dirname).substring(0,__dirname.length-11)+"/view/textshadow.html");
};

exports.boxshadow = (req,res)=>{  
    res.sendFile(path.join(__dirname).substring(0,__dirname.length-11)+"/view/boxshadow.html");
}

exports.border=(req,res)=>{   
    res.sendFile(path.join(__dirname).substring(0,__dirname.length-11)+"/view/border.html");
}