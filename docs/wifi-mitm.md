---
title: Wifi-MITM
parent: Hacking Resources
has_children: false
nav_order: 2
---

# Wi-Fi Router MITM

We can perform a man-in-the-middle-attack on any Wi-Fi and Ethernet connection that goes through the lab's router. We use the command [tcpdump](https://www.tcpdump.org) to capture all the traffic that goes through the router and then pipe that data into our machine and analyse it with Wireshark. You can use the Kali desktop in the lab or any computer which has a connection to the router and the appropriate tools.

Type in this command in terminal (replacing routers.ip with the actual IP of the router):

`ssh root@routers.ip tcpdump -U -w - -i br0 not port 22 | wireshark -k -i -`

You will then be prompted for the root password for the router, once you've entered this Wireshark should open and you will be able to begin analysing traffic.

You can edit the tcpdump command to your specification, but remember that the 'not port 22' part is neccesary to avoid seeing the SSH packets being sent between your computer and the router.
