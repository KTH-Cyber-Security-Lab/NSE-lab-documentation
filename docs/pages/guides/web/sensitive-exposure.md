---
title: 0x03 - Sensitive Data Exposure
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 3
---

# Sensitive Data Exposure
If a service or application stores sensitive data, it should always do so using modern encryption methods as one of its defences. Whenever they transmit data it should also be encrypted. Sadly, this is in many cases forgotten or ignored. The result is that attackers, should they gain access to this data, can exploit it without much effort.[1]

The attacker could get access to plain text data (or data with weak encryption) when the data is in transit, when it is stored in the user's browser, or when the data is stored on the server given that the attacker has gotten access to it in another attack (like [Session Hijacking](/pages/guides/web/authentication.html#session-hijacking), [SQL Injection](/pages/guides/web/injection.html#sql-injection), etc).

You can read more [here](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure).

## References
[1] A3:2017-Sensitive Data Exposure. *OWASP*. [https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure). (Fetched 2021-03-28)<br>