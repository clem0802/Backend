/*-----------------------------------*/
Notice that the response below has two main parts: the "status line" and "headers", 
as well as a "response body" containing the actual data.


HTTP/1.1 200 OK     => status line = protocol (HTTP/1.1) + status code (200 OK)
                                     |_________________|   |__________________|
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: application/json
Connection: Closed

{
 "username": "mm_36",
 "name": "Mac Miller"
}


/*-----------------------------------*/ (GET request succeeded)
The "status line" (compositions):

     HTTP/1.1        200 OK
|_______________|   |_______|
    protocol       status code

    
/*-----------------------------------*/ (GET request went wrong)
Error codes in the range of 400-499 are generally called "client errors".
=> HTTP/1.1 400 Bad Request
=> HTTP/1.1 401 Unauthorized
=> HTTP/1.1 404 Not Found
=> HTTP/1.1 408 Request Timeout


/*-----------------------------------*/ (GET server errors)
Codes in the range of 500-599 are server errors
=> HTTP/1.1 500 Internal Server Error 
=> HTTP/1.1 501 Not Implemented


/*-----------------------------------*/ (JSON = JavaScript Object Notation) J-S-O-N
                                                ^   ^      ^      ^
One common format for an HTTP "response body" is JSON.
Inside the JSON object, the properties are separated by a comma (,)

{
 "username": "mm_36",
 "name": "Mac Miller"
}


/*-----------------------------------*/ (JSON & JavaScript)
One common format for an HTTP response body is JSON.
JSON has quotes " " around property names like "username".

JSON:
{
 "username": "mm_36",
 "name": "Mac Miller"
}

JavaScript:
{
 username: "mm_36",
 name: "Mac Miller"
}

