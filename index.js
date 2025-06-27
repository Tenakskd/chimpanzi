import express from 'express';
import http from 'node:http';
import path from 'node:path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import ejs from 'ejs';
import axios from 'axios';
import miniget from 'miniget';
import ytpl from 'ytpl';
import ytsr from 'ytsr';
import bodyParser from 'body-parser';

        } else {
            res.render('../login/login.ejs', { error: 'パスワードが間違っています。もう一度お試しください。' });
        }
    }
});
