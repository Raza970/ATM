import inquirer from "inquirer";
import cashwithdraw from "./cashwithdrwa.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBill.js";
import chalk from "chalk";
async function anotherTransaction() {
    const OTrans = await inquirer.prompt([
        {
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another Transaction ?",
        },
    ]);
    return OTrans.otherTrans;
}
async function mainScreen(balance) {
    do {
        const options = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: [
                    "Balance Inquiry",
                    "Cash withdraw",
                    "Cash Deposit",
                    "Transfer",
                    "Utility Bill",
                    "Exit",
                ],
                message: "Please select options",
            },
        ]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(chalk.bgBlue(`Your current Balance is: ${balance}`));
                break;
            case "Cash withdraw":
                balance = await cashwithdraw(balance);
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                break;
            case "Transfer":
                balance = await transfer(balance);
                break;
            case "Utility Bill":
                balance = await Utility(balance);
                break;
            case "Exit":
                anothertran = "No";
                break;
        }
        if (options.menu !== "Exit") {
            console.log(chalk.yellow(`Your transaction is success new balance is ${balance}`));
            var anothertran = await anotherTransaction();
        }
        if ((anothertran == "No")) {
            console.log("Thanks you for using our service");
        }
    } while (anothertran != "No");
}
export default mainScreen;
