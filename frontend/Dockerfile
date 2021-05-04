FROM node:15-alpine
WORKDIR /usr/src/frontend
RUN npm install -g npm@latest
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
COPY . .
RUN npm install
RUN ng build
