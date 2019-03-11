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
                            {{ player.name }}
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
        this.players = [{
            "id": "bd352bc3-6c09-4333-97f3-597de9af3b5a",
            "team_id": "00d7cb66-b3c6-4e90-8871-19b99c5c5078",
            "name": "Buddy Alphonse",
            "age": 29,
            "nationality": "Ireland",
            "flag_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/125px-Flag_of_Ireland.svg.png",
            "position": "GK",
            "history": [
                {
                    "team_id": "3097fe71-57da-4c84-8efd-33bb9bae9d21",
                    "apps": 9,
                    "goals": 15
                }
            ],
            "value": "923332"
        },
        {
            "id": "bd352bc3-6c09-4333-97f3-597de9af3b5b",
            "team_id": "00d7cb66-b3c6-4e90-8871-19b99c5c5078",
            "name": "Buddy Holly",
            "age": 29,
            "nationality": "US",
            "flag_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/125px-Flag_of_Ireland.svg.png",
            "position": "GK",
            "history": [
                {
                    "team_id": "3097fe71-57da-4c84-8efd-33bb9bae9d21",
                    "apps": 9,
                    "goals": 15
                }
            ],
            "value": "1000000"
        }]
    }

}


</script>

<style>

</style>