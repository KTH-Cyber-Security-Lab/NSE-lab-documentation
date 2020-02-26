---
title: Thesis Report
parent: Thesis Guidelines
has_children: false
nav_order: 5
---

# Thesis report

The final report can be organized as follows:

## Introduction
Provide the introduction, state the objectives of the project, delimitations, and outline the rest of the report. Explain the societal relevance of your work. For whom and why is your work of interest?

## Background
Any related work should be presented here. That would include previous work on similar systems. If the system is based on some relevant theory, such as cryptography, database theory, operating system theory, networking theory, etc, that theory can be presented here. 

## Methodology
Describe how you approach the thesis project. Typcically this includes your threat modeling methodology and your penetration testing methodology. Convince the reader that your methodology ensures that you don't miss any important attacks and that your explorations will be convincing. Base your method on established methods (check out the Methods section in these master thesis guidelines), or justify why not.

## The system under consideration
Describe the functionality and technology of the system under consideration. Even though you discovered some aspects of the system behavior and structure during penetration tests, you should probably still write about it here. 

## Threat model of the system under consideration
Draw one or several thread modeling diagrams of the system. Detail each attack that the system could be subjected to. Describe each relevant attack vector in the general case (not specifically related to your system under consideration). Refer to solid sources (e.g. papers or presentations to security conferences). This is your threat literature review. Then describe your assessment of each threat as applied to your system. Estimate the potential impact and the probability of successful exploitation. 

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
- Discuss the generalizability, reliability and validity of your findings.

### Penetration testing task #2
...

### Penetration testing task #n
...

## Discussion
Summarize the generalizability, reliability and validity of your findings.

## Sustainability and ethics
Describe the ramifications of your work with respect to sustainability and ethics. Considering ethics, you can, for instance, describe how you have navigated the law, responsible disclosure, etc.

## Results 
Summarize all the identified attack vectors in you threat traceability matrix. For each, note
 - the threat agent,
 - the affected asset,
 - the attack,
 - the attack surface,
 - the attack goal,
 - the attack impact, if successful,
 - potential security controls
 - whether you have attempted this attack (if you have, refer the reader to the appropriate section; if you haven't, refer the reader to the location in the report where you motivate that delimitation),
 - estimated probability of success 
 - the confidence of your success probability assessment (refer the reader to the location in the report where you motivate your degree of confidence).
 
## Conclusions
How secure is the system? 

## Future work
Interesting findings that weren't a part of the scope that can be a part of future work. For example if the firmware was excluded it could be listed here as an interesting component to investigate.

An example of a previous thesis report (which does not follow the above template, alas) can be found [here](https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1358429&dswid=9571). 
