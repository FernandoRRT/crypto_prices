<template>
  <header>
    <nav class="topnavbar">
      <div class="topnavbar-container">
        <div class="topnavbar-expanded">
          <a class="topnavbar-links" href="#pablo">
            <div class="logo-container">
              <div class="flex items-center">
                <font-awesome-icon icon="copyright" class="fa-2xl" />
              </div>
              <div class="title">
                <p class="text-logo">rypto</p>
                <p>urious</p>
              </div>
            </div>
          </a>
          <button class="topnavbar-colapse-button" type="button" v-on:click="toggleNavbar()">
            <font-awesome-icon icon="bars" />
          </button>
        </div>
        <Transition
          enter-active-class="duration-300 ease-out"
          enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-75"
        >
        <!-- v-bind:class="{ hidden: !showMenu, flex: showMenu }" -->
          <div
            v-if="showMenu"
            class="topnavbar-hidden"
          >
            <ul class="topnavbar-ul">
              <li class="nav-item">
                <a class="topnavbar-ul-links"
                  href="#pablo"
                >
                  <img
                    :srcset="`${icons.btcT} 768w, ${icons.btcS} 1536w`"
                    sizes="(max-width: 768px) 768px, 1536px"
                    :src="icons.btcS"
                    alt="The Bitcoin logo is a coin with a B in the center"
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="topnavbar-ul-links"
                  href="#pablo"
                >
                  <img
                    :srcset="`${icons.ethT} 768w, ${icons.ethS} 1536w`"
                    sizes="(max-width: 768px) 768px, 1536px"
                    :src="icons.ethS"
                    alt="The Ethereum symbol is two pyramids, one above and one below, mirroring the one above."
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="topnavbar-ul-links"
                  href="#pablo"
                >
                  <img
                    :srcset="`${icons.dacxiT} 768w, ${icons.dacxiS} 1536w`"
                    sizes="(max-width: 768px) 768px, 1536px"
                    :src="icons.dacxiS"
                    alt="The Dacxi symbol is a straight, solid line that is bent to look like a D."
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="topnavbar-ul-links"
                  href="#pablo"
                >
                  <img
                    :srcset="`${icons.atomT} 768w, ${icons.atomS} 1536w`"
                    sizes="(max-width: 768px) 768px, 1536px"
                    :src="icons.atomS"
                    alt="The Cosmos symbol is the representation of an atom. In the nucleus there is a white circle that represents the nucleus of an atom and around it, several ellipses represent the electrosphere."
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="topnavbar-ul-links"
                  href="#pablo"
                >
                  <img
                    :srcset="`${icons.lunaT} 768w, ${icons.lunaS} 1536w`"
                    sizes="(max-width: 768px) 768px, 1536px"
                    :src="icons.lunaS"
                    alt="The Earth Coin symbol is a yellow circle, which represents a planet and around its left side it is covered in solar flames."
                  />
                </a>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      showMenu: undefined,
      width: window.innerWidth,
      icons: {
        btcT:"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
        btcS: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
        ethT: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
        ethS: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
        dacxiT: "https://assets.coingecko.com/coins/images/4466/thumb/dacxi.png?1639042471",
        dacxiS: "https://assets.coingecko.com/coins/images/4466/small/dacxi.png?1639042471",
        atomT: "https://assets.coingecko.com/coins/images/1481/thumb/cosmos_hub.png?1555657960",
        atomS: "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
        lunaT: "https://assets.coingecko.com/coins/images/25767/thumb/01_Luna_color.png?1653556122",
        lunaS: "https://assets.coingecko.com/coins/images/25767/small/01_Luna_color.png?1653556122",
      }
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
  computed: {
    setShowMenu() {
      this.width >= 640 ? this.showMenu = true : this.showMenu = false 
    },
  },
};
</script>


<style>
.topnavbar {
  @apply relative 
    flex flex-wrap 
    items-center
    justify-between
    p-3 
    mb-3 
    border-b-2 
    border-txsecondary 
    shadow 
    shadow-white
    bg-bgprimary 
    text-txsecondary;
}

.topnavbar-container {
  @apply container
    px-4
    mx-auto
    flex flex-wrap
    items-center
    justify-between;
}

.topnavbar-expanded {
  @apply w-full
  relative
  flex
  justify-between
  sm:w-auto
  px-4
  sm:static sm:block sm:justify-start;
}

.topnavbar-links {
  @apply text-sm
    inline-block
    mr-4
    py-2;
}
 
.logo-container {
  @apply 
    flex 
    pr-4    
    border-r-2 
    border-txsecondary;
}

.text-logo {
  font-family: 'Roboto Serif', serif;
}

.title {
  @apply pl-0 self-center leading-none text-lg;
}

.topnavbar-colapse-button {
  @apply
    cursor-pointer
    text-xl
    leading-none
    px-3
    py-1
    border border-solid border-transparent
    rounded
    bg-transparent
    block
    sm:hidden
    outline-none
    focus:outline-none
}

.topnavbar-hidden {
  @apply flex sm:flex-grow w-full sm:w-auto items-center justify-end !important;
}

.topnavbar-ul {
  @apply flex items-center sm:flex-row list-none ml-auto;
}

.topnavbar-ul-links {
  @apply 
    px-3
    py-2
    flex
    items-center
    hover:opacity-75;
}

</style>
