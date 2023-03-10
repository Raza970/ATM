import inquirer from "inquirer";

const Electric = Math.ceil(Math.random() * 1000 + 1);
const Gas = Math.ceil(Math.random() * 1000 + 1);
const Phone = Math.ceil(Math.random() * 1000 + 1);

async function Utility(balance: number) {
  const input = await inquirer.prompt([
    {
      name: "BillType",
      type: "list",
      choices: ["ElectricityBill", "Gas", "Phone"],
      message: "Please select your Bill Types ?",
    },
  ]);

  if (input.BillType == "ElectricityBill") {
    console.log(`Your Bill amount : ${Electric}`);
    balance -= Electric;
  } else if (input.BillType == "Gas") {
    console.log(`Your Bill amount : ${Gas}`);
    balance -= Gas;
  } else if (input.BillType == "Phone") {
    console.log(`Your Bill amount : ${Phone}`);
    balance -= Phone;
  }

  return balance;
}

export default Utility;
