import * as express from 'express';
import { User } from '../common'
import { UserController } from "../controllers/userscontroller"
import * as sessions from 'express-session'
//import * as sessions from './sessiontype'
const app = express();


var sess;
const oneDay = 1000 * 60 * 60 * 24;


app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(express.static(__dirname+'/www'));

//here
app.get("/signin", (req, res) => {
    
    const email = req.query["email"].toString();
    const pass = req.query["pass"].toString();
    sess = req.session;
    sess.email = email;
    UserController.getInstance().signin(email, pass)
    .then(
        (value:any) => {
            if(value.recordsets[0][0].Valido!=0){
                 
            }
            res.send(value.recordsets[0][0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});


app.get("/login", (req, res) => {
    
    const email = req.query["email"].toString();
    const pass = req.query["pass"].toString();
    sess = req.session;
    sess.email = email;
    UserController.getInstance().login(email, pass)
    .then(
        (value:any) => {
            if(value.recordsets[0][0].Valido!=0){
                 
            }
            res.send(value.recordsets[0][0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});
app.get("/check", (req, res) => {
    sess = req.session;
    res.send(sess.email);
});
app.get("/registerAutobusera", (req, res) => {
    const owner = req.query["owner"].toString();
    const company = req.query["company"].toString();
    UserController.getInstance().registerAutobusera(owner, company)
    .then(
        (value:any) => {
            res.send(value.recordsets[0][0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});
app.get("/post", (req, res) => {
    const time = req.query["time"].toString();
    console.log(time);
    const email = req.query["email"].toString();
    UserController.getInstance().newPost(time, email)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});
app.get("/habit", (req, res) => {
    const longitude = Number(req.query["lon"]);
    const latitude = Number(req.query["lat"]);
    const email = req.query["email"].toString();
    const title = req.query["title"].toString();
    const fecha = req.query["fecha"].toString();
    
    
    UserController.getInstance().newhabit(longitude, latitude, email, title, fecha)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});
app.get("/index", (req, res) => {
    res.sendFile('www/index.html',{root:__dirname})
});
app.get("/mainadmin", (req, res) => {
    res.sendFile('www/mainAdministrador.html',{root:__dirname})

});
app.get("/newautobusera", (req, res) => {
    res.sendFile('www/insertAutobusera.html',{root:__dirname})

});
app.get("/mainbus", (req, res) => {
    res.sendFile('www/mainAutobusero.html',{root:__dirname})

});
app.get("/newdriver", (req, res) => {
    res.sendFile('www/insertdriver.html',{root:__dirname})

});
app.get("/newroute", (req, res) => {
    res.sendFile('www/insertroute.html',{root:__dirname})

});
/*
app.get("/plansperuser", (req, res) => {
    const user = req.query["user"].toString();
    console.log(user)
    UserController.getInstance().PlansPerUser(user)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});

app.get("/FriendList", (req, res) => {
    const user = req.query["user"].toString();
    console.log(user)
    UserController.getInstance().FriendList(user)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});

app.get("/RankingPerMonth", (req, res) => {
    const user = req.query["player"].toString();
    const month = Number(req.query["month"]);
    const gameMode = req.query["gamemode"].toString();
    const ano = req.query["ano"].toString();
    
    UserController.getInstance().RatingPerMonth(gameMode, month, user, ano)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});

app.get("/PartidasPorMes", (req, res) => {
    const user = req.query["player"].toString();
    const month = Number(req.query["month"]);
    const gameMode = req.query["gamemode"].toString();
    const ano = req.query["ano"].toString();
    
    UserController.getInstance().MatchesPerMonth(gameMode, month, user, ano)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});

app.get("/MatchTracing", (req, res) => {
    const nickWhite = req.query["nickWhite"].toString();
    const nickBlack = req.query["nickBlack"].toString();
    const time = req.query["timestamp"].toString();
    
    UserController.getInstance().MatchTracing(nickBlack, nickWhite, time)
    .then(
        (value:any) => {
            res.json(value[0]);
        }
    ).catch((err) => {console.log(err);
        res.json(err)});
});

*/
export { app as kindnessrouter };