[![Build Status](https://travis-ci.org/RowanMeara/EsportsTracker.svg?branch=master)](https://travis-ci.org/RowanMeara/EsportsTracker)
# Why EsportsTracker?


The esports scene is experiencing an influx of outside investment.  Spots in brand new leagues are selling for over $20 million.  Tournament popularity and reach has never been more relevant.  However, there is no website which tracks esports viewership data across multiple streaming platforms.

Several websites track the esports scene using Twitch and make statements on the health and viewership of various esports titles, but none track viewership across other platforms.  During the past year, YouTube Gaming has gained significant market share against Twitch, especially in the realm of esports tournaments, but it has been largely ignored from an analytics perspective.  Even professional gaming and esports analytics websites like [newzoo](https://newzoo.com/insights/markets/esports/) omit YouTube Gaming, which skews their popularity rankings heavily in favor of companies that only broadcast on Twitch, such as Valve, at the expense of companies who choose to stream on both platforms, such as Riot Games.

## Architecture
The backend of EsportsTracker is built around three python services, two of which collect data from Twitch and YouTube Gaming respectively and temporarily store the data in a MongoDB instance.  The third python service aggregates the results and more permanently stores them in a PostgreSQL instance for use by the webapp.  The web application is built using Node.js and the Express framework and heavily utilizes Google Charts to present the data.



