---
title: Responsible disclosure
parent: Thesis Guidelines
has_children: false
nav_order: 100
---

# Responsible disclosure

A discovered vulnerability should first be reported to the vendor. The vendor should then be given the opportunity to develop a patch. After the patch has been published, or in the case of an unresponsive vendor, after a certain timeframe passes, the finding should be reported to the National Vulnerability Database and made public. The Dutch National Cybersecurity Center US CERT offers a good [Guide to
Coordinated Vulnerability Disclosure](https://english.ncsc.nl/binaries/ncsc-en/documents/publications/2019/juni/01/coordinated-vulnerability-disclosure-the-guideline/WEB_Brochure-NCSC_EN.pdf) which we recommend that you follow, setting the default disclosure timeframe to 90 days.

The biggest failure that can happen in the disclosure process is if sensitive vulnerability information becomes available to the wrong people. In order to avoid mistakes, be sure to keep your supervisor informed about the disclosure process, e.g. by carbon copying your supervisor in the correspondence with the vendor.

Typically, the first disclosure step is to identify which person or function in the company to whom the vulnerability should be reported. The second step is agreeing on the communication means – some vendors prefer encrypted channels for sensitive information such as vulnerabilities. Only after these formalities regarding the communication are settled should the vulnerability be disclosed.

When reporting a vulnerability, you need to be pedagogical. Check out the writing style of the vulnerability reports at [the bug bounty platforms](https://hackerone.com/hacktivity), for instance.

If you have discovered a vulnerability which qualifies to be published, you should [request a CVE](https://cve.mitre.org/cve/request_id.html). A CVE in your name can be valuable when applying for jobs in the cybersecurity sector.

Best practices for public disclosure can be somewhat conflicting with the Swedish law, which requires us to make examined theses available to the public. If you have discovered a vulnerability that can harm an organization, you must therefore think carefully about how to proceed. There are generally three paths available, please discuss them carefully with your supervisor.

1. Proceed with the presentation/examination as usual, but the examiner does not report the grades until the responsible disclosure time has passed. This can conflict with an application to a master's program as the student may receive the credits for the thesis course after the master program has begun. If you plan to continue with a master program in the following semester, please discuss the situation with your supervisor, and possibly with a program coordinator for the master program as well. This path could also affect the student's CSN grants and student housing, as the academic credits will be delayed until the theses is reported (after the public disclosure time). This is a somewhat messy alternative for the student, but usually the safest for the organization.

2. Write two versions of the report, one that contains the full text and one that is reduced to only include data that can be made public (no sensitive data). The full text article will be used when examining and grading the student, while the second will be published in DIVA. The disadvantage of this is that the reduced report will be the one made public in DiVA, and we can not replace it with the full text report at a later time. If for example a future employer looks through the report, it will not be clear that the work was originally of a larger scale. However, the student can of course explain the situation to the exployer or interested party, and send them the full text version (given the disclosure time is over). The examiner can also assist by writing a certificate to the student confirming the reason why a smaller-scale report has been published in DiVA.

3. Report the grade of the student and only publish the metadata (title, keywords, and abstract) in DiVA. This is generally the easiest option for the student, but entails a risk as the full text work could be requested by external actors with malicious intentions. However, it may be possible to formulate the title, abstract and keywords in such a way so that it does not attract immediate attention. When the disclosure time (usually 90 days) is over the full text article can be uploaded to DiVA as well.


Unfortunately, there are no other options available at this time. The best solution will vary for each case, so please think through the matter carefully and discuss the best action with your supervisor.


<!--If the disclosure process takes longer time than your thesis project, you can still present your thesis, complete the course and receive your credits. KTH will, however, not publish the report until the disclosure process has completed.


 Unfortunately, none of the alternatives is an optimal solution, it is rather a question of a choice "between plague and cholera". I have entered my comments after resp. option:
 -->
