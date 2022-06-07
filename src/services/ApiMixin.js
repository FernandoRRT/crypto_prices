export default {
    data: () => ({
        dados: {},
        coinsId: {
            '/btc': 'bitcoin',
            '/eth': 'ethereum',
            '/dacxi': 'dacxi',
            '/atom' : 'cosmos',
            '/luna': 'terra-luna-2', 
             }
    }),
    methods: {
       async getDadosApi(url) {
            await fetch(`${url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.statusText);
                    }
                })
                .then(response => {
                    this.dados = response
                })
        }
    },
}