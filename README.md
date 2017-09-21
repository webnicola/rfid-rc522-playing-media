# Rfid RC522 playing media
[<img src="https://img.shields.io/badge/Node.js-4.x%20through%207.x-brightgreen.svg">](https://nodejs.org)

A simple project for playing sounds using a Rfid RC522 and raspberry pi with es6.

Based on Node.js I2C module: [rc522](https://github.com/ocsacesar/rc522).

Play with omxplayer.

## Functionality
The module is currently only able to read the serial number of the tag which is hold onto the reader.

## Installation

## 1. Install node:
```
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y nodejs
```

## 2. Update your PI:
``` 
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo rpi-update
sudo apt-get clean
```

## 3. Configure the PI:

The RFID reader is plugged onto the raspberry pi like it is described over here http://geraintw.blogspot.de/2014/01/rfid-and-raspberry-pi.html
- The GCC compiler is installed ```sudo apt-get install build-essential```
- node-gyp is installed ```sudo npm install -g node-gyp```

## 4. Compile the spi_bcm2835 driver:
First of all we have to install the C library for Broadcom BCM 2835 as it describe` here
```
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.49.tar.gz
tar -zxf bcm2835-1.49.tar.gz
cd bcm2835-1.49
./configure
make
sudo make check
sudo make install
sudo modprobe spi_bcm2835
```

## 5. Start a node project

```
npm start
```
