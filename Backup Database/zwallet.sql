-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Okt 2020 pada 09.11
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `notes` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`id`, `userId`, `senderId`, `receiverId`, `amount`, `notes`, `date`) VALUES
(1, 1, 1, 3, 20000, 'bayar hutang', '2020-09-25 15:48:47'),
(2, 3, 3, 2, 100000, 'bayar olshop', '2020-09-26 04:16:59'),
(3, 1, 3, 1, 40000, 'bayar iuran', '2020-10-03 06:52:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `phone`
--

CREATE TABLE `phone` (
  `id` int(11) NOT NULL,
  `phoneNumber` varchar(32) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `phone`
--

INSERT INTO `phone` (`id`, `phoneNumber`, `userId`) VALUES
(1, '082367243762841', 1),
(2, '0823672437', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `image` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `pin` int(11) NOT NULL,
  `balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `email`, `image`, `password`, `pin`, `balance`) VALUES
(1, 'Regina', 'Putri', 'rputria18', 'rputria18@gmail.com', 'http://localhost:4000/uploads/1601448575670-Rectangle 3.png', '$2a$10$h0CCN1U0nAR50NDLd1qUFOVp7.VLndX7avy95pGT7lwKCR3MhAIBK', 3011920, 80000),
(2, 'Aku', 'Putri', 'akuputri', 'reginaputria2003@gmail.com', 'http://localhost:4000/uploads/1601199465105-logo.png', '$2a$10$4/LeCteu9Mjdl6XQG5v0IOHzDe8vAYA0mQTVPH6/8AyxP7JRiqe7O', 0, 100000),
(3, 'Regita', 'Arinda', 'akuarinda', 'reginaputria2003@gmail.com', 'https://i7.pngguru.com/preview/527/663/825/logo-person-user-person-icon.jpg', '$2a$10$O/mpvbLTLbBCUWlbO0iR3eafkLcuoItpVWY5NCjGjeCP6Jz2qZwZq', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `receiverId` (`receiverId`),
  ADD KEY `senderId` (`senderId`);

--
-- Indeks untuk tabel `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `phone`
--
ALTER TABLE `phone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`receiverId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `phone`
--
ALTER TABLE `phone`
  ADD CONSTRAINT `phone_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
