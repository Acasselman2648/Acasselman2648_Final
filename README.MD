Description:
    This is a Node.js web API that reads and writes from a json file. The API handles a collection of people, accessable through endpoints. The supported endpoints are:
        Get all (GET: /people)
        Get by ID (GET: /people/id)
        Create new person (POST: /people)
        Update existing person (PUT: /people/id)
        Delete existing person (DELETE: /people/id)

Dependencies:
    Terminal command: npm install express
    To run: Terminal command: node server.js

Example useage of endpoints:
    Get all (GET: /people)
        [
            {
                "id": 1,
                "firstName": "Jackie",
                "lastName": "Chan",
                "age": "70"
            },
            {
                "id": 2,
                "firstName": "Chuck",
                "lastName": "Norris",
                "age": "84"
            },
             ...
        ]
    Get by ID (GET: /people/2)
        {
        "id": 2,
        "firstName": "Chuck",
        "lastName": "Norris",
        "age": "84"
        }
    Create new person (POST: /people)
        {
        "firstName": "Denzel",
        "lastName": "Washington",
        "age": "69"
        }
    Update existing person (PUT: /people/5)
        {
        "firstName": "Denzel",
        "lastName": "Washington",
        "age": "70"
        }
    Delete existing person (DELETE: /people/5)
        {
        "id": 6,
        "firstName": "Denzel",
        "lastName": "Washington",
        "age": "69"
        }