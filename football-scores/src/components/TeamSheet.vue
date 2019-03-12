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

import axios from 'axios'

export default {
    name: 'TeamSheet',
    data: function () {
        return {
            teams: []
        }
    },
    mounted() {
        var headers = {
            'Content-Type': 'application/json'
        }

        axios.post('https://alphafx-code-test-api.herokuapp.com/api/teams', null, {headers: headers})
        .then((response) => {
            this.teams = response.data.data;
        })
    }
}

</script>


<style scoped lang="scss">

</style>