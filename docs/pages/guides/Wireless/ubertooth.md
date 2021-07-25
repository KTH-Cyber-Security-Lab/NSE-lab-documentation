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

<!---
## Spectrum Analysis

## Bluetooth Hacking - An example
Garmin Venu Smartwatch?
https://github.com/greatscottgadgets/ubertooth/wiki/Getting-Started
-->
