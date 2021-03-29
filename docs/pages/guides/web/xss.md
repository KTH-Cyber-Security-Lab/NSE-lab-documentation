---
title: 0x07 - Cross Site Scripting (XSS)
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 7
---

# Cross Site Scripting (XSS)

Similar to [injection attacks](/docs/pages/guides/web/injection.html), Cross Site Scripting occurs when an attacker is able to insert malicious code into target system. The difference is that here, the attack potentially results in the attacker's code being executed in the browser of an unsuspecting end user.[1]

XSS has historically been divided into two main categories:
- Non-persistent (or Reflected) XSS
- Persistent (or Stored) XSS[2]

Non-persistent XSS is when the malicious code is entered to the target website through for example a link to be clicked, rather than in the website itself. Here, a user has to click or otherwise interact with the element that contains the malicious code.

Persistent XSS is when the malicious code makes its way all the way to the website's storages of user input (like its databases). As opposed to non-persistent XSS, the malicious code is rendered to all end users' browsers, resulting in them all becoming the victims of the attack.[3]

[1] Cross Site Scripting (XSS). *OWASP*. [https://owasp.org/www-community/attacks/xss/](https://owasp.org/www-community/attacks/xss/). (Fetched 2021-03-29)<br>
[2] Cross-site scripting. *Wikipedia*. [https://en.wikipedia.org/wiki/Cross-site_scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) (Fetched 2021-03-29)<br>
[3] Sinha, S. (2019). Bug Bounty Hunting for Web Security Find and Exploit Vulnerabilities in Web sites and Applications (1st ed. 2019.. ed.).