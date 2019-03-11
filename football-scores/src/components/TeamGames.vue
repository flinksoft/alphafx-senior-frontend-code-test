<template>
    <div class="columns team-games">
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
    mounted() {
        this.games = [{
            "id": "901eb39d-082c-42e8-a07c-6ba8d71cc32b",
            "date": "2018-08-04T07:41:55.172Z",
            "team_one_id": "59d6e27e-685c-48a3-8d31-c546efcda0f0",
            "team_one_goals": 2,
            "team_two_goals": 4
        },
        {
            "id": "901eb39d-082c-42e8-a07c-6ba8d71cc32k",
            "date": "2018-08-04T07:41:55.172Z",
            "team_one_id": "59d6e27e-685c-48a3-8d31-c546efcda0f0",
            "team_one_goals": 1,
            "team_two_goals": 2
        }];
    }

}

</script>


<style>
</style>