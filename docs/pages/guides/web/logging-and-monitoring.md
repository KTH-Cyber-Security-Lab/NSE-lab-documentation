---
title: 0x10 - Insufficient Logging and Monitoring
parent: Web Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 10
---

# Insufficient Logging and Monitoring
In secure systems, ongoing attacks should be notified to the owners or maintainers as soon as possible so that the attack can be stopped. If the system doesn't, the attackers could get access to more and more data and do even more damage, without facing any defences from the target system. This can be likened as having a house without alarms - if an intruder gets in, nobody is notified and the intruder can do whatever they want for a much longer time than if an alarm had gone off. Having implemented a stable logging system is also extremely important, as it allows the system's maintainers to notice suspicious behavior.[1]

Because of insufficient logging and monitoring being so common, a lot of the times it's possible for an attacker to simply make their attacks slightly stealthier for it to go unnoticed. The popular tool [Nmap](https://tools.kali.org/information-gathering/nmap) has many options that can be used for this purpose.

## References
[1] Borso, Serge. (2019). The Penetration Tester's Guide to Web Applications (Artech House information security and privacy series). Norwood: Artech House.
