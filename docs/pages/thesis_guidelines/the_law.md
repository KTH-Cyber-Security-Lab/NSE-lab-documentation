---
title: The Law
parent: Thesis Guidelines
has_children: false
nav_order: 110
---

# The law

It is important to not break the law. Therefore, we need to understand it. There are at least five laws that are of concern for a (Swedish) hacker:
 1. Brottsbalken 4 kap. 9c §: “Den som olovligen bereder sig tillgång till en uppgift som är avsedd för automatiserad behandling eller olovligen ändrar, utplånar, blockerar eller i register för in en sådan uppgift döms för dataintrång till böter eller fängelse i högst två år. Detsamma gäller den som olovligen genom någon annan liknande åtgärd allvarligt stör eller hindrar användningen av en sådan uppgift.
Är brottet grovt, döms för grovt dataintrång till fängelse i lägst sex månader och högst sex år. Vid bedömande av om brottet är grovt ska det särskilt beaktas om gärningen har orsakat allvarlig skada eller avsett ett stort antal uppgifter eller annars varit av särskilt farlig art. Lag (2014:302).”
 1. Brottsbalken 9 kap. 1 §: "1 §   Den som medelst vilseledande förmår någon till handling eller underlåtenhet, som innebär vinning för gärningsmannen och skada för den vilseledde eller någon i vars ställe denne är, dömes för bedrägeri till fängelse i högst två år. För bedrägeri döms också den som genom att lämna oriktig eller ofullständig uppgift, genom att ändra i program eller upptagning eller på annat sätt olovligen påverkar resultatet av en automatisk informationsbehandling eller någon annan liknande automatisk process, så att det innebär vinning för gärningsmannen och skada för någon annan. Lag (1986:123)."
1. Brottsbalken 4 kap. 8 § Den som olovligen bereder sig tillgång till ett meddelande, som ett post- eller telebefordringsföretag förmedlar som postförsändelse eller i ett elektroniskt kommunikationsnät, döms för brytande av post- eller telehemlighet till böter eller fängelse i högst två år. Lag (2012:280).
1. Lagen om upphovsrätt till litterära och konstnärliga verk: “2 § Upphovsrätt innefattar, med de inskränkningar som föreskrivs i det följande, uteslutande rätt att förfoga över verket genom att framställa exemplar av det och genom att göra det tillgängligt för allmänheten, i ursprungligt eller ändrat skick, i översättning eller bearbetning, i annan litteratur- eller konstart eller i annan teknik.”
1. Lagen om företagshemligheter (brand new): “1 § Lagen innehåller bestämmelser om skadestånd, vitesförbud och straff vid obehöriga angrepp på företagshemligheter.”

Regarding "dataintrång" (hacking), the rule of thumb is: Don’t hack someone else’s property. For IoT devices, for instance, you can hack the actual device if you/KTH own(s) it, but you may not attempt to hack the associated Cloud server, owned by the vendor. You can interact with the server in the intended way, though, of course, and you can monitor the traffic.

Regarding "upphovsrätt" (copyright), that law is intended to prevent the reproduction of original texts, which of course is not the intent of an ethical hacker. Nevertheless, there are some unfortunate paragraphs limiting the rights to decompile object code.
 
The law does state that “Den som har rätt att använda ett datorprogram får iaktta, undersöka eller prova programmets funktion för att fastställa de idéer och principer som ligger bakom programmets olika detaljer.” This is sometimes called “observationsrätten”. There is a rather obscure restriction of the right to observe, though: “Detta gäller under förutsättning att det sker vid sådan laddning, visning på skärm, körning, överföring eller lagring av programmet som han har rätt att utföra.”

One problem for ethical hackers is copyright laws with respect to reverse engineering, which may be considered a kind of copying/translation. In Europe decompilation is explicitly allowed for the purposes of interoperability: “26 h § Återgivning av ett datorprograms kod eller översättning av kodens form är tillåten om åtgärderna krävs för att få den information som är nödvändig för att uppnå samverkansförmåga mellan programmet och ett annat program.”
So, as long as the intent is to achieve some kind of interoperability, then code may be reversed. There is even a European case where the law was employed to the advantage of the reverse engineers, [SAS Institute Inc v World Programming Ltd](https://en.wikipedia.org/wiki/SAS_Institute_Inc_v_World_Programming_Ltd). However, if interoperability is not the objective, then it is rather unclear exactly what is allowed.

Finally, the law states that contracts or end-user license agreements are unable to void the user’s rights as per the above: “Avtalsvillkor som inskränker användarens rätt enligt denna paragraf är ogiltiga.”
My take on this is that ethical hacking is unproblematic wrt copyright except for the case of reverse engineering. For reverse engineering, the purpose should be to achieve interoperbility with an external program.

Regarding "företagshemligheter" (trade secrets), 4 § may be important: “4 § Lagen gäller endast obehöriga angrepp på företagshemligheter. Som ett obehörigt angrepp anses aldrig att någon angriper en företagshemlighet för att offentliggöra eller inför en myndighet eller ett annat behörigt organ avslöja något som
 1. skäligen kan misstänkas utgöra brott med fängelse i straffskalan, eller
 2. kan anses utgöra något annat missförhållande och offentliggörandet eller avslöjandet sker till skydd för allmänintresset.”

An argument might be that finding and responsibly disclosing vulnerabilities is carried out for the protection of the general interest (“till skydd för allmänintresset”).

If you encounter any unclear situations, don’t hesitate to discuss with your supervisor.
