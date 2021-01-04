---
title: Thesis Report
parent: Thesis Guidelines
has_children: false
nav_order: 8
---

# Thesis report

There are two goals with the thesis report: 
- To convince a critical reader that you indeed have answered your research question (which typically for hacking projects is something like "Is device X secure against cyber attacks?").
- To convince a critical reader that you fulfill the [requirements for a thesis project](https://intra.kth.se/polopoly_fs/1.661631.1565014876!/Comprehensive%20guidelines%20for%20degree%20project%20courses%2C%20common%20goals%20and%20assessment%20criteria%20%28applies%20from%2001.07.2015%29.pdf).

Try to make sure (i) that everything you write in the report actually contributes to the above, and (ii) that it is clear to the reader to what goal each paragraph and section contributes. When writing the report, try to imagine the objections of a very critical reader, and try to make sure that your report responds to those objections as well as possible.

Do iterate your report with your supervisor a few times during the thesis project, e.g. (i) the outline, (ii) the threat analysis, (iii) critical parts of your penetration testing, (iv) the final report.

The final report can be organized as follows:

## Introduction
Provide the introduction, state the [objectives](objective.html) of the project, [delimitations](delimitations.html), and outline the rest of the report. Explain the societal relevance of your work. For whom and why is your work of interest?

## Background/Theory
General background and general theory can be placed in this section. If the system is based on some relevant theory, such as cryptography, database theory, operating system theory, networking theory, etc, that theory can be presented here. 

## Methodology
Describe how you approach the thesis project. Typcically this includes your threat modeling methodology and your penetration testing methodology. Convince the reader that your methodology ensures that you don't miss any important attacks and that your explorations will be convincing. Base your method on established methods (check out the [Method](method.html) section in these master thesis guidelines), or justify why not.

## Selection of system
If you have been involved in the selection of the system to be explored (e.g. by using the criteria detailed [here](choice_of_system.html)), then justify your choice in this section.

## The system under consideration
Describe the functionality and technology of the system under consideration. Even though you discovered some aspects of the system behavior and structure during penetration tests, you should probably still write about it here. The name of this chapter can be the name of that system rather than "The system under consideration".

## Related work
Here, you should describe relevant work previously performed by other researchers. You should include all discovered vulnerabilities of the specific device you are investigating, but also published penetration tests of devices of other brands in the same device category. Oftentimes, there are important similarities between devices of different categories (smart power sockets may have many protocol similarities with smart light bulbs, for instance). It will therefore generally be relevant to also consider such related work. Read more about related work [here](related_work.html).

## Threat model
Draw one or several thread modeling diagrams of the system. Detail each attack that the system could be subjected to. Describe each relevant attack vector in the general case (not specifically related to your system under consideration). Refer to solid sources (e.g. papers or presentations to security conferences). Describe your assessment of each threat or threat type as applied to your system. Estimate the potential impact and the probability of successful exploitation. 

Carefully choose a limited set of attack vectors (and convincingly motivate that choice) for the penetration testing phase of the project. Document, e.g. in the threat model, how thoroughly you have explored each attack.

## Penetration testing
Describe the actual penetration tests here. 

### Penetration testing task #1
If the test is simple, then you won't need all the subheadings below. Otherwise, you might.
#### Introduction
- Describe the attack vector to be explored

#### Background
- If the attack vector is based on particular theory (e.g. SQL injection requires some database theory), then that theory can be described here.

#### Method
- Describe how the testing is performed

#### Results
- Describe your findings

#### Discussion
- Discuss the reliability, validity and generalizability of your findings. If you found a vulnerability, how serious is it? If the system withstood the attack, how important is that? Why? How much can the reader trust your results? To what extent were you able to answer your research question?

### Penetration testing task #2
...

### Penetration testing task #n
...

## Sustainability and ethics
Describe the ramifications of your work with respect to sustainability and ethics. Considering ethics, you can, for instance, describe how you have navigated the law, responsible disclosure, etc.

## Results 
Summarize all the identified attack vectors in your [threat traceability matrix](threat_traceability_matrix.html). 

## Discussion
Summarize the reliability, validity, and generalizability of your findings. How secure is the tested device, all things considered? How much can the reader trust your results? To what extent were you able to answer your research question? 

## Conclusions
How secure is the system? 

# References
Use citations to (i) support any claims you make that the reader might not agree with, (ii) give credit to the authors and creators (important to avoid accusations of plagiarism), and (iii) demonstrate that you have studied all the relevant background material. This is especially important to show that your threat model is comprehensive - that you have considered all relevant attacks. Guidance on reference format can be found [here](http://libraryguides.vu.edu.au/ieeereferencing/formats).

An example of a previous thesis report can be found [here](http://kth.diva-portal.org/smash/record.jsf?dswid=3396&pid=diva2:1464458%22), and many more [here](https://www.kth.se/nse/research/software-systems-architecture-and-security/projects/ethical-hacking-1.914053).
