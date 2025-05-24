docker container mongodb

docker run -d ^
  --name mongodb ^
  -p 27017:27017 ^
  -v %cd%\data:/data/db ^
  mongo
