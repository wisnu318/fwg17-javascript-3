const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const showMonth = (error, listMonth) => {
    if (error) {
        console.log(error.message, [])
    } else {
        console.log(listMonth.map(month => {
            return month
        }))
    }
}


getMonth(showMonth)