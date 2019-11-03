npm install 
git add .
git commit -m 'code changed'
git push
docker rmi -f vjnode4pi
docker build -t vjnode4pi .
docker tag vjnode vdonthireddy/vjnode4pi:5.0
docker push vdonthireddy/vjnode4pi:5.0
