"use server"

/**
 * Логгирует в консоль. После билда и разворота можно смотреть логи с помощью docker.
 * 
 * @param message - сообщение
 * @param args - аргументы, которые будут закодированы в JSON
 * @returns True if ok. Else otherwise.
 */
export async function log(message: string, ...args: any): Promise<boolean> {
    const fname = "logs";

    let argsConverted = null;
    try {
        argsConverted = args != undefined || args != null ? JSON.stringify(args) : null;
    } catch (e) {
        // not critical
    }

    try {
        const now = new Date();
        console.log(now + "\n" + message + (argsConverted != null ? "\n" + argsConverted : '') + "\n\n")
    } catch (e) {
        return false;
    }

    return true;
}
