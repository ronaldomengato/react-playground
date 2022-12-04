# Pokedex project

## How to run
You'll need docker desktop. Follow this:

1. Clone this repo
2. `cd native-pokedex`
3. `docker build -t native-pokedex .`
4. `docker run -d -p 80:80 --name pokedex01 native-pokedex`
5. Access http://localhost/