<template>
    <div>
        <button @click="$router.push('/')">Main</button>
        <button @click="$router.push('/posts')">Wanted list</button>
        <button v-if=" $store.state.user !== '' " @click="$store.commit('logout'), $router.go(0)">Logout</button>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style>

</style>