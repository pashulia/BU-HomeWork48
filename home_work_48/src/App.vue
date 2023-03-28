<template>
    <button @click="fetchPosts">Update Posts</button>
    <div v-if="user === ''">
        <login-form @create="login"/>
    </div>
    <post-list 
        class="post_list"
        v-else
        :posts="posts"
        @remove="deletePost"
    />
</template>

<script>
import axios from 'axios';

import LoginForm from './components/LoginForm.vue';

export default {
    data() {
        return {
            posts: [],
            id: 0,
            user: ''
        };
    },
    methods: {
        updateMessage(eventData) {
            this.message = eventData; 
        },
        deletePost(post) {
            this.posts = this.posts.filter(p => p.uid !== post.uid);
        },
        login(user) {
            this.user = user;
            this.user.name
            console.log(user);
        },
        async fetchPosts() {
            const responce = await axios.get("https://api.fbi.gov/wanted/v1/list");
            console.log(responce.data.items.filter(p => p.reward_text !== null));
            this.posts = responce.data.items.filter(p => p.reward_text !== null);
            this.id = this.posts.length;
        }
    },
    mounted() {
        this.fetchPosts()
    }
}
</script>

<style>
    
</style>
