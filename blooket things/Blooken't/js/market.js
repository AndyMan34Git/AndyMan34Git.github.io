// Define the packs and their respective items with probabilities
let packs;
let tokens;
let cost1;

const tokenMonitor = document.getElementById("tokens");
const packOverlay = document.getElementById("pack-overlay");

async function loadPacks() {
    try {
        const response = await fetch("packs.json");
        if (!response.ok) {
            throw new Error("Failed to load packs.json");
        }
        packs = await response.json();
        console.log("Packs loaded successfully:", packs);
    } catch (error) {
        console.error("Error loading packs:", error);
    }
}

// Call the function to load the packs
loadPacks();

const rarities = [
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary",
    "Chroma",
    "Unique",
    "Mystical",
    "Iridescent"
]

const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
tokens = JSON.parse(localStorage.getItem("tokens")) || 25000;
tokenMonitor.textContent = `Tokens: ${addCommasToNumber(tokens)}`

// Function to handle pack clicks
function handlePackClick(packName, cost) {
    cost1 = cost;
    if (tokens >= cost) {
        const pack = packs[packName];
        if (!pack || !Array.isArray(pack)) {
            console.error(`Pack "${packName}" not found or invalid.`);
            return;
        }

        const result = rollItem(pack); // Get the rolled item (name and rarity)

        setTimeout(() => {
            // Check if the item is already saved
            if (!savedItems.some(item => item.name === result.name)) {
                savedItems.push({ name: result.name, rarity: result.rarity, quantity: 1 });
                console.log(`New ${rarities[result.rarity]}: ${result.name}!`);
            } else {
                let item = savedItems.find(item => item.name === result.name)
                item.quantity++
            }
            localStorage.setItem("savedItems", JSON.stringify(savedItems));
        },)
    }
}

// Function to roll an item based on probabilities
function rollItem(items) {
    if (typeof cost1 == 'undefined') {
        tokens -= 25
    } else {
        tokens -= cost1
    }
    localStorage.setItem("tokens", tokens)
    tokenMonitor.textContent = `Tokens: ${addCommasToNumber(tokens)}`
    
    const scaleFactor = 1000000; // Scaling factor for probabilities
    let cumulativeProbability = 0;

    const cumulativeItems = items.map(item => {
        if (typeof item.probability !== "number" || item.probability <= 0) {
            console.error(`Invalid probability for item:`, item);
            return null; // Skip invalid items
        }

        const scaledProbability = Math.round(item.probability * scaleFactor);
        cumulativeProbability += scaledProbability;

        return {
            name: item.name,
            rarity: item.rarity,
            cumulativeProbability: cumulativeProbability,
        };
    }).filter(Boolean); // Remove null entries

    if (cumulativeItems.length === 0) {
        console.error("No valid items to roll from.");
    }

    const totalProbability = cumulativeProbability; // Final total
    const rand = Math.floor(Math.random() * totalProbability);

    for (const item of cumulativeItems) {
        if (rand < item.cumulativeProbability) {
            return { name: item.name, rarity: item.rarity };
        }
    }

    console.error("Unexpected error: Random number out of bounds.");
    return cumulativeItems[cumulativeItems.length - 1];
}

function spampack(pack, number) {
    pack = packs[pack]; // Get the pack from the packs object
    let things = {}; // To store the results

    for (let i = 0; i < number; i++) {
        const result = rollItem(pack); // Get the rolled item
        const itemName = result.name; // Access the name of the item

        if (!savedItems.some(item => item.name === result.name)) {
            savedItems.push({ name: result.name, rarity: result.rarity, quantity: 1 });
            console.log(`New ${rarities[result.rarity]}: ${result.name}!`);
        } else {
            let item = savedItems.find(item => item.name === result.name)
            item.quantity++
        }
        localStorage.setItem("savedItems", JSON.stringify(savedItems));

        if (!things[itemName]) {
            // Initialize count if item not in things
            things[itemName] = 1;
        } else {
            // Increment count if item already in things
            things[itemName]++;
        }
        if (tokens < 25) {
            break
        }
    }

    console.log(things); // Print the results
}

function addCommasToNumber(input) {
    // Use a regular expression to format the number with commas
    return String(input).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
