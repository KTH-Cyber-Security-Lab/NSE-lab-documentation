---
title: Wi-Fi MITM
parent: Wireless Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 2
---

# Wi-Fi Router MITM

We can perform a man-in-the-middle-attack on any Wi-Fi and Ethernet connection that goes through the lab's router. We use the command [tcpdump](https://www.tcpdump.org) to capture all the traffic that goes through the router and then pipe that data into our machine and analyse it with Wireshark. You can use the Kali desktop in the lab or any computer which has a connection to the router and the appropriate tools.

Type in this command in terminal (replacing routers.ip with the actual IP of the router):

`ssh root@routers.ip tcpdump -U -w - -i br0 not port 22 | wireshark -k -i -`

You will then be prompted for the root password for the router, once you've entered this Wireshark should open and you will be able to begin analysing traffic.

You can edit the tcpdump command to your specification, but remember that the 'not port 22' part is neccesary to avoid seeing the SSH packets being sent between your computer and the router.

## Analyzing ICS packets with Wireshark
Wireshark is one of the most widely used network protocol analyzers available[1]. When listening in on a network with Wireshark, the user is able to filter the packets that are shown by for example protocol.

Industrial Control Systems, or ICS, is an umbrella term used to describe hardware and software that are serving vital industrial infrastructure, as well as the networks connecting them. Usually ICS get data from sensors, decide on an appropriate action, and then send commands to the machinery.[2]

The following is a [list](https://zerontek.com/zt/2021/04/12/wireshark-filters-for-ics-protocols/) compiled by [Sulaiman Alhasawi](https://zerontek.com/zt/), that contains all 32 ICS protocols that Wireshark supports filtration for as of April 12th, 2021.

1. BSAP
2. Bacnet
3. C12.22
4. CANopen
5. CIP
6. DeviceNet
7. Dnp3
8. EGD
9. EtherNetIP
10. Ethercat
11. Ethernet PowerLink
12. Fieldbus
13. Goose
14. HartIP
15. IEC60870_101
16. IEC60870_104
17. IEC60870_asdu
18. KNX
19. Modbus
20. Modbus / TCP
21. Modbus / UDP
22. Modbus RTU
23. OPC UA
24. Omron FINS
25. Profibus
26. Profinet
27. S7comm
28. Sercos
29. Sinec H1
30. TTEthernet
31. Tristation
32. Zigbee

# TLS

If TLS is implemented, it can still be vulnerable. See [https://www.youtube.com/watch?v=gmYcsdXT3W8](https://www.youtube.com/watch?v=gmYcsdXT3W8).

# References
[1] About Wireshark. *wireshark.org*. [https://www.wireshark.org/](https://www.wireshark.org/). (Fetched 2021-04-14)<br>
[2] ICS Protocols. *Infosec Institute*. [https://resources.infosecinstitute.com/topic/ics-protocols/](https://resources.infosecinstitute.com/topic/ics-protocols/). (Fetched 2021-04-14)<br>
[3] Wireshark filters for ICS protocols