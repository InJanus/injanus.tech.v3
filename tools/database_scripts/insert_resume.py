import sqlite3

FILENAME = '../../public/data/data.db'
TABLENAME = 'resume'
INPUT_FILENAME = 'resume.csv'

# to run, first fill out desired project table with 20 values each in the same order as the tabe order below

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def insert_values(data_tuple):
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()

    insert_query = "INSERT INTO " + TABLENAME + "(resume_doc) VALUES (?)"
    data_tuple = list(data_tuple)

    # below is unique to resume data
    new_data = list()
    print(data_tuple)
    new_data.append([data_tuple[1], convertToBinaryData(data_tuple[0])])

    # print(new_data)
    data_tuple = tuple(new_data)
    # print(insert_query, data_tuple)
    cur.execute(insert_query, data_tuple)
    con.commit()
    con.close()

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