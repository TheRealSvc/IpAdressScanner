'use strict';

const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./middleware/async-handler');
const spawnSync = require('child_process').spawnSync



//  1 ----- User Routes -----------------------------------------------------
//
// Route that returns the currently authenticated user. 
router.get('/getcomputer',  asyncHandler(async (req, res) => {
   //executePs()
   var child = spawnSync("powershell.exe",["./public/powershell/ps_script.ps1"]);
   let a =  child.output.toString().match(/\[[\d\D]+\]/g)
   console.log(`a: ${a}`)
   let b = JSON.stringify(a);
   //console.log(`b: ${b}`)
   let c =  b.replace(/(\\r\\n|\\|\\\")/g,'');
   c = c.substring(2,c.length-2);
   console.log(`c: ${c}`)
   let d= JSON.parse(c)
   res.status(200).json(d)})
  )

  /* 
  child.stdout.on("data",function(data) {
     console.log("Powershell Data: " + data);
     //res.json(data)
    });
    child.stderr.on("data",function(data){
        console.log("Powershell Errors: " + data);
    });
    child.on("exit",function(){
        console.log("Powershell Script finished");
    });
    child.stdin.end(); //end input 
})); */

module.exports = router;
 