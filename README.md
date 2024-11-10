# BaseballDB-with-Mongo

## How to Run it

* Install files from GitHub and run
	```shell
	tar -xvf BaseballDB.dump
	mongorestore --uri="mongodb://localhost:27017" --db=baseballStats /dump/baseballStats
	```
* Run
	```shell
	mongosh "mongodb://localhost:27017/baseballStats" < queries/filename.js
	```
	For each query, replace `filename` with the query file you want to run.

## Queries

* **Query 1**: Calculate the average ERA for each team in 2015 and sort them in ascending order.
	* Run **query1.js**

* **Query 2**: Use the `$or` operator to find all players who are either catchers or designated hitters as their first position.
	* Run **query2.js**

* **Query 3**: Count the number of players on `team_id 30` (San Francisco Giants).
	* Run **query3.js**

* **Query 4**: Create a new field called `active` and set it to `true` for all players, then find the player with `player_id 10` and flip the value of the `active` field.
	* Run **query4.js**

* **Query 5**: Use the `$and` operator to find all players who hit more than 20 home runs in 2015 and struck out more than 100 times in 2015.
	* Run **query5.js**

#### Disclaimer
I used ChatGPT to assist with parts of this assignment. It was very useful for coming up with query ideas and frameworks, but often got specifics wrong and generated queries that weren't fully functioning, so I had to modify them myself. It also helped with shell syntax for manipulating my database.
