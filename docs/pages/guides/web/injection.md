---
title: 0x01 - Injection Attacks
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Injection Attacks
When a system allows untrusted data to be entered into interpreters we say that the system is vulnerable to injection attacks. Examples include SQL, NoSQL, OS, and LDAP injection.[1]

## SQL Injection
SQL stands for Structured Query Language, and is a language used for storing, manipulating, and retrieving data in relational databases.[2, 3] When a website doesn't sanitize its incoming data, and that data is used to query a table in a database, a hacker could be able to access and manipulate data in that database using clever inputs. If the data is fetched through a login page, and the data within is storing users and their passwords, the consequences could be dire.

There are multiple helpful examples at [W3Schools](https://www.w3schools.com/sql/sql_injection.asp).

## NoSQL Injection
NoSQL is a term that refers to all databases that (surprise) aren't SQL databases.[4] Since SQL is for relational databases, another name for NoSQL databases is non-relational databases. Examples of NoSQL databases include MongoDB, CouchDB and Redis.[4] Even though SQL injection attacks doesn't work on NoSQL databases, that doesn't mean that NoSQL is invulnerable to injection attacks.

You can read more at [Infosec Institute](https://resources.infosecinstitute.com/topic/what-is-nosql-injection/).

## OS Injection
OS Injection, also known as Command Injection or Shell Injection, is one of the more dangerous forms of injection attacks since a successful attack can compromise the entire application and its data.[6] If the attack is successful, a hacker is able to enter arbitrary shell commands. This often gives the same privileges to the hacker as the application has on its host infrastructure, and therefore not only can the app and its data be compromised, but other parts of the server hosting the app as well.

You can read more at [PortSwigger](https://portswigger.net/web-security/os-command-injection), the creator of Burp Suite.

## LDAP Injection
LDAP stands for Lightweight Directory Access Protocol, and is an application layer protocol used for accessing and maintaining distributed directory services over IP.[7]

A directory service is a software application that allows many users to work with the same resource directories.
LDAP uses the fact that directories can be seen as databases, where the information structure is a tree. One of the most common uses of LDAP is to search a directory tree for a specific resource, and it does this through special LDAP filters (defined in RFC 4515). Through manipulating these filters and combining them with their own code injections, an attacker is able to achieve their own objectives.[8]

You can read a more thorough analysis of LDAP injection in [LDAP injection techniques](https://www.researchgate.net/publication/224366575_LDAP_injection_techniques).


## References
[1] Top 10 Web Application Security Risks. *OWASP*. 2017. [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/). (Fetched 2021-03-24)<br>
[2] SQL Tutorial. *W3Schools*. [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/). (Fetched 2021-03-24)<br>
[3] SQL. *Wikipedia*. [https://en.wikipedia.org/wiki/SQL](https://en.wikipedia.org/wiki/SQL). (Fetched 2021-03-24)<br>
[4] NoSQL Database - What is NoSQL? *Microsoft Azure*. [https://azure.microsoft.com/en-us/overview/nosql-database/](https://azure.microsoft.com/en-us/overview/nosql-database/). (Fetched 2021-03-28)<br>
[5] NoSQL. *Wikipedia*. [https://en.wikipedia.org/wiki/NoSQL](https://en.wikipedia.org/wiki/NoSQL). (Fetched 2021-03-28)<br>
[6] OS command injection. *Portswigger*. [https://portswigger.net/web-security/os-command-injection](https://portswigger.net/web-security/os-command-injection). (Fetched 2021-03-28)<br>
[7] Lightweight Directory Access Protocol. *Wikipedia*. [https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol). (Fetched 2021-03-28)<br>
[8] J. M. Alonso, R. Bordon, M. Beltran and A. Guzman, "LDAP injection techniques," 2008 11th IEEE Singapore International Conference on Communication Systems, Guangzhou, China, 2008, pp. 980-986, doi: 10.1109/ICCS.2008.4737330.<br>