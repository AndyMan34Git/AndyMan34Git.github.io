let __packNames = Object.keys(packs)

for (let i = 0; i < __packNames.length; i++) {
    for (let j = 0; j < packs[__packNames[i]].length; j++) {
        result = packs[__packNames[i]][j]
        if (!savedItems.some(item => item.name === result.name)) {
            savedItems.push({ name: result.name, rarity: result.rarity });
            localStorage.setItem("savedItems", JSON.stringify(savedItems));
            console.log(`New ${rarities[result.rarity]}: ${result.name}!`)
        }
    }
}