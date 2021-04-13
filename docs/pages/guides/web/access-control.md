---
title: 0x05 - Broken Access Control
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 5
---

# Broken Access Control
In short, this vulnerability can be described as different user types (like administrator, standard user, guest) having the wrong privileges. For example, an attacker could get themselves the privileges of an administrator.

Access Control, when working properly, is that each user cannot act outside of its given privileges. If this functionality is broken, the system is vulnerable to Broken Access Control attacks, such as CORS Misconfiguration Exploits and Privilege Escalation Attacks.[1]

## Exploiting CORS Misconfigurations
CORS stands for Cross-Origin Resource Sharing, and is a mechanism used with HTTP to allow a server to fetch resources from other origins than itself. It does this through HTTP response headers, and a server can enable CORS to for example a domain called trusted-example-domain.org by sending the following header to the client:<br>
`Access-Control-Allow-Origin: trusted-example-domain.org`<br>
If the server wants to allow CORS for any domain, the following option is possible:<br>
`Access-Control-Allow-Origin: *`<br>
Furthermore, there is another header that allows user credentials to flow between the two servers:<br>
`Access-Control-Allow-Credentials: true`<br>
As you probably understand, the following would then be very, very dangerous:<br>
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
```
Luckily this is not allowed, and you would get an error in your browser console. However, many servers generate the value of the `Access-Control-Allow-Origin` header based on the value of the `Origin` header of the HTTP request. This means that an attacker could make sure that the value of the `Origin` header leads somewhere they can plant some code, and in a worst case scenario get access to user credentials.[2]

You can find more information [here](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties).

## Privilege Escalation Attacks
Privilege Escalation means that an attacker manages to gain privileges they shouldn't be able to get. For example, a situation where a standard user manages to get administrator privileges would be considered Privilege Escalation.

Privilege Escalation can be divided into two types:
- Vertical Privilege Escalation<br>
This type can also be called Privilege Elevation, since it means that an attacker gains access to a standard user account, and then gradually collects more privileges as time passes.
- Horizontal Privilege Escalation<br>
This type means that an attacker gains access to a user account which already has the desired privileges.[3]

Check out this [page](https://www.redteamsecure.com/terms-glossary/privilege-escalation-attacks) for some real-world examples of Privilege Escalation attacks.

## Server Side Request Forgery (SSRF)
Server Side Request Forgery, or SSRF, means that an attacker manages to trick a server into reading or updating internal resources[4]. This is done through manipulating HTTP requests made to the server in some way[5].

If the target system has functionality for fetching or posting data to a URL, the attacker could manage to replace that URL with another one, or manipulate how the URL is built (to achieve path traversal, for example)[4]. By using SSRF, the attacker could get access to services that are normally behind firewalls and not accessible to the public, since it looks like it's the server that is sending the request[6].

One option for the attacker is to get the target application to send an HTTP request to itself. This is typically done through the reserved IPv4 address 127.0.0.1, also known as localhost, which points back to the host itself.

You can see some concrete examples [here](https://portswigger.net/web-security/ssrf).

## References
[1] A5:2017-Broken Access Control. *OWASP*. [https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control](https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control). (Fetched 2021-03-28)<br>
[2] Exploiting CORS misconfigurations for Bitcoins and bounties. *PortSwigger*. [https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties](https://portswigger.net/research/exploiting-cors-misconfigurations-for-bitcoins-and-bounties). (Fetched 2021-03-28)<br>
[3] Privilege Escalation. *Wikipedia*. [https://en.wikipedia.org/wiki/Privilege_escalation](https://en.wikipedia.org/wiki/Privilege_escalation). (Fetched 2021-03-28)<br>
[4] Server Side Request Forgery. *OWASP*. [https://owasp.org/www-community/attacks/Server_Side_Request_Forgery](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery). (Fetched 2021-04-213)<br>
[5] Server-side Request Forgery. *PortSwigger*. [https://portswigger.net/web-security/ssrf](https://portswigger.net/web-security/ssrf). (Fetched 2021-04-213)<br>
[6] What is Server-Side Request Forgery (SSRF)? *Acunetix*. [https://www.acunetix.com/blog/articles/server-side-request-forgery-vulnerability/](https://www.acunetix.com/blog/articles/server-side-request-forgery-vulnerability/). (Fetched 2021-04-213)<br>