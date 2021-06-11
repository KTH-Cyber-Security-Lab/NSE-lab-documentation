---
title: 0x11 - HTTP Request Smuggling
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 11
---

# HTTP Request Smuggling
When applications communicate using HTTP, they often send HTTP requests one after another in a quick succession. If the rules for when one request ends and another one begins are blurry or ill-defined, an attacker could hide a request in another request, so that the front-end system thinks it has sent a single request while the back-end system parses it as two different requests. In other cases, the attacker could send ambiguous requests that are interpreted differently by the front-end and the back-end systems.

The information about when HTTP requests end are conveyed in the Content-Length and the Transfer-Encoding headers. The Content-Length header specifies how long the entire HTTP request is in bytes. The Transfer-Encoding header can have one of several values, where one is `chunked`. A Transfer-Encoding header with `chunked` as its value, means that the body of the request consists of several chunks of data. Each chunk consists of the following elements:

1. An integer specifying the chunk size in bytes
2. A newline
3. The data in this chunk

The body is then terminated with a chunk of size 0.

Since HTTP has these two different ways of specifying message length, the Content-Length and Transfer-Encoding headers can have values that conflict with eachother. This is a problem when the requests are sent between different servers: sometimes one server looks at only the Content-Length header while the other one looks at the Transfer-Encoding header. [1]

You can find more information as well as more concrete examples at [PortSwigger](https://portswigger.net/web-security/request-smuggling).

# References
[1] HTTP request smuggling. *PortSwigger*. [https://portswigger.net/web-security/request-smuggling](https://portswigger.net/web-security/request-smuggling). (Fetched 2021-04-13)<br>