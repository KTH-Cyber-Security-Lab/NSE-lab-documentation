---
title: 0xFF - Background: Demystifying Serial, UART, RS-232, and so on
parent: Hardware Hacking
grand_parent: Hacking Guides
has_children: false
nav_order: 1
---

# Background: Demystifying Serial, UART, RS-232, and so on

All these protocols and interfaces can be very confusing. This page does not
go into too much detail, but is an attempt to provide you keywords, links and
some intuition. This should hopefully give you a starting-point.

<!-- TODO add diagrams? or assume people will follow the links to wikipedia? -->

## UART
[Universal Asynchronous Receiver-Transmitter](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter) (UART) is a hardware component used to implement asynchronous serial communication.
Essentially it takes "data" and emits digital pulses (a.k.a. [line code](https://en.wikipedia.org/wiki/Line_code)).
Usually UART takes one byte at a time and emits the bits in
[NZR](https://en.wikipedia.org/wiki/Non-return-to-zero) format,
but there are other formats.

Examples:
* <https://en.wikipedia.org/wiki/8250_UART>

## Serial
[Serial communication](https://en.wikipedia.org/wiki/Serial_communication) is the idea of sending one bit at a time over an interface.
This is usually done over a single wire in each direction (a wire for A-to-B and a wire for B-to-A) but there are more complicated ways (like half-duplex differential signalling in USB).
This is a opposed to [parallel communication](https://en.wikipedia.org/wiki/Parallel_communication) where multiple bits are sent at once (which requires one wire per bit).

UART is asynchronous in the sense that the device on the sending end and the device on the receiving end are not synchronized using for example a shared clock.

Often the term "UART" and "serial" will be used interchangeably to refer to the full setup (hardware, cable, protocol, communication, etc.).

There are multiple protocols that fall in the category of serial communication and many are typically implemented using some form of UART-component.
See for example [here](https://en.wikipedia.org/wiki/Serial_port).


## TTL serial
The term "TTL serial" has to do with [voltage levels](https://en.wikipedia.org/wiki/Logic_level#TTL)
and [Transistor-Transistor Logic](https://en.wikipedia.org/wiki/Transistor%E2%80%93transistor_logic).
The idea is that transistor-level logic gates can be said to communicate by raising and lowering the voltage level of a wire.
Typically there will be a "logic high" voltage level (for example 3.3V) and a "logic low" voltage level (for example 0V).
Some protocols may use more than two voltage levels.

In the this way information can also be sent one bit at a time across a wire between two devices, as
long as both ends agree on the timing and interpretation of the signal.
In a sense all digital communication protocols are "TTL" on some level.

A "pull-up resistor" or "pull-down resistor" is used to set the default voltage
level (the voltage when nothing is being sent). If the default is not set then
the voltage level can "float" between the levels due to electromagnetic
interference.
A component is said to "drive" a wire if it keeps it from floating.
In bus interfaces (like RS-485 and SPI), floating is often necessary to make
sure at most one component drives a wire at any time.

## GPIO
[General Purpose Input/Output](https://en.wikipedia.org/wiki/GPIO) (GPIO) is
just a pin with no pre-defined meaning that you can use however you want. It
can be used as part of implementing interfaces on this page assuming you can
read/write to it fast enough. In some cases additional wiring and components
may be necessary (for example a pull-up resistor) but may require additional
wiring if you need to adjust the voltage). You may have seen these on
Raspberry Pi and Arduino.

See also:
* [Raspberry Pi pinout](https://pinout.xyz/)
* [Arduino Pinout](https://www.arduino.cc/en/reference/board)

## RS-232
[RS-232](https://en.wikipedia.org/wiki/RS-232) (a.k.a. EIA/TIA-232) is an old
serial communication standard that has since been readapted for various
purposes.

RS-232 is typically associated with the [DB-25](https://en.wikipedia.org/wiki/DB-25) connector.
This connector is common on older PCs, but have mostly been replaced (in favor of USB) on modern PCs.

The actual standard uses + x V for logic low and -x V for logic high, such that: 3 <= x <= 13.
Many modern IoT devices found "in the wild" will however communicate in ways that do not fully comply with the RS-232 standard.
IoT devices may for example use 3.3V (or 5V) for logic high and 0V for logic low.
These variants are not necessarily clearly standardizes, which is why the naming can be very
confusing ("serial", "TTL", "RS-232", "UART" and various other names are used).

There might be UART-components used in the circuit that implements RS-232, but
additional components and wiring are typically needed to convert the voltage to/from a UART-component.

RS-232 specifies a lot of pins, but most of them are optional. On IoT devices
there is usually:

  Pin | Function
  -----|--------
  Transmit (TxD) | Transmits data from A to B
  Receive  (RxD) | Transmits data from B to A
  Ground  (GND) | Ground

This a "full duplex" connection that allows data to flow in both directions at the same time.
Note that TxD on device A goes to RxD on device B and vice versa.
The GND-pin is necessary as reference when measuring the voltage of
the other two pins (so TxD is x volts relative to GND).

Optionally either TxD or RxD can be removed to create a "simplex" (one-way)
connection.

In some cases there may also be a "VCC" (or "V+") pin that is used to supply
power to the device. This pin can usually be ignored if the device is already
powered from somewhere else. Be careful when trying to supplying power to VCC
from a Raspberry Pi or Arduino since they may not be able to provide enough
current (and they can break if they try anyway)). Also make sure the voltage is correct.
You may want a [power supply](https://en.wikipedia.org/wiki/Power_supply).

Note that neither RS-232 nor UART specify what data to actually send. In
practice it is common to see
[NZR](https://en.wikipedia.org/wiki/Non-return-to-zero) being used to send one
ASCII-character (one byte) at a time.

With only the above pins the serial communication is asynchronous.
The remaining pins ([here are only some](https://en.wikipedia.org/wiki/RS-232#Data_and_control_signals)) are mainly used for various types of synchronization and "control flow".
Notably "RTS", "RTR" and "CTS" that have to do with readiness to receive data).

See also:
* <https://en.wikipedia.org/wiki/Serial_port>
* <https://www.sparkfun.com/tutorials/215>
* <https://support.honeywellaidc.com/s/article/What-are-the-differences-between-TTL-and-a-True-RS232-serial-interface>
* <https://en.wikibooks.org/wiki/Serial_Programming/RS-232_Connections>

## USB
[USB](https://en.wikipedia.org/wiki/USB) is perhaps a serial communication you are more familiar with.
We will not go into too much detail here.
However, it might be interesting to note how USB pins and wiring work to contrast it the other types described on this page.
Unlike RS-232 or UART, USB more clearly standardizes everything from hardware, to the connectors, to the protocol.

USB use [differential signalling](https://en.wikipedia.org/wiki/Differential_signaling) on a [twisted pair](https://en.wikipedia.org/wiki/Twisted_pair) of wires.
The pins of USB Type-A and Type-B look like this:

  Pin   | Function
  ------|--------
  V<sub>BUS</sub> | power from A to B
  D-    | Transmits data
  D+    | Transmits data
  GND   | Ground

If you look inside a Type-A or Type-B USB connector (or jack) you should be able to see these
four pins.

The difference between the voltages of D+ and D- is used to calculate the
actual data sent. Think of it as D+ and D- together forming "TxD". The
differential signalling helps to counteract noise from electromagnetic
interference.

The USB protocol differentiates between the "host" (for example a PC) and the
device (for example a mouse or smartphone) and works like a master-slave style
protocol.

The USB protocol is half duplex. The host and device take turns to transmit
using D+ and D-. The control flow in the USB protocol is used to dermine who
gets to use the wires and when.

Newer versions of USB add additional twisted pairs to achieve full-duplex for
increased speed.

See also:
* <https://en.wikipedia.org/wiki/USB_hardware>
* <https://en.wikipedia.org/wiki/USB_(Communications)>
* <https://en.wikipedia.org/wiki/USB_3.0#PINOUTS>

## RS-422
[RS-422](https://en.wikipedia.org/wiki/RS-422) (a.k.a. EIA/TIA-422) is like
RS-232, but replaces RxD and TxD with twisted pairs (similarly to USB).

## RS-485
[RS-485](https://en.wikipedia.org/wiki/RS-485) (a.k.a. EIA/TIA-485) is like
RS-422, but uses three voltage levels instead of two (low, [float](https://en.wikipedia.org/wiki/High_impedance) and high). This is used to connect
multiple devices on the same wire --  a "bus network". RS-485 is often used to
implement Modbus.

## Modbus
[Modbus](https://en.wikipedia.org/wiki/Modbus) is a protocol (rather than a
hardware interface) and can be used with many different cables and hardware.
Modbus can for example use RS-232, RS-485 or IP to communicate.

Modbus is a master-slave style of protocol. There is a single "master" device
and one or more "slave" devices. The protocol works by the master sending
commands to the slaves and the slaves responding.

The [Modbus message format](https://en.wikipedia.org/wiki/Modbus#Frame_formats)
varies depending on the underlying technology (RS-232, IP and so on), but
typically contains an address (for the slave), a function code, arguments (for
the function) and an error-detection code.

Modbus is common in industrial systems where a Remote Terminal Interface (RTU)
acts as the master and manages Programmable Logic Controllers (PLCs) and other
industrial appliances. The RTU is "remote" in the sense that it acts like a
"local server" that in turns answers to a centralized Supervisory Control and
Data Acquisition (SCADA) system. Imagine for example that there are multiple
factories and there is a RTU in each factory that can then be controlled
remotely from the headquarters.


See also:
* <https://www.modbus.org/specs.php>


## SPI
[Serial Peripheral Interface](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface) (SPI) is synchronous serial communication interface.
It allows multiple components to communicate through a bus.

Usually the pinout looks something like this:

    Pin  | Function
    -----|------------
    SCK  | Clock
    MOSI | Master Out Slave In (master -> slave)
    MISO | Master In Slave Out (master <- slave)
    SS1   | Slave Select 1
    SS2   | Slave Select 2
    ...   | ...
    SS N   | Slave Select N

SCK, MOSI and MISO are shared between all components. Master generates the
clock pulses. Each Slave Select pin is a direct connections from the master to
one of the slaves. Essentially master will turn "on" only the slave that it
wants to talk to and turn "off" all other slaves (or at least forbid communication)

In each clock-pulse master writes one bit and the slave writes one bit, at the
same time. Each end will send a bit even if they have nothing useful to say.
SPI does not specify how the bits are interpreted, but usually the master is used
to send one or more bytes that act as a command and then the slave responds
with one or more bytes.

Note that in practice there are many variations in implementations of SPI.
For example:
* Sometimes Slave Select is called "Chip Select" (CS), and sometimes CS is used
to turn on/off a group of slaves (rather than one at a time).
* Sometime SPI is instead wired in a "daisy chain" where data is forwarded in a
ring (from master to slave to slave and eventually back to master). This
variation only requires a single SS-pin on the master. 


See also:
* <https://www.youtube.com/watch?v=9hMsNOwY5AQ>

## I<sup>2</sup>C
[Inter-Integrated Circuit](https://en.wikipedia.org/wiki/I%C2%B2C) (I<sup>2</sup>C) is a synchronous serial communication interface and protocol.

I<sup>2</sup>C is a master-slave style bus consisting of two wires:

    Pin  | Function
    -----|------------
    SDA  | Data
    SCL  | Clock

The master generates the clock. The protocol is half-duplex and the master(s)
determine who gets to use SDA at different times. Each slave has an address
and the master will send commands using these addresses.

I<sup>2</sup>C allows for multiple master. Only one master can control SDA and
SCL at a time. They fight for control-rights to the bus using a process called
"arbitration".

[SMBus](https://en.wikipedia.org/wiki/System_Management_Bus) and
[PMBus](https://en.wikipedia.org/wiki/Power_Management_Bus) are more or less
variations of I<sup>2</sup>C and can in many cases be used interchangeably.

See also:
* [The I<sup>2</sup>C specification](https://www.nxp.com/documents/user_manual/UM10204.pdf)
* <https://www.i2c-bus.org/specification/>
* <https://www.youtube.com/watch?v=9hMsNOwY5AQ>


## Meter-bus ("mbus")
[Meter-bus](https://en.wikipedia.org/wiki/Meter-Bus) (or "mbus" for short) is different but similar to modbus.
However, meter-bus seems to be more for just reading, not writing.
Mbus seems to be common with energy meters (hence the name "meter-bus").

Meter-bus is standardized (in the EU) in EN13757 (notably EN13757-2 and EN13757-3).
Unfortunately the standards cost money and are not public.

See also:
* [old spec](https://m-bus.com/documentation)
* <https://download.beckhoff.com/download/document/Application_Notes/DK9322-0810-0036.pdf>
* SCADA systems

<!-- TODO describe what characteristics the pins have and what can be measured
with voltmeter. e.g. continuity, voltage, detecting pullup/down resistor,
measure impedance

impedance=resistance in DC?
-->
