const api = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`)
            .then(api => api.json())
            .then((api) => {
                if (api) {
                    resolve(api)
                } else {
                    reject(api)
                }
            })
    })
}

api('')
    .then(api => console.log(api))
    .catch(api => console.log(api))