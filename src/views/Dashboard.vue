<template>
  {{ this.$route.path }}
  {{ this.dados.id }}
    <main class="dashboard">
        <article class="card">
            <section class="card__body">
                Part 1
            </section>
                        <section class="card__body">
                Part 2
            </section>
        </article>
    </main>

<input type="date" v-model="today">
</template>

<script>
import ApiMixin from "../services/ApiMixin";


export default {
  name: "Dashboard",
  data: () => ({
    searchDate: '',
    today: (new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 10),
    }),
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

  watch: {
    today(newDate) {
        this.searchDate = newDate
        console.log(this.searchDate)
    }    
  },
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
<!-- <style scoped> -->
<style>
.dashboard{
    @apply p-4;
}
.card {
  @apply 
    rounded-md 
    border-2 
    border-txprimary 
    flex
    w-full 
    sm:flex-col
    md:flex-col
    lg:flex-row
    gap-3
    ; 
}
.card__body{
    @apply bg-bgtertiary rounded-md border-2 border-txprimary p-1 w-full ;
}

</style>



