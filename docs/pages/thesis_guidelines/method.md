---
title: Method
parent: Thesis Guidelines
has_children: false
nav_order: 7
---

# Method

A penetration testing project usually starts by threat modeling. For a master thesis project, this can correspond to the prestudy that some master programs mandate. Threat modeling briefly consists of a superficial exploration and description of the system, and then a comprehensive categorization of all possible attacks. Each attack should be assessed for its potential impact and the probability of successful exploitation. An excellent overview of threat modeling is provided in [Wenjun Xiong and Robert Lagerström, ‘Threat modeling – A systematic literature review’, Comput. Secur., vol. 84, pp. 53–69, Jul. 2019](https://www.sciencedirect.com/science/article/pii/S0167404818307478). Adam Shostack's book Threat Modeling can be used as a methodological guide. Also, I think [the steps presented by Synopsys](https://www.synopsys.com/blogs/software-security/5-pillars-successful-threat-model/) and by [Mike Ware](https://2011.appsecusa.org/p/simplifyingthreatmodeling.pdf) make a lot of sense. In particular, I would like to encourage the production of a threat modeling diagram and a [threat traceability matrix](threat_traceability_matrix.html). There are some free tools available for the diagrammatic representation of the threat model, such as the [Microsoft Threat Modeling Tool](https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling), [OWASP pytm](https://owasp.org/www-project-pytm/) and the [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/). You can also use generic drawing tools such as [draw.io](https://draw.io).

In order to learn about the system under consideration, user and developer manuals may be of great utility, as well as other publicly available information, e.g. [FCC submissions](https://fccid.io/).

The threat modeling phase is typically followed by a number of concrete penetration tests of the most promising avenues of exploitation (as specified in the [threat traceability matrix](threat_traceability_matrix.html)). These may vary significantly with respect to required theory, method, etc. Multiple criteria can be used to select the concrete penetration tests to focus on. Their expected impact and likelihood of success are the obvious selection criteria. The likelihood of success will, in turn depend on the expected difficulty of discovery and exploitation as well as on the skills of the assessor, so these aspects can constitute valid selection criteria. It is a good idea to present in a [threat traceability matrix](threat_traceability_matrix.html) and threat modeling diagram the attack vectors that you have identified, as well as the vectors that you have actually tested. 

In addition to manual penetration testing, fuzzing is also a good option. We can currently offer a local installation of Google's [Clusterfuzz](https://google.github.io/clusterfuzz/) system, which can scale the fuzzing effort significantly. You can get started by checking out the [American Fuzzy Lop fuzzer](https://lcamtuf.coredump.cx/afl/), which in recent years has revolutionized fuzzing by its effectiveness and ease of use.

Good project planning increases the chances of succeeding with your thesis project. There are several tools that can help you organize your work, such as [Trello](https://trello.com) aligned with your [threat traceability matrix](threat_traceability_matrix.html). One particular hazard with hacking projects is the risk of falling down into a [rabbit hole](https://www.merriam-webster.com/dictionary/rabbit%20hole). To avoid rabbit holes, you might consider [time boxing](https://en.wikipedia.org/wiki/Timeboxing). 

If you are testing an IoT device, [Guzman and Gupta's IoT Penetration Testing Cookbook](https://www.packtpub.com/networking-and-servers/iot-penetration-testing-cookbook) is a good guide.
