## Packages Types
- Debian
    - `apt-get` `apt-cache` old
    - `apt` new (combined old ones)
    - `dpkg -i package.deb` Package and Installer
- Fedora/Suse
    - `yum` older
    - `dnf` new
    - `rpm -i package.rpm` Package and Installer
- Arch
    - `pacman`
    - `pacman -Qi package.pkg[.tar|.zst|.gz|.xz]` Alpm Package (usually not found)
    - AUR (Arch User Repository)
        - `git clone https://aur.archlinux.org/brave.git` **&** `cd brave/`
        - `makepkg -si` Package Compiler
        - `yay -S brave` Package Installer
        - OR
        - `git clone git://git.suckless.org/dwm` **&** `cd dwm`
        - `pacman -Sy base-devel`
        - `$ make`
        - `# make install` or `make clean install`
- Snap (Ubuntu, Manjaro)
- Flatpack (Only graphics application)
- AppImage

## Distros
- Puppy Linux
- Gentoo
- Tiny Core
- Solus
- Slackware
- Fedora
    - Amazon Linux 2
    - RedHat
        - OracleLinux
        - CentOS
            - ClearOS
- Suse
    - SLES (Suse Linux Enterprise Server)
        - OpenSuse
- [ArchLinux](https://pkgbuild.com/~tpowa/archboot/iso/aarch64/latest)
    - EndeavourOS
    - Manjaro
    - Garuda
- Debian
    - MX Linux (Stable)
    - Deepin (Stable)
    - antiX
    - Kali
    - Ubuntu (Unity)
        - Kubuntu (KDE plazma)
        - Lubuntu (LXDE)
        - Xubuntu (XFCE)
        - Ubuntu Gnome (Gnome3)
        - Ubuntu Mate (Gnome2)
        - Bodhi Linux
        - Mint
        - Pop!_OS
        - Zorin
        - Elementary


# System Update
- `sudo dnf update`
- `sudo pacman -Syu`

## Add Users
- `useradd -m -g users -G wheel,storage,power,video,audio tushar` (m) setup home directory, (g) add to group
- `passwd [tushar]`

## Switch User
- `su` or `sudo su` switch to ROOT user
- `su -` switch back to ROOT user with old history
- `su tushar` switch back to normal user with fresh state
- `su - tushar` switch back to normal user with old history

## Remove SUDO permissions
- `pacman -S sudo` install sudo as a root user  
   and write `visudo`  
   or `EDITOR=nano visudo` to open with specific editor
- `sudo vim /etc/sudoers`
```shell
# Uncomment these lines
root ALL=(ALL) ALL
%wheel ALL=(ALL) ALL
%wheel ALL=(ALL) ALL NOPASSWD: ALL
%sudo ALL=(ALL) ALL
# Add this line
Defaults !tty_tickets
```

## Pacman Stuff
- `sudo nano /etc/pacman.conf`
- `ParallelDownloads=5`

## Create User Directories
- `sudo pacman -Sy xdg-user-dirs`
- `xdg-user-dirs-update`

## Shutdown
- `poweroff`
- `shutdown now`

## Reboot
- `reboot`
- `shutdown -r now`

## Install/Uninstall
- Fedora
    - `sudo fnd install neofetch`
    - `sudo fnd remove neofetch`
- Arch
    - `pacman -S neofetch`

- Debian
    - `sudo apt install neofetch`

## Check Installed Packages
- `dnf history userinstalled` return only user installed
- `dnf list installed` return all
- `yum list installed` return all
- `rpm -qa` return all
- `dnf autoremove` remove orphan packages
- `pkcon search name neofetch` search packages

## `.xinitrc`

login as a NORMAL user

`sudo nano /etc/X11/xinit/.xinitrc` global file

`sudo nano ~/.xinitrc` local file

`exec dwm` for dwm

`exec xfce4-session` for xfce

`startx` will start the Xorg server and run your configured apps 

```
sudo dnf update
sudo dnf install git sddm bspwm sxhkd kitty rofi polybar picom thunar nitrogen lxpolkit ocs fonts Xcfgs mongohud vim lxappearacne
```

## `sddm`

`sudo systemctl enable sddm`

`sudo systemctl set-default graphical.target`

`/etc/sddm.conf`

```
Autologin
Session=bspwm
User=titus
```

`/etc/sddm/Xsetup`

## Remove LoginManager and install your WM

[Youtube link](https://www.youtube.com/watch?v=ut72fRROT30)

Install `dwm` and `xinit` on top on existing WM, Now if you open DWM, by just typing `dwm` from terminal, but you will get this error saying "Another WM is already running", so you need to kill your WM. You can do it by pressing `ctrl + alt + backspace` or `ctrl + alt + F1` to get to TTY screen, then enter credentials and open `~/.xinitrc` file or create it if not present. Then write these below lines -

```
exec dwm &
xrdb ~/.Xresources &
exec slstatus
xrandr -s 1920x1080 #not the correct way, should be done using startx command
```

install `xinit` (already done in previous steps) and run `startx` to start the configured WM, instead of LoginManager running your WM


## Unknown
- lxpolkit
- Xcfgs
- lxappearacne

# ??
- GTK+
- QT
