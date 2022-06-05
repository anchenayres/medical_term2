-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 01, 2022 at 12:07 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lectfive`
--

-- --------------------------------------------------------

--
-- Table structure for table `appPosts`
--

CREATE TABLE `appPosts` (
  `id` int(11) NOT NULL,
  `userpost` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `appPosts`
--

INSERT INTO `appPosts` (`id`, `userpost`, `timestamp`, `message`) VALUES
(48, 'Kibits', '2022-06-01 09:37:09', 'Lorem ipsum dolor sit amet. At inventore quia non magni sunt qui ipsam vero sed labore numquam. Et unde animi ad eius voluptas sed dolores quia aut consequatur quaerat qui beatae rerum vel nulla quas est quis illo. Qui consequatur minus qui optio tenetur ut tempora accusantium aut enim voluptatem ut voluptatibus pariatur qui tempora corporis. Ab autem officiis est accusantium sapiente aut voluptatibus voluptatem ut quos harum.'),
(49, 'Nuser', '2022-06-01 09:55:39', 'Hic repellendus voluptatem eos obcaecati blanditiis aut consectetur obcaecati est consequatur velit sit quas animi hic optio modi et suscipit suscipit. Est sapiente vitae qui eaque voluptate et ullam voluptatem cum porro veniam eum recusandae culpa.\n\nQuo molestiae fugit eos laboriosam numquam a mollitia nulla ab deserunt neque aut tenetur rerum! Eum porro officia nam illo cupiditate et autem architecto.'),
(50, 'Kibits', '2022-06-01 09:56:24', 'Hic repellendus voluptatem eos obcaecati blanditiis aut consectetur obcaecati est consequatur velit sit quas animi hic optio modi et suscipit suscipit. Est sapiente vitae qui eaque voluptate et ullam voluptatem cum porro veniam eum recusandae culpa.\n\nQuo molestiae fugit eos laboriosam numquam a mollitia nulla ab deserunt neque aut tenetur rerum! Eum porro officia nam illo cupiditate et autem architecto.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appPosts`
--
ALTER TABLE `appPosts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appPosts`
--
ALTER TABLE `appPosts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
