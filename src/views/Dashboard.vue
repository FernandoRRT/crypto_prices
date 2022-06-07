<template>
  {{ this.$route.path }}
  {{ this.dados.id }}
  <Calendar v-model="value" />
</template>

<script>
import ApiMixin from "../services/ApiMixin";


export default {
  name: "Dashboard",
  searchI: "",
  mixins: [ApiMixin],
  methods: {
    async coinEndpoint2(url) {
      const resp = await fetch(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    },
  },
  computed: {},
  created() {
    this.getDadosApi(
      `https://api.coingecko.com/api/v3/coins/${
        this.coinsId[this.$route.path]
      }?localization=false&tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );
  },
  updated() {
    this.getDadosApi(
      `https://api.coingecko.com/api/v3/coins/${
        this.coinsId[this.$route.path]
      }?localization=false&tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );
  },
};
</script>

<style>
</style>