var league = {

  // Array, containing teams
  teamList: [],

  /* Function that accepts a team name as a parameter
   Creates a new object with name property set to team name, 
   and with wins/losses/ties/points properties, all set to 0.
   Adds that object, representing a team, to the team list
  */
  addTeam: function(teamName) {
    var newTeam = {
      wins: 0,
      loses: 0,
      ties: 0,
      points: 0,
      name: teamName
    }

    league.teamList.push(newTeam)
  },

  /* Function that accepts a team name as a parameter
    If a team with that name exists in the team list,
    return that team object.

    If not, return false
  */
  findTeam: function(teamName) {
    for (var index = 0; index < league.teamList.length; index++) {
      var team = league.teamList[index]

      if (team.name === teamName) {
        return team
      }
      else {
        return false
      }
    }

  },

  /* Function that accepts two team names as parameters
    If _either_ team name isn't valid, return false.
    
    The winning team (first param) should have it's win property += 1
    and its points property += 3 (soccer has 3 pts for a win, 1 for a tie)

    The losing team should have it's loss property += 1

    Then return true
  */
  addResult: function(winningTeam, losingTeam) {
    var winner = league.findTeam(winningTeam)
    var loser = league.findTeam(winningTeam)

    if (winner === false && loser === false) {
      return false
    }

    winner.wins += 1
    winner.points += 2

    loser.losses += 1

    return true
  },

  /* Function that accepts two team names as parameters
    If _either_ team name isn't valid, return false.
    
    Both teams should have their ties property += 1
    and its points property += 1

    Then return true
  */
  addDraw: function(firstTeam, secondTeam) {
    var first = league.findTeam(firstTeam)
    var second = league.findTeam(secondTeam)

    if (first || second === false) {
      return false
    }

    first.ties + 1
    first.points += 1
    second.ties += 1
    second.points += 1

    return true
  },

  /* Function that returns an array of all teams, 
    all represented by strings in the following format:
    "Team Name | Wins-Losses-Ties | Points"

    (implemented: "Kyle's Team | 10-5-3 | 33")

    Teams are sorted (descending) by points.
  */
  standings: function() {

    /* This is how sorting is done, by the way..
      We'll spend a decent amount of time explaining this
      next week. There's no bugs in the next three lines.
    */
    league.teamList.sort(function(a, b){
      return a.points < b.points
    })

    /* Okay, the bug(s?) start from here on. */

    var formattedTeams = []

    for (var index = 0; index < league.teamList; index++) {
      var t = league.teamList[index]

      var formattedString = t.name + " | " + t.wins + "-" + t.losses + "-" + t.draws + " | " + t.points

      formattedTeams.push(formattedString)
    }

  }

}







// This space intentionally left blank





/*
  This function is used by the tests to reset the 
  league's properties to it's initial state.
  Don't touch it! I promise there's no bugs here. -KH
*/
var resetLeague = function() {
  league.teamList = []
}