-- MySQL dump 10.13  Distrib 8.0.45, for Linux (x86_64)
--
-- Host: localhost    Database: wissen_wandel
-- ------------------------------------------------------
-- Server version	8.0.45-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domain_hack`
--

DROP TABLE IF EXISTS `domain_hack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domain_hack` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `hack_id` bigint unsigned NOT NULL,
  `domain_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `domain_hack_domain_id_foreign` (`domain_id`),
  CONSTRAINT `domain_hack_domain_id_foreign` FOREIGN KEY (`domain_id`) REFERENCES `domains` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domain_hack`
--

LOCK TABLES `domain_hack` WRITE;
/*!40000 ALTER TABLE `domain_hack` DISABLE KEYS */;
INSERT INTO `domain_hack` VALUES (42,NULL,NULL,31,2),(43,NULL,NULL,31,14),(49,NULL,NULL,31,6),(50,NULL,NULL,33,2),(63,NULL,NULL,34,14),(72,NULL,NULL,36,14),(73,NULL,NULL,24,2),(74,NULL,NULL,24,30),(75,NULL,NULL,21,2),(76,NULL,NULL,21,31),(77,NULL,NULL,19,2),(78,NULL,NULL,19,31),(79,NULL,NULL,19,30),(80,NULL,NULL,18,32),(81,NULL,NULL,16,32),(82,NULL,NULL,12,33),(83,NULL,NULL,8,33),(84,NULL,NULL,3,33),(85,NULL,NULL,1,2),(86,NULL,NULL,1,34),(87,NULL,NULL,38,2),(88,NULL,NULL,38,34),(89,NULL,NULL,38,35),(90,NULL,NULL,38,36),(91,NULL,NULL,39,34),(92,NULL,NULL,39,30),(93,NULL,NULL,40,37),(94,NULL,NULL,42,37),(95,NULL,NULL,42,33),(96,NULL,NULL,52,2),(97,NULL,NULL,53,37),(98,NULL,NULL,58,2),(101,NULL,NULL,58,6),(102,NULL,NULL,58,39),(103,NULL,NULL,59,2),(104,NULL,NULL,60,2),(105,NULL,NULL,68,2),(106,NULL,NULL,68,6),(107,NULL,NULL,69,34),(108,NULL,NULL,69,2),(109,NULL,NULL,70,34),(110,NULL,NULL,71,2),(111,NULL,NULL,72,36),(112,NULL,NULL,73,36),(113,NULL,NULL,75,36),(114,NULL,NULL,78,34),(115,NULL,NULL,79,36),(116,NULL,NULL,80,34),(117,NULL,NULL,81,2),(118,NULL,NULL,83,32),(119,NULL,NULL,84,2),(120,NULL,NULL,86,34),(121,NULL,NULL,87,34),(123,NULL,NULL,96,6),(124,NULL,NULL,103,2);
/*!40000 ALTER TABLE `domain_hack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domains`
--

DROP TABLE IF EXISTS `domains`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domains` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `domains_alias_index` (`alias`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domains`
--

LOCK TABLES `domains` WRITE;
/*!40000 ALTER TABLE `domains` DISABLE KEYS */;
INSERT INTO `domains` VALUES (1,'2026-02-19 20:37:45','2026-03-30 08:48:12','php','php',0),(2,'2026-02-20 05:46:14','2026-02-20 05:46:14','PHP','php',1),(4,'2026-02-20 07:18:07','2026-02-20 07:18:07','test2',NULL,0),(6,'2026-02-20 11:52:06','2026-02-20 11:52:06','C++',NULL,1),(8,'2026-02-21 11:41:06','2026-02-21 11:41:06','Веб-разработка',NULL,0),(9,'2026-02-21 11:52:00','2026-02-21 11:52:00','дадада',NULL,0),(10,'2026-02-21 11:52:38','2026-02-21 11:52:38','вф',NULL,0),(11,'2026-02-21 11:53:22','2026-02-21 11:53:22','тест 4',NULL,0),(12,'2026-02-21 11:53:31','2026-02-21 11:53:31','тест4',NULL,0),(13,'2026-02-21 11:53:43','2026-02-21 11:53:43','тест',NULL,0),(14,'2026-02-21 12:10:14','2026-02-21 12:10:14','Ссылка на хабр',NULL,0),(21,'2026-02-21 15:49:43','2026-02-21 15:49:43','datea',NULL,0),(23,'2026-02-21 15:51:52','2026-02-21 15:51:52','tst3',NULL,0),(24,'2026-02-21 15:52:18','2026-02-21 15:52:18','tst4',NULL,0),(25,'2026-02-21 15:53:35','2026-03-30 08:49:26','te','te',0),(26,'2026-02-21 15:54:13','2026-03-30 08:56:14','t5','е2',1),(27,'2026-02-21 16:02:38','2026-02-21 16:02:38','еуые',NULL,0),(29,'2026-02-21 16:11:43','2026-03-30 08:56:43','dadada2','dadada2',0),(30,'2026-02-22 08:28:43','2026-02-22 08:28:43','Отладка',NULL,0),(31,'2026-02-23 18:10:55','2026-04-06 07:26:51','1C: Bitrix',NULL,1),(32,'2026-02-23 18:15:50','2026-04-06 07:26:36','SEO',NULL,1),(33,'2026-02-23 18:20:05','2026-02-23 18:20:05','JS',NULL,0),(34,'2026-02-23 18:26:55','2026-04-06 07:26:41','Laravel',NULL,1),(35,'2026-02-23 18:31:28','2026-02-23 18:31:28','Unix',NULL,0),(36,'2026-02-23 18:31:29','2026-04-06 07:26:46','Linux',NULL,1),(37,'2026-02-23 18:37:35','2026-04-06 07:26:29','C',NULL,1),(38,'2026-03-05 17:55:06','2026-03-05 17:55:06','Апач',NULL,0),(39,'2026-03-05 17:55:21','2026-03-05 17:55:21','Тамагочи',NULL,0);
/*!40000 ALTER TABLE `domains` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hacks`
--

DROP TABLE IF EXISTS `hacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hacks` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_global` tinyint(1) NOT NULL DEFAULT '0',
  `title` text COLLATE utf8mb4_unicode_ci,
  `value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int unsigned NOT NULL DEFAULT '0',
  `ip_last_updated` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `shared_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `hacks_shared_link_unique` (`shared_link`),
  KEY `hacks_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hacks`
--

LOCK TABLES `hacks` WRITE;
/*!40000 ALTER TABLE `hacks` DISABLE KEYS */;
INSERT INTO `hacks` VALUES (1,'2026-02-12 19:18:17','2026-03-02 09:39:38',1,'Laravel: отчистка кеша (всего)','{\"time\":1772455178010,\"blocks\":[{\"id\":\"FrVh9A-LxK\",\"type\":\"paragraph\",\"data\":{\"text\":\"php artisan config:clear\"}},{\"id\":\"DX4H3LYpSv\",\"type\":\"paragraph\",\"data\":{\"text\":\"php artisan cache:clear\"}},{\"id\":\"_ZzXfeIQbX\",\"type\":\"paragraph\",\"data\":{\"text\":\"composer dump-autoload\"}},{\"id\":\"86RcS9aMza\",\"type\":\"paragraph\",\"data\":{\"text\":\"php artisan view:clear\"}},{\"id\":\"RquyyneQee\",\"type\":\"paragraph\",\"data\":{\"text\":\"php artisan route:clear\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,0),(3,'2026-02-12 19:50:47','2026-03-25 16:25:32',1,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi cum ipsa ipsum error doloremque labore veritatis, et, vero itaque possimus dolores? Consequuntur quam dolorum hic tenetur animi, et dolores?','{\"time\":1771881861998,\"blocks\":[{\"id\":\"rJHEKPotx6\",\"type\":\"paragraph\",\"data\":{\"text\":\"`${Intl.NumberFormat(\\\"ru-RU\\\", { style: \\\"currency\\\", currency: \\\"RUB\\\" }).format(Number(money))}₽`\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(8,'2026-02-12 20:03:22','2026-03-02 09:37:52',1,'Перебор полей объекта js.','{\"time\":1771881745983,\"blocks\":[{\"id\":\"iYTk-pCmSZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"for (let key in obj) {\"}},{\"id\":\"1Y7ArOMCvF\",\"type\":\"paragraph\",\"data\":{\"text\":\"  if(obj.hasOwnProperty(key)){\"}},{\"id\":\"oVnnr_b13f\",\"type\":\"paragraph\",\"data\":{\"text\":\"    console.log(`${key} : ${obj[key]}`)\"}},{\"id\":\"3gai6ulsrV\",\"type\":\"paragraph\",\"data\":{\"text\":\"  }\"}},{\"id\":\"-5xjOGOxEy\",\"type\":\"paragraph\",\"data\":{\"text\":\"}\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(12,'2026-02-12 20:03:51','2026-03-02 09:37:35',1,'Забивание массива элементами по условиям. (работает так же с объектами)','{\"time\":1772455055359,\"blocks\":[{\"id\":\"uAZII7-4M1\",\"type\":\"paragraph\",\"data\":{\"text\":\"let arr = [   // [ \\\"type=1\\\" ]\"}},{\"id\":\"L6NxONsoL9\",\"type\":\"paragraph\",\"data\":{\"text\":\"...(true? [\\\"type=1\\\"]: []),\"}},{\"id\":\"rwHLF3yxds\",\"type\":\"paragraph\",\"data\":{\"text\":\"] \"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,0),(16,'2026-02-12 20:05:25','2026-03-02 09:35:19',1,'Поиск ссылок на сайт с других сайтов','{\"time\":1771881482232,\"blocks\":[{\"id\":\"chY3JgEr86\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\\"spako.ru\\\" -site:spako.ru\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(18,'2026-02-12 20:05:53','2026-02-23 18:15:48',1,'проверка индекса сайта','{\"time\":1771881348002,\"blocks\":[{\"id\":\"Ny-VkH2BUM\",\"type\":\"paragraph\",\"data\":{\"text\":\"site:url\"}},{\"id\":\"gpqb0gXlwS\",\"type\":\"paragraph\",\"data\":{\"text\":\"cashe:url\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,0),(19,'2026-02-12 20:06:10','2026-03-02 09:33:29',1,'Вывод ошибок по коду','{\"time\":1771881243017,\"blocks\":[{\"id\":\"EiwF7VdyMV\",\"type\":\"paragraph\",\"data\":{\"text\":\"1. если ошибка именно в коде то она будет сразу отображаться\"}},{\"id\":\"ChsvxcHZgA\",\"type\":\"paragraph\",\"data\":{\"text\":\"2. если дебаг принудительный то нужен код\"}},{\"id\":\"IL09KVd2WV\",\"type\":\"paragraph\",\"data\":{\"text\":\"$GLOBALS[\'APPLICATION\']-&gt;RestartBuffer();\"}},{\"id\":\"Vk5METRg1V\",\"type\":\"paragraph\",\"data\":{\"text\":\"    if ($die === true &amp;&amp; ob_get_contents()) {\"}},{\"id\":\"yV1WJuGTgS\",\"type\":\"paragraph\",\"data\":{\"text\":\"        while (ob_get_contents()) {\"}},{\"id\":\"Ebx6VEsRpt\",\"type\":\"paragraph\",\"data\":{\"text\":\"            ob_end_clean();\"}},{\"id\":\"PnhUN5khT-\",\"type\":\"paragraph\",\"data\":{\"text\":\"        }\"}},{\"id\":\"-141HV-fD8\",\"type\":\"paragraph\",\"data\":{\"text\":\"    }\"}},{\"id\":\"2EejPBfrKe\",\"type\":\"paragraph\",\"data\":{\"text\":\"    ?&gt;&lt;pre&gt;&lt;?print_r($debug_data)?&gt;&lt;/pre&gt;&lt;?\"}},{\"id\":\"IAdD5QKUEp\",\"type\":\"paragraph\",\"data\":{\"text\":\"    if ($die === true) {\"}},{\"id\":\"zoPBR54tRX\",\"type\":\"paragraph\",\"data\":{\"text\":\"        die;\"}},{\"id\":\"JwhScREgm0\",\"type\":\"paragraph\",\"data\":{\"text\":\"    }\"}},{\"id\":\"-knggBRPTG\",\"type\":\"paragraph\",\"data\":{\"text\":\"или\"}},{\"id\":\"2H6xAFJGPx\",\"type\":\"paragraph\",\"data\":{\"text\":\"global $USER;\"}},{\"id\":\"QGVjxcVYcx\",\"type\":\"paragraph\",\"data\":{\"text\":\"    if($USER-&gt;IsAdmin()) {\"}},{\"id\":\"x3lhzl9m72\",\"type\":\"paragraph\",\"data\":{\"text\":\"        ?&gt;&lt;pre style=\\\"width: 1000px;\\\"&gt;&lt;?print_r($debug_data)?&gt;&lt;/pre&gt;&lt;?\"}},{\"id\":\"Mst4BAuB0I\",\"type\":\"paragraph\",\"data\":{\"text\":\"    }\"}},{\"id\":\"VQGwhYUMnL\",\"type\":\"paragraph\",\"data\":{\"text\":\"3. в ином случаи надо прописать логирование\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(21,'2026-02-12 20:08:31','2026-03-02 09:32:15',1,'Где лежать глобальные переменные в битриксе','{\"time\":1771881042759,\"blocks\":[{\"id\":\"chY3JgEr86\",\"type\":\"paragraph\",\"data\":{\"text\":\"local/php_interface/define.php\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(23,'2026-02-12 20:08:39','2026-03-02 09:25:12',1,'сканит директорию рекурсивно и забивает в $files пути файлов','{\"time\":1772454312219,\"blocks\":[{\"id\":\"5V1wPLmVru\",\"type\":\"paragraph\",\"data\":{\"text\":\"$rii = new \\\\RecursiveIteratorIterator(new \\\\RecursiveDirectoryIterator(resource_path() . \\\"/path/to/directory\\\"));\"}},{\"id\":\"jDSNtwrlf4\",\"type\":\"paragraph\",\"data\":{\"text\":\"$files = array();\"}},{\"id\":\"BS5gMTF14c\",\"type\":\"paragraph\",\"data\":{\"text\":\"/** @var SplFileInfo $file */\"}},{\"id\":\"sDf1IfchNe\",\"type\":\"paragraph\",\"data\":{\"text\":\"foreach ($rii as $file) {\"}},{\"id\":\"w4OFs_EFkq\",\"type\":\"paragraph\",\"data\":{\"text\":\"    if ($file-&gt;isDir()) {\"}},{\"id\":\"9yHFIGtUam\",\"type\":\"paragraph\",\"data\":{\"text\":\"        continue;\"}},{\"id\":\"s4hOC8PzT4\",\"type\":\"paragraph\",\"data\":{\"text\":\"    }\"}},{\"id\":\"h4eXZkPgSi\",\"type\":\"paragraph\",\"data\":{\"text\":\"    $files[] = $file-&gt;getPathname();\"}},{\"id\":\"a7dtYEanUf\",\"type\":\"paragraph\",\"data\":{\"text\":\"}\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(24,'2026-02-12 20:08:56','2026-03-02 09:24:23',1,'вывод ошибок в браузере','{\"time\":1772454263273,\"blocks\":[{\"id\":\"XiLmDjMnMX\",\"type\":\"paragraph\",\"data\":{\"text\":\"error_reporting(E_ALL);\"}},{\"id\":\"xHqrQszeFe\",\"type\":\"paragraph\",\"data\":{\"text\":\"ini_set(\'display_errors\', \'On\'); \"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(25,'2026-02-12 20:09:05','2026-03-02 09:31:18',1,'Пример работы с датами','{\"time\":1772454677977,\"blocks\":[{\"id\":\"f-ej9kw9Ba\",\"type\":\"paragraph\",\"data\":{\"text\":\"$now = new DateTime(); // текущее время на сервере\"}},{\"id\":\"fDd7yFJ2A_\",\"type\":\"paragraph\",\"data\":{\"text\":\"$date = DateTime::createFromFormat(\\\"Y-m-d H:i\\\", \'2014-09-12 23:59\'); // задаем дату в любом формате\"}},{\"id\":\"mgYTy7eGWH\",\"type\":\"paragraph\",\"data\":{\"text\":\"$interval = $now-&gt;diff($date); // получаем разницу в виде объекта DateInterval\"}},{\"id\":\"a0b1UOEYLy\",\"type\":\"paragraph\",\"data\":{\"text\":\"echo $interval-&gt;y, \\\"\\\\n\\\"; // кол-во лет\"}},{\"id\":\"D9uwXPNWbL\",\"type\":\"paragraph\",\"data\":{\"text\":\"echo $interval-&gt;d, \\\"\\\\n\\\"; // кол-во дней\"}},{\"id\":\"DykcSNYHd9\",\"type\":\"paragraph\",\"data\":{\"text\":\"echo $interval-&gt;h, \\\"\\\\n\\\"; // кол-во часов\"}},{\"id\":\"dRzNbGG23C\",\"type\":\"paragraph\",\"data\":{\"text\":\"echo $interval-&gt;i, \\\"\\\\n\\\"; // кол-во минут\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,0),(26,'2026-02-12 20:09:06','2026-03-02 09:30:52',1,'добавляет пробелы в число','{\"time\":1771187452498,\"blocks\":[{\"id\":\"fkbmGYGnHd\",\"type\":\"paragraph\",\"data\":{\"text\":\"number_format($price, 2, \',\', \' \');\"}}],\"version\":\"2.31.1\"}',1,NULL,1,NULL,0),(27,'2026-02-12 20:10:32','2026-03-02 09:29:10',1,'вывод в файл','{\"time\":1771187401012,\"blocks\":[{\"id\":\"JO36zexsEM\",\"type\":\"paragraph\",\"data\":{\"text\":\"$FLOG = __DIR__ . \\\"/log\\\";\"}},{\"id\":\"DX8AOCevxs\",\"type\":\"paragraph\",\"data\":{\"text\":\"$fout = fopen($FLOG, \'a\');\"}},{\"id\":\"trkZbWOGni\",\"type\":\"paragraph\",\"data\":{\"text\":\"fwrite($fout, PHP_EOL . date(\'Y-m-d H:i\') . PHP_EOL);\"}},{\"id\":\"LFS1HgDumC\",\"type\":\"paragraph\",\"data\":{\"text\":\"try{\"}},{\"id\":\"pmN_-VXLJ9\",\"type\":\"paragraph\",\"data\":{\"text\":\"&nbsp; fwrite($fout, \\\"child: \\\" . print_r($child, true) . PHP_EOL);\"}},{\"id\":\"4Y3c4ANmx4\",\"type\":\"paragraph\",\"data\":{\"text\":\"}catch (\\\\Throwable $e) {\"}},{\"id\":\"63NPMfxCUI\",\"type\":\"paragraph\",\"data\":{\"text\":\"&nbsp; fwrite($fout, \'Throwable: \' . $e-&gt;getMessage() . PHP_EOL);\"}},{\"id\":\"XnZs6Lj1LI\",\"type\":\"paragraph\",\"data\":{\"text\":\"} finally{\"}},{\"id\":\"4cznHoFbqL\",\"type\":\"paragraph\",\"data\":{\"text\":\"&nbsp; fclose($fout);\"}},{\"id\":\"yR3r2bTj_j\",\"type\":\"paragraph\",\"data\":{\"text\":\"}\"}}],\"version\":\"2.31.1\"}',1,NULL,1,NULL,0),(28,'2026-02-12 20:18:38','2026-03-02 09:28:59',1,'php dump12','{\"time\":1771187308645,\"blocks\":[{\"id\":\"tOYp6dpLRm\",\"type\":\"paragraph\",\"data\":{\"text\":\"echo \\\"&lt;pre&gt;\\\";\"}},{\"id\":\"gRkV25ZsLn\",\"type\":\"paragraph\",\"data\":{\"text\":\"var_dump($var);\"}},{\"id\":\"i7GbomO8WF\",\"type\":\"paragraph\",\"data\":{\"text\":\"echo \\\"&lt;/pre&gt;\\\";\"}},{\"id\":\"9sEH1AkbiE\",\"type\":\"paragraph\",\"data\":{\"text\":\"die();\"}}],\"version\":\"2.31.1\"}',1,'127.0.0.1',1,NULL,0),(30,'2026-02-14 20:31:51','2026-04-09 18:15:00',1,'Поиск в файлах\r\n*.php — тип файлов, которые анализируем;\r\nSTRING — то что ищем в файлах;\r\n-i будет игнорировать регистр при поиске.','{\"time\":1771187223876,\"blocks\":[{\"id\":\"PsNiyNcJ_1\",\"type\":\"paragraph\",\"data\":{\"text\":\"composer install\"}}],\"version\":\"2.31.1\"}',2,'127.0.0.1',1,NULL,200),(31,'2026-02-15 09:24:01','2026-03-31 10:23:43',0,'Асинхронный php','{\"time\":1774963423633,\"blocks\":[{\"id\":\"Z4NV2-SVxj\",\"type\":\"paragraph\",\"data\":{\"text\":\"select a.date, a.action as sent, b.actionas accepted\"}},{\"id\":\"b9fmgSWg_F\",\"type\":\"paragraph\",\"data\":{\"text\":\"    from tname as a\"}},{\"id\":\"yzzCTQ6akr\",\"type\":\"paragraph\",\"data\":{\"text\":\"    left join tname as b\"}},{\"id\":\"ReVRAMdbum\",\"type\":\"paragraph\",\"data\":{\"text\":\"    on a.user_id_sender = b.user_id_sender\"}},{\"id\":\"2S4u4mtoAQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"    and a.user_id_receiver = b.user_id_receiver\"}},{\"id\":\"nPTPfI5X_X\",\"type\":\"paragraph\",\"data\":{\"text\":\"    and b.action=\\\"accepted\\\"\"}},{\"id\":\"IG3cr8DGRw\",\"type\":\"paragraph\",\"data\":{\"text\":\"where a.action=\'sent\'\"}}],\"version\":\"2.31.1\"}',2,'127.0.0.1',1,NULL,110),(38,'2026-02-23 18:31:28','2026-03-02 09:28:25',0,'Laravel: Если есть ошибка с доступом к файлам в storage','{\"time\":1772454505053,\"blocks\":[{\"id\":\"CwWC6zeGMr\",\"type\":\"paragraph\",\"data\":{\"text\":\"sudo find  /var/www/project_1 -type f -exec chmod 644 {} \\\\;     # права на файлы\"}},{\"id\":\"IoSjth0wGu\",\"type\":\"paragraph\",\"data\":{\"text\":\"sudo find  /var/www/project_1 -type d -exec chmod 775 {} \\\\;     # права на папки\"}},{\"id\":\"Nk0KjqSvbw\",\"type\":\"paragraph\",\"data\":{\"text\":\"sudo chmod -R 777 storage/  # без этого лог файл не создаётся\"}},{\"id\":\"6eVWbhAGdc\",\"type\":\"paragraph\",\"data\":{\"text\":\"chmod -R 775 storage&nbsp;bootstrap/cache\"}},{\"id\":\"8VjLhXswlb\",\"type\":\"paragraph\",\"data\":{\"text\":\"Изменение овнершип:\"}},{\"id\":\"79xNyCaiR9\",\"type\":\"paragraph\",\"data\":{\"text\":\"sudo chown -R www-data:www-data storage bootstrap/cache\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(39,'2026-02-23 18:32:29','2026-03-02 09:26:39',0,'Подробный дебаггер для laravel','{\"time\":1772454399702,\"blocks\":[{\"id\":\"Mp0MNvjhQN\",\"type\":\"paragraph\",\"data\":{\"text\":\"https://github.com/barryvdh/laravel-debugbar\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(40,'2026-02-23 18:37:35','2026-03-02 09:26:00',0,'Компиляция программы на C','{\"time\":1772454360231,\"blocks\":[{\"id\":\"tMCdlFYGIk\",\"type\":\"paragraph\",\"data\":{\"text\":\"file.cpp -&gt; (preprocessing) =&gt; \"}},{\"id\":\"eNdTI2b1cA\",\"type\":\"paragraph\",\"data\":{\"text\":\"file.ii -&gt; (compiling) =&gt; \"}},{\"id\":\"ngCHB375AZ\",\"type\":\"paragraph\",\"data\":{\"text\":\"file.s -&gt; (assempling) =&gt; \"}},{\"id\":\"FlJpX9JdVp\",\"type\":\"paragraph\",\"data\":{\"text\":\"file.o (object file) -&gt; (linking) =&gt;\"}},{\"id\":\"d4uQTTsf8m\",\"type\":\"paragraph\",\"data\":{\"text\":\"file.exe (executable)<br><br>\"}},{\"id\":\"mCwRvanEM5\",\"type\":\"paragraph\",\"data\":{\"text\":\"g++ -0 app -Wall main.cpp \"}},{\"id\":\"x6WmEt7wxo\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\t[-O2 -ftree-partial-pre] // оптимизация О2 + опция из оптимизации О3\"}},{\"id\":\"hpoazLrEKS\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\t[-march=native] a platform-speciﬁc optimized executable (for use in production on the machine with the same architecture)\"}},{\"id\":\"Ss2B6SmyNy\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\t[-c] to compile flag without linking\"}},{\"id\":\"jwFnSUk3Rt\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\t[-std=c++11]\"}},{\"id\":\"AbuKrkfnWw\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\t[-lpcre2-8] linking pcre2 library\"}},{\"id\":\"-LxTDiTH4R\",\"type\":\"paragraph\",\"data\":{\"text\":\"\\t[-L/my/custom/path/ -lmylib]\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(54,'2026-03-05 17:29:35','2026-03-05 17:29:35',0,'31232122','{\"time\":1772742487782,\"blocks\":[{\"id\":\"SnlzBLJ0Jw\",\"type\":\"paragraph\",\"data\":{\"text\":\"test111\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(56,'2026-03-05 17:35:34','2026-03-05 17:35:34',0,'test6','{\"time\":1772742934545,\"blocks\":[],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(57,'2026-03-05 17:54:11','2026-03-05 17:54:11',0,'test','{\"time\":1772744051795,\"blocks\":[{\"id\":\"feymeNPm7X\",\"type\":\"paragraph\",\"data\":{\"text\":\"test\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(58,'2026-03-05 17:54:58','2026-03-05 17:58:25',0,'test234','{\"time\":1772744151981,\"blocks\":[{\"id\":\"hzDDgO-NPu\",\"type\":\"paragraph\",\"data\":{\"text\":\"test2\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(80,'2026-04-06 11:24:45','2026-04-06 11:24:45',0,'test','{\"time\":1775485485418,\"blocks\":[],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(81,'2026-04-06 11:24:55','2026-04-06 11:24:55',0,'test','{\"time\":1775485495654,\"blocks\":[{\"id\":\"FwxYOslwAk\",\"type\":\"paragraph\",\"data\":{\"text\":\"test\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(82,'2026-04-06 11:25:21','2026-04-06 11:25:21',0,'test','{\"time\":1775485521005,\"blocks\":[{\"id\":\"voAx4W1f94\",\"type\":\"paragraph\",\"data\":{\"text\":\"test\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(88,'2026-04-06 11:38:23','2026-04-06 11:38:23',0,'test','{\"time\":1775486303370,\"blocks\":[{\"id\":\"m_kshU6Zni\",\"type\":\"paragraph\",\"data\":{\"text\":\"123\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(89,'2026-04-06 11:40:35','2026-04-06 11:40:35',0,'test','{\"time\":1775486435067,\"blocks\":[{\"id\":\"oMivHd4XRT\",\"type\":\"paragraph\",\"data\":{\"text\":\"321\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(90,'2026-04-06 11:41:42','2026-04-06 11:41:42',0,'test','{\"time\":1775486502307,\"blocks\":[{\"id\":\"na1422NhPc\",\"type\":\"paragraph\",\"data\":{\"text\":\"12\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(91,'2026-04-06 11:43:12','2026-04-06 11:43:12',0,'test','{\"time\":1775486592737,\"blocks\":[{\"id\":\"JhRH-SfJ6a\",\"type\":\"paragraph\",\"data\":{\"text\":\"123\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(92,'2026-04-06 11:44:44','2026-04-06 11:44:44',0,'test','{\"time\":1775486684956,\"blocks\":[{\"id\":\"MZQpCHFsrT\",\"type\":\"paragraph\",\"data\":{\"text\":\"11\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(93,'2026-04-06 11:45:25','2026-04-06 11:45:25',0,'test','{\"time\":1775486725112,\"blocks\":[{\"id\":\"uwLMNv-1Vb\",\"type\":\"paragraph\",\"data\":{\"text\":\"111\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(94,'2026-04-06 11:47:48','2026-04-06 11:47:48',0,'test','{\"time\":1775486868287,\"blocks\":[{\"id\":\"fUr2jbrLlj\",\"type\":\"paragraph\",\"data\":{\"text\":\"11\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(95,'2026-04-06 11:49:57','2026-04-06 11:57:44',0,'test','{\"time\":1775487464249,\"blocks\":[{\"id\":\"xKfcSjAwbQ\",\"type\":\"paragraph\",\"data\":{\"text\":\"113456\"}},{\"id\":\"Dngc_89aDR\",\"type\":\"paragraph\",\"data\":{\"text\":\"234\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(96,'2026-04-06 12:15:11','2026-04-06 12:15:32',0,'test123','{\"time\":1775488532410,\"blocks\":[{\"id\":\"dTeLWUa_G-\",\"type\":\"paragraph\",\"data\":{\"text\":\"test1234511\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(97,'2026-04-06 12:58:00','2026-04-06 12:58:00',0,'test','{\"time\":1775491080906,\"blocks\":[{\"id\":\"we1rWDXABB\",\"type\":\"paragraph\",\"data\":{\"text\":\"test\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',NULL,NULL,100),(98,'2026-04-08 09:15:24','2026-04-08 09:15:24',0,'tsf','{\"time\":1775650524720,\"blocks\":[{\"id\":\"7wzSYNeCCY\",\"type\":\"paragraph\",\"data\":{\"text\":\"asfsadfsda\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(99,'2026-04-08 09:15:28','2026-04-08 09:15:28',0,'tsfaaa','{\"time\":1775650524720,\"blocks\":[{\"id\":\"7wzSYNeCCY\",\"type\":\"paragraph\",\"data\":{\"text\":\"asfsadfsda\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(100,'2026-04-08 09:15:29','2026-04-08 09:15:29',0,'tsfaaa','{\"time\":1775650524720,\"blocks\":[{\"id\":\"7wzSYNeCCY\",\"type\":\"paragraph\",\"data\":{\"text\":\"asfsadfsda\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(101,'2026-04-08 09:15:30','2026-04-08 09:15:30',0,'tsfaaa','{\"time\":1775650524720,\"blocks\":[{\"id\":\"7wzSYNeCCY\",\"type\":\"paragraph\",\"data\":{\"text\":\"asfsadfsda\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(102,'2026-04-08 09:15:32','2026-04-08 09:15:32',0,'tsfaaa','{\"time\":1775650524720,\"blocks\":[{\"id\":\"7wzSYNeCCY\",\"type\":\"paragraph\",\"data\":{\"text\":\"asfsadfsda\"}}],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100),(103,'2026-04-09 06:13:31','2026-04-09 06:13:51',0,NULL,'{\"time\":1775726031470,\"blocks\":[],\"version\":\"2.31.1\"}',0,'127.0.0.1',1,NULL,100);
/*!40000 ALTER TABLE `hacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2025_11_16_183515_create_personal_access_tokens_table',1),(5,'2025_11_16_192650_create_site_settings_table',1),(6,'2025_12_12_171549_create_hacks_table',1),(7,'2025_12_31_124804_create_user_login_codes_table',1),(11,'2026_02_18_165453_create_domains_table',2),(12,'2026_02_18_165502_create_domain_hack_table',2),(13,'2026_02_18_170334_alter_hacks_table',2),(14,'2026_03_31_154843_create_telegram_chats_table',3),(15,'2026_04_01_144917_create_site_crawlers_table',3),(16,'2026_04_01_150153_create_site_crawler_logs_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  KEY `personal_access_tokens_expires_at_index` (`expires_at`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (4,'App\\Models\\User',1,'main','9aac8739141c272ff0c57e4c16aac7d40e801e425c46861d6b80d60fa2d716ed','[\"*\"]',NULL,NULL,'2026-02-28 18:28:24','2026-02-28 18:28:24'),(5,'App\\Models\\User',1,'main','4c5961d305cdb05f992aa7fbc6c88937540c96aa3735396201a5f5cd461387d4','[\"*\"]','2026-03-05 17:58:25',NULL,'2026-02-28 18:29:07','2026-03-05 17:58:25'),(6,'App\\Models\\User',1,'main','2a9465a47816041403dd8d868a4127614bda5b447432c7280399b6b8172c92b2','[\"*\"]','2026-03-10 07:50:38',NULL,'2026-03-10 06:27:39','2026-03-10 07:50:38'),(7,'App\\Models\\User',1,'main','746c7d76828ee24366af9d70658167cdf4ea3c2b1c660d6f26ef4e4f56bd03fc','[\"*\"]','2026-03-10 07:54:18',NULL,'2026-03-10 07:51:49','2026-03-10 07:54:18'),(8,'App\\Models\\User',1,'main','f1f5aadf4ac9eca9f8680c0c4291f5d013b5b493298f4d1ae6b266656bd85fc0','[\"*\"]','2026-03-15 17:35:57',NULL,'2026-03-15 17:19:52','2026-03-15 17:35:57'),(9,'App\\Models\\User',1,'main','73c10dae28993214552408dc4502041244c297e26887ab776145c15f71552aae','[\"*\"]','2026-03-20 11:42:24',NULL,'2026-03-20 10:34:24','2026-03-20 11:42:24'),(10,'App\\Models\\User',1,'main','8febd08dac30892d76aa9f8d51324457728b33aa6e2e3d3264ea3cba9b3b29fc','[\"*\"]','2026-03-31 07:37:12',NULL,'2026-03-22 17:06:40','2026-03-31 07:37:12'),(11,'App\\Models\\User',1,'main','df464975b5eb3a9e1b8f14b34d12268420c192a1dea92bc90780c3ae0146a4b6','[\"*\"]','2026-03-31 11:07:46',NULL,'2026-03-31 07:39:43','2026-03-31 11:07:46'),(12,'App\\Models\\User',1,'main','85b97cd7695ed16433c3be692e78372e7e6f1c9b57d6c59cb163fbb57aa5af2b','[\"*\"]','2026-04-13 18:35:14',NULL,'2026-03-31 11:08:31','2026-04-13 18:35:14'),(13,'App\\Models\\User',1,'main','039cd0f16443395ddf0550300b42d980abb81b5e6fda0b524a4accdf09727018','[\"*\"]',NULL,NULL,'2026-04-08 09:44:19','2026-04-08 09:44:19');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_crawler_logs`
--

DROP TABLE IF EXISTS `site_crawler_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_crawler_logs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `site_crawler_id` bigint unsigned NOT NULL,
  `status` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `site_crawler_logs_site_crawler_id_foreign` (`site_crawler_id`),
  CONSTRAINT `site_crawler_logs_site_crawler_id_foreign` FOREIGN KEY (`site_crawler_id`) REFERENCES `site_crawlers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_crawler_logs`
--

LOCK TABLES `site_crawler_logs` WRITE;
/*!40000 ALTER TABLE `site_crawler_logs` DISABLE KEYS */;
INSERT INTO `site_crawler_logs` VALUES (3,'2026-04-04 16:49:06','2026-04-04 16:49:06',4,200);
/*!40000 ALTER TABLE `site_crawler_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_crawlers`
--

DROP TABLE IF EXISTS `site_crawlers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_crawlers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned NOT NULL,
  `url` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `site_crawlers_user_id_foreign` (`user_id`),
  CONSTRAINT `site_crawlers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_crawlers`
--

LOCK TABLES `site_crawlers` WRITE;
/*!40000 ALTER TABLE `site_crawlers` DISABLE KEYS */;
INSERT INTO `site_crawlers` VALUES (4,'2026-04-04 16:24:41','2026-04-04 16:24:41',1,'https://spako.ru/');
/*!40000 ALTER TABLE `site_crawlers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_settings`
--

DROP TABLE IF EXISTS `site_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_settings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `ip_last_updated` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `site_settings_key_unique` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_settings`
--

LOCK TABLES `site_settings` WRITE;
/*!40000 ALTER TABLE `site_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `site_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telegram_chats`
--

DROP TABLE IF EXISTS `telegram_chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telegram_chats` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chat_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `telegram_chats_user_name_unique` (`user_name`),
  UNIQUE KEY `telegram_chats_chat_id_unique` (`chat_id`),
  KEY `telegram_chats_user_id_foreign` (`user_id`),
  CONSTRAINT `telegram_chats_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telegram_chats`
--

LOCK TABLES `telegram_chats` WRITE;
/*!40000 ALTER TABLE `telegram_chats` DISABLE KEYS */;
/*!40000 ALTER TABLE `telegram_chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login_codes`
--

DROP TABLE IF EXISTS `user_login_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login_codes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `code` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_login_codes_expires_at_index` (`expires_at`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login_codes`
--

LOCK TABLES `user_login_codes` WRITE;
/*!40000 ALTER TABLE `user_login_codes` DISABLE KEYS */;
INSERT INTO `user_login_codes` VALUES (1,'2026-02-12 19:09:26','2026-02-12 19:24:26','Z0MJL',1),(2,'2026-02-15 20:04:29','2026-02-15 20:19:29','SRIWT',1),(3,'2026-02-15 20:05:37','2026-02-15 20:20:37','QWYPA',1),(4,'2026-02-17 10:41:09','2026-02-17 10:56:09','J54IT',1),(5,'2026-02-17 12:23:43','2026-02-17 12:38:43','FXUYE',1),(6,'2026-02-17 12:25:58','2026-02-17 12:40:58','XSACK',1),(7,'2026-02-28 18:27:56','2026-02-28 18:42:56','NDOJH',1),(8,'2026-02-28 18:28:58','2026-02-28 18:43:58','47GPR',1),(9,'2026-03-09 10:32:27','2026-03-09 10:47:27','55ZXM',2),(10,'2026-03-09 10:36:16','2026-03-09 10:51:16','NFIEV',1),(11,'2026-03-09 10:49:59','2026-03-09 11:04:59','2S9VX',2),(12,'2026-03-09 12:10:32','2026-03-09 12:25:32','XJGKU',1),(13,'2026-03-10 06:27:16','2026-03-10 06:42:16','BYLQZ',1),(14,'2026-03-10 07:50:46','2026-03-10 08:05:46','3UCMF',1),(15,'2026-03-10 07:54:25','2026-03-10 08:09:25','IRD12',1),(16,'2026-03-15 13:12:52','2026-03-15 13:27:52','D6ZXH',1),(17,'2026-03-15 17:19:15','2026-03-15 17:34:15','9TVXJ',1),(18,'2026-03-20 10:34:05','2026-03-20 10:49:05','FDSIM',1),(19,'2026-03-22 17:06:26','2026-03-22 17:21:26','QJRVT',1),(20,'2026-03-31 07:39:30','2026-03-31 07:54:30','SUNFV',1),(21,'2026-03-31 11:07:55','2026-03-31 11:22:55','FAKS9',1),(22,'2026-03-31 11:08:21','2026-03-31 11:23:21','K4HX2',1),(23,'2026-04-08 09:43:53','2026-04-08 09:58:53','K5AOD',1),(24,'2026-04-09 06:59:34','2026-04-09 07:14:34','2AT33',1);
/*!40000 ALTER TABLE `user_login_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `access` int unsigned NOT NULL DEFAULT '0',
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `ip_last_updated` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_activity_at` timestamp NOT NULL,
  `deleted_message` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,255,NULL,NULL,'kolyania1@gmail.com','test123',NULL,NULL,'2026-02-12 19:09:26',NULL,'2026-02-12 19:09:26','2026-03-04 12:14:19'),(2,0,NULL,NULL,'test@ggmail.com',NULL,NULL,NULL,'2026-03-09 10:32:27',NULL,'2026-03-09 10:32:27','2026-03-09 10:32:27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-15  0:21:21
