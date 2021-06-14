---
title: 0x08 - Insecure Deserialization
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 8
---

# Insecure Deserialization
*Serialization* is the process of taking an object and turning it into a data format that can be stored, so that it later can be fetched and *deserialized* back into an object. Some common data formats for serializing data are JSON (JavaScript Object Notation) and XML (eXtensible Markup Language); however, several programming languages today contain support for deserialization with more capabilities than JSON or XML. These deserialization features can also be used for malicious purposes, if they are operating on untrusted data.[1]

Insecure Deserialization vulnerabilities often lead the risk of leading to RCE (Remote Code Execution), DoS (Denial of Service), or [privilege escalation](/pages/guides/web/access-control.md).

To exploit this type of vulnerability, one must find somewhere in the target service where deserialization is used. The following table[2] specifies some hints that applications give, depending on the underlying technology:

| Technology     | Hint                                                 |
| :------------- | :--------------------------------------------------- |
|  Java          |  HTTP header "application/x-java-serialized-object"  |
|                |  Sequence "r0O" in base64 encoded data               |
|                |  HEX signature "AC ED 00 05"                         |
| C#/.NET        |  Sequence "AAEAAAD/////" in base64 encoded data      |
|                |  "Type-Object" in client-side code                   |
|                |  "$type:" in client-side code                        |

You can find more information in the book "The Penetration Tester's Guide to Web Applications" by Serge Borso. If you have a KTH account, you can access it [here](https://kth-primo.hosted.exlibrisgroup.com/permalink/f/1pigvvn/TN_cdi_askewsholts_vlebooks_9781630816247).

## References
[1] Deserialization Cheat Sheet. *OWASP*. [https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html). (Fetched 2021-03-30)<br>
[2] Borso, Serge. (2019). The Penetration Tester's Guide to Web Applications (Artech House information security and privacy series). Norwood: Artech House. [Link to KTH Library](https://kth-primo.hosted.exlibrisgroup.com/permalink/f/1pigvvn/TN_cdi_askewsholts_vlebooks_9781630816247).