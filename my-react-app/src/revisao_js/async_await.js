async function RecebeDados() {
    try {
         setInterval(async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            let data = await response.json();
            console.log(data)
        }, 3000)
    } catch (error) {
        console.log("Ocorreu um erro: ", error)
    }
}

RecebeDados()