-- -------------------------------------------------------------
-- TablePlus 5.1.2(472)
--
-- https://tableplus.com/
--
-- Database: quizz
-- Generation Time: 2023-01-02 19:06:38.4530
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `questionId` int(11) DEFAULT NULL,
  `answers` varchar(500) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `addedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `questionId` (`questionId`),
  CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=383 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `games`;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `games_FK` (`userId`),
  CONSTRAINT `games_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(500) DEFAULT NULL,
  `typeOfQuestion` varchar(100) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `subjectId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `questions_FK` (`subjectId`),
  CONSTRAINT `questions_FK` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `results`;
CREATE TABLE `results` (
  `gameId` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `repeats` int(11) NOT NULL,
  KEY `results_FK` (`gameId`),
  KEY `results_FK_1` (`questionId`),
  CONSTRAINT `results_FK` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `results_FK_1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
  `name` varchar(100) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `PASSWORD` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

INSERT INTO `answers` (`id`, `questionId`, `answers`, `userId`, `addedAt`, `status`) VALUES
(1, 1, 'zeitliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(2, 2, 'persönliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(3, 3, 'Markttransparenz', 1, '2022-12-30 22:38:05', 1),
(4, 4, 'räumliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(5, 5, 'Homogenität der Güter', 1, '2022-12-30 22:38:05', 1),
(6, 6, 'zeitliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(7, 7, 'räumliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(8, 8, 'persönliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(9, 9, 'Homogenität der Güter', 1, '2022-12-30 22:38:05', 1),
(10, 10, 'persönliche Präferenzen', 1, '2022-12-30 22:38:05', 1),
(11, 11, 'Punktmarkt', 1, '2022-12-30 22:38:05', 1),
(12, 12, 'Rohstoffe der Unternehmer', 1, '2022-12-30 22:38:05', 1),
(13, 13, 'heterogener Markt', 1, '2022-12-30 22:38:05', 1),
(14, 14, 'gleichartig', 1, '2022-12-30 22:38:05', 1),
(15, 15, 'Heterogenität der Güter', 1, '2022-12-30 22:38:05', 1),
(16, 16, 'vom Staat gelenkt wird', 1, '2022-12-30 22:38:05', 1),
(17, 17, 'Präferenzen vorhanden sind', 1, '2022-12-30 22:38:05', 1),
(18, 18, 'Nachfragemonopol', 1, '2022-12-30 22:38:05', 1),
(19, 19, 'Zweiseitiges Oligopol', 1, '2022-12-30 22:38:05', 1),
(20, 20, 'Monopol', 1, '2022-12-30 22:38:05', 1),
(21, 21, 'Polypol', 1, '2022-12-30 22:38:05', 1),
(22, 22, 'Beschränktes Nachfragemonopol', 1, '2022-12-30 22:38:05', 1),
(23, 23, 'Polypol', 1, '2022-12-30 22:38:05', 1),
(24, 24, 'Oligopol', 1, '2022-12-30 22:38:05', 1),
(25, 25, 'Monopol', 1, '2022-12-30 22:38:05', 1),
(26, 26, 'Monopol', 1, '2022-12-30 22:38:05', 1),
(27, 27, 'Oligopol', 1, '2022-12-30 22:38:05', 1),
(28, 28, 'Polypol', 1, '2022-12-30 22:38:05', 1),
(29, 29, 'Beschränktes Nachfragemonopol', 1, '2022-12-30 22:38:05', 1),
(30, 30, 'Polypol- und Oligopolmarkt', 1, '2022-12-30 22:38:05', 1),
(31, 31, 'Oligopol', 1, '2022-12-30 22:38:05', 1),
(32, 32, 'ist ein Mengenanpasser', 1, '2022-12-30 22:38:05', 1),
(33, 33, 'die Marktmacht kleiner', 1, '2022-12-30 22:38:05', 1),
(34, 34, 'Polypol', 1, '2022-12-30 22:38:05', 1),
(35, 35, 'Zweiseitiges Monopol', 1, '2022-12-30 22:38:05', 1),
(36, 36, 'Er ist Preisfixierer', 1, '2022-12-30 22:38:05', 1),
(37, 37, 'Nachfragemonopol', 1, '2022-12-30 22:38:05', 1),
(38, 38, 'test2', 1, '2022-12-30 22:38:05', 1),
(39, 39, ' ', 1, '2022-12-30 22:38:05', 1),
(40, 40, ' ', 1, '2022-12-30 22:38:05', 1),
(41, 41, ' ', 1, '2022-12-30 22:38:05', 1),
(42, 42, ' ', 1, '2022-12-30 22:38:05', 1),
(43, 43, ' ', 1, '2022-12-30 22:38:05', 1),
(44, 44, 'open systems interconnection', 1, '2022-12-30 22:38:05', 1),
(45, 45, 'international standards organisation', 1, '2022-12-30 22:38:05', 1),
(46, 46, 'Anwendung Darstellung Sitzung Transport Vermittlung Sicherung Bitübertragung', 1, '2022-12-30 22:38:05', 1),
(47, 47, '', 1, '2022-12-30 22:38:05', 1),
(48, 48, '', 1, '2022-12-30 22:38:05', 1),
(49, 49, '10 Mb/s', 1, '2022-12-30 22:38:05', 1),
(50, 50, '1,2,3,6', 1, '2022-12-30 22:38:05', 1),
(51, 51, '10Base-t', 1, '2022-12-30 22:38:05', 1),
(52, 52, '100 Mb/s', 1, '2022-12-30 22:38:05', 1),
(53, 53, '1,2,3,6', 1, '2022-12-30 22:38:05', 1),
(54, 54, '100Base-Tx', 1, '2022-12-30 22:38:05', 1),
(55, 55, '1000 Mb/s = 1Gb/s', 1, '2022-12-30 22:38:05', 1),
(56, 56, '8', 1, '2022-12-30 22:38:05', 1),
(57, 57, '1000Base-T', 1, '2022-12-30 22:38:05', 1),
(58, 58, 'enhanced', 1, '2022-12-30 22:38:05', 1),
(59, 59, '1Gb/s; 2,5Gb/s; 5Gb/s', 1, '2022-12-30 22:38:05', 1),
(60, 60, '8', 1, '2022-12-30 22:38:05', 1),
(61, 61, '1000Base-T; NBASE-T', 1, '2022-12-30 22:38:05', 1),
(62, 62, '10 Gb/s', 1, '2022-12-30 22:38:05', 1),
(63, 63, '8', 1, '2022-12-30 22:38:05', 1),
(64, 64, '10GBase-T', 1, '2022-12-30 22:38:05', 1),
(65, 65, 'augmented', 1, '2022-12-30 22:38:05', 1),
(66, 66, '8', 1, '2022-12-30 22:38:05', 1),
(67, 67, '25GBase-T;40GBase-T;', 1, '2022-12-30 22:38:05', 1),
(68, 68, '1;2;3;', 1, '2022-12-30 22:38:05', 1),
(69, 69, '4', 1, '2022-12-30 22:38:05', 1),
(70, 70, '100', 1, '2022-12-30 22:38:05', 1),
(71, 71, '256', 1, '2022-12-30 22:38:05', 1),
(72, 72, 'richtig', 1, '2022-12-30 22:38:05', 1),
(73, 73, 'falsch', 1, '2022-12-30 22:38:05', 1),
(74, 74, 'falsch', 1, '2022-12-30 22:38:05', 1),
(75, 75, 'richtig', 1, '2022-12-30 22:38:05', 1),
(76, 76, 'richtig', 1, '2022-12-30 22:38:05', 1),
(77, 77, 'falsch', 1, '2022-12-30 22:38:05', 1),
(78, 78, '11011001', 1, '2022-12-30 22:38:05', 1),
(79, 79, 'd9', 1, '2022-12-30 22:38:05', 1),
(80, 80, '195', 1, '2022-12-30 22:38:05', 1),
(81, 81, 'c3', 1, '2022-12-30 22:38:05', 1),
(82, 82, '163', 1, '2022-12-30 22:38:05', 1),
(83, 83, '10100011', 1, '2022-12-30 22:38:05', 1),
(84, 84, '10111100', 1, '2022-12-30 22:38:05', 1),
(85, 85, 'bc', 1, '2022-12-30 22:38:05', 1),
(86, 86, '107', 1, '2022-12-30 22:38:05', 1),
(87, 87, '6b', 1, '2022-12-30 22:38:05', 1),
(88, 88, '232', 1, '2022-12-30 22:38:05', 1),
(89, 89, '11101000', 1, '2022-12-30 22:38:05', 1),
(90, 90, '000110101110', 1, '2022-12-30 22:38:05', 1),
(91, 91, '1ae', 1, '2022-12-30 22:38:05', 1),
(92, 92, '12003', 1, '2022-12-30 22:38:05', 1),
(93, 93, '0010111011100011', 1, '2022-12-30 22:38:05', 1),
(94, 94, '43575', 1, '2022-12-30 22:38:05', 1),
(95, 95, 'aa37', 1, '2022-12-30 22:38:05', 1),
(96, 96, '11111011', 1, '2022-12-30 22:38:05', 1),
(97, 97, 'FFFFFFFB', 1, '2022-12-30 22:38:05', 1),
(382, 68, 'test', 1, '2022-12-30 23:01:45', 1);

INSERT INTO `questions` (`id`, `question`, `typeOfQuestion`, `status`, `subjectId`) VALUES
(1, 'Eine Hausfrau kauft am Markt meistens kurz vor Schluss ein, weil sie dann ihre Früchte billiger erhält:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(2, 'Eine Hausfrau kauft vorwiegend bei einem Einzelhändler ein, mit dem sie befreundet ist:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(3, 'Anbieter und Nachfrager sind über die Verkaufs- und Kaufbedingungen vollständig informiert:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(4, 'Der einzige Bäcker am Ort verkauft ein Brötchen um drei Cent teurer als der zwölf km weiter entfernte Bäcker:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(5, 'Eine bestimmte Pralinensorte wird wegen der ansprechenden Verpackung bevorzugt gekauft:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(6, 'Ein Bahnhofskiosk eines Hauptbahnhofs in der Großstadt hat Tag und Nacht geöffnet:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(7, 'Ein Unternehmer verkauft seine Erzeugnisse im Ausland billiger als im Inland:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(8, 'Ein Unternehmer bezieht aus traditionell freundschaftlichen Gründen seine Rohstoffe jahrzehntelang vom gleichen Lieferer:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(9, 'Ein Kunde kauft stets eine bestimmte Automarke, weil der Hersteller einen guten Kundendienst unterhält:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(10, 'Ein junger Mann nutzt die Gelegenheit, in einem bestimmten Laden zu kaufen, weil er dort von einer Verkäuferin bedient wird, die ihm gefällt:;Homogenität der Güter;persönliche Präferenzen;räumliche Präferenzen;zeitliche Präferenzen;Markttransparenz', 'multiSingle', 1, 1),
(11, 'Auf welchem Markt bestehen <b>keine räumlichen und zeitlichen Präferenzen</b>?;Kapitalmarkt;Agrarmarkt;Gebietsmarkt;Punktmarkt', 'multiSingle', 1, 1),
(12, 'Auf dem Investitionsgütermarkt werden nachgefragt:;private Geldanlagen in Form von Aktien;Rohstoffe der Unternehmer;Waschmaschinen der privaten Haushalte;Grundstücke der Unternehmer', 'multiSingle', 1, 1),
(13, 'Die Börse ist ein:;Punktmarkt;Gebietsmarkt;regulierter Markt;heterogener Markt', 'multiSingle', 1, 1),
(14, 'Bei einem homogenen Markt sind die Marktgüter:;qualitätsbeständig;preiswert;gleichartig;verschiedenartig', 'multiSingle', 1, 1),
(15, 'Auf dem unvollkommenen Markt besteht in der Regel:;personelle Gleichartigkeit;Markttransparenz;Homogenität der Güter;Heterogenität der Güter', 'multiSingle', 1, 1),
(16, 'Ein regulierter Markt liegt vor, wenn das Marktgeschehen:;sich an der Börse abspielt;institutionalisiert ist;sich bei Banken vollzieht;vom Staat gelenkt wird', 'multiSingle', 1, 1),
(17, 'Ein unvollkommener Markt ist stets gegeben, wenn:;die Güter gleichartig sind;keine Präferenzen vorhanden sind;Präferenzen vorhanden sind;Markttransparenz vorliegt', 'multiSingle', 1, 1),
(18, 'Viele Bauern liefern Zuckerrüben an eine Zuckerfabrik:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(19, 'Wenige Kunsthändler bieten seltene und sehr teure Kunstschätze wenigen Nachfragern an:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(20, 'Ein Erfinder ist Inhaber eines Patents und bietet vielen Herstellern die Lizenz an:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(21, 'Viele Bauern produzieren Milch für viele Verbraucher:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(22, 'Das Beschaffungsamt der Bundeswehr bezieht von wenigen Herstellern Waffen:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol', 'multiSingle', 1, 1),
(23, 'Viele Blumenläden verkaufen Blumen an Haushalte:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(24, 'Wenige Hersteller produzieren Zigaretten für eine Vielzahl von Zigarettenrauchern:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(25, 'Der einzige Kunststeinerzeuger beliefert viele Bauunternehmer:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(26, 'Die EZB hat das alleinige Recht zur Ausgabe von Banknoten und Münzen:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(27, 'Wenige Hersteller produzieren Waschmittel für viele Haushalte:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(28, 'Für viele Studenten stehen in einer großen Universitätsstadt Zimmer zur Verfügung:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(29, 'Wenige Unternehmer stellen für die Bundeswehr Kettenfahrzeuge her:;Polypol;Oligopol;Monopol;Beschränktes Nachfragemonopol;Nachfragemonopol;Zweiseitiges Oligopol', 'multiSingle', 1, 1),
(30, 'Welche der folgenden Märkte sind nach der quantitativen Besetzung der beiden Marktseiten unterteilt?;Punkt- und Gebietsmarkt;homogener und heterogener Markt;Polypol- und Oligopolmarkt;vollkommener und unvollkommener Markt', 'multiSingle', 1, 1),
(31, 'In welcher Marktform besitzt der Anbieter die größte Marktmacht?;Oligopol;Nachfrageoligopol;Nachfragemonopol;Polypol ', 'multiSingle', 1, 1),
(32, 'Der Anbieter der Marktform eines Polypols:;kann den Preis festlegen;betreibt aktive Marktpolitik;reagiert nicht auf Preisveränderungen;ist ein Mengenanpasser', 'multiSingle', 1, 1),
(33, 'Bei zunehmender Anzahl der Marktteilnehmer wird:;der Wettbewerb schwächer;die Marktmacht kleiner;der Marktanteil größer;die Marktmacht größer', 'multiSingle', 1, 1),
(34, 'In welcher Marktform ist für den Anbieter der Preis ein Plandatum?;Monopol;Oligopol;Polypol;Nachfrageoligopol', 'multiSingle', 1, 1),
(35, 'Ein Automobilunternehmen hat einen Zuliefererbetrieb, der nur für das Autowerk Pkw-Spezialteile liefert. Wie bezeichnet man diese Marktform?;Zweiseitiges Monopol;Beschränktes Nachfragemonopol;Zweiseitiges Oligopol;Beschränktes Monopol', 'multiSingle', 1, 1),
(36, 'Wie wird sich ein einziger Anbieter in der Regel verhalten, der vielen Nachfragern gegenübersteht?;Er richtet sich nach der Konkurrenz;Er beachtet das Nachfrageverhalten nicht;Er ist Preisnehmer;Er ist Preisfixierer', 'multiSingle', 1, 1),
(37, 'Der Staat als Bauherr vergibt an viele Unternehmer Aufträge zum Bau von Autobahnen und Flughäfen. Wie bezeichnet man diese Marktform?;Oligopol;Nachfragemonopol;Nachfrageoligopol;Monopol', 'multiSingle', 1, 1),
(38, 'test', 'explain', 0, 2),
(39, 'ring Topology', 'explain', 1, 2),
(40, 'bus Topology', 'explain', 1, 2),
(41, 'stern Topology', 'explain', 1, 2),
(42, 'Harte, weiche und feste Echtzeit', 'explain', 1, 2),
(43, 'duplex: simplex, halb duplex, voll duplex', 'explain', 1, 2),
(44, 'OSI', 'abv', 1, 2),
(45, 'ISO', 'abv', 1, 2),
(46, 'Anwendung Darstellung Sitzung Transport Vermittlung Sicherung Bitübertragung', 'sort', 1, 2),
(47, 'koaxialkabel', 'explain', 1, 2),
(48, 'twisted pair', 'explain', 1, 2),
(49, 'cat 3 Speed', 'whats', 1, 2),
(50, 'cat 3 used adern', 'whatr', 1, 2),
(51, 'cat 3 Name', 'whats', 1, 2),
(52, 'cat 5 Speed', 'whats', 1, 2),
(53, 'cat 5 used adern', 'whatr', 1, 2),
(54, 'cat 5 Name ', 'whats', 1, 2),
(55, 'cat 5e Speed', 'whats', 1, 2),
(56, 'cat 5e number of adern', 'whats', 1, 2),
(57, 'cat 5e Name', 'whats', 1, 2),
(58, 'cat 5e e meaning', 'whats', 1, 2),
(59, 'cat 6 Speed * 3', 'whatr', 1, 2),
(60, 'cat 6 number of adern', 'whats', 1, 2),
(61, 'cat 6 Name  for 1000 Mb/s and for from 2,5Gb/s and 5Gb/s', 'whatr', 1, 2),
(62, 'cat 6A Speed in Gb/s', 'whats', 1, 2),
(63, 'cat 6A adern anzahl', 'whats', 1, 2),
(64, 'cat 6A Name', 'whats', 1, 2),
(65, 'A in 6A', 'whats', 1, 2),
(66, 'cat 7 8 adernanzahl', 'whats', 1, 2),
(67, 'cat 7 8 Name * 2', 'whatr', 1, 2),
(68, 'click 1 2 3;1;2;3;4;5', 'multiMulti', 1, 3),
(69, 'welchen Stellenwert hat die dritte Stelle links vo Komma im Dezimalsystem', 'nothing', 1, 4),
(70, 'welchen Stellenwert hat die dritte Stelle links vo Komma im Dualsystem', 'nothing', 1, 4),
(71, 'welchen Stellenwert hat die dritte Stelle links vo Komma im Hexadezimalsystem', 'nothing', 1, 4),
(72, 'Das Dualsystem benutzt zwei Ziffern zur Darstellung einer Zahl;richtig;falsch', 'multiSingle', 1, 4),
(73, 'Das letzte Zeichen des Hexadezimalsystems ist das \"g\";richtig;falsch', 'multiSingle', 1, 4),
(74, 'Es gibt nur 4 Zahlensystem;richtig;falsch', 'multiSingle', 1, 4),
(75, 'Es gibt Zeichen, welche in mehreren Zahlensystemen verwendet werden;richtig;falsch', 'multiSingle', 1, 4),
(76, 'Zahlen des Dezimalsystems können zur Unterscheidung mit einem \"d\" gekennzeichnet werden;richtig;falsch', 'multiSingle', 1, 4),
(77, 'Dualsystem lassen sich nur schwer in Hexadezimalzahlen umwandeln;richtig;falsch', 'multiSingle', 1, 4),
(78, '217 in Dualzahl', 'nothing', 1, 4),
(79, '217 in Hexadezimal', 'nothing', 1, 4),
(80, '1100 0011 in Dezimadezimal', 'nothing', 1, 4),
(81, '1100 0011 in Hexadezimal', 'nothing', 1, 4),
(82, 'a3 in Dezimadezimal', 'nothing', 1, 4),
(83, 'a3 in Dualzahl', 'nothing', 1, 4),
(84, '188 in Dualzahl', 'nothing', 1, 4),
(85, '188 in Hexadezimal', 'nothing', 1, 4),
(86, '0110 1011 in Dezimadezimal', 'nothing', 1, 4),
(87, '0110 1011 in Hexadezimal', 'nothing', 1, 4),
(88, 'e8 in Dezimadezimal', 'nothing', 1, 4),
(89, 'e8 in Dualzahl', 'nothing', 1, 4),
(90, '430 in Dualzahl', 'nothing', 1, 4),
(91, '430 in Hexadezimal', 'nothing', 1, 4),
(92, '2ee3 in Dezimadezimal', 'nothing', 1, 4),
(93, '2ee3 in Dualzahl', 'nothing', 1, 4),
(94, '1010 1010 0011 0111 in Dezimadezimal', 'nothing', 1, 4),
(95, '1010 1010 0011 0111 in Hexadezimal', 'nothing', 1, 4),
(96, '-5 in Dualzahl', 'nothing', 1, 5),
(97, '-5 in Hexadezimal', 'nothing', 1, 5);

INSERT INTO `subject` (`name`, `id`, `status`) VALUES
('wiso2', 1, 1),
('NT1', 2, 1),
('wiso1', 3, 1),
('dt1', 4, 1),
('dt2', 5, 1);

INSERT INTO `users` (`username`, `id`, `PASSWORD`) VALUES
('greg', 1, '$2y$10$kGFUUUFkyweAVae0QUbXc.GhAMMQ2/QnNWgVFDVky1vdgf5MFyV2i'),
('testUser', 2, '$2y$10$YxhejoNqmw/mFm/Cfee9AeGE8grfjANPiZ097rd.gskje6f.48r/m');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;