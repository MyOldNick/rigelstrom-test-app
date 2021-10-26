class StorageService {

    getData(key) {

        const json = window.localStorage.getItem(key)

        const city = JSON.parse(json)

        return city

    }


    setData(key, data) {

        const json = JSON.stringify(data)

        window.localStorage.setItem(key, json)

    }

}

export default new StorageService()