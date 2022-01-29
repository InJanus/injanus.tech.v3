import sqlite3

FILENAME = '../../public/data/data.db'
TABLENAME = 'project'
INPUT_FILENAME = 'project.csv'

# to run, first fill out desired project table with 20 values each in the same order as the tabe order below

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def insert_values(data_tuple):
    con = sqlite3.connect(FILENAME)
    cur = con.cursor()

    insert_query = "INSERT INTO " + TABLENAME + "(myindex, project_name, date, title, skills, discription, learned, links, img1, img2, img3, img4, img5, img6, des1, des2, des3, des4, des5, des6) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    data_tuple = list(data_tuple)

    # below is unique to project data
    for i in range(6):
        if data_tuple[i+8]:
            data_tuple[i+8] = convertToBinaryData(data_tuple[i+8])
    data_tuple[0] = int(data_tuple[0])

    data_tuple = tuple(data_tuple)
    print(insert_query, data_tuple)
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
    
    # thigs this needs
    # index - number of the index, required to fill out
    # project_name - what the project is viewed as to me
    # project_date - general date when the project was done
    # img1 - img6 - 6 to 0 images of the project
    # des1 - des6 - 6 to 0 discriptions paralell to the images
    # project_title - this is the offical title on top of the page
    # skills - general list of skills that was used for the project
    # discription - detailed discription of the project
    # learned - what did i learn from the project
    # related links - simicolon seprated list of diffrent links with a project

    # the idea of storing related files into the website would use a lot of data
    # instead of storing files publicly i could store it on my own git server for projects
    # that is a big leap tho, for now files will be given out on request

    tablevalues = """
    (
        myindex INTEGER PRIMARY KEY,
        project_name TEXT,
        date TEXT,
        title TEXT,
        skills TEXT,
        discription TEXT,
        learned TEXT,
        links TEXT,
        img1 BLOB,
        img2 BLOB,
        img3 BLOB,
        img4 BLOB,
        img5 BLOB,
        img6 BLOB,
        des1 TEXT,
        des2 TEXT,
        des3 TEXT,
        des4 TEXT,
        des5 TEXT,
        des6 TEXT
    )
    """

    cur.execute("CREATE TABLE " + TABLENAME + tablevalues)
    con.commit()
    con.close()

    with open(INPUT_FILENAME, "r") as file:
        for lines in file.readlines():
            insert_values(tuple(lines.split(',')))