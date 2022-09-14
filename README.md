# NewGen-Typing
Project to test the accuracy and speed of blind printing 
________________________________________________________
### Description
The site is in the style of a messenger.

You can take the test both in Russian and in English. The language selection is made through the gear in the upper right corner. 

After you press start, the site will send you the text that you need to write without looking at the keyboard, time reporting is from the moment when you typed correctly at least 1 character.

### Running with a script

To make it easy to start the project I wrote a script for Linux, which will build and run the project, to do this, run the script from the project directory as follows:
```
bash buildAndRun.sh
```
The script starts the project on port 3000 or, if it is busy, displays a link to the project in the terminal

### Running with a docker-compose

Two scripts were written for docker:
1) Stops all containers, images and deletes them.
```
bash ./script/stop_dockers.sh
```
2) Runs the first script and rebuilds everything.
```
bash rebuild.sh
```
To avoid deleting all the images, run the project manually like this:
```
docker-compose up -d --build
```

docker will launch a project on the 3000 port
