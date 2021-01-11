![Imgur](https://i.imgur.com/48xqpNw.png)

# Shift
Shift provides a supportive chat messaging gateway for individuals who are struggling with drug addiction. They can book a 1 to 1 session with an available therapist to discuss concerns they may have, and if necessary follow up sessions can be made.
Users will be able to use this service upon GP referral to ensure both focus and value is present within every given session.

##  Tools and Libraries used:
### Frontend
- HTML
- CSS
- JavaScript
- [Bootstrap](https://github.com/twbs/bootstrap)
- [Embedded JavaScript](https://github.com/mde/ejs)
- [FullCalendar](https://github.com/fullcalendar/fullcalendar)
- [jQuery](https://github.com/jquery/jquery)

### Backend
- [Node](https://github.com/nodejs/node), crypto
- [Express](https://github.com/expressjs/express)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Mongoose](https://github.com/Automattic/mongoose)
- [Typegoose](https://github.com/typegoose/typegoose)
- [Validator](https://github.com/validatorjs/validator.js)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [jwt](https://github.com/lcobucci/jwt)
- [socket.io](https://github.com/socketio/socket.io)
- [Feathers](https://github.com/feathersjs/feathers)

### Environment
- [dotenv](https://github.com/motdotla/dotenv)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [ESlint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Browsersync](https://github.com/BrowserSync/browser-sync)

## __Installation__
Ensure npm is ≥ version 6.14.9

Check with the following
```bash
npm -v
```

Install mongoose version 5.10.18 manually
```bash
npm i mongoose@5.10.18
# Then install the remaining dependencies
npm i
```

Rename the env file to .env and replace configurations where necessary
```
PORT=8008
MONGOCOMPASS_URI=mongodb://localhost:27017/
MONGOATLAS_URI=
JWT_SECRET=
EKEY=
ALGORITHM=aes-256-ctr
IV=
```

####  Running server
```bash
npm run dev
```