import sqlite3

"""
Users table definition. It's been preloaded with a few users.

CREATE TABLE "users" (
	"id"            INTEGER NOT NULL,
	"first_name"    TEXT NOT NULL,
	"last_name"	    TEXT NOT NULL,
	"role"          TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
)
"""

class AutocompleteService():
    def auto_complete_users(self, needle):
       """This function takes a string (needle) and searches through the
       haystack (users table) for matches

       params:
         - needle: string
       returns:
         - tuple consisting of:
           - res: list of dict (user rows)
           - err_code: number (http error code) or None
           - err_message: string or None

       To execute SQL queries do: c.execute(sql_statement, [params]).fetchall()

       """
       conn = sqlite3.connect('users.db')
       c = conn.cursor()

       # Implement your method starting here

       pass
