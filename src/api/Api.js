import axios from "axios";

class Service {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://asia-southeast1-catan-portfolio.cloudfunctions.net/api',
            // baseURL: 'http://localhost:5001/catan-portfolio/asia-southeast1/api',
            timeout: 10000
        })
    }

    getProjects = () => {
        return this.api.get('projects')
    }

    getAchievements = () => {
        return this.api.get('achievements')
    }

    getSkills = () => {
        return this.api.get('skills')
    }

    sendMessage = (body) => {
        return this.api.post('', body)
    }
}

export default new Service()