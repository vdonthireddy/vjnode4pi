npm install 
git add .
git commit -m 'code changed'
git push
docker rmi -f vjnode4pi
docker build -t vjnode4pi .
docker tag vjnode4pi vdonthireddy/vjnode4pi:5.0
docker push vdonthireddy/vjnode4pi:5.0
docker run -p:8081:8080 -d vdonthireddy/vjnode4pi:5.0
