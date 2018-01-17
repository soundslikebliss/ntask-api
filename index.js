import express from "express";
import consign from "consign";


const app = express();


//load modules
consign()
	.include('libs/db_config.js')
	.then('db.js')
	.then('libs/middlewares.js')
	.then('routes')
	.then('libs/boot.js')
	.into(app);
