<template>
	<div>
        <img src="../assets/logo.png" alt="">
        <h2 class="title-error">ИЗВИНИТЕ, ЗАПРАШИВАЕМАЯ СТРАНИЦА НЕ НАЙДЕНА</h2>
        <div class="title-description">
            <p>Возможно она была удалена или даже никогда не существовала.</p>
            <p>Чтобы найти нужную информацию, рукомендуем перйти</p>
            <p><router-link :to="{name: 'builtInEditor'}">на главную страницу</router-link></p>
        </div>
	</div>
</template>

<script>
export default {
  name: 'NavigationMenu',
}
</script>
<style scoped>
    .title-error {
        font-size: 20px;
    }
    .title-description p{
        font-size: 16px;
        padding-top: 10px;
        color: black;
    }
</style>
