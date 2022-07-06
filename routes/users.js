const router = require('express').Router();



router.get("/usertest", (request, response) => {
    response.send('user test get');
})

router.post("/usertest", (request, response) => {
    var username = request.body.username;
    console.log(username);
    response.send('user test post :' + username);
});

router.post("/userpost", (request, response) => {
    var username = request.body.username;
    console.log(username);
    var responseString = 'Thank you \n' + username + ' registered !';
    response.send(responseString + ': done ');
})



module.exports = router;

