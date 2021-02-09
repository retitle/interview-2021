# import execute from sql

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

       To execute SQL queries do: execute(sql_statement, [params])
       """
       pass
