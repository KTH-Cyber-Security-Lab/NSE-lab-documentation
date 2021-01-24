---
title: Delimitations
parent: Thesis Guidelines
has_children: false
nav_order: 5
---

# Delimitations

In order to firmly conclude that a system is secure, it is important to be comprehensive. However, a truly comprehensive security audit may be beyond the scope of the thesis project. Therefore, delimitations can be made, excluding certain components of the system as well as certain attack surfaces. Note that delimitations must be motivated. If you choose to ignore an important attack surface, you won't be able to answer the question regarding the the actual security of the system. Thus, the relevance of your results are diminished. 

The most obvious motivation for ignoring an attack vector is that potential vulnerabilities would not be very serious. Seriousness can be measured, for instance, by the [CVSS scoring system](https://www.first.org/cvss/calculator/3.1), which contains a number of dimensions to characterize the risk (specifically the impact and the probability) of exploitation of a vulnerability.

It is also possible to motivate delimiations with other arguments, such as the interests or competences of the students performing the assessment. While such arguments are sometimes understandable, they will weaken the relevance of the final report; it will not answer the main question regarding the security of the assessed system as well as without those delimigtations.

Furthermore, within the stated delimitations, comprehensiveness is important. Thus, if you choose to focus only on the Bluetooth protocol, make sure you explore the whole attack surfaces of that protocol. If you do not, then you risk not being able to provide any solid answer regarding the security of the system.
