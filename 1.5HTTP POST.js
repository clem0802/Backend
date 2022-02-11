/*------------------------------*/ (POST)
POST is another common method, which helps us create something new on the backend. 
POST is a request method that we use to send new data to the server.
For example, adding a new user to the database.
=> POST https://coolproducts.com/signup/newAcccount

Examples of a POST request include creating a new account, 
writing a new blog post entry, or uploading a new social media post.
=> POST https://insta.com/posts/new
=> POST https://obscurewriters.com/writers


/*------------------------------*/ (POST)
This POST request's URL tells us that this new piece of data should be saved under users.
=> POST https://mimo.com/users


/*------------------------------*/ (POST)
-Unlike GET, POST requests rarely use query parameters in their URL, 
 and instead rely on the request body to hold the data.
-Unlike GET requests that have an empty body, 
 POST requests contain data in their request body.

POST https://mimo.com/users
{
 "username": "nia22", 
 "email": "nia.m@mail.com"
}


/*------------------------------*/ (POST)
-A POST request has headers providing extra context, 
 like Content-Type which tells us the format of the request body.
-We can see that this POST request's body Content-Type is "application/json".
-POST requests sotre "in the REQUEST BODY" the data they send to the server.

POST https://mimo.com/users
Host: mimo.com
Content-Type: application/json
Content-Length: 40

{
 "username": "nia22", 
 "email": "nia.m@mail.com"
}


/*------------------------------*/ (POST) Responses to POST requests
HTTP/1.1 201 Created
Date: Mon, 21 Jul 2021 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Content-Length: 45
Content-Type: application/json
Connection: Closed

{
 "username": "nia22", 
 "email": "nia.m@mail.com",
 "id": 1334
}

