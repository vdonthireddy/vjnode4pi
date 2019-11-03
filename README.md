Let's create a simple nodejs app and deploy it in AKS

We have initiated the npm in this folder, which created a number of files

```sh
$ npm install
```

we created an app.js which is the main javascript file that has the code to start the web server and take a request at "/"

let's start the web server by running "npm start"

```sh
$ npm start
```

Let's open a web browser to test our app

It's working and avalable at localhost:80

if you want to test it in a terminal, you can do...

```sh
$ curl http://localhost:8080
$ curl http://localhost:8080/index
```

we are done with the application

Let's store our application in github

I will create a new repository in my personal github

IMPORTANT: You need to create your own git account and you may need to login to your github account from your terminal before you are able to run your commands.

```sh
$ git init
$ git add .
$ git commit -m "first commit..."
$ git remote add origin <your git repo>
$ git push -u origin master
```

You have seen all the files and folders stored in the git. Let's do one final git commit. After the first time, you can just use the following commands for any further git pushes

```sh
$ git add .
$ git commit -m "<your comments>"
$ git push
```

Let's create a docker image of the nodejs app we just created.

You need to make sure you create an account in the hub.docker.com to store your images (just like the way you store your source code in the github)

you can go to docker.com to install docker on your machine.

I cancelled the download because, I have already downloaded docker and installed it on my machine.

You can just follow the instructions

after you install, and created account in hub.docker.com, you can store the images.

first, just like the way you create a repository in git, you need to create a repo in the hub.docker.com -> let's see how we do it.

in this folder, let's create a file called Dockerfile and build the image in the next video

we have created a Dockerfile. In this file, we provided instructions to docker engine how to create a new image from our source code.

Let's create the docker image using the Dockerfile (please note that there is no file extension for this file)

```sh
$ docker build -t <docker image name> .
```

Let's check to see if the image is created by running the following command

```sh
$ docker images
```

Let's test this local docker image by creating an instance of it and running it.

following command will show us the running instances. as you see there are no running instances

```sh
$ docker ps
```

We have done a port binding between the port where the webserver is running and port that I (as a user) will pass through my client (e.g. browser)

In this video, let's store our local docker image into the docker hub

we will run the following commands

```sh
$ docker login
$ docker tag <local docker image name> <your docker hub repository>:<tag name>
$ docker push <your docker hub repository>:<tag name>
```

we tagged the local image with the docker repo in our hub

and ran the command (docker push) to store it in the hub

Let's go back to browser and see if we have any images with 1.0 tag available in the hub
