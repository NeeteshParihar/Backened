import fs from "fs";
import psList from "ps-list";

const logFilePath = "./process_log.txt";
let knownProcesses = new Map();

const logToFile = (message) => {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage);
};

const monitorProcesses = async () => {
    const currentProcesses = new Map();
    const processList = await psList(); // Get running processes

    processList.forEach((proc) => {
        currentProcesses.set(proc.pid, proc.name);
    });

    // Detect newly started applications
    for (const [pid, name] of currentProcesses) {
        if (!knownProcesses.has(pid)) {
            logToFile(`Application Started: ${name} (PID: ${pid})`);
        }
    }

    // Detect applications that closed
    for (const [pid, name] of knownProcesses) {
        if (!currentProcesses.has(pid)) {
            logToFile(`Application Closed: ${name} (PID: ${pid})`);
        }
    }
 
    knownProcesses = currentProcesses;
};

// Run monitoring every 5 seconds
setInterval(monitorProcesses, 5000);
console.log("Process monitoring started. Logging to process_log.txt");
