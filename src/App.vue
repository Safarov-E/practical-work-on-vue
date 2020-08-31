<template>
  <div id="app">
    <NavigationMenu />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'

export default {
  name: 'App',
  components: {
    NavigationMenu
  }
}
</script>

<style>
.fade-enter {
            
        }
        .fade-enter-active {
            animation: slideIn 0.5s;
        }
        .fade-enter-to {
            
        }
        .fade-leave {
            
        }
        .fade-leave-active {
            animation: slideOut 0.5s;
        }
        .fade-leave-to {
            
        }
        @keyframes slideIn {
            from{transform: translateX(-100vh);}
            to{transform: translateX(0px);}
        }
        @keyframes slideOut {
            from{transform: translateX(0px);}
            to{transform: translateX(-100vh);}
        }
</style>
