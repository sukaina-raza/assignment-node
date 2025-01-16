import express from 'express'
import ejs from 'ejs';
const app=express();
const port=4000;
app.set('view engine','ejs');

app.get('/', function(req, res) {
    var mascots = [
      { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
      { name: 'Tux', organization: "Linux", birth_year: 1996},
      { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
  
    res.render('home', {
      mascots: mascots,
      tagline: tagline
    });
  });
// app.get("/",(req,res)=>{
//     res.render('head')
// });
// app.get("/home",(req,res)=>{
//     res.render('head')
// });
app.get('/home', function(req, res) {
    res.render('home');
  });

app.listen(port)