import axios from "axios";

class Service {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://asia-southeast1-catan-portfolio.cloudfunctions.net',
            timeout: 10000
        })
    }

    getProjects = () => {
        return this.api.get('get/projects')
    }

    getAchievements = () => {
        return this.api.get('get/achievements')
    }

    getSkills = () => {
        return this.api.get('get/skills')
    }

    sendMessage = (body) => {
        return this.api.post('send', body)
    }
}

export default new Service()