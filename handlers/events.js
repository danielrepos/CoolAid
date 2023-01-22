const fs = require("fs");
const allevents = [];
module.exports = async (client) => {
    try {
        try {
            const stringlength = 69;
            console.log("\n")
            console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.grey)
            console.log(`     ┃ `.bold.grey + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.grey)
            console.log(`     ┃ `.bold.grey + `CoolAid Man is going LIVE!`.bold.grey + " ".repeat(-1 + stringlength - ` ┃ `.length - `CoolAid Man is going LIVE!`.length) + "┃".bold.grey)
            console.log(`     ┃ `.bold.grey + `  /-/ By SaltyDuck /-/`.bold.grey + " ".repeat(-1 + stringlength - ` ┃ `.length - `  /-/ By SaltyDuck /-/`.length) + "┃".bold.grey)
            console.log(`     ┃ `.bold.grey + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.grey)
            console.log(`     ┃ `.bold.grey + `  /-/ Discord: SaltyDuck#1010 /-/`.bold.grey + " ".repeat(-1 + stringlength - ` ┃ `.length - `  /-/ By Discord: SaltyDuck#1010 /-/`.length) + "   ┃".bold.grey)
            console.log(`     ┃ `.bold.grey + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.grey)
            console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.grey)
        } catch {
            /* */ }
        let amount = 0;
        const load_dir = (dir) => {
            const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
            for (const file of event_files) {
                try {
                    const event = require(`../events/${dir}/${file}`)
                    let eventName = file.split(".")[0];
                    allevents.push(eventName);
                    client.on(eventName, event.bind(null, client));
                    amount++;
                } catch (e) {
                    console.log(e)
                }
            }
        }
        await ["client", "guild"].forEach(e => load_dir(e));
        console.log(`${amount} Events Loaded`.grey);
        try {
            const stringlength2 = 69;
            console.log("\n")
            console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.grey)
            console.log(`     ┃ `.bold.grey + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃".bold.grey)
            console.log(`     ┃ `.bold.grey + `Bot going live...`.bold.grey + " ".repeat(-1 + stringlength2 - ` ┃ `.length - `Bot going live...`.length) + "┃".bold.grey)
            console.log(`     ┃ `.bold.grey + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃".bold.grey)
            console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.grey)
        } catch {
            /* */ }
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
};
