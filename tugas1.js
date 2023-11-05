const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day //karena operator logika menjadi nilainya true/false
            })
            if (cek) { //karena minggu berisi undifined maka hasilnya falsy jadi dia masuk ke else bukan if
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// // buatkan sambungan dengan then catch untuk cek hari kerja dari kode async dan jelaskan penggunaan then catch dengan komentar, jika sebuah fungsi mereturn sebuah promise bisa langsung chainning then
cekHariKerja('senin').
then((result)=>console.log(`hari ${result} adalah hari kerja`)).
catch((err)=>console.log(err.message))
// cekHariKerja('minggu').then((result)=>console.log(`hari ${result} adalah hari kerja`)).catch((err)=>console.log(err.message))

// // buatkan sambungan dengan try catch untuk cek hari kerja dari kode async dan jelaskan penggunaan try catch dengan komentar
// const hariKerja = async () => {
//  try {
//     const hari = await cekHariKerja('kamis')
//     console.log(`hari ${hari} adalah hari kerja`)

//     // const hari = await cekHariKerja('minggu')
//     // console.log(`hari ${hari} adalah hari kerja`)
//  }catch (err) {
//     console.log (err.message);
//  }
// };
// hariKerja();