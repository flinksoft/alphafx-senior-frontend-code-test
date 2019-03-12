<template>
    <div class="columns team-info">

        <div class="column is-full">
            <div class="columns">
                <div class="column is-full">
                    Showing details for {{ team.name }}
                </div>
            </div>

            <div class="columns">
                <div class="column is-full">
                    <img v-bind:src="team.logo_url"/>
                </div>
            </div>
            
            <div class="columns">
                <div class="column is-full">
                    <h2 class="title is-2">Players</h2>
                    <TeamPlayers v-bind:team-id="this.id" v-bind:team-name="team.name"/>
                </div>
            </div>

            <div class="columns">
                <div class="column is-full">
                    <h2 class="title is-2">Games</h2>
                    <TeamGames v-bind:team-id="this.id" v-bind:team-name="team.name"/>
                </div>
            </div>
            
            <div class="columns">
                <div class="column is-full">
                    <router-link class="button is-primary" :to="{ name: 'add-team-game', params: { id: team.id, teamName: team.name } }">Add Game</router-link> 
                </div>
            </div>
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
        id: String,
        team: Object
    },
    mounted() {
        this.team = this.$route.params.team;
    }
}

</script>

<style>

</style>