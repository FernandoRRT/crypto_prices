<template>
  {{ this.$route.path }}
  {{ this.dados.id }}
  <Calendar 
    v-model="today" 
    :inline="true" 
    selectionMode="single"
    dateFormat="dd.mm.yy" 
    :showButtonBar="false" />
</template>

<script>
import ApiMixin from "../services/ApiMixin";


export default {
  name: "Dashboard",
  data: () => ({
    today: new Date(),
    searchDate: '',
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
  computed: {},
  watch: {
    today(modified) {
      this.searchDate = ((modified.getDate() )) + "-" + ((modified.getMonth() + 1)) + "-" + modified.getFullYear(),
      console.log(this.searchDate)
    }    
  },
  created() {
    console.log(this.searchDate )
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
.p-calendar {
  @apply bg-bgtertiary rounded-md border-2 border-txprimary p-2;
}
.p-calendar-w-btn {
  @apply bg-purple-900;
  }	
/* Main container element when button is enabled. */
.p-calendar-timeonly {
  
  }	
/* Main container element in time picker only mode. */
.p-inputtext {
  
  }	
/* Input element */
.p-datepicker {
  
  }	
/* Datepicker element */
.p-datepicker-inline {
  
  }	
/* Datepicker element in inline mode */
.p-monthpicker {
  
  }
/* Datepicker element in month view. */
.p-monthpicker-month {
  
  }	
/* Month cell in month view mode. */
.p-datepicker-touch-ui {
  
  }	
/* Datepicker element in touch ui mode. */
.p-datepicker-calendar {
  
  }	
/* Table containing dates of a month. */
.p-datepicker-current-day {
  
  }	
/* Cell of selected date. */
.p-datepicker-today {
  /* @apply bg-bgtertiary border-2 border-bgsecondary; */

}	
/* Cell of today's date. */
</style>





