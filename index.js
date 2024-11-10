// Player collection schema
{
    player_id: 1,
    name: "John Doe",
    age: 25,
    jersey: 1,
    dob: "1995-01-01",
    height: "6'2",
    weight: 200,
    bats: "R",
    throws: "R",
    debut: "2015-01-01",
    team: {
        team_id: 1,
        name: "Red Sox",
    }
    position: {
        position_id: 1,
        name: "Pitcher",
    }
    pitcherStats: {
        year: {
            2015: {
                games: 20,
                wins: 5,
                losses: 2,
                innings: 100,
                era: 3.00,
                whip: 1.25,
                fip: 3.25,
                bbk: 2.5,
                strikeouts: 50
            },
            2016: {
                games: 30,
                wins: 10,
                losses: 5,
                innings: 150,
                era: 2.75,
                whip: 1.15,
                fip: 3.00,
                bbk: 3.0,
                strikeouts: 100
            }
        }
    }
    hitterStats: {
        year: {
            2015: {
                games: 100,
                avg: .300,
                obp: .350,
                slg: .500,
                ops: .850,
                hr: 20,
                rbi: 80,
                runs: 100,
                bbk: 1.5,
                strikeouts: 100
            },
            2016: {
                games: 150,
                avg: .325,
                obp: .375,
                slg: .550,
                ops: .925,
                hr: 30,
                rbi: 100,
                runs: 120,
                bbk: 1.75,
                strikeouts: 125
            }
        }
    }
    active: true
}

// Team collection schema
{
    team_id: 1,
    name: "Red Sox",
    city: "Boston",
    state: "MA",
    divison: {
        division_id: 1,
        name: "AL East",
        league: {
            league_id: 1,
            name: "American League",
            abbreviation: "AL"
        }
    }
}

// Position collection schema
{
    position_id: 1,
    name: "Pitcher",
    abbreviation: "P",
    type: "Pitcher",
    number: 1
}