/*-------------------------------------*/ (2021.11.18) from MM
/*-------------------------------------*/ SERVER-SIDE PROGRAMMING
-the HTTP methode GET is sent automatically as part of the request to the server 
-when we click on a link in the web browser => <a href="https://abc.com">Watch the news</a>
-a GET request means that the browser wants to retrieve specific data from the server specified in the URL
-what type of data might the web browser want to retrieve from a server? => a "user's address"
-"Web Browsers", also = "Clients", send a request to the server for a particular resource
-The server then responds with the resource.
           
__________ Request  __________
|        | =======> |        |
|computer| Response |SQL icon|
|________| <======= |________|
 (CLIENT)   (HTTP)   (SERVER)


-when the server successfully retrieves the data, 
 it sends it back to the web browser in the response and includes a "STATUS CODE"
-the browsers use the PROTOCOL "HTTP" to request user-specific data from a server
-  HTTP/1.1 200 OK
-when making a request, the "HTTP method = GET", this additional information, is sent by a browser
-when the browser sends a get "GET" request, we retrieve data from the "SERVER's DATABASE"

-there are many different response codes, but the most common one is "200"
-which means everything is OK, some examples below:
-200: OK
-400: Bad Request
-401: Unauthorized
-404: Not Found
-500: Internal Server Error
