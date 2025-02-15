import fs from 'fs';
import psList from 'ps-list';

const loggingPATH = './activity_log.json';
let knownProcesses = new Map();

let flag = 0 ;


const lastProcessTriggerd = new Map() ;

const LOG_INTERVAL = 5000; // 5 seconds buffer


const SYSTEM_PROCESSES = new Set([
    "ps",
    "bash",
    "sh",
    "zsh",
    "ttm",
    "u17",
    "systemd",
    "dbus-daemon",
    "snapd",
    "Xorg",
    "gnome-session",
    "gdm",
    "pulseaudio",
    "pipewire",
    "chrome_crashpad",
    "crashpad_handle",
    "sleep" ,
    "spuUsage.sh",
    "u16:2-events_power_efficient",
    "0:2-cgroup_destroy ",
    "u17:6-ttm ",
    "0:2 "

]);



const logToFile = (app, pid) => {

    const currTime = Date.now() ;

    if(lastProcessTriggerd.has(id) && currTime - lastProcessTriggerd.get(pid) < LOG_INTERVAL){
        return ;
    }

    lastProcessTriggerd.set(pid , app) ;

    const logMessage = {
        time: new Date().toISOString(),
        application: `${app} - PID : ${pid} `
    };

    fs.appendFile(loggingPATH, JSON.stringify(logMessage) + "\n", (err) => {
        if (err) console.error("Error writing to file:", err);
    });
};

const monitorProcesses = async () => {
    const currentProcesses = new Map();
    const processList = await psList();

    // console.log("Fetching current processes...");

    for (let { pid, name , ppid } of processList) {
        if (!SYSTEM_PROCESSES.has(name) && ppid !== 1) {
            currentProcesses.set(pid, name);
        }
    }

    if(flag === 0){
    knownProcesses = currentProcesses;
    flag ++ ;
    return ;
    

    }

    // Check for newly started applications
    for (let [pid, name] of currentProcesses) {
        if (!knownProcesses.has(pid)) {
            logToFile(name , pid);
        }
    }

    // Check for closed applications
    for (let [pid, name] of knownProcesses) {
        if (!currentProcesses.has(pid)) {
            logToFile(`Application Closed: ${name} (PID: ${pid})`);
        }
    }

    knownProcesses = currentProcesses;
};

setInterval(monitorProcesses, 3000);
console.log(`Process monitoring started. Logging file path: ${loggingPATH}`);
