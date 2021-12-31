---
title: Cara Mengaktifkan Verifikasi Commit di GitHub Desktop for Windows
tags: [GitHub, Commit, Hacks, Windows]
style: fill
color: danger
description: Dokumen ini berisi cara menambahkan GPG key untuk mengaktifkan Verified pada commit di GitHub Desktop for Windows.
---

#### Instalasi

1. **Pasang [GPG4Win](https://gpg4win.org/download.html)**: _software ini sudah berisi versi terbaru dari software GnuPG v2, Kleopatra v3 certificate manager, GNU Privacy Assistant (GPA) v0.9 yang sudah memiliki GUI yang menggunakan GTK+, GpgOL dan GpgEX yang mendukung ekstensi untuk Microsoft Outlook Windows Explorer shell_

2. **Pasang [Git for Windows](https://gitforwindows.org/)**: instalasi paket ini sudah termasuk *nix based shell, _yang berisi versi terbaru dari Git yang menggunakan environment MINGW, Git bash shell, Git GUI dan ekstensi untuk Windows Explorer shell_

	Pastikan versi GitHub Dekstop yang terpasang pada perangkatmu adalah versi 2.0 keatas, jika tidak demikian maka Git tidak mendukung sign commit secara otomatis.

	> Gunakan perintah `git --version` untuk memeriksa versi GitHub Desktop yang sudah terpasang pada Windows :

	```
	$ git --version
	# git version 2.33.0.windows.2
	```

	Perlu diingat bahwa Git for Windows hanya berisi GnuPG versi 1.4.xx (versi usang) instalasi GPG ini disediakan dari environment MINGW, tetapi versi tersebut **sudah tidak relevan**, karena kita akan menggunakan versi lain (yang terbaru) dari GnuPG yang disediakan oleh paket instalasi GPG4Win!.

3. **Pasang [GitHub Desktop](https://desktop.github.com/)** yang berfungsi sebagai user inteface atau tampilan pengguna untuk mempermudah pengunggahan commit baru, dengan menekan tombol **Commit**, atau bisa juga menggunakan software **[Atom](https://atom.io)**

4. **Buat GPG keys milikmu sendiri di Windows** dengan menggunakan software **[Gpg4Win](https://gpg4win.org/download.html)**, mengikuti instruksi berikut :

	1. Buka Git Bash dari folder manapun.
	
	2. Lalu jalankan perintah `gpg --full-generate-key` di terminal Git Bash, perintah ini hanya dapat digunakan pada Git Bash versi 2.1.17 atau yang lebih baru, untuk versi yang lebih lama dapat menggunakan perintah `gpg --default-new-key-algo rsa4096 --gen-key`.
	
	3. Setelah itu akan ada pertanyaan tipe key yang ingin dibuat, silahkan tekan **Enter** saja untuk menggunakan pilihan default yaitu **RSA dan RSA**.*
	
	4. Setelah itu, akan ada permintaan ukuran algoritma key yang akan dibuat, silahkan pilih **4096** bit lalu tekan **Enter**.*

		> Minimal ukuran key adalah 2048 bit, tetapi saranku adalah menggunakan key 4096 bit karena lebih baik, atur masa aktif GPG key ke **No Expiry**, kamu juga dapat memasukkan banyak email ke GPG key mu.

	5. Setelah itu akan muncul permintaan masa aktif key tersebut (expired date), lalu atur masa aktif ke **No Expiry**.*
	
	6. Pastikan semua data yang dimasukkan sudah benar.*

		> *Langkah 3,4,5,6 hanya untuk Git Bash versi 2.1.17 ke atas.

	7. Masukkan informasi ID akun GitHub mu. Pastikan email pada akun tersebut sudah terverifikasi, silahkan gunakan [link ini untuk mengetahui cara 
verifikasi email GitHub](https://docs.github.com/en/articles/verifying-your-email-address).

	8. Isi passphrase (kata sandi/password) untuk key tadi.
	
	9. Jalankan perintah `gpg --list-secret-keys --keyid-format=long` untuk menampilkan daftar GPG key yang terdaftar baik itu public key atau private key. _private key digunakan untuk sign git commit atau tag baru_.
	
	10. Salin kode GPG key dari langkah sebelumnya jika ingin digunakan, sebagai contoh bentuk key`03E3A0AEF5A25899` pada contoh dibawah ini :

		```
		$ gpg --list-secret-keys --keyid-format=long
		/c/Users/helmi/.gnupg/pubring.kbx
		---------------------------------
		sec   rsa4096/03E3A0AEF5A25899 2021-09-25 [SC]
			  31EDDG924B88E1BE7ECYFAE404E2A0AEF5A92868
		uid                 [ultimate] Nama (komentar) <e@mail.ku>
		ssb   rsa4096/1C5694FB5F9C2FC9 2021-09-25 [E]
		```

	11. Salin format key dari atas, lalu tambahkan pada akhir dari perintah `gpg --armor --export`, contoh :

		```
		$ gpg --armor --export 03E3A0AEF5A25899
		# Lalu akan muncul ID dari GPG key dalam format ASCII.
		```

	12. Salin GPG key diatas, mulai dari baris `-----BEGIN PGP PUBLIC KEY BLOCK-----` sampai baris `-----END PGP PUBLIC KEY BLOCK-----`.  
	
	13. Lalu tambahkan GPG key tersebut ke akun GitHub mu dengan menggunakan langkah-langkah [dari sini](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account).

5. Periksa kembali GPG key yang sudah dibuat tadi dengan perintah `gpg --list-secret-keys --keyid-format LONG`, pada contoh kali ini akan menggunakan kode kunci `03E3A0AEF5A25899`.

6. Buat file `.rev` untuk membuat revocation certificate (sertifikat pembatal kunci). dengan menggunakan perintah `gpg --gen-revoke` lalu ditambah dengan kode kunci pada langkah sebelumnya, contoh :

	```
	gpg --gen-revoke 03E3A0AEF5A25899
	```

7. Bagikan key tersebut dengan perintah :

	```
	gpg --send-keys 03E3A0AEF5A25899
	```

8. Tambahkan public GPG key tadi ke GitHub mu dengan menuju <https://github.com/settings/keys>, lalu klik **New GPG Key** lalu letakkan salinan key public tadi, setelah itu klik tombol **Add GPG Key**.

9. Atur Git untuk auto-sign commit, perintah dibawah ini mengatur perintah git secara global, jika kamu ingin mengatur pada salah satu repo, hilangkan tag `--global` dari perintah dibawah ini :

	```
	$ git config --global user.signingkey 03E3A0AEF5A25899
	$ git config --global commit.gpgsign true
	```

10. Atur Git untuk menggunakan program GPG yang lain :

	```
	$ git config --global gpg.program "C:\Program Files\Git\usr\bin\gpg.exe"
	```

	Standar ``gpg.exe`` bawaan Git Bash ada pada direktori `C:\Program Files\Git\usr\bin\gpg.exe` untuk program GPG dari GPG4Win terletak pada direktori `C:\Program Files (x86)\GnuPG\bin\gpg.exe`.

#### Tambahan
- Opsional: matikan TTY jika auto-sign commit pada GitHub Desktop memiliki kendala atau masalah, dengan menjalankan perintah `echo 'no-tty' >> ~/.gnupg/gpg.conf` pada terminal Git Bash.
- Tombol **Commit** pada GitHub Desktop akan menampilkan permintaan password, standar waktu penyimpanan password GPG hanya berlaku selama 30 menit. Untuk memperpanjang durasi penyimpanan sementara tersebut, jalankan perintah `nano ~/.gnupg/gpg-agent.conf` lalu isi dengan `default-cache-ttl 259200`, angka 259200 berarti 3 hari yang berasal dari perhitungan 60 detik x 60 menit x 24 jam x 3 hari.

#### Referensi
- [WINDOWS] How to enable auto-signing Git commits with GnuPG for programs that don't support it natively - <https://gist.github.com/BoGnY/f9b1be6393234537c3e247f33e74094a>
- Generating a new GPG key - <https://help.github.com/articles/generating-a-new-gpg-key/>
- Adding a new GPG key to your GitHub account - <https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account>
- git commit signing failed: secret key not available - <https://stackoverflow.com/questions/36810467/git-commit-signing-failed-secret-key-not-available>
- 7.4 Git Tools - Signing Your Work - <https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work>
- GPG Signing - <https://gist.github.com/xavierfoucrier/c156027fcc6ae23bcee1204199f177da>
- Remember GPG password when signing git commits - <https://stackoverflow.com/questions/36847431/remember-gpg-password-when-signing-git-commits>


<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
