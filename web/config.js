let config = {}

// Postgres Config
config.pg_host = 'localhost'
config.pg_port = 5432
config.pg_db = 'esports_stats'
config.pg_timeout = 300

config.site = {}
config.site.title = 'EsportsTracker'

config.api = {}
config.api.days = [3, 7, 30, 90]

module.exports = config
