-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-11 10:18:41
-- 服务器版本： 5.5.47
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mynode`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `url` longtext NOT NULL,
  `text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `type`, `url`, `text`) VALUES
(1, 1, 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5290/334/890753985/95207/28e28b92/5907f748Nb2375f3a.jpg!q70.jpg', ''),
(2, 1, 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5137/161/895149191/96470/32f7d91f/59087637Nd178fd24.jpg!q70.jpg', ''),
(3, 1, 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5290/334/890753985/95207/28e28b92/5907f748Nb2375f3a.jpg!q70.jpg', ''),
(4, 1, 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5137/161/895149191/96470/32f7d91f/59087637Nd178fd24.jpg!q70.jpg', ''),
(5, 1, 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5290/334/890753985/95207/28e28b92/5907f748Nb2375f3a.jpg!q70.jpg', ''),
(6, 2, 'https://img1.360buyimg.com/da/jfs/t4654/111/3951840527/102015/8375ae53/59084f03Ndcd65d80.jpg', ''),
(7, 2, 'https://m.360buyimg.com/mobilecms/jfs/t4609/176/3827325333/40708/a23eb1f2/59081f81N51601e23.jpg!q70.jpg', ''),
(8, 2, 'https://m.360buyimg.com/mobilecms/jfs/t4609/176/3827325333/40708/a23eb1f2/59081f81N51601e23.jpg!q70.jpg', ''),
(9, 2, 'https://img1.360buyimg.com/da/jfs/t4654/111/3951840527/102015/8375ae53/59084f03Ndcd65d80.jpg', '');

-- --------------------------------------------------------

--
-- 表的结构 `goods_detail`
--

CREATE TABLE `goods_detail` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `sectype` int(11) NOT NULL,
  `cover` longtext,
  `name` longtext,
  `link` longtext,
  `price` int(11) DEFAULT NULL,
  `oldprice` int(11) DEFAULT NULL,
  `salescount` int(11) NOT NULL,
  `detail` longtext,
  `score` float NOT NULL DEFAULT '4'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods_detail`
--

INSERT INTO `goods_detail` (`id`, `type`, `sectype`, `cover`, `name`, `link`, `price`, `oldprice`, `salescount`, `detail`, `score`) VALUES
(1, 0, 0, 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3076/168/1594054634/117143/cb42bca1/57d0a9b2N870f3c2f.jpg!q70.jpg', NULL, NULL, 258, 88, 0, NULL, 4),
(2, 0, 0, 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4666/231/3496483430/352453/45b96e8b/58fef30eNee24d8b3.jpg!q70.jpg', NULL, NULL, 8998, 2928, 0, NULL, 4),
(3, 0, 0, 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4276/278/2550623897/406024/1ab46b80/58d389b6N9dbac7d8.jpg!q70.jpg', NULL, NULL, 699, 129, 0, NULL, 4),
(4, 0, 0, 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t4300/18/3797756635/341336/69e5a6fe/58e83febN659a7f14.jpg!q70.jpg', NULL, NULL, 8998, 2928, 0, NULL, 4),
(5, 0, 0, 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t5218/208/855422118/209477/4a70f9bd/5908470aN2ae06b83.jpg!q70.jpg', NULL, NULL, 699, 129, 0, NULL, 4),
(6, 0, 0, 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t3901/24/1523308676/237648/fb80084c/587c3b67N6b97369f.jpg!q70.jpg', NULL, NULL, 8998, 699, 0, NULL, 4),
(7, 1, 4, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t4681/257/55967336/565371/e9939e85/58c8e329N51e437c3.jpg!q70.jpg', '上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价', NULL, 15, NULL, 2, '上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价', 4),
(8, 1, 5, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t1960/281/2094375806/154873/6944e77f/56f20611N924b233c.jpg!q70.jpg', '罗技（Logitech）M185 无线鼠标 黑色灰边', '', 59, NULL, 2, '罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边', 4),
(9, 1, 6, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t4240/298/1909493847/365522/3f793b0/58c8b2bfN7f3634d2.jpg!q70.jpg', '〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒', '', 11, NULL, 2, '〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒', 3.7),
(10, 1, 7, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t2458/164/1600971708/466259/6e784a2e/56613700N9ebbbea4.jpg!q70.jpg', '【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品', '', 198, NULL, 2, '【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品', 4),
(11, 1, 8, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t4681/257/55967336/565371/e9939e85/58c8e329N51e437c3.jpg!q70.jpg', '222上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价', NULL, 15, NULL, 2, '222上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价', 4),
(12, 1, 9, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t1960/281/2094375806/154873/6944e77f/56f20611N924b233c.jpg!q70.jpg', '22罗技（Logitech）M185 无线鼠标 黑色灰边', '', 59, NULL, 2, '22罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边', 4),
(13, 1, 10, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t4240/298/1909493847/365522/3f793b0/58c8b2bfN7f3634d2.jpg!q70.jpg', '22〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒', '', 11, NULL, 2, '22〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒', 4),
(14, 1, 11, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t2458/164/1600971708/466259/6e784a2e/56613700N9ebbbea4.jpg!q70.jpg', '22【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品', '', 198, NULL, 2, '22【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品', 4),
(15, 1, 12, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t4681/257/55967336/565371/e9939e85/58c8e329N51e437c3.jpg!q70.jpg', '333上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价', NULL, 15, NULL, 2, '333上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价上院地毯 满铺人造草坪  塑料草皮仿真人造草坪幼儿园楼顶阳台人工假草皮假草皮 10mm普通草绿色/直草 宽幅2米每平价', 4),
(16, 1, 13, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t1960/281/2094375806/154873/6944e77f/56f20611N924b233c.jpg!q70.jpg', '33罗技（Logitech）M185 无线鼠标 黑色灰边', '', 59, NULL, 2, '33罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边罗技（Logitech）M185 无线鼠标 黑色灰边', 4),
(17, 1, 14, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t4240/298/1909493847/365522/3f793b0/58c8b2bfN7f3634d2.jpg!q70.jpg', '33〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒', '', 11, NULL, 2, '33〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒〔买2瓶包邮  仅剩200瓶〕茅台镇酱香型特价收藏53度500ml纯粮食原浆白酒', 4),
(18, 1, 15, 'https://m.360buyimg.com//mobilecms/s276x276_jfs/t2458/164/1600971708/466259/6e784a2e/56613700N9ebbbea4.jpg!q70.jpg', '33【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品', '', 198, NULL, 2, '33【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品【京东超市】温碧泉八杯水亲亲水润五件套装（洁面乳+保湿水+活肤乳+嫩肤霜+赠眼精华）补水保湿护肤化妆品', 4);

-- --------------------------------------------------------

--
-- 表的结构 `goods_list`
--

CREATE TABLE `goods_list` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `sectype` int(11) NOT NULL,
  `cover` longtext,
  `title` varchar(64) DEFAULT NULL,
  `desc` longtext,
  `price` varchar(64) NOT NULL DEFAULT '66',
  `oldprice` varchar(64) NOT NULL DEFAULT '88',
  `link` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods_list`
--

INSERT INTO `goods_list` (`id`, `type`, `sectype`, `cover`, `title`, `desc`, `price`, `oldprice`, `link`) VALUES
(1, 1, 1, 'https://m.360buyimg.com/mobilecms/jfs/t4513/85/3938015974/8560/4b70366/5907eea7N97af34fe.jpg!q70.jpg', '玩3C', 'iPhone 5s', '66', '88', NULL),
(2, 1, 2, 'https://m.360buyimg.com/mobilecms/jfs/t4639/187/149060276/13271/7eb8e9e4/58ca6aabN39057594.jpg!q70.jpg', '京东家电', '30天延期付款', '66', '88', NULL),
(3, 1, 3, 'https://m.360buyimg.com/mobilecms/jfs/t5299/178/983349663/8877/4538bd04/5909c804N64b597c8.jpg!q70.jpg', '京东超市', '荔枝29.9元每斤', '66', '88', NULL),
(4, 1, 4, 'https://m.360buyimg.com/mobilecms/jfs/t5482/122/559499264/30545/ed09521d/5901cd15N9b167f8b.jpg!q70.jpg', '爱家', '2件85折', '66', '88', NULL),
(5, 1, 5, 'https://m.360buyimg.com/mobilecms/jfs/t4513/85/3938015974/8560/4b70366/5907eea7N97af34fe.jpg!q70.jpg', '爱宝宝', '低至7.3折', '66', '88', NULL),
(6, 1, 6, 'https://m.360buyimg.com/mobilecms/jfs/t4033/288/1248007040/23380/1441761c/586f7ea7Nbad7117c.png!q70.jpg', '爱美丽', 'YSL圆管口红', '66', '88', NULL),
(7, 1, 7, 'https://m.360buyimg.com/mobilecms/jfs/t4399/158/3713606647/21076/c0ebdb4b/59031fa3Na815df3b.jpg!q70.jpg', '爱吃', '39.9任选5件', '66', '88', NULL),
(8, 1, 8, 'https://m.360buyimg.com/mobilecms/jfs/t4960/92/1133510483/5011/ea41c162/58ed9007N70666163.jpg!q70.jpg', '爱穿搭', '运动199-50', '66', '88', NULL),
(9, 2, 1, 'https://m.360buyimg.com/mobilecms/jfs/t4450/321/502591655/43433/fd0fc5c9/58d08ba1Nd7d9e82a.jpg!q70.jpg', '智能生活', '时尚智能表', '66', '88', NULL),
(10, 2, 2, 'https://m.360buyimg.com/mobilecms/jfs/t4441/105/4147754759/10022/1f88beec/590a8917Nf44fbd21.jpg!q70.jpg', '京东众筹', '1元秒杀', '66', '88', NULL),
(11, 2, 3, 'https://m.360buyimg.com/mobilecms/jfs/t4243/38/2071438630/8234/17ef60a3/58cb7493Naa1b29c7.jpg!q70.jpg', '京东旅行', '9.9秒杀!', '66', '88', NULL),
(12, 2, 4, 'https://m.360buyimg.com/mobilecms/jfs/t5062/28/2525268992/7142/6038fa33/5901c1e4N501873d8.jpg!q70.jpg', '白条商城', '12期免息 买', '66', '88', NULL),
(13, 2, 5, 'https://m.360buyimg.com/mobilecms/jfs/t4762/126/2315434555/24150/3e5a16ed/58fd749aN081a36b6.jpg!q70.jpg', '爱车生活', '每日五折', '66', '88', NULL),
(14, 2, 6, 'https://m.360buyimg.com/mobilecms/jfs/t4438/288/4120880312/6787/cd3d3abb/5909ac04Nf135d13d.jpg!q70.jpg', '生活娱乐', '今日特惠', '66', '88', NULL),
(15, 2, 7, 'https://m.360buyimg.com/mobilecms/jfs/t3307/361/6758961248/5097/139ba994/58acf800N0ced20ff.jpg!q70.jpg', '二手清仓', 'iPhone6 秒杀', '66', '88', NULL),
(16, 2, 8, 'https://m.360buyimg.com/mobilecms/jfs/t3307/361/6758961248/5097/139ba994/58acf800N0ced20ff.jpg!q70.jpg', '二手清仓2', 'iPhone6 秒杀', '66', '88', NULL),
(17, 2, 9, 'https://m.360buyimg.com/mobilecms/jfs/t3307/361/6758961248/5097/139ba994/58acf800N0ced20ff.jpg!q70.jpg', '二手清仓3', 'iPhone6 秒杀', '66', '88', NULL),
(18, 2, 10, 'https://m.360buyimg.com/mobilecms/jfs/t3307/361/6758961248/5097/139ba994/58acf800N0ced20ff.jpg!q70.jpg', '二手清仓4', 'iPhone6 秒杀', '66', '88', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `mobile_nav`
--

CREATE TABLE `mobile_nav` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL DEFAULT '1',
  `src` longtext,
  `link` longtext,
  `name` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mobile_nav`
--

INSERT INTO `mobile_nav` (`id`, `type`, `src`, `link`, `name`) VALUES
(1, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png', NULL, '京东超市'),
(2, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png', NULL, '全球购'),
(3, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png', NULL, '服饰城'),
(4, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png', NULL, '京东生鲜'),
(5, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png', NULL, '京东到家'),
(6, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png', NULL, '充值缴费'),
(7, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png', NULL, '京东生鲜'),
(8, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png', NULL, '领金豆'),
(9, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3664/66/52394080/14046/acfe1fa3/57fdae81Ne7ddbab9.png', NULL, '领券'),
(10, 1, 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t3286/167/1907269933/15789/da204cbe/57d53f16Nf3431cbd.png', NULL, '惠赚钱');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `link` longtext,
  `name` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `type`, `link`, `name`) VALUES
(1, 1, NULL, '露腿季到了，放假清凉上街就选牛仔短裙'),
(2, 1, NULL, '日本药妆店的5大“口碑王”面膜'),
(3, 1, NULL, '明星同款菜教你撩心撩胃撩迷妹！'),
(4, 1, NULL, '森田海外旗舰店开业199减50！');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods_detail`
--
ALTER TABLE `goods_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods_list`
--
ALTER TABLE `goods_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mobile_nav`
--
ALTER TABLE `mobile_nav`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- 使用表AUTO_INCREMENT `goods_detail`
--
ALTER TABLE `goods_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- 使用表AUTO_INCREMENT `goods_list`
--
ALTER TABLE `goods_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- 使用表AUTO_INCREMENT `mobile_nav`
--
ALTER TABLE `mobile_nav`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
