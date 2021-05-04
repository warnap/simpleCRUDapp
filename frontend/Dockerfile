FROM node:15
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install -g npm@latest
RUN npm config set registry https://registry.npmjs.org/
RUN npm install
COPY . /app/
EXPOSE 4200