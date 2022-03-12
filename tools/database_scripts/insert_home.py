import sqlite3

FILENAME = '../../public/data/data.db'
TABLENAME = 'home'
INPUT_FILENAME = 'home.csv'
connection_links = 3

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def insert_values(data_tuple):
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()

    insert_query = "INSERT INTO " + TABLENAME + "(name, project1, project2, summary, profile_img, "
    for i in range(connection_links):
        insert_query += "connection_img" + str(i+1) + ", "
        if i == connection_links-1:
            insert_query += "connection_link"  + str(i+1) + ")"
        else:
            insert_query += "connection_link"  + str(i+1) + ", "
    insert_query += " VALUES (?,?,?,?,?,"
    for i in range(connection_links):
        if i == connection_links-1:
            insert_query += "?,?)"
        else:
            insert_query += "?,?,"

    # print(insert_query)
    data_tuple = list(data_tuple)

    # print(data_tuple)
    # below is unique to project data
    data_tuple[4] = convertToBinaryData(data_tuple[4])
    for i in range(0, connection_links*2, 2):
        if data_tuple[i+5]:
            data_tuple[i+5] = convertToBinaryData(data_tuple[i+5])
    # data_tuple[0] = int(data_tuple[0])
    print(len(data_tuple))


    data_tuple = tuple(data_tuple)
    print(len(data_tuple))

    # print(insert_query, data_tuple)
    cur.execute(insert_query, data_tuple)
    con.commit()
    con.close()


if __name__ == "__main__":
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
    rows = cur.fetchall()
    # print((str(rows)))

    # print(TABLENAME in rows)
    if len(rows) > 0 and str(rows).find(TABLENAME) != -1:
        # if the table exists then drop and create a new table
        cur.execute("DROP TABLE " + TABLENAME)

    
    tablevalues = """
    (
        name TEXT,
        project1 TEXT,
        project2 TEXT,
        summary TEXT,
        profile_img BLOB,
    """
    for i in range(connection_links):
        if i == 0:
            tablevalues += "    connection_img" + str(i+1) + " BLOB,\n"
        else:
            tablevalues += "        connection_img" + str(i+1) + " BLOB,\n"

        if i == connection_links-1:
            tablevalues += "        connection_link" + str(i+1) + " TEXT\n"
        else:
            tablevalues += "        connection_link" + str(i+1) + " TEXT,\n"
    tablevalues += "    )\n"

    print(tablevalues)
    print("CREATE TABLE " + TABLENAME + tablevalues)
    cur.execute("CREATE TABLE " + TABLENAME + tablevalues)
    con.commit()
    con.close()

    with open(INPUT_FILENAME, "r") as file:
        for lines in file.readlines():
            # print(lines)
            insert_values(tuple(lines.split(',')))