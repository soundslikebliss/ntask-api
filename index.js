import express from "express";
import consign from "consign";

const PORT = 3000;
const app = express();


//formatting for json output
app.set('json spaces', 4);


//load routes (consign module)
consign()
	.include("routes")
	.into(app);


app.listen(PORT, () => console.log('NTask API - Port ${PORT}'));