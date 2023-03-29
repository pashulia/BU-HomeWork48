<template>
    <div>
        <h3>Post/id: {{ $route.params.id }}</h3>
        <post-page :post="$store.state.post"/>
    </div>
</template>

<script>
export default {
    post: {
        type: Object,
        required: true
    }
}
</script>

<style>

</style>