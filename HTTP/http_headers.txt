🌐 HTTP (HyperText Transfer Protocol)

HTTP stands for HyperText Transfer Protocol.
It is the foundation of communication on the web—a set of rules that allows a web browser (client) and a web server to communicate with each other.

🔄 How HTTP Works (Simple Explanation):-

When you type a website address into your browser:
The browser sends an HTTP request to the server
The server processes the request
The server sends back an HTTP response

The browser displays the result
(webpage, image, JSON data, etc.)

🛠️ Common HTTP Methods
Method	Description
GET	Request data (view a webpage)
POST	Send data (submit a form)
PUT	Update existing data
DELETE	Remove data

📦 HTTP Headers
HTTP headers are key–value pairs sent along with an HTTP request or response.
They carry extra information (metadata) about the request or response.

❓ Why HTTP Headers Exist (Need of Headers):--

Headers tell the browser and server how to handle the data, such as:
What type of data is being sent
How the data should be cached
Who is sending the request
Authentication details
Language and encoding preferences
🔹 Examples
Content-Type: application/json
Authorization: Bearer <token>


🧾 Types of HTTP Headers:--

1️⃣ Request Headers (Sent by the Client):-
Header	Description
Host	Target server
User-Agent	Browser or application making the request
Accept	Content types the client can handle
Authorization	Authentication credentials or tokens
Cookie	Stored client data

2️⃣ Response Headers (Sent by the Server):-
Header	Description
Content-Type	Type of returned data
Content-Length	Size of the response body
Set-Cookie	Stores data in the browser
Cache-Control	Caching rules
Server	Server software information

3️⃣ General Headers (Request & Response):-
Header	Description
Date	Date and time of the message
Connection	Connection management
Transfer-Encoding	Encoding used for message transfer

⭐ Commonly Used HTTP Headers (Quick List):-
Content-Type: application/json
Authorization: Bearer <token>
Accept: application/json
Cookie / Set-Cookie
Cache-Control

📌 Summary

HTTP enables communication between client and server
Headers provide metadata, not actual data
Proper use of headers is critical for APIs, security, caching, and performance