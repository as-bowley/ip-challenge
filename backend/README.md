## Steps to Setup

**1. Create Mysql database**
```bash
create database blogapi
```
- run `src/main/resources/ipchallenge.sql`

**2. Change mysql username and password as per your installation**

+ open `src/main/resources/application.properties`
+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation
+ change `spring.datasource.url` if required


**3. Run the app using maven**

```bash
mvn spring-boot:run
```
The app will start running at <http://localhost:8080>

### API Endpoints

| Method | Url                           | Decription             | 
|--------|-------------------------------|------------------------| 
| POST   | /patent                       | Create new Patent      | 
| GET    | /patents                      | Get all Patents        | 
| GET    | /patents/{id}                 | Get specific Patent    | 
| PUT    | /patents/{id}                 | Update specific Patent | 
| DELETE | /patents/{id}                 | Delete specific Patent | 
| GET    | /search?query={searchQuery} | Search for Patent      | 



