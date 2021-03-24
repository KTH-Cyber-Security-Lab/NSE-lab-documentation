---
title: 0x01 - Injection Attacks
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Injection Attacks
When a system allows untrusted data to be entered into interpreters we say that the system is vulnerable to injection attacks. Examples include SQL, NoSQL, OS, and LDAP injections.[1]

## SQL Injection
SQL stands for Structured Query Language, and is a language used for storing, manipulating, and retrieving data in relational databases.[2, 3] When a website doesn't sanitize its incoming data, and that data is used to query a table in a database, a hacker could be able to access and manipulate data in that database using clever inputs. If the data is fetched through a login page, and the data within is storing users and their passwords, the consequences could be dire.

There are multiple helpful examples at [W3Schools](https://www.w3schools.com/sql/sql_injection.asp).


[1] Top 10 Web Application Security Risks. *OWASP*. 2017. [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/). (Fetched 2021-03-24)<br>
[2] SQL Tutorial. *W3Schools*. [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/). (Fetched 2021-03-24)<br>
[3] SQL. *Wikipedia*. [https://en.wikipedia.org/wiki/SQL](https://en.wikipedia.org/wiki/SQL). (Fetched 2021-03-24)