import sqlite3

FILENAME = '../../public/data/data.db'
TABLENAME = 'skill'
INPUT_FILENAME = 'skill.csv'

def insert_values():
    pass


if __name__ == '__main__':
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
    rows = cur.fetchall()
    # print((str(rows)))

    # print(TABLENAME in rows)
    if len(rows) > 0 and str(rows).find(TABLENAME):
        # if the table exists then drop and create a new table
        cur.execute("DROP TABLE " + TABLENAME)
    
    # resume data is a list of resumes that can be used for diffrent 

    tablevalues = """
    (
        myindex INTEGER PRIMARY KEY,
        resume_doc BLOB
    )
    """

    cur.execute("CREATE TABLE " + TABLENAME + tablevalues)
    con.commit()
    con.close()

    with open(INPUT_FILENAME, "r") as file:
        for lines in file.readlines():
            insert_values(tuple(lines.split(',')))