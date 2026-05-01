FROM node:22-alpine

#Working Dir 
WORKDIR /app

#Copy the package.json and the package-lock.json to the conteatiner
COPY package*.json .

#Install the dependencies
RUN npm install

#Good to copy the rest of the app 
COPY . .

#Expose the port to wchich the container should listen up and to connect it to the port where we will run this 
EXPOSE 5003 

#Defint the run command to boot up the app 
CMD ['node', "./src/server.js"]
