tokens = prompt("How many tokens do you want?")
localStorage.setItem("tokens", tokens)
tokenMonitor.textContent = `Tokens: ${tokens}`