
### Mount and Unmount

### Example Scenario

Let's say you have another partition called `/dev/sdb1` that you want to mount to `/mnt` instead of `/dev/sda1`.

1. **Check the Current Mounts**

   ```bash
   lsblk
   ```

   Output:
   ```
   NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
   sda      8:0    0  100G  0 disk 
   └─sda1   8:1    0  100G  0 part /mnt
   sdb      8:16   0  200G  0 disk 
   └─sdb1   8:17   0  200G  0 part 
   ```

2. **Unmount `/dev/sda1` from `/mnt`**

   ```bash
   umount /mnt
   ```

3. **Mount `/dev/sdb1` to `/mnt`**

   ```bash
   mount /dev/sdb1 /mnt
   ```

4. **Verify the New Mount**

   ```bash
   lsblk
   ```

   Updated output:
   ```
   NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
   sda      8:0    0  100G  0 disk 
   └─sda1   8:1    0  100G  0 part 
   sdb      8:16   0  200G  0 disk 
   └─sdb1   8:17   0  200G  0 part /mnt
   ```

Now, `/dev/sdb1` is mounted at `/mnt`, and you can access its contents from that location.
