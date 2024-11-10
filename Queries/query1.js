// calculates average ERA for each team in 2015 and sorts them in ascending order
db.player.aggregate([
    { $unwind: "$pitcherStats.year" },
    { $match: { "pitcherStats.year.2015": { $exists: true } } },
    { $lookup: {
        from: "team",
        localField: "team.team_id",
        foreignField: "team_id",
        as: "teamInfo"
    }},
    { $unwind: "$teamInfo" },
    { $group: {
        _id: "$team.team_id",
        teamName: { $first: "$teamInfo.name" },
        averageERA: { $avg: "$pitcherStats.year.2015.era" }
    }},
    { $sort: { averageERA: 1 } }
])
