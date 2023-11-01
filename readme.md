
| COMMANDS | DESCRIPTION |
|-|-|
| `man` | read manual |
| `curl` | |
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
| `ls -al` | `-a` & `-l` combined || cd | `cd myfolder` | Change Directory |
| `ll` | similar to `ls -l` || mv | `mv ~/file.txt ~/folder` | Move Files |
| `mv file1.txt file2.txt` | Rename Files |
| `cp file1.txt ~/folder` | copy files |
| `mkdir myfolder` | make directory |
| `rmdir folder1` | remove directory and files within |
| `rm test.txt` | remove files |
| `rm -rf foldername` | remove folder with files (`-r` recursive, `-f` force) |
| `locate -i redhouse**city*` | search in whole OS |
| `pwd` | present working directory |
| `whoami` | username |
| `clear` | clear console |
| `dmesg`| for kernel logs |
| `more` | page by page increment order |
| `less` | page by page decrement order |
| `some_command_output \| more`| combine with other commands also |

# chmod
||User|Group|Other|
|-:|:-:|:-:|:-:|
|__Read__|4|2|1|
|__Write__|4|2|1|
|__Execute__|4|2|1|

#### permission
- `r` Read
- `w` Write
- `x` Execute
- `-` No Permission

#### who
- `u` User
- `g` Group
- `o` Other
- `a` All (same as `ugo`)

#### operators
- `=` set
- `+` add
- `-` remove

```
$ chmod 777 filename
$ chmod u=rwx,g=rwx,o=rwx filename
$ chmod a=rwx filename
```

```
$ chmod 664 filename
$ chmod u=rw,g=rw,o=r filename
$ chmod a+rwx,u-x,g-x,o-wx filename
```

Folder `-R` for recursive
```
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
Check what kind of terminal it is - "zsh/bash"
`echo $0`

---

# Websites
- https://suckless.org
- https://distrowatch.com
- https://www.reddit.com/r/unixporn
- https://github.com/3rfaan/dotfiles
- https://github.com/daimaou92/install-arch-vmwarefusion-techpreview
