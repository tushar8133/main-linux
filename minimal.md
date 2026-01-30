# Debian
- https://saimei.ftp.acc.umu.se/debian-cd/current/arm64/iso-cd/debian-13.3.0-arm64-netinst.iso
```
sudo apt update
sudo apt upgrade -y
sudo apt install xorg xinit i3 terminator chromium
echo "exec i3" > ~/.xinitrc
startx
```

# Ubuntu
- https://cdimage.ubuntu.com/releases/24.04/release/ubuntu-24.04.3-live-server-arm64.iso
```
sudo apt update
sudo apt upgrade -y
sudo apt install xorg xinit i3 terminator chromium
echo "exec i3" > ~/.xinitrc
startx
```

# Fedora
- https://mirror.twds.com.tw/fedora/fedora/linux/releases/43/Server/aarch64/iso/Fedora-Server-netinst-aarch64-43-1.6.iso
```
sudo dnf update
sudo dnf install xorg-x11-server-Xorg xorg-x11-xinit i3 terminator chromium
echo "exec i3" > ~/.xinitrc
startx
```

# Arch
#### DIY
- http://os.archlinuxarm.org/os/ArchLinuxARM-aarch64-latest.tar.gz

#### ISO
- https://wiki.archlinux.org/title/Parallels_Desktop
- https://release.archboot.com/aarch64/2026.01/iso/archboot-2026.01.29-02.29-6.18.7-1-aarch64-ARCH-local-aarch64.iso

#### VM
  - https://wiki.archlinux.org/title/Parallels_Desktop
  - https://pkgbuild.com/~tpowa/parallels/5.19.x/Arch%20Linux%20Parallels%20Desktop.pvm.zip
  - Extract .zip and keep .pvm inside `~/Parallels` then launch Parallels, choose `Open` and Select .pvm file
  - login details - https://pkgbuild.com/~tpowa/parallels/Readme.txt
```
sudo pacman -Syu
sudo pacman -S xorg-server xorg-xinit i3-wm alacritty
echo "exec i3" > ~/.xinitrc
startx
```


# Commands
- disk partitions info
  ```
  cat /etc/fstab
  ```
- OS info (just like neofetch or fastfetch)
  ```
  cat /etc/os-release
  ```
