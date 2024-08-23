const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser');
const fs=require('fs')
const { resolve } = require('path');
const { reject } = require('lodash');
require('dotenv').config()
const app=express();

const jwtsecret="alnaidoqibijvjritubpwnklanc"
const bcryptSalt=bcrypt.genSaltSync(10);

app.listen(4000)