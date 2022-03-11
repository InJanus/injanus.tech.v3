import sqlite3

FILENAME = '../../public/data/data.db'
TABLENAME = 'experience'
INPUT_FILENAME = 'experience.csv'

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def insert_values(data_tuple):
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()
    
    # (myindex, company, start_date, end_date, img, title, function, duties)
    insert_query = "INSERT INTO " + TABLENAME + "(myindex, company, start_date, end_date, img, title, function, duties) VALUES (?,?,?,?,?,?,?,?)"
    data_tuple = list(data_tuple)
    new_img = convertToBinaryData(data_tuple[4])
    data_tuple[4] = new_img
    data_tuple[0] = int(data_tuple[0])
    data_tuple = tuple(data_tuple)
    # print(insert_query, data_tuple)
    cur.execute(insert_query, data_tuple)
    con.commit()
    con.close()

if __name__ == '__main__':
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
    rows = cur.fetchall()
    # print(rows)

    if len(rows) > 0 or TABLENAME in rows[0]:
        # if the table exists then drop and create a new table
        cur.execute("DROP TABLE " + TABLENAME)
    
    cur.execute("CREATE TABLE " + TABLENAME + "(myindex INTEGER PRIMARY KEY,company TEXT,start_date TEXT,end_date TEXT,img BLOB,title TEXT,function TEXT,duties TEXT)")
    con.commit()
    con.close()

    with open(INPUT_FILENAME, "r") as file:
        for lines in file.readlines():
            insert_values(tuple(lines.split(',')))