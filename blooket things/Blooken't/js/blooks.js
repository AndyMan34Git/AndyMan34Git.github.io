const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
let selectedBlook;

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
];

const sellPrices = [
    1,
    5,
    20,
    75,
    200,
    500,
    750,
    1000,
    25000
];

// Main display elements
const mainImage = document.getElementById("main-image");
const blookName = document.getElementById("blook-name");
const blookRarity = document.getElementById("blook-rarity");
const blookCount = document.getElementById("blookCounter");
const blookQuantity = document.getElementById("blook-quantity");
const sellButton = document.getElementById("sell-button");

document.addEventListener("DOMContentLoaded", updateSavedItemsDisplay);

function updateSavedItemsDisplay() {
    const savedItemsContainer = document.getElementById("saved-items");
    blookCount.textContent = `${Object.keys(savedItems).length} Blooks`
    savedItemsContainer.innerHTML = "";

    // Sort savedItems by rarity
    savedItems.sort((a, b) => a.rarity - b.rarity);

    savedItems.forEach(item => {
        const tile = document.createElement("div");
        tile.className = `tile rarity-${item.rarity}`;

        const img = document.createElement("img");
        const primaryURL = `https://ac.blooket.com/marketassets/blooks/${item.name.toLowerCase().replace(/\s/g, "")}.svg`;
        const fallbackURL = `https://blacket.org/content/blooks/${item.name}.webp`;
        const fileUrlPng = `blooks/${item.name}.png`
        const fileUrlGif = `blooks/${item.name}.gif`

        img.src = primaryURL;
        img.onerror = () => (img.src = fallbackURL);

        img.alt = item.name;
        img.title = `${item.name} (Rarity: ${rarities[item.rarity]})`;

        // Add click event to update the main display
        tile.addEventListener("click", () => {
            updateMainDisplay(item, img.src);
        });

        tile.appendChild(img);
        savedItemsContainer.appendChild(tile);
    });
}

function updateMainDisplay(item, imageUrl) {
    // Update main image
    mainImage.src = imageUrl;

    // Update blook name
    selectedBlook = item.name
    blookName.textContent = selectedBlook;

    blookQuantity.textContent = `${addCommasToNumber(item.quantity)} Coppies Owned`;

    // Update rarity text and color
    blookRarity.textContent = `${rarities[item.rarity]}`;
    blookRarity.style.color = getRarityColor(item.rarity);

    sellButton.style.backgroundColor = getRarityColor(item.rarity);
}

function getRarityColor(rarity) {
    const rarityColors = {
        0: "rgb(255, 255, 255)",  // White
        1: "rgb(75, 194, 46)",  // Green
        2: "rgb(10, 20, 250)",  // Blue
        3: "rgb(190, 0, 0)",    // Red
        4: "rgb(255, 145, 15)", // Orange
        5: "rgb(0, 204, 255)",  // Cyan
        6: "rgb(0, 128, 128)",  // Dark Teal
        7: "rgb(163, 53, 238)", // Purple
        8: "rgb(255, 217, 0)"   // Yellow
    };

    return rarityColors[rarity] || "#000";
}

function sellDupes() {
    let item = savedItems.find(item => item.name === selectedBlook);
    let tokens = Number(localStorage.getItem("tokens"));
    if (item.quantity != 1) {
        tokens += (item.quantity - 1) * sellPrices[item.rarity]
        item.quantity = 1
    } else {
        tokens += sellPrices[item.rarity]
        savedItems.splice(savedItems.indexOf(item), 1)
    }
    localStorage.setItem("tokens", tokens);
    localStorage.setItem("savedItems", JSON.stringify(savedItems))
    updateMainDisplay(item, mainImage.src)
    updateSavedItemsDisplay()
}

function addCommasToNumber(input) {
    // Use a regular expression to format the number with commas
    return String(input).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
