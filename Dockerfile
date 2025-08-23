FROM 'node'

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME github-actions-docker-container
ENV MONOGDB_CLUSTER_ADDRESS cluster0.ierxn0t.mongodb.net
ENV MONGODB_USERNAME snadi043
ENV MONGODB_PASSWORD glC28pIZf3JtErdR

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]
