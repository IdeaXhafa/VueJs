<template>
    <div>
        <h1>Welcome back, Admin !</h1>
    </div>
    <router-link to="/all-users">
        <button class="btn btn-primary">View All Users</button>
    </router-link>
    <router-link to="/create-user">
        <button class="btn btn-secondary">Create a User</button>
    </router-link>
</template>

<script>

export default ({
    name: 'dash',
})
</script>