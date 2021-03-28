---
title: 0x04 - XML External Entities (XXE)
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 4
---

# XML External Entities (XXE)
XXE is an attack used against applications that parse XML. If the XML parser is old or carelessly configured, it could read and interpret the incoming XML input as is, and thus the attacker could view files and interact with the host system in the same way the application could.[1, 2]

For a more detailed explanation, see this [article](https://medium.com/@onehackman/exploiting-xml-external-entity-xxe-injections-b0e3eac388f9).

## References
[1] XML External Entity (XXE) Processing. *OWASP*. [https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing](https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing). (Fetched 2021-03-28)<br>
[2] Exploiting XML External Entity (XXE) Injections. *Medium* [https://medium.com/@onehackman/exploiting-xml-external-entity-xxe-injections-b0e3eac388f9](https://medium.com/@onehackman/exploiting-xml-external-entity-xxe-injections-b0e3eac388f9). (Fetched 2021-03-28)<br>