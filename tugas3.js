//buatkan program menggunaka method fetch untuk menampilkan semua nama(hanya nama) dari rest API URL (https://jsonplaceholder.typicode.com/users) dengan debugger vscode
// //pakai then catch
// const getData = (callback) => {
//     const url = 'https://jsonplaceholder.typicode.com/users'
//     fetch(url).then(result => {
//         result.json().then(dataInput => {
//          callback(dataInput)
//         })
//     }).catch(error => {
//         console.log(error.message)
//     })
// }

// //ambil data
// getData(dataInput => {
//     console.log(dataInput.map(item => item.name))
// })

//pakai async await
const data = fetch('https://jsonplaceholder.typicode.com/users')
const getData = async () => {
    try {
        const result = await data
        const json = await result.json()
        return json
    } catch (err) {
        console.log(err.message);
    }
}

// // ambil data pakai then catch
// getData().then(result => {
//     const data = result
//     console.log(data.map(item => item.name))
// }).catch(error => {
//     console.log(error.message)
// })

//ambil data nama pakai async await
const dataName = async () => {
    try{
        const result = await getData()
        console.log(result.map(item => item.name))
    }catch (err) {
        console.log (err.message);
     }
}

dataName(getData);