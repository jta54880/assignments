const footballTeam = 
    {
        name: "Bonneville",
        mascot: "Lakers",
        mantra: () => "Lakers Are Great",
        opponents: [
            {
                name: "Box Elder",
                mascot: "Bees",
                topOffensiveFormations: [
                    {
                        personnel: "21",
                        formation: "Pro Z Tight Far",
                        topPlays: ["Buck Sweep", "Z Counter", "F Trap"]
                    },
                    {
                        personnel: "21",
                        formation: "Slot Z Tight Near",
                        topPlays: ["H Iso", "F Flood"]
                    }
                ],
            },
            {
                name: "Bountiful",
                mascot: "Braves",
                topOffensiveFormations: [
                    {
                        personnel: "10",
                        formation: "Trips Open Gun Away",
                        topPlays: ["Q Sweep Power", "Pap Z 9"]
                    },
                    {
                        personnel: "11",
                        formation: "Doubles Under",
                        topPlays: []
                    }
                ],
            }
        ],
        gameScores: [
            {
                opponent: "Box Elder",
                opponentScore: "13",
            },
            {
                opponent: "Bountiful",
                opponentScore: "18",
            }
        ] 
    }

/* --------------------------------------------------------------------- */    
// add myScore to each game
function addMyScore(opponent, score) {
    return footballTeam.gameScores[0].opponent === opponent ? footballTeam.gameScores       [0].myScore = score : null
        console.log(footballTeam.gameScores)
}

addMyScore("Box Elder", "22")
addMyScore("Bountiful", "21")

/* --------------------------------------------------------------------- */
// add isRival to opponents
function addRivalStatus(rival, bool) {
    return footballTeam.opponents.forEach(opponent => {
        opponent.name === rival ? opponent.isRival = true : opponent.isRival = false
        console.log(footballTeam)
    })
}

addRivalStatus("Box Elder", true)

/* --------------------------------------------------------------------- */
// add topPlays (2 plays) to Bountiful formation Doubles Under
function addPlays(foe, set, plays) {
    return footballTeam.opponents.forEach(opponent => {
        opponent.name === foe && opponent.topOffensiveFormations.forEach(teamFormation => {
            teamFormation.formation === set && teamFormation.topPlays.push(...plays)
        })
        console.log(opponent.topOffensiveFormations)
    })
}

addPlays("Bountiful", "Doubles Under", ["F Slip Screen", "Q Iso"])

/* --------------------------------------------------------------------- */
// fire school mantra
function callMantra() {
    return footballTeam.mantra()
}

console.log(callMantra())