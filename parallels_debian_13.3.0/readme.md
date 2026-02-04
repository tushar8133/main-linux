# debian-13.3.0-arm64-DVD-1

## Download
- https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/debian-13.3.0-arm64-DVD-1.iso

## Preseed Server method
- Prepare local server
  ```
  npm i express
  node --watch server.mjs
  ```
- Get IPv4 address instead of localhost
  ```
  ipconfig getifaddr en0
  ```
- Press <kdb>e</kdb> on Boot Menu Screen and update below line
  ```
  linux	/install.a64/vmlinuz --- quiet auto=true priority=critical hostname=parallels domain=local preseed/url=http://192.168.1.6:3000/preseed.cfg?nocache=1
  ```
- Press `ctrl + x`


## Preseed ISO method
- Create ISO
  ```
  hdiutil makehybrid -o preseed.iso -iso -joliet -hfs ./preseed
  ```
- Press <kdb>e</kdb> on Boot Menu Screen and update below line
  ```
  linux	/install.a64/vmlinuz --- quiet auto=true priority=critical hostname=parallels domain=local file=/cdrom2/preseed.cfg
  ```
- Press `ctrl + x`


## Display Server
```
sudo apt update
sudo apt upgrade -y
sudo apt install xorg xinit i3 terminator chromium
echo "exec i3" > ~/.xinitrc
startx
```

## Video
```
sudo apt install -y libgl1-mesa-dri mesa-vulkan-drivers mesa-utils
reboot
```

## Audio
```
sudo apt install -y pipewire pipewire-audio pipewire-pulse wireplumber alsa-utils pavucontrol
reboot
```
## Font
```
sudo apt install -y fonts-noto-core fonts-noto-ui-core fonts-noto-mono fonts-noto-color-emoji fontconfig
```

