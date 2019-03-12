<template>

<div class="add-team-game columns">
    <h2>Add game to {{ this.teamName }}</h2>
    <div class="column is-fullwidth">
        <form v-on:submit="onSubmit">
            <div class="field">
                <label class="label">Team One Goals</label>
                <input class="input" type="number" v-model="teamOneGoals"/>
            </div>
            
            <div class="field">
                <label class="label">Team Two Goals</label>
                <input class="input" type="number" v-model="teamTwoGoals"/>
            </div>

            <div class="field">
                <label class="label">Date</label>
                <input class="input" type="date" v-model="date"/>
            </div>

            <button class="button is-primary" type="submut">Submit</button>
        </form>
    </div>

</div>

</template>


<script>

export default {
    name: 'AddTeamGame',
    data: function () {
        return {
            teamId: '',
            teamName: '',
            teamOneGoals: 0,
            teamTwoGoals: 0,
            date: new Date()
        }
    },
    methods: {
        onSubmit: () => {
            axios.post('https://alphafx-code-test-api.herokuapp.com/api/teams/games/new', {
                date: this.date,
                team_one_id: this.teamId,
                team_one_goals: this.teamOneGoals,
                team_two_goals: this.teamTwoGoals
            }, {headers: headers})
            .then((response) => {
                this.teams = response.data.data;
                this.$router.push("/team/"+this.teamId);
            })
        }
    },
    mounted() {
        this.teamId = this.$route.params.id;
        this.teamName = this.$route.params.teamName;
    }
}

</script>


<style>
</style>

