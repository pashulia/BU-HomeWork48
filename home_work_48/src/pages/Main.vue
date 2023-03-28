<template>
    <h1>Welcome biunty hunter!</h1>
    <div v-if=" $store.state.user === '' ">
        <login-form @create="login"/>
    </div>
    <div v-else>Welcomback  {{ $store.state.user }}</div>
</template>

<script>
export default {}
</script>

<style>

</style>