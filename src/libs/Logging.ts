"use server"
import fs from "node:fs/promises";

/**
 * Log to file.
 * @param message something to log. (message, JSON ...)
 * @param fname filename
 * @returns True if ok. Else otherwise.
 */
export async function log(message: string, ...args: any): Promise<boolean> {
    const fname = "logs";

    let argsConverted = null;
    try {
        argsConverted = args != undefined || args != null ? JSON.parse(args) : null;
    } catch (e) {
        // not critical
    }

    try {
        const now = new Date();
        await fs.appendFile(process.cwd() + "/logs/" + fname, "\n\n" + now + "\n" + message + (argsConverted != null ? "\n" + argsConverted : ''));
    } catch (e) {
        return false;
    }

    return true;
}