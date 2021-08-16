---
title: Ubertooth One
parent: Wireless Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 7
---

# Ubertooth One

The Ubertooth One is an open source development platform used to experiment with Bluetooth, and [BLE](/pages/guides/radio/ble.html) in particular.

You can find the GitHub repository for the Ubertooth [here](https://github.com/greatscottgadgets/ubertooth). The repo also contains a [wiki](https://github.com/greatscottgadgets/ubertooth/wiki), which among other things holds the [Build Guide](https://github.com/greatscottgadgets/ubertooth/wiki/Build-Guide), the [FAQ](https://github.com/greatscottgadgets/ubertooth/wiki/FAQ), and a [guide on how to use the Ubertooth One together with Wireshark](https://github.com/greatscottgadgets/ubertooth/wiki/Capturing-BLE-in-Wireshark).

## Installation and Setup
The Ubertooth One works with several operating systems, but this guide will assume that you are using <b>Kali Linux</b>. For guides on other operating systems, please see the Build Guide in the [Ubertooth repository](https://github.com/greatscottgadgets/ubertooth/wiki/Build-Guide).

First of all, you need to install the prerequisites:
```
sudo apt install cmake libusb-1.0-0-dev make gcc g++ libbluetooth-dev wget \
pkg-config python3-numpy python3-qtpy python3-distutils python3-setuptools
```

Now you need the Bluetooth baseband library (libbtbb):
```
wget https://github.com/greatscottgadgets/libbtbb/archive/2020-12-R1.tar.gz -O libbtbb-2020-12-R1.tar.gz
tar -xf libbtbb-2020-12-R1.tar.gz
cd libbtbb-2020-12-R1
mkdir build
cd build
cmake ..
make
sudo make install
sudo ldconfig
```

And last but not least you need the Ubertooth repo itself in order to sniff Bluetooth packets and configure the Ubertooth:
```
wget https://github.com/greatscottgadgets/ubertooth/releases/download/2020-12-R1/ubertooth-2020-12-R1.tar.xz
tar -xf ubertooth-2020-12-R1.tar.xz
cd ubertooth-2020-12-R1/host
mkdir build
cd build
cmake ..
make
sudo make install
sudo ldconfig
```

If you for some reason have an older version of Wireshark (older than v.2.2), you need to get some additional Wireshark plugins. Please see [this page](https://github.com/greatscottgadgets/ubertooth/wiki/Build-Guide#wireshark-plugins) to learn how.

## Sniffing Bluetooth packets in Wireshark
The Ubertooth One can be used with Wireshark to sniff BLE packets. To sniff BLE packets in Wireshark, follow these steps:
1. Open up a terminal and run `mkfifo /tmp/pipe`
2. Open up Wireshark
3. Navigate to Capture > Options and then click Manage Interfaces
4. Next click Pipes, and click the `+` button
5. Name the new pipe "/tmp/pipe"
6. Save and exit the Capture Options
7. Start a Wireshark Capture with the "/tmp/pipe" interface/pipe selected
8. In a Terminal, run `ubertooth-btle -f -c /tmp/pipe`
9. Go back to Wireshark - you should now see the packets coming in


## First Steps
There are two things that you can try out once you've gotten the Ubertooth set up properly.

### Spectrum Analysis
The first thing you can try is to run a simple spectrum analysis.
1. Make sure that the Ubertooth has an antenna connected to it - *never operate the Ubertooth without an antenna connected*
2. Plug the Ubertooth into your computer
3. Navigate to the `host/python/specan_ui` directory in the Ubertooth repo
4. Execute `ubertooth-specan-ui` and enjoy the show!

### LAP Sniffing
A complete Bluetooth MAC address (BD_ADDR) consists of 46 bits. LAP stands for Lower Address Part and consists of the 24 lower bits of the BD_ADDR, and is the only part of the address that is transmitted in every Bluetooth packet.

The method in this example shows false positives at times. Therefore, check if the same LAP is used in multiple packets to make sure it's correct.

1. Make sure that the Ubertooth has an antenna connected to it - *never operate the Ubertooth without an antenna connected*
2. Plug the Ubertooth into your computer
3. Execute `ubertooth-rx` and enjoy the show! Try sending some test traffic, for example by using a smartphone and a Bluetooth peripheral.

If you want to find the Upper Address Part (UAP) of the BD_ADDR once you've gotten a LAP that you're confident is correct, run `ubertooth-rx -l [LAP]`

<!---
## Bluetooth Hacking - An example
Garmin Venu Smartwatch?
https://github.com/greatscottgadgets/ubertooth/wiki/Getting-Started
-->

## Credit
All of the information on this page is taken from the [Project Ubertooth Github page](https://github.com/greatscottgadgets/ubertooth/wiki/Getting-Started). For more details on any topic on this page, consult the [Project Ubertooth Github page](https://github.com/greatscottgadgets/ubertooth/wiki/Getting-Started) first.
