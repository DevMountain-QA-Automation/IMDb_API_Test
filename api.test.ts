// For API collection go to the following link: https://www.getpostman.com/collections/6ad00d81a90d8da106e1
// Enter the following address in the postman GET request input field: https://imdb-api.com/en/API/SearchTitle/k_xp78bur3/Black Widow
// After yoiu enter adress into GET input field copy and past the code below in the "Tests" tab and click the "Send" button

pm.test("Status code is 200", () => { 
    pm.response.to.have.status(200); 
    });

pm.test("Results contains movie name (Black Widow)", () => {
    var jsonDoc = pm.response.json()
    var movieFound = []
    jsonDoc.results.forEach( pos => {
        if(pos.title === "Black Widow"){
            movieFound.push(pos.title)
        }
    })
    pm.expect(movieFound).to.not.equal(0)        
})

pm.test("Results contains movie release date (2021)", () => {
    var jsonDoc = pm.response.json()
    var movieFound = []
    jsonDoc.results.forEach( pos => {
        if(pos.description === "2021"){
            movieFound.push(pos.title)
        }
    })
    pm.expect(movieFound).to.not.equal(0)        
})
