
/*
  Week 05 - Assignment 1
  Smart Shop Receipt Generator
  Currency: Rwandan Francs (RWF)
*/

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

// Product information: strings and numbers
const products = [
    { name: "Rice", price: 2500 },
    { name: "Cooking Oil", price: 4500 },
    { name: "Sugar", price: 1800 }
];

// Tax and discount settings
const VAT_RATE = 0.18; // 18% VAT
const DISCOUNT_RATE = 0.05; // 5% discount
const DISCOUNT_LIMIT = 50000; // RWF

// Convert user input into a valid number
async function askNumber(question, minimum = 0) {
    while (true) {
        const answer = await rl.question(question);
        const number = Number(answer);

        if (
            answer.trim() !== "" &&
            Number.isFinite(number) &&
            number >= minimum
        ) {
            return number;
        }

        console.log(`Please enter a valid number (minimum ${minimum}).`);
    }
}

// Format money consistently
function money(amount) {
    return amount.toLocaleString("en-RW", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " RWF";
}

async function main() {
    console.log("==================================");
    console.log("       SMART SHOP RECEIPT");
    console.log("==================================");

    const customerName = (
        await rl.question("Enter customer name: ")
    ).trim() || "Valued Customer";

    const cart = [];

    // Ask for quantities and calculate item totals
    for (const product of products) {
        const quantity = await askNumber(
            `Enter quantity for ${product.name} (whole number): `,
            0
        );

        if (!Number.isInteger(quantity)) {
            console.log("Quantity must be a whole number. Please try again.");
            rl.close();
            return;
        }

        const itemTotal = product.price * quantity;

        cart.push({
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: itemTotal
        });
    }

    // Calculate subtotal
    const subtotal = cart.reduce(
        (sum, item) => sum + item.total,
        0
    );

    // Apply discount if the subtotal reaches the required amount
    const discount = subtotal >= DISCOUNT_LIMIT
        ? subtotal * DISCOUNT_RATE
        : 0;

    const discountedSubtotal = subtotal - discount;

    // Calculate VAT after discount
    const vat = discountedSubtotal * VAT_RATE;

    // Calculate final amount
    const finalAmount = discountedSubtotal + vat;

    console.log("\nAmount to pay:", money(finalAmount));

    // Collect payment; do not accept insufficient payment
    let payment;

    while (true) {
        payment = await askNumber("Enter amount paid (RWF): ", 0);

        if (payment >= finalAmount) {
            break;
        }

        console.log(
            `Insufficient payment. You still need ${money(finalAmount - payment)}.`
        );
    }

    const change = payment - finalAmount;

    // Print receipt
    console.log("\n");
    console.log("==============================================");
    console.log("             SMART SHOP");
    console.log("           SHOPPING RECEIPT");
    console.log("==============================================");
    console.log("Customer:", customerName);
    console.log("Date:", new Date().toLocaleString());
    console.log("----------------------------------------------");
    console.log("Item          Qty     Price       Total");
    console.log("----------------------------------------------");

    for (const item of cart) {
        console.log(
            `${item.name.padEnd(14)}` +
            `${String(item.quantity).padEnd(8)}` +
            `${item.price.toFixed(2).padEnd(12)}` +
            `${item.total.toFixed(2)}`
        );
    }

    console.log("----------------------------------------------");
    console.log("Subtotal:        ", money(subtotal));
    console.log("Discount:        ", money(discount));
    console.log("VAT (18%):       ", money(vat));
    console.log("Final amount:    ", money(finalAmount));
    console.log("Amount paid:     ", money(payment));
    console.log("Customer change: ", money(change));
    console.log("==============================================");
    console.log("Thank you for shopping with us!");
    console.log("Please come again.");
    console.log("==============================================");

    // Demonstrate JavaScript data types
    console.log("\n--- JavaScript Data Types ---");
    console.log("Customer name:", typeof customerName); // string
    console.log("Product price:", typeof products[0].price); // number
    console.log("Discount applied:", typeof (discount > 0)); // boolean
    console.log("Cart:", typeof cart); // object (arrays are objects)
    console.log("Missing value:", typeof undefined); // undefined

    rl.close();
}

main().catch(error => {
    console.error("An error occurred:", error.message);
    rl.close();
});
