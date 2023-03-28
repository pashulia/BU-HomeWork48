<template>
    <div>
        <h3>Post/id: {{ $route.params.id }}</h3>
            <p>{{$store.state.post}}</p>
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