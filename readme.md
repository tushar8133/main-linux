
| COMMANDS | DESCRIPTION |
|-|-|
| `man` | read manual |
| `curl` | `curl -LO https://github.com....` |
| `curl` | `curl -L https://github.com/releases/tags... > myfile` |
| `ln` | |
| `alias` | |
| `sort -k2 test.txt` | |
| `echo hahaha` | display text in console, from a console |
| `echo hahaha > file.txt` | overwrite text to a file |
| `echo hahaha >> file.txt` | append the text to the file |
| `cat A.txt` | display text in console, from a file |
| `cat A.txt B.txt`  | combine text from multiple file in console |
| `cat A.txt B.txt > C.txt`  | combine text from multiple file and write to a file |
| `cat > A.txt` <kbd>↵</kbd> hahaha <kbd>^</kbd>+<kbd>d</kbd> | write some text on terminal and create a file |
| `cat <<EOL>> A.txt` <kbd>↵</kbd> hahaha <kbd>↵</kbd> `EOL` <kbd>↵</kbd> | append text to file |
| `find -name test.txt` | for finding files |
| `find / -name test.txt` | for finding files and folders |
| `diff test1.txt test2.txt` | |
| `uniq test.txt` | to find only unique lines |
| `history` | |
| `touch hello.txt` | create a file |
| `# ls` | list command |
| `ls -ltr` | |
| `ls -a` | list folders starting with . |
| `ls -l` | show list in detail |
| `ls -al` | `-a` & `-l` combined |
| `ll` | similar to `ls -l` || mv | `mv ~/file.txt ~/folder` | Move Files |
| `cd myfolder` | Change Directory |
| `cd my-*` | Change Directory to folder starting from __my__ |
| `mv file1.txt file2.txt` | Rename Files |
| `cp file1.txt ~/folder` | copy files |
| `mkdir myfolder` | make directory |
| `rmdir folder1` | remove empty directory |
| `rm -rf foldername` | remove directory with files (`-r` recursive, `-f` force) |
| `rm test.txt` | remove files |
| `locate -i redhouse**city*` | search in whole OS |
| `clear` | clear console |
| `dmesg`| for kernel logs |
| `more` | page by page increment order |
| `less` | page by page decrement order |
| `some_command_output \| more`| combine with other commands also |
| `which node` | gives `nodejs` path |
| `pwd` | present working directory |
| `whoami` | username |
| `who` | list currently logged-in users with their time spend |
| `open notes.txt` `open .` | open notes.txt or open current folder |
| `head` | show top 10 lines |
| `tail` | show last 10 lines |
| `tail -f` | show last 10 lines and keep waiting for new data |
| `date` | show date |
| `cat notes.txt \| sort \| uniq` | piping parameters |
| `top` | activity monitor |
| `wc` | word count |
| `du` | directory usage |
| `du -h \| sort -h` | directory usage human readable and sorted as human readable |
| `df` | get size of disk |
| `ps -ax \| grep node` | ProcessStatus - check on which PID node is running |
| `kill -l` | doesnt kill. Just list all Signals |
| `kill <PID>` | kill process (default is -15 or SIGTERM)|
| `kill -9 <PID>` | `kill -KILL <PID>` pull the plug |
| `kill -15 <PID>` | `kill -TERM <PID>` ask to terminate |
| `kill -19 <PID>` | `kill -STOP <PID>` ask to stop |
| `killall node` | SIGTERM for all running node process |
| `killall -9 node` | SIGKILL for all running node process |
| `bg` example `tail -r &` | `&` in the end or `^z` shortcut will send this process to background |
| `jobs` | jobs will show all process send to background |
| `fg <JOBS_ID>` | will bring back background processes in the front |
| `cat oldnotes.txt \| xargs rm`  | `xargs` will convert the arguments and pass it to the piped command in the expected format, otherwise `rm` will throw error because it doesnt accept parameters that way |
| `su tushar` | switch user |
| `sudo` | superuser |
| `su sudo` | switch to superuser |
| `passwd` | change password |
| `chmod` | change permission |
| `chown Tushar file.txt` | change ownership. The file is now managed by user Tushar |
| `chown Tushar:Admin myfile.txt` | the file is now managed by user Tushar and the group Admin |
| `sed -i "" "1s/^/VERSION\n/" index.html` | prepend text at top of the index.html file |


# youtube
- https://www.youtube.com/watch?v=ZtqBQ68cfJc
- https://www.youtube.com/watch?v=LKCVKw9CzFo

# chmod

To check permissoin of a file or folder
```bash
ls -la
```

```
          ┌───────────┐ ┌───────────┐ ┌───────────┐
          │   USER    │ │   GROUP   │ │   OTHER   │
┌───────┐ ├───────────┤ ├───────────┤ ├───────────┤ ┌────────┐
│ chmod │ │     7     │ │     7     │ │     7     │ │ myfile │
└───────┘ ├───┬───┬───┤ ├───┬───┬───┤ ├───┬───┬───┤ └────────┘
          │ R │ W │ X │ │ R │ W │ X │ │ R │ W │ X │
          └───┴───┴───┘ └───┴───┴───┘ └───┴───┴───┘
```

| **Number** | Permission | R+W+X | Commonly Used Numbers |
|:---:|:---:|:---:|---|
| **0** | – – – | 0+0+0 | REMOVE ALL PERMISSIONS |
| **1** | – – X | 0+0+1 |  |
| **2** | – W – | 0+2+0 |  |
| **3** | – W X | 0+2+1 |  |
| **4** | R – – | 4+0+0 | READ ONLY |
| **5** | R – X | 4+0+1 |  |
| **6** | R W – | 4+2+0 | READ + WRITE |
| **7** | R W X | 4+2+1 | READ + WRITE + EXECUTE |



#### who
- `u` User
- `g` Group
- `o` Other
- `a` All (same as `ugo`)

```bash
chmod UGO yourfile
chmod 400 yourfile
```

#### permission
- `r` Read
- `w` Write
- `x` Execute
- `-` No Permission


#### operators
- `=` set
- `+` add
- `-` remove

```bash
$ chmod 777 filename
$ chmod u=rwx,g=rwx,o=rwx filename
$ chmod a=rwx filename
```

```bash
$ chmod 664 filename
$ chmod u=rw,g=rw,o=r filename
$ chmod a+rwx,u-x,g-x,o-wx filename
```

Folder `-R` for recursive
```bash
$ chmod -R 777 foldername
```

# `grep`
`grep -in "my-regex-here" filename.txt`

`i` IgnoreCase  
`n` LineNumber  
`r` Recursive  
`l` ListFilenamesOnly  

* `grep "my-regex-here" filename.txt` single file
* `grep "my-regex-here" *` all files in current directory
* `grep -r "my-regex-here" ./dir1` recursive search inside directory
* `grep -r "my-regex-here" ./dir1 ./dir2 ./dir3` recursive search inside multiple directories
* `grep -r "my-regex-here" ./dir1 > output.txt` print result in separate file

It can be combined with other commands, like `ls | grep "html"`

# Archive Compression formats
- `tar` archive format (does not compress)
- `gzip` low compression
- `bzip2` medium compression
- `xz` high compression

# Compress single file
- `zip video.mp4`
- `gzip video.mp4`
- `bzip2 video.mp4`

# Extract
- `unzip archive.zip`
- `gunzip archive.gzip`
- `bunzip2 archive.bz2`
- `gunzip archive.xz`

# Archive & Compression Extensions
- `.gz` (gzip) _[DEFLATE]_
- `.bz` (bzip)
- `.bz2` (bzip2) _[Burrows–Wheeler]_
- `.xz` (xz) _[LZMA]_
- `.tar` (tar)
- `.tar.gz` (tar + gzip)
- `.tar.bz` (tar + bzip)
- `.tar.bz2` (tar + bzip2)
- `.tar.xz` (tar + xz)
- `.tgz` (tar + gzip)
- `.tbz` (tar + bzip)
- `.tbz2` (tar + bzip2)
- `.txz` (tar + xz)

# `tar -options`
- `tar -c` : Creates Archive 
- `tar -x` : Extract the archive 
- `tar -v` : Displays Verbose Information 
- `tar -f` : creates archive with given filename 
- `tar -t` : displays or lists files in archived file 
- `tar -u` : archives and adds to an existing archive file 
- `tar -A` : Concatenates the archive files 
- `tar -W` : Verify a archive file 
- `tar -r` : update or add file or directory in already existed .tar file 
- `tar -z` : gzip
- `tar -j` : bzip2
- `tar -J` : xz

# Examples

- __Create archive without compression__
	- `tar -cvf archive.tar /myfolder/A`

- __Create archive of only `.txt` files__
	- `tar -cvf archive.tar *.txt`

- __Create gzip archive from multiple paths, excluding specifics__
	- `tar -czvf archive.tar.gz /myfolder/A /myfolder/B /myfolder/C --exclude=/myfolder/A/temp --exclude=*.mp4`

- __Extract `.tar` archive__
	- `tar -xvf archive.tar -C /pathtoextract`

- __Extract `.tar.gz` archive__
	- `tar -xzvf archive.tar.gz -C /pathtoextract`

- __Extract `.tar.bz2` archive__
	- `tar -xjvf archive.tar.bz2 -C /pathtoextract`

# Terminal
- `echo $0` to check what kind of terminal it is _zsh_, _bash_
- `echo $SHELL` to get the path of the termial (not sure) _`bin/zsh`_


# Terminal Color

| value | name |
|---|---|
| 0 | Reset: turn off all attributes |
| 1 | Bold (or bright, it’s up to the terminal and the user config to some extent) |
| 3 | Italic |
| 4 | Underline |
| 30–37 | Set text colour from the basic colour palette of 0–7 |
| 38;5;n | Set text colour to index n in a 256-colour palette (e.g.&nbsp;\x1b[38;5;34m) |
| 38;2;r;g;b | Set text colour to an RGB value (e.g.&nbsp;\x1b[38;2;255;255;0m) |
| 40–47 | Set background colour |
| 48;5;n | Set background colour to index n in a 256-colour palette |
| 48;2;r;g;b | Set background colour to an RGB value |
| 90–97 | Set text colour from the bright colour palette of 0–7 |
| 100–107 | Set background colour from the bright colour palette of 0–7 |


<details>
<summary>Extra detailed table (expand)</summary>

| Code | Effect | Note |
|---|---|---|
| 0 | Reset / Normal | all attributes off |
| 1 | Bold or increased intensity |
| 2 | Faint (decreased intensity) | Not widely supported. |
| 3 | Italic | Not widely supported. Sometimes treated as inverse. |
| 4 | Underline |
| 5 | Slow Blink | less than 150 per minute |
| 6 | Rapid Blink | MS-DOS ANSI.SYS; 150+ per minute; not widely supported |
| 7 | [[reverse video]] | swap foreground and background colors |
| 8 | Conceal | Not widely supported. |
| 9 | Crossed-out | Characters legible, but marked for deletion.  Not widely supported. |
| 10 | Primary(default) font |
| 11–19 | Alternate font | Select alternate font n-10 |
| 20 | Fraktur | hardly ever supported |
| 21 | Bold off or Double Underline | Bold off not widely supported; double underline hardly ever supported. |
| 22 | Normal color or intensity | Neither bold nor faint |
| 23 | Not italic, not Fraktur |
| 24 | Underline off | Not singly or doubly underlined |
| 25 | Blink off |
| 27 | Inverse off |
| 28 | Reveal | conceal off |
| 29 | Not crossed out |
| 30–37 | Set foreground color | See color table below |
| 38 | Set foreground color | Next arguments are 5;&lt;n&gt; or 2;&lt;r&gt;;&lt;g&gt;;&lt;b&gt;, see below |
| 39 | Default foreground color | implementation defined (according to standard) |
| 40–47 | Set background color | See color table below |
| 48 | Set background color | Next arguments are 5;&lt;n&gt; or 2;&lt;r&gt;;&lt;g&gt;;&lt;b&gt;, see below |
| 49 | Default background color | implementation defined (according to standard) |
| 51 | Framed |
| 52 | Encircled |
| 53 | Overlined |
| 54 | Not framed or encircled |
| 55 | Not overlined |
| 60 | ideogram underline | hardly ever supported |
| 61 | ideogram double underline | hardly ever supported |
| 62 | ideogram overline | hardly ever supported |
| 63 | ideogram double overline | hardly ever supported |
| 64 | ideogram stress marking | hardly ever supported |
| 65 | ideogram attributes off | reset the effects of all of 60-64 |
| 90–97 | Set bright foreground color | aixterm (not in standard) |
| 100–107 | Set bright background color | aixterm (not in standard) |

</details>

<details>
<summary>All console.log(colors) (expand)</summary>

```
console.log(`\x1b[${0}mXXXXXXXXX\x1b[0m`, "0=default");
console.log(`\x1b[${1}mXXXXXXXXX\x1b[0m`, "1=bold");
console.log(`\x1b[${2}mXXXXXXXXX\x1b[0m`, "2=dull");
console.log(`\x1b[${3}mXXXXXXXXX\x1b[0m`, "3=italic");
console.log(`\x1b[${4}mXXXXXXXXX\x1b[0m`, "4=underline");
console.log(`\x1b[${5}mXXXXXXXXX\x1b[0m`, "5=blink, tested in mac terminal");
console.log(`\x1b[${7}mXXXXXXXXX\x1b[0m`, "7=inverse");
console.log(`\x1b[${8}mXXXXXXXXX\x1b[0m`, "8=transparent");
console.log(`\x1b[${9}mXXXXXXXXX\x1b[0m`, "9=striked-off, tested in node");
console.log(`\x1b[${21}mXXXXXXXXX\x1b[0m`, "21=underline, tested in node");
console.log(`\x1b[${30}mXXXXXXXXX\x1b[0m`, "30=fg-darker");
console.log(`\x1b[${31}mXXXXXXXXX\x1b[0m`, "31=fg-red");
console.log(`\x1b[${32}mXXXXXXXXX\x1b[0m`, "32=fg-green");
console.log(`\x1b[${33}mXXXXXXXXX\x1b[0m`, "33=fg-yellow/golden");
console.log(`\x1b[${34}mXXXXXXXXX\x1b[0m`, "34=fg-blue/purple");
console.log(`\x1b[${35}mXXXXXXXXX\x1b[0m`, "35=fg-magenta/pink");
console.log(`\x1b[${36}mXXXXXXXXX\x1b[0m`, "36=fg-turqoise/aqua");
console.log(`\x1b[${37}mXXXXXXXXX\x1b[0m`, "37=fg-white/gray");
console.log(`\x1b[${40}mXXXXXXXXX\x1b[0m`, "40=bg-black");
console.log(`\x1b[${41}mXXXXXXXXX\x1b[0m`, "41=bg-red");
console.log(`\x1b[${42}mXXXXXXXXX\x1b[0m`, "42=bg-green");
console.log(`\x1b[${43}mXXXXXXXXX\x1b[0m`, "43=bg-yellow/golden");
console.log(`\x1b[${44}mXXXXXXXXX\x1b[0m`, "44=bg-blue/purple");
console.log(`\x1b[${45}mXXXXXXXXX\x1b[0m`, "45=bg-magenta/pink");
console.log(`\x1b[${46}mXXXXXXXXX\x1b[0m`, "46=bg-turqoise/aqua");
console.log(`\x1b[${47}mXXXXXXXXX\x1b[0m`, "47=bg-white/gray");
console.log(`\x1b[${90}mXXXXXXXXX\x1b[0m`, "90=fg-bright-darker");
console.log(`\x1b[${91}mXXXXXXXXX\x1b[0m`, "91=fg-bright-red");
console.log(`\x1b[${92}mXXXXXXXXX\x1b[0m`, "92=fg-bright-green");
console.log(`\x1b[${93}mXXXXXXXXX\x1b[0m`, "93=fg-bright-yellow/golden");
console.log(`\x1b[${94}mXXXXXXXXX\x1b[0m`, "94=fg-bright-blue/purple");
console.log(`\x1b[${95}mXXXXXXXXX\x1b[0m`, "95=fg-bright-magenta/pink");
console.log(`\x1b[${96}mXXXXXXXXX\x1b[0m`, "96=fg-bright-turqoise/aqua");
console.log(`\x1b[${97}mXXXXXXXXX\x1b[0m`, "97=fg-bright-white/gray");
console.log(`\x1b[${100}mXXXXXXXXX\x1b[0m`, "100=bg-bright-gray");
console.log(`\x1b[${101}mXXXXXXXXX\x1b[0m`, "101=bg-bright-red");
console.log(`\x1b[${102}mXXXXXXXXX\x1b[0m`, "102=bg-bright-green");
console.log(`\x1b[${103}mXXXXXXXXX\x1b[0m`, "103=bg-bright-yellow/golden");
console.log(`\x1b[${104}mXXXXXXXXX\x1b[0m`, "104=bg-bright-blue/purple");
console.log(`\x1b[${105}mXXXXXXXXX\x1b[0m`, "105=bg-bright-magenta/pink");
console.log(`\x1b[${106}mXXXXXXXXX\x1b[0m`, "106=bg-bright-turqoise/aqua");
console.log(`\x1b[${107}mXXXXXXXXX\x1b[0m`, "107=bg-bright-white/gray");
```
</details>

Greyish...
```
console.log(7, `\x1b[${7}mXXXXXXXXX\x1b[0m`);
console.log(47, `\x1b[${47}mXXXXXXXXX\x1b[0m`);
console.log(107, `\x1b[${107}mXXXXXXXXX\x1b[0m`);
```

Loop
```
for (let i = 0; i < 150; i++) {
    console.log(i, `\x1b[${i}mXXXXXXXXX\x1b[0m`);
}
```

- `\e` or `\x1b` or `\033`
- `\e[0m` Reset to default
- https://ss64.com/nt/syntax-ansi.html
- https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences
- https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html


---

# Websites
- https://suckless.org
- https://distrowatch.com
- https://www.reddit.com/r/unixporn
- https://github.com/3rfaan/dotfiles
- https://github.com/daimaou92/install-arch-vmwarefusion-techpreview

# POSIX
A set of standard operating system interfaces based on the Unix operating system

POSIX compliant OS (ie: LINIX, MINIX, QNX, etc)

# SHUTDOWN / POWEROFF / REBOOT / RESTART
- `sudo shutdown` default shutdown after 1 minute
- `sudo shutdown now` shutdown immediately
- `sudo shutdown -h now +120` shutdown after 120 minutes
- `sudo shutdown -r now` restart immediately
- `sudo shutdown -c` cancel shutdown if timer is running

# Shell Script
- ___0 is stdin___
- ___1 is stdout___
- ___2 is stderr___
- `echo test > file.txt` To redirect _stdout_ to file.txt
- `echo test 1> file.txt` same as above (1 is for _stdout_)
- `echo test 2> file.txt` To redirect _stderr_ to file.txt (2 is _stderr_)
- `echo test 1>&2` To merge _stdout_ to _stderr_
- `echo test 2>&1` To merge _stderr_ to _stdout_
- `echo test 2>&1 &` last ampersand will send all the process to a background terminal

# Search content within archives

- `zipgrep tushar backup.zip`
- `zipgrep -i tushar backup.zip` case in-sensitive
- `zipgrep -i [0-9]{10, 12} backup.zip` with regex
- search within multiple zip files and outputs the result
```
for i in *.zip
do
   zipgrep -i tushar "$i" >> results.txt
done
```

# 7z 7zip
- Installation for MACOS
	- https://7-zip.org/a/7z2407-mac.tar.xz
	- `zprofile` paste it `alias 7z="/Users/tushar/Setups/7z2407-mac/7zz"`
- Frequently used commands
	- `7z a filename ./folder/` default
	- `7z a -mx0 filename ./folder/` compression store
	- `7z a -mx9 filename ./folder/` compression fastest
	- `7z a -mx9 filename ./folder/` compression ultra
	- `7z a -pWELCOME filename ./folder/` with password
	- `7z a -pWELCOME -mhe filename ./folder/` with password and encryption
	- `7z x archive.7z` to extract at same level
	- `7z x archive.7z -oPATHTOEXTRACT -r` to extract at different location
 	- `7z x archive.7z -oPATHTOEXTRACT -r -pSECRET` to extract with password
- Args (https://axelstudios.github.io/7z)
	- `-mx` Compression Level
	- `-m0` Compression Method
	- `-md` Dictionary Size
	- `-mfb` Word Size
	- `-ms` Solid Block Size
	- `-mmt` Number of CPU threads
	- `-p` password
	- `-mhe` encrypt file names

 
# directory structure
- `bin` -> `usr/bin` all terminal commands binaries
- `boot` GRUB and Kernel
- `cdrom` cdrom
- `dev` External devices like Harddisk, Printer, Modem
- `etc` config files. config.d files
- `home` User profile folder
- `lib` -> `usr/lib` OS libraries
- `lib32` -> `usr/lib32` OS libraries
- `lib64` -> `usr/lib64` OS libraries
- `libx32` -> `usr/libx32` OS libraries
- `lost+found`
- `media` Removable drives
- `mnt` Mount Removable drives
- `opt` Not used much, KDE, GNOME
- `ргос` Process Signals, Kernel interacts with System
- `root` Profile folder for Root user
- `run` Mount Removable drives, but automatically, in newer systems
- `sbin` -> `usr/sbin` System Binary. Terminal commands which can only be run by a Super user
- `snap` Ubuntu related applications
- `srv` 
- `swapfile` swap file or could be a separate partition
- `sys` 
- `tmp` Temp files delete on shutdown
- `usr` Unix-System-Resources. Shared directory for all users
- `var` log files, www, wwwroot


# Compile Source Code

- Below command will install `GCC (GNU C compiler)` or `LLVM` for C language and other essential tools required for builing from source code
- For Fedora, CentOS and similar distributions
	```sh
	sudo dnf install @development clang
	```
- For Debian, Elementary, Mint, and similar distributions
	```sh
	sudo apt install build-essential clang
	```
- Download source code and extract and go inside
- Project could have been made with `Autotools` or `CMake`
- If the project is built using `Autotools` then run these lines.
	```sh
	$ ./configure
	$ make
	$ sudo make install
	```
- If successful, then you can find the binary inside `./project/project/src/`
- If the project is built using `CMake` then run these lines.
	```sh
	mkdir build
	cd build
	cmake ..
	make
	sudo make install
	```
