---
title: Method
parent: Thesis Guidelines
has_children: false
nav_order: 4
---

# Method

A penetration testing project usually starts by threat modeling. For a master thesis project, this can correspond to the prestudy that some master programs mandate. Threat modeling briefly consists of a superficial exploration and description of the system, and then a comprehensive categorization of all possible attacks. Each attack should be assessed for its potential impact and the probability of successful exploitation. Adam Shostack's book Threat Modeling can be used as a methodological guide. Also, I think [the steps presented by Synopsys](https://www.synopsys.com/blogs/software-security/5-pillars-successful-threat-model/) and by [Mike Ware](https://2011.appsecusa.org/p/simplifyingthreatmodeling.pdf) make a lot of sense. In particular, I would like to encourage the production of a threat modeling diagram and a threat traceability matrix. There are some free tools available for the diagrammatic representation of the threat model, such as https://online.visual-paradigm.com/diagrams/features/threat-modeling-tool/. 

The threat modeling phase is typically followed by a number of concrete penetration tests of the most promising avenues of exploitation. These may vary significantly with respect to required theory, method, etc. Multiple criteria can be used to select the concrete penetration tests to focus on. Their expected impact and likelihood of success are the obvious selection criteria. The likelihood of success will, in turn depend on the expected difficulty of discovery and exploitation as well as on the skills of the assessor, so these aspects can constitute valid selection criteria. It is a good idea to present in a threat modeling diagram the attack vectors that you have identified, as well as the vectors that you have actually tested. 

In order to firmly conclude that a system is secure, it is important to be comprehensive. However, a truly comprehensive security audit may be beyond the scope of the thesis project. Therefore, delimitations can be made, excluding certain components of the system as well as certain attack surfaces. Note that delimitations must be motivated. If you choose to ignore an important attack surface, you won't be able to answer the question regarding the the actual security of the system. Thus, the relevance of your results are diminished. Furthermore, within the stated delimitations, comprehensiveness is important. Thus, if you choose to focus only on the Bluetooth protocol, make sure you explore the whole attack surfaces of that protocol. If you do not, then you risk not being able to provide any solid answer regarding the security of the system.


