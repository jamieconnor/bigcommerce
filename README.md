# Big Commerce Practical

Practical component of Big Commerce Interview

## Getting Started

These instructions will get you a copy of the project up on a docker container and allow you to run tests.

```
yarn install
yarn build
docker build -t nginx .
docker run --name whatsforlunch -d -p 8000:80 nginx
yarn cypress run 
```