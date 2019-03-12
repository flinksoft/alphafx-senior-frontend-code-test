<template>
    <div class="team-players columns">
        <div class="column is-full">
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="player in players" v-bind:key="player.id">
                        <td>
                            <router-link :to="{ name: 'player-history', params: { id: teamId, name: player.name }}">{{ player.name }}</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'TeamPlayers',
    props: {
        teamId: String
    },
    data: function () {
        return {
            players: []
        }
    },
    mounted () {
        var headers = {
            'Content-Type': 'application/json'
        }

        axios.post('https://alphafx-code-test-api.herokuapp.com/api/teams/players',
        {
            "team_id": this.teamId
        }, {headers: headers})
        .then((response) => {
            this.players = response.data.data;
        })
    }

}


</script>

<style>

</style>