# Star Wars Code Challenge

## by Ben Mangold

A Full Stack App to learn about Star Wars Characters

git and node are required, see `INSTALL.md` for detailed instructions

# Clone Repo and Download Dependencies

```bash
git clone https://github.com/benmangold/star-wars-challenge.git

cd star-wars-challenge

npm i
```

# Development

```bash
npm run react-dev

# in separate terminal:
npm run server-dev
```

# Production

Using Node.js
```
npm run start
```

Using pm2

```
npm install pm2@latest -g
npm run react
pm2 start server.js
```
