---
title: 0x01 - Analyzing UART
parent: Hardware Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Analyzing UART

## 1. UART internals

* Designed for two different components on a device to talk to each other 
* Microcontroller chip in devices typically have UART pins
* UART is a way of serial communication 
* Common serial channels (TTL, RS232, USB, PCI, HDMI, SPI, I2C, CAN)
  * TTL interface has 3-5 pins
  * RS-232 interface has a 9-pin connector, etc.
* These interfaces are also used for debugging (testing connections) the device

* UART Data packet
  * starting bit (usually 0)
  * message (any 8-bits)
  * parity bit (not used)
  * stop bit (usually 1)

* UART Data packet format (usual configuration)
  * 8N1 — which means 8 message bits, no parity bit, and 1 stop bit 

* UART Port type 
  * hardware-based or software-based
  * when there is not enough UART ports on chipset
    * UART is emulated via GPIO (means software UART)
    * it is a rare situation
      
## 2. Pentest objectives
* Access debug logs that usually contains a booting sequence
* (might) allow bootloader access while the device is booting
* (might) provide unauthenticated root shell (console access)
* (might) provide loading firmware over the network
* and more

* Custom bootloaders are designed to prevent from entering single user mode
  * but that can also be bypassed.
    
## 3. Tools
* Multimeter
* Logic analyzer (for analyzing data packet)
  * Saleae Logic Analyzer (or)
  * Open Workbench Logic Sniffer
* UART Converter/Adapter (any supported FTDI based hardware)
  * USB-TTL (or)
  * BusPriate (or)
  * Attify Badge
  * baudrate.py
* Communication
  * minicom (or)
  * screen (or)
  * Attify Badge GUI
    
## 4. Identify UART pinouts
* Look for the shape online to learn
* Visual inspection of the internal device components
  * looking for 3/4 pins or pads close to each other
  * rarely scattered across the board
* UART pins

  Pin | Function
  -----|--------
  Transmit (Tx) | Transmits data from the device to the target
  Receive  (Rx) | Receives data from the target to the device
  Ground  (GND) | Ground
  Voltage (Vcc) | Usually either 3.3V or 5V

* Chipset will have instructions on the connectors, otherwise use a
* Multimeter
  * continuity test (for GND)
    * **make sure the device is turned off**
    * set the pointer to continuity
    * place the black probe on a ground surface (any metal part on device)
    * place the red probe on each of the four pads one by one
    * the pin is giving the beep sound is the GND

  * voltage difference (for the Tx, Rx, Vcc)
    * set the pointer to V-20
    * place the black probe to GND
    * turn device on
    * place the red probe over other pins
    * constant high voltage is our Vcc pin

    * reboot the device
    * place the red probe over the other pins
    * huge fluctuation in the voltage value is Tx pin
      * during the initial 10–15 seconds 
    * lowest voltage during entire process is Rx

* Confirm the findings by hooking up a logic analyzer
  
## 5. Connecting UART
* A converter device for emulating a serial connection 
  * to communicate two devices over UART/JTAG/I2C,SPI,GPIO
  * USB-TTL or BusPriate or Attify Badge
* A proper voltage converter 
  * i.e. when using a 3.3v serial device to a 5v serial device
  * serial connection emulators have built-in

* Adapter (Attify Badge) pin layout
  
  Pin|Function
  ---|---
  D0 | Tx Transmit
  D1 | Rx Receive

* Connect the EEPROM pins to the adapter (Attify Badge) by using jumper wires

  UART | Adapter
  -----|--------
  Tx | Rx
  Rx | Tx
  GND | GND
  Vcc | is NOT connected

* Connect the adapter to the analysis PC via USB
  * learn the mount point under /dev
  * by default mounted on COM port /dev/USB0
  
## 6. Command shell
* **Baud rate** specifies the number of bits transmitted per second
  * data being transferred between devices = data rate

* **Identify the baud rate** of the device
  * common rates: 9600, 38400, 19200, 57600, and 115200
  * otherwise, find it by trial and error
  
  `baudrate.py`
    * change baud rates while establishing a serial connection
    * visually inspect which baud rate gives the readable output
    * after detecting correct baud rate press Ctrl + C

* **Interacting with console**
  * screen < mount point > < baud rate >
  
  `screen /dev/ttyUSB0 38400`
  
  * reboot the device
  * access debug logs of the device booting up process
  * right after booting, "busybox" is up
  * unauthenticated root shell on the device

* ## References

* [Getting the router shell using UART interface and bus pirate]( https://iotmyway.wordpress.com/2018/05/19/getting-the-router-shell-using-uart-interface-and-bus-pirate/)
* [A journey into IoT – Hardware hacking: UART](https://techblog.mediaservice.net/2019/03/a-journey-into-iot-hardware-hacking-uart/)
* [More router fun: UART connections with Putty](https://www.youtube.com/watch?v=ix6rSV2Dj44&ab_channel=Defenceindepth)
* [lesson 3 - Arduino Debugging, Uart, Led PWM](https://www.youtube.com/watch?v=hgjlEeMGAQ0&ab_channel=RoeeBloch)
