---
title: 0x02 - Broken Authentication Attacks
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 2
---

# Broken Authentication Attacks

When a system implements its authentication poorly, it's often vulnerable to attacks in this category. For example, the system can use default user names (such as "admin"), or allow weak common passwords (such as "Password1"). Other examples include Brute Force Attacks, Dictionary Attacks, Credential Stuffing, and Session Hijacking.[1]

## Weak User Credentials
If a website allows its users to use passwords that are very common or easily guessable, its very easy for an attacker to get into the website using those credentials.

In 2009, a company name RockYou was hacked. The attacker got their hands on over 32 million user credentials - all in plain text. The attacker then compiled a database of all the passwords, and made this list publically available. This list (named rockyou.txt) is now famous in the InfoSec community since it gives a very valuably insight in how people tend to choose their passwords. Kali Linux comes with this text file by default (found at /usr/share/wordlists/rockyou.txt.gz).[2, 3]

## Brute Force Attacks and Dictionary Attacks
When an attacker systematically tries every possible character combination to guess passwords, this is known as a Brute Force Attack. The downside with this is that depending on the length and complexity of the passwords, it could take years to find the right one.

A variation of the Brute Force Attack is the Dictionary Attack, where instead of trying arbitrary combinations of characters, the attacker uses a list of words, since most passwords are words (or at least include them) and not random characters stringed together. This also tends to spead things up a bit.

Brute Force attacks are easy for the target system to detect, since they generate a significant amount of traffic. However, the attacker can modify their requests to the target so that it gets very hard to block. Using proxy servers for example, the target cannot stop the attack by blocking a specific IP address. The attacker could also vary the targeted user account, which prevents the target system from blocking login attempts to a specific user.[4]

## Credential Stuffing
When user credentials get breached through hacks, they can spread online. Using breached credentials and testing them on many different websites, like social media platforms or online marketplaces, is called Credential Stuffing. This type of attack is often automated. Usually 0.1-0.2% of login attempts are successful. The attacker could then steal all valuable information in those accounts and then use them in other attacks, like phishing attacks or sending out spam.[5]

## Session Hijacking
Since HTTP is stateless, many websites use Cookies as identification tokens. Session Hijacking, or Cookie Hijacking, is when an attacker manages to steal a Cookie and thereby gains unauthorized access to the website.[6]

Cookie Stealing can be done using many different methods. One of them is Network Eavesdropping, where an attacker intercepts and reads traffic on a network. This can for example be used if the web application sends the Cookie unencrypted over HTTP.[7]

A technique for performing Session Hijacking after successfully stealing a Cookie is called Pass the Cookie, and is described [here](https://embracethered.com/blog/posts/passthecookie/).


## References
[1] A2:2017-Broken Authentication. *OWASP*. [https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication). (Fetched 2021-03-28)<br>
[2] RockYou. *Wikipedia*. [https://en.wikipedia.org/wiki/RockYou](https://en.wikipedia.org/wiki/RockYou). (Fetched 2021-03-28)<br>
[3] William J. Burns. Common Password List ( rockyou.txt ). *Kaggle*. [https://www.kaggle.com/wjburns/common-password-list-rockyoutxt](https://www.kaggle.com/wjburns/common-password-list-rockyoutxt). (Fetched 2021-03-28)<br>
[4] Blocking Brute Force Attacks. *OWASP*. [https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks#](https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks#). (Fetched 2021-03-28)<br>
[5] Credential Stuffing. *OWASP*. [https://owasp.org/www-community/attacks/Credential_stuffing](https://owasp.org/www-community/attacks/Credential_stuffing). (Fetched 2021-03-28)<br>
[6] Session Hikjacking. *Wikipedia*. [https://en.wikipedia.org/wiki/Session_hijacking](https://en.wikipedia.org/wiki/Session_hijacking). (Fetched 2021-03-28)<br>
[7] HTTP Cookie. "Cookie theft and session hijacking". *Wikipedia*. [https://en.wikipedia.org/wiki/HTTP_cookie#Cookie_theft_and_session_hijacking](https://en.wikipedia.org/wiki/HTTP_cookie#Cookie_theft_and_session_hijacking). (Fetched 2021-03-28)<br>