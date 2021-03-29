---
title: 0x06 - Security Misconfiguration
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 6
---

# Security Misconfiguration
There are multiple technologies that leave security configuration to the developer, who implements these technologies into their own systems. If left misconfigured or with default values, the developer could inadvertedly leave backdoors that hackers then could use to attack the system.[1]

Common Security Misconfiguration vulnerabilites include the following:
- Unnecessary features are enabled (such as unnecessary ports, services, or users)
    - Examples: [HTTP PUT header is enabled](https://portswigger.net/kb/issues/00100900_http-put-method-is-enabled), [ASP.NET tracing is enabled](https://portswigger.net/kb/issues/00100280_asp-net-tracing-enabled)
- The system is outdated and has unpatched vulnerabilities
- Default usernames and passwords are left unchanged
    - "admin/admin" "(none)/(none)", etc.
- Security settings in application frameworks or servers are set to insecure values[2]

For more information, see Chapter 7: Leveraging Platform Weaknesses in [*Hacking Web Apps* (2012) by Mike Shema](https://kth-primo.hosted.exlibrisgroup.com/permalink/f/1pigvvn/TN_cdi_skillsoft_books24x7_bks00047321). You can access this book online if you have a KTH account.


[1] B. Eshete, A. Villafiorita and K. Weldemariam, "Early Detection of Security Misconfiguration Vulnerabilities in Web Applications," 2011 Sixth International Conference on Availability, Reliability and Security, Vienna, Austria, 2011, pp. 169-174, doi: 10.1109/ARES.2011.31.
[2] A6:2017-Security Misconfiguration. *OWASP*. [https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration](https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration). (Fetched 2021-03-29)<br>