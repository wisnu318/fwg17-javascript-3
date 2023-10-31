const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// // buatkan sambungan dengan then catch untuk cek hari kerja dari kode async dan jelaskan penggunaan then catch dengan komentar, jika sebuah fungsi mereturn sebuah promise bisa langsung chainning then
// //code panjang
// const resolve = () => {
//     console.log('ini hari kerja')
// }
// const error = (err) => {
//     console.log(err.message)
// }
// cekHariKerja('senin').then(resolve).catch(error)
// // code ringkas
// cekHariKerja('senin').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))
// cekHariKerja('selasa').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))
// cekHariKerja('rabu').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))
// cekHariKerja('kamis').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))
// cekHariKerja('jumat').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))
// cekHariKerja('sabtu').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))
// cekHariKerja('minggu').then(()=>console.log('ini hari kerja')).catch((err)=>console.log(err.message))

// buatkan sambungan dengan try catch untuk cek hari kerja dari kode async dan jelaskan penggunaan try catch dengan komentar
// console.log(typeof cekHariKerja())
const hariKerja = async () => {
 try {
    let kerjaan = await cekHariKerja('senin');
    console.log(kerjaan);
 }catch (err) {
    console.log (err.message);
 }
};
hariKerja();