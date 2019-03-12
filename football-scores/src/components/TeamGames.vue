<template>
    <div class="columns team-games">
        <div class="columns">
            <div class="column is-full">
                <table class="table is-fullwidth">
                    <thead>
                        <th>Date</th>
                        <th>Home</th>
                        <th>Away</th>
                    </thead>
                    <tbody>
                        <tr v-for="game in games" v-bind:key="game.id">
                            <td>
                                {{ game.date }}
                            </td>
                            <td>
                                {{ game.team_one_goals}}
                            </td>
                            <td>
                                {{ game.team_two_goals}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="columns">
            <div class="column is-full">
                Total Points: {{ totalPoints }}
            </div>
        </div>
        
    </div>
</template>

<script>

import axios from 'axios'

export default {
    nae: 'team-games',
    props: {
        teamId: String
    },
    data: function () {
        return {
            games: []
        }
    },
    computed: {
        totalPoints: function () {
            const victories = this.games.filter((g) => {
                return g.team_one_goals > g.team_two_goals
            });
            console.log('victories ' + victories.length);
            const draws = this.games.filter((g) => {
                return g.team_one_goals === g.team_two_goals
            });
            console.log('draws ' + draws.length);
            return (victories.length * 3) + draws.length;
        }
    },
    mounted() {
        var headers = {
            'Content-Type': 'application/json'
        }

        axios.post('https://alphafx-code-test-api.herokuapp.com/api/teams/games',
        {
            team_one_id: this.teamId
        }, {headers: headers})
        .then((response) => {
            this.games = response.data.data;
        })
    }

}

</script>


<style>
</style>