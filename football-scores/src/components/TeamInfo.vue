<template>
    <div class="columns team-info">
        Showing details for {{ team.name }}

        <div class="column is-full">
            <img v-bind:src="team.logo_url"/>
        </div>

        <div class="column is-full">
            <h2 class="title is-2">Players</h2>
            <TeamPlayers teamId="team.id"/>
        </div>
        
        <div class="column is-full">
            <h2 class="title is-2">Games</h2>
            <TeamGames teamId="team.id"/>
        </div>

        <div class="column is-full">
            <router-link class="button is-primary" :to="{ name: 'add-game' }">Add Game</router-link> 
        </div>
    </div>
</template>

<script>

import axios from 'axios'

import TeamPlayers from '@/components/TeamPlayers.vue'
import TeamGames from '@/components/TeamGames.vue'

var axiosInstance = axios.create({
  baseURL: 'https://alphafx-code-test-api.herokuapp.com/',
});

export default {
    name: 'TeamInfo',
    components: {
        TeamGames,
        TeamPlayers
    },
    props: {
        id: String
    },
    data: function () {
        return {
            team: {}
        }
    },
    mounted() {
        //axiosInstance.get(
          //  '/api/teams',
            //{
              //  team_id: this.id
            //}
        //).then(function (response) {
            this.team = {
            "id": "b349094d-d51c-48d8-bb1d-7ca4f571ea89",
            "name": "Manchester United",
            "city": "Manchester",
            "logo_url": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/220px-Manchester_United_FC_crest.svg.png",
            "founded": "1878",
            "colour": "red",
            "budget": "75000000"
        };
          //  console.log(response);
        //})
    }
}

</script>

<style>

</style>