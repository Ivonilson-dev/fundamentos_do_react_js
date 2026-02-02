const promisse = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('Dados recebidos')
        reject('Erro ao receber dados.')
    }, 2000)
}) 
promisse
    .then(result => console.log(result))
    .catch(error => console.log(error))

