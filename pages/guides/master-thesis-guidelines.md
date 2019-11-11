---
title: Master Thesis Guidelines
parent: Guides
has_children: false
nav_order: 5
---

# Master Thesis Guidelines

Objective
The goal of the project is to assess some aspects of the security of the chosen computer-based system. It is not necessary to find vulnerabilities in order to produce an excellent thesis report. The goal is, instead, to convincingly demonstrate whether the system is secure or not, given certain delimitations. Of course, a discovered vulnerability will demonstrate that the system in some respect lacks security, but a comprehensive exploration of a chosen attack surface can equally well demonstrate the opposite.

Choice of system to explore
When choosing which system to explore, there are two main selection criteria to consider: Impact and vulnerability. During the first phase of the thesis project, the threat modeling phase, you will explore this issue in depth, but you may need to perform a superficial threat modeling already at the product selection stage. The higher the impact and vulnerability, the more pressing is the need for security testing of the system.

Impact. How serious would the consequences be if the system were hacked?
Vulnerability. How likely is it that you will find and exploit a vulnerability during the course of the thesis project? This will depend on many issues:
 

How large is the attack surface? A device that features wifi, Bluetooth, JTAG, UART, USB, HTTP, etc may be easier to compromise than a device that only communicates over LTE, for instance.
How complex is the product? A product with many bells and whistles will be more difficult to secure than one consisting of a single, simple function.
How much time did the developers spend on security? In a price-pressed consumer market, or a start-up company, developers may not have had the resources to spend on securing the product, while that may have been a lesser problem in other markets.
 

How competent were the developers?
 

What is the security track record of the developing company? Some companies seem unable to create secure products, while others have an impressive track record. You can search for publicly reported vulnerabilities in the US National Vulnerability Database (NVD).
To what extent was the system already exposed to security testing? If many security reviews were already conducted (e.g. for the major operating systems), then the low hanging fruits might already have been found, while these may still be around for products that for some reason were not reviewed. Reasons may be that the company makes it hard to review its software (e.g.
Boeing), that the product is brand new, or that it caters to a small or security-unaware marketplace. 

Method
A penetration testing project usually starts by threat modeling. For a master thesis project, this can correspond to the prestudy that some master programs mandate. Threat modeling briefly consists of a superficial exploration and description of the system, and then a comprehensive categorization of all possible attacks. Each attack should be assessed for its potential impact and the probability of successful exploitation. Adam Shostack's book Threat Modeling can be used as a methodological guide.

The threat modeling phase is typically followed by a number of concrete penetration tests of the most promising avenues of exploitation. These may vary significantly with respect to required theory, method, etc. Multiple criteria can be used to select the concrete penetration tests to focus on. Their expected impact and likelihood of success are the obvious selection criteria. The likelihood of success will, in turn depend on the expected difficulty of discovery and exploitation as well as on the skills of the assessor, so these aspects can constitute valid selection criteria. 

In order to firmly conclude that a system is secure, it is important to be comprehensive. However, a truly comprehensive security audit may be beyond the scope of the thesis project. Therefore, delimitations can be made, excluding certain components of the system as well as certain attack surfaces. Note that delimitations must be motivated. If you choose to ignore an important attack surface, you won't be able to answer the question regarding the the actual security of the system. Thus, the relevance of your results shrink. Furthermore, within the stated delimitations, comprehensiveness is important. Thus, if you choose to focus only on the Bluetooth protocol, make sure you explore the whole attack surfaces of that protocol. If you do not, then you risk not being able to provide any solid answer regarding the security of the system.

Thesis report
The final report can be organized as follows:

Introduction
Provide the background, state the objectives of the project, delimitations, and outline the rest of the report.
Theory
If the system is based on some relevant theory, such as cryptography, database theory, operating system theory, networking theory, etc, that theory can be presented here.
The system under consideration
Describe the functionality and technology of the system under consideration
Threat modeling methodology
Describe how you go about the threat modeling task. Convince the reader that your methodology ensures that you don't miss any important attacks.
Threats
Describe each relevant attack vector in the general case (not specifically related to your system under consideration). Refer to solid sources (e.g. papers or presentations to security conferences). This is your threat literature review. 
Threat model of the system under consideration
Describe your assessment of each threat as applied to your system. Estimate the potential impact and the probability of successful exploitation. Choose a limited set of attack vectors for the penetration testing phase of the project.
Discussion
Discuss the generalizability, reliability and validity of your findings.
Penetration testing task #1
Introduction
Describe the attack vector to be explored
Method
Describe how the testing is performed
Theory
If the attack vector is based on particular theory (e.g. SQL injection requires some database theory), then that theory can be described here.
Results
Describe your findings
Discussion
Discuss the generalizability, reliability and validity of your findings.
Penetration testing task #2
...
Penetration testing task #n
...
Discussion
Summarize the generalizability, reliability and validity of your findings.
Conclusions
How secure is the system?

