// creates a new field called active and sets it to true for all players
db.player.updateMany(
    {},
    { $set: { active: true } }
  );

// finds the player with player_id 10 and flips the value of the active field
db.player.updateOne(
    { "player_id": 10 },
    [
      { $set: { "active": { $eq: ["$active", false] } } }
    ]
  );
  
