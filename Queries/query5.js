// Use the $and operator to find all players who hit more than 20 home runs in 2015 and struck out more than 100 times in 2015.
db.player.find({
    $and: [
        { "hitterStats.year.2015.hr": { $gt: 20 } },
        { "hitterStats.year.2015.strikeouts": { $gt: 100 } }
    ]
})
