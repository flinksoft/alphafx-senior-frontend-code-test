<template>

<div class="player-history columns">

    <div class="column is-full">
        <div class="card">
            <div class="card-image">
                <img v-bind:src="player.flag_url"/>
            </div>
            <div class="card-content">
                <div class="media-content">
                    <p class="title is-4">{{ player.name }}</p>
                    <p class="subtitle is-6"> {{ player.age}}</p>
                    <p class="subtitle is-6"> {{ player.nationality}}</p>
                    <p class="subtitle is-6"> {{ player.position}}</p>
                    <p class="subtitle is-6"> £{{ parseFloat(player.value).toFixed(2)}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="player-club-history column is-full">
        <div v-for="club in player.history">
            apps: {{ club.apps }}, goals: {{ club.goals }}
        </div>
    </div>
</div>

</template>

<script>

import axios from 'axios'


export default {
    name: 'PlayerHistory',
    props: {
        name: String,
        teamId: String
    },
    data: function () {
        return {
            player: {}
        }
    },
    mounted () {
        var headers = {
            'Content-Type': 'application/json'
        }

        axios.post('https://alphafx-code-test-api.herokuapp.com/api/teams/players',
        {
            "name": this.name
        }, {headers: headers})
        .then((response) => {
            this.player = response.data.data[0];
        })
    }

}

</script>

<style></style>