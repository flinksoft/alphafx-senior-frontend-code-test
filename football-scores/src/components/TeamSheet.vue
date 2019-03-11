<template>
    <div class="team-sheet columns">
        <div class="column list is-hoverable">
            <div class="list-item" v-for="team in teams" v-bind:key="team.id">
                <router-link :to="{ name: 'team-info', params: { id: team.id, team: team }}">{{team.name}}</router-link>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'TeamSheet',
    data: function () {
        return {
            teams: [{
                id: '3097fe71-57da-4c84-8efd-33bb9bae9d21',
                name: 'Benfica'
            },
            {
                id: 2,
                name: 'Chelsea FC'
            }]
        }
    }
}

</script>


<style scoped lang="scss">

</style>