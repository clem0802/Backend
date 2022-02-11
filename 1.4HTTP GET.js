Web browsers communicate with web servers through HTTP requests.
A request is made of different parts, each with a specific role. 
The URL specifies the location of the server and the content or resource.

 GET     https://abc.com    /movies
|___|   |_______________|  |_______|
method   backend location   resource



/*------------------------------*/ (GET)
GET is a frequently used method. 
GET means the browser wants to retrieve a specific resource. 
For example, a product description.
=> GET https://coolproducts.com/robots/newrobot/4
=> GET https://gameworld.com/games/001
=> GET https://obscurewriters.com/writers


/*------------------------------*/ (GET)
Below is a "REQUEST LINE":
 GET     https://mimo.com/users   HTTP/1.1
|___|   |_____________________|  |_______|
method   backend location (URL)   protocol HTTP/1.1

 GET     https://mimo.com   /users   HTTP/1.1
|___|   |_______________|  |_______|
method   server address     resource

format: https://mimo.com/users/:id
    GET https://mimo.com/users/1033 HTTP/1.1 => "1033" stands for a user's ID


/*------------------------------*/ (GET)
The request line URL can also have "query parameters". 
These are key-value pairs that appear after a ? sign.
"?" marks the start of a URL's "query parameters part".
=> GET https://mimo.com/users?membership=premium HTTP/1.1
                             ^
=> GET https://abc.com/movies?rating=4&genre=scifi HTTP/1.1
                              ^^^^^^   ^^^^^ 
                           (2 query parameters)

URLs can have several query parameters chained through &
=> GET https://mimo.com/users?membership=premium&activestreak=true HTTP/1.1
                                                ^
                                                  
using "query parameters":
GET https://mimo.com/users?id=1033 HTTP/1.1
                          ^^^^^^^^

using "simple parameters":
GET https://mimo.com/users/1033 HTTP/1.1
                          ^^^^^

/*------------------------------*/ (GET)
-1) Under the request line, a browser request has a series of headers, for example, Host.
-2) "Headers" are standard information fields in a request, 
    that the server uses to better decide how to deal with the request.
-3) For example, the "Cookie" header might attach a session cookie to the request.
-4) "Session cookies" allow consistent and user-specific experience 
    for different users accessing your webpage at the same time.
-5) As another example, "Accept" headers give servers information about 
    the type, language, and format of the response data they should send.

GET https://mimo.com/users HTTP/1.1
Host: mimo.com
User-Agent: Mozilla/5.0 
Accept: text/html,image/jpeg
Accept-Language: en-us,en
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8
Keep-Alive: 300
Connection: keep-alive
Cookie: PHPSESSID=r2t5uvjq435r4
Cache-Control: no-cache










