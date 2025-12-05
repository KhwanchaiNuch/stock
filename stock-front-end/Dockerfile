FROM node:14.21.3
WORKDIR /usr/src/app
COPY . .
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y
RUN npm i
RUN npm run build

EXPOSE 8000
CMD ["npm", "run", "start"]
