const parseArgs = () => {
    const envArg = process.argv.slice(2);
    console.log(envArg);
    let arr = [];
    for (let i = 0; i < envArg.length; i=i + 2) {
      arr.push(`${envArg[i].slice(2)} is ${envArg[i + 1]}`);
    }
    console.log(arr.join(", "));
  };
  
  parseArgs();