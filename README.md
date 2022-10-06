# react-raspberry-dashboard

### Simple dashboard to monitor room air quality, weather, cryptocurrencies and... whatever you want (just add some API`s).

## [![Dashboard Preview](https://i.imgur.com/xAR68OK.png "Dashboard Preview")](https://i.imgur.com/xAR68OK.png "Dashboard Preview")

### Hardware requirements

---

- Raspberry Pi 3B+ (maybe lower, but better to have a wifi module to make it easier)
- DHT22 or similar sensor
- Cooling (optional)

### Connections

---

| Raspberry | DHT22 | Fan |
| --------- | ----- | --- |
| 5V        | VCC   |     |
| GPIO4     | DATA  |     |
| GND       | GND   | GND |
| 3.3V      |       | VCC |

[![Connection Diagram](https://i.imgur.com/wd49HcA.png "Connection Diagram")](https://i.imgur.com/2Ou6zFD.png "Connection Diagram")

### Setup

---

- Create raspbian bootale usb with [Pi Imager](https://www.raspberrypi.com/software/ "Pi Imager"), press ctrl+shift+x to open advanced options, setup wifi and ssh

  [![Wifi settings](https://i.imgur.com/2zKzxVD.png "Wifi settings")](https://i.imgur.com/2zKzxVD.png "Wifi settings")

- Reserve the IP-address of Pi in the DHCP table of your router (mine is 192.168.0.102)
- Connect to your Pi via ssh `ssh pi@192.168.0.102`
- Install required dependecies
  - `sudo apt-get update`
  - `sudo apt-get upgrade`
  - `sudo apt install build-essential python-dev git`
  - `git clone https://github.com/adafruit/Adafruit_Python_DHT`
  - `cd Adafruit_Python_DHT`
  - `sudo python setup.py install`
  - To check the sensors is working
    - `cd /home/pi/Adafruit_Python_DHT/examples`
    - then `./AdafruitDHT.py 22 4` you should see output like this `Temp=25.1* Humidity=25.4%`
- [ Install Nodejs and yarn](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04 " Install Nodejs and yarn")
- Install serve package globally to serve our frontend `sudo yarn global add serve`

### Start the app

---

- `git clone https://github.com/h4x0rlol/react-raspberry-dashboard.git`
- `cd server`, create .env with your API keys (like in .env.example), `yarn`, `yarn start`
- `cd .. && cd frontend`, `yarn`, `yarn build`, `serve -s build`
- Now go to your Pi adress:3000 with any device in your network to see dashboard
- Add dashboard to Raspberry startup
  - `sudo nano /etc/rc.local`
  - add the folowing lines
    `(cd /home/pi/fun/react-raspberry-dashboard/client; serve -s build) & (cd /home/pi/fun/react-raspberry-dashboard/server; yarn start) &`
  - then `sudo reboot`
- Now our server and client should start on the Pi startup
