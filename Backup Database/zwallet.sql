-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Sep 2020 pada 18.45
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
  `income` int(11) NOT NULL,
  `expense` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`id`, `income`, `expense`, `userId`, `senderId`, `receiverId`, `date`) VALUES
(1, 2000, 39999, 1, 1, 1, '2020-09-25 15:48:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `receivers`
--

CREATE TABLE `receivers` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` varchar(256) NOT NULL,
  `phoneNumber` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `receivers`
--

INSERT INTO `receivers` (`id`, `name`, `image`, `phoneNumber`) VALUES
(1, 'Arindaa 1', 'http://localhost:4000/uploads/1600937462453-Rectangle 3.png', '0873217834364');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transfer`
--

CREATE TABLE `transfer` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `balanceLeft` int(11) NOT NULL,
  `notes` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transfer`
--

INSERT INTO `transfer` (`id`, `userId`, `receiverId`, `amount`, `balanceLeft`, `notes`, `date`) VALUES
(1, 1, 1, 200000, 0, 'bayar utang', '2020-09-25 06:06:28');

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
  `phoneNumber` varchar(32) NOT NULL,
  `image` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `pin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `email`, `phoneNumber`, `image`, `password`, `pin`) VALUES
(1, 'Regina', 'Putri', 'rputria18', 'rputria18@gmail.com', '02893784624', 'http://localhost:4000/uploads/1600941755345-Rectangle 3.png', '$2a$10$0VtZFQLN1F/JGReWSeIgOurV/DxQB.IdIWz0H5FoCsj2I6RMsNgKi', 3011920);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `senderId` (`senderId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `history_ibfk_1` (`receiverId`);

--
-- Indeks untuk tabel `receivers`
--
ALTER TABLE `receivers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `transfer_ibfk_2` (`receiverId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `receivers`
--
ALTER TABLE `receivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`receiverId`) REFERENCES `receivers` (`id`),
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`senderId`) REFERENCES `transfer` (`id`),
  ADD CONSTRAINT `history_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `transfer`
--
ALTER TABLE `transfer`
  ADD CONSTRAINT `transfer_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `transfer_ibfk_2` FOREIGN KEY (`receiverId`) REFERENCES `receivers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
