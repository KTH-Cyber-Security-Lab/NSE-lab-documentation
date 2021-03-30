---
title: 0x09 - Using Components with Known Vulnerabilities
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 9
---

# Using Components with Known Vulnerabilities
If the target application uses components with known vulnerabilities, it is very easy for an attacker to exploit this. It takes much less energy to look for vulnerable components (like libraries and frameworks) than to start digging through the application to find an exploit of one's own.

There are multiple tools to scan an application for common flaws, and many of them can be classified as using components with known vulnerabilities. These tools can for example check for different types of security related headers. One such tool is [securityheaders.com](https://securityheaders.com/), which checks the given website for what security-related headers it uses. Another tool is [Nikto](https://tools.kali.org/information-gathering/nikto), which is an open source web server scanner that comes with Kali Linux.[1]

## References
[1] Borso, Serge. (2019). The Penetration Tester's Guide to Web Applications (Artech House information security and privacy series). Norwood: Artech House.