let cp = require("child_process");
console.log("Trying to open chrome");
cp.execSync("start chrome https://cts2023gen.atlassian.net/jira/software/projects/TRAN/boards/2");
console.log("Opened chrome");
// so you can run anything that you can run in command line 