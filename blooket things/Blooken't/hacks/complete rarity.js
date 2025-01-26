if (typeof __packNames == 'undefined') {
    let __packNames
}; __packNames = Object.keys(packs);
if (typeof __rarity == 'undefined') {
    let __rarity
}; __rarity = prompt("Which rarity do you want to complete?)");
if (typeof rarities == 'undefined') {
    let __rarities
}; __rarities = ["common","uncommon","rare","epic","legendary","chroma","unique","mystical","iridescent"];

console.log(__rarities.indexOf(__rarity.toLowerCase()));

for (let i = 0; i < __packNames.length; i++) {
    for (let j = 0; j < packs[__packNames[i]].length; j++) {
        result = packs[__packNames[i]][j]
        if (!savedItems.some(item => item.name === result.name) && result.rarity == __rarities.indexOf(__rarity.toLowerCase())) {
            savedItems.push({ name: result.name, rarity: result.rarity });
            localStorage.setItem("savedItems", JSON.stringify(savedItems));
            console.log(`New ${rarities[result.rarity]}: ${result.name}!`)
        }
    }
}