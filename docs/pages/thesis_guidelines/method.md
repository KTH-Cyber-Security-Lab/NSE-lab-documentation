---
title: Method
parent: Thesis Guidelines
has_children: false
nav_order: 6
---

# Method

A penetration testing project usually starts by threat modeling. For a master thesis project, this can correspond to the prestudy that some master programs mandate. Threat modeling briefly consists of a superficial exploration and description of the system, and then a comprehensive categorization of all possible attacks. Each attack should be assessed for its potential impact and the probability of successful exploitation. Adam Shostack's book Threat Modeling can be used as a methodological guide. Also, I think [the steps presented by Synopsys](https://www.synopsys.com/blogs/software-security/5-pillars-successful-threat-model/) and by [Mike Ware](https://2011.appsecusa.org/p/simplifyingthreatmodeling.pdf) make a lot of sense. In particular, I would like to encourage the production of a threat modeling diagram and a threat traceability matrix. There are some free tools available for the diagrammatic representation of the threat model, such as the [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/) and [Visual Paradigm's Online Threat Modeling Tool](https://online.visual-paradigm.com/diagrams/features/threat-modeling-tool/). 

The threat modeling phase is typically followed by a number of concrete penetration tests of the most promising avenues of exploitation. These may vary significantly with respect to required theory, method, etc. Multiple criteria can be used to select the concrete penetration tests to focus on. Their expected impact and likelihood of success are the obvious selection criteria. The likelihood of success will, in turn depend on the expected difficulty of discovery and exploitation as well as on the skills of the assessor, so these aspects can constitute valid selection criteria. It is a good idea to present in a threat modeling diagram the attack vectors that you have identified, as well as the vectors that you have actually tested. 

In addition to manual penetration testing, fuzzing is also a good option. We can currently offer a local installation of Google's [Clusterfuzz](https://google.github.io/clusterfuzz/) system, which can scale the fuzzzing effort significantly.

Good project planning increases the chances of succeeding with your thesis project. There are several tools that can help you organize your work, such as [Trello](https://trello.com). One particular hazard with hacking projects is the risk of falling down into a [rabbit hole](https://www.merriam-webster.com/dictionary/rabbit%20hole). To avoid rabbit holes, you might consider [time boxing](https://en.wikipedia.org/wiki/Timeboxing).
