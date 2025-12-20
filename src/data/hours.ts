import type { Aspect } from '../types';

const BASE_URL = import.meta.env.BASE_URL;

export interface Hour {
  id: string;
  name: string;
  origin: string;
  aspects: Aspect[];
  gender: string;
  image: string;
  desc?: string;
  wikiUrl?: string;
}

export const HOURS_DATA: Hour[] = [
  {
    id: 'O',
    name: '飞蛾 (The Moth)',
    origin: '血源',
    aspects: ['Moth'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/TheMoth.webp',
    desc: '它是林地中躁动的拍翅声。它不是第一，但它是最后。它在理智的边缘剥去旧皮，寻找那不属于现世的光。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/飞蛾'
  },
  {
    id: 'I',
    name: '瞳中之扉 (The Door in the Eye)',
    origin: '琥珀',
    aspects: ['Lantern', 'Rose'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/TheDoorInEye.webp',
    desc: '既是道路也是守门人。这种光明不仅照亮事物，更将其刺穿。有些知识一旦入眼，便无法被遗忘。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/瞳中之扉'
  },
  {
    id: 'II',
    name: '丝绒 (The Velvet)',
    origin: '血源',
    aspects: ['Moth', 'Heart', 'Moon', 'Nectar'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheVelvet.webp',
    desc: '漫宿最深沉的阴影。她在石头与苔藓间起舞，她是秘密的守护者，因为只有在绝对的黑暗中，颜色才拥有触感。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/丝毧'
  },
  {
    id: 'III',
    name: '石绿 (The Malachite)',
    origin: '肉源',
    aspects: ['Moth', 'Heart', 'Grail', 'Nectar'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheMalachite.webp',
    desc: '既是毒药也是解药。生命在腐烂中最为茂盛，它是那抹在尸骨上绽放的、令人不安的生机之绿。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/石绿'
  },
  {
    id: 'IV',
    name: '轰雷之皮 (The Thunderskin)',
    origin: '肉源/血源',
    aspects: ['Heart', 'Sky'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/TheThunderskin.webp',
    desc: '永不停歇的舞者。他在风暴中大笑，因为他的心脏不再跳动，所以他必须不停地跳舞，以免此身终结。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/轰雷之皮'
  },
  {
    id: 'V',
    name: '蚁母 (The Mother of Ants)',
    origin: '肉源',
    aspects: ['Knock', 'Scale'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/450px-5蚁母.webp',
    desc: '伤口是世界的裂隙。她在痛苦中行走，保护着那些不应被开启的门，或是将它们撑得更开。女王万岁。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/蚁母'
  },
  {
    id: 'VI',
    name: '双生女巫 (The Witch-and-Sister)',
    origin: '肉源',
    aspects: ['Grail', 'Rose', 'Heart', 'Moon'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/1024px-6双生女巫.webp',
    desc: '她们互为倒影，互为爱人。在水中，在镜中，在血中。你分不清哪个是在这里，哪个是在那里。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/双生女巫'
  },
  {
    id: 'VII',
    name: '上校 (The Colonel)',
    origin: '肉源',
    aspects: ['Edge', 'Sky', 'Lantern'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/TheColonel.webp',
    desc: '那道不会愈合的伤疤。他手握这一刻的武器，却凝视着下一刻的终局。盲眼的战略家，钢铁的意志。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/上校'
  },
  {
    id: 'VIII',
    name: '狮子匠 (The Lionsmith)',
    origin: '肉源',
    aspects: ['Edge', 'Heart', 'Forge'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/450px-8狮子匠.webp',
    desc: '怪物与英雄的混合体。如果不满意现在的形态，那就打碎它，重铸它。痛苦是变得更强的必经之路。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/狮子匠'
  },
  {
    id: 'IX',
    name: '悼歌诗人 (The Elegiast)',
    origin: '未知',
    aspects: ['Winter'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/450px-9悼歌诗人.webp',
    desc: '唯有他记得那些被遗忘的死者。他是灰白色的宁静，是那杯为了不复存在之物而举起的酒。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/悼歌诗人'
  },
  {
    id: 'X',
    name: '拾滩鸦 (The Beachcomber)',
    origin: '肉源',
    aspects: ['Knock', 'Grail'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/TheBeachcomber.webp',
    desc: '贪婪的收藏家。他在时间的潮汐线上徘徊，捡拾那些辉煌的碎片。什么都想要，什么都不放手。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/拾滩鸦'
  },
  {
    id: 'XI',
    name: '弧月 (The Meniscate)',
    origin: '光源',
    aspects: ['Knock', 'Forge', 'Lantern', 'Sky', 'Moon'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheMeniscate.webp',
    desc: '镜中的倒影，光辉的替身。她在辉光稍歇时掌管秩序。一切看起来都很好，只要你不打破那面镜子。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/弧月'
  },
  {
    id: 'XII',
    name: '残阳 (The Sun-in-Rags)',
    origin: '光源/血源',
    aspects: ['Winter', 'Lantern'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/1024px-12残阳.webp',
    desc: '即使是太阳也会衰老。他是黄昏的寒意，是那件破旧的斗篷。结局总是美丽的，只要你接受它的到来。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/残阳'
  },
  {
    id: 'XIII',
    name: '双角斧 (The Horned Axe)',
    origin: '石源',
    aspects: ['Knock', 'Winter', 'Scale', 'Edge'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/1024px-13双角斧.webp',
    desc: '被放逐的古老守卫。她在界限之处徘徊，她是那把将完整之物劈开的斧头，严酷而公正。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/双角斧'
  },
  {
    id: 'XIV',
    name: '昕旦 (The Dawnbreaker)',
    origin: '光源',
    aspects: ['Winter', 'Forge', 'Lantern', 'Sky'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheMadrugad.webp',
    desc: '黎明前最冷的一刻。在太阳升起之前，必有某种东西被唤醒，必有某种寂静被打破。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/昕旦'
  },
  {
    id: 'XV',
    name: '赤杯 (The Red Grail)',
    origin: '血源',
    aspects: ['Grail'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheRedGrail.webp',
    desc: '永不满足的渴望。她是诱惑，是饥饿，是所有感觉的极致。我们因饮下而干渴，因诞生而受苦。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/赤杯'
  },
  {
    id: 'XVI',
    name: '裂分之狼 (The Wolf-Divided)',
    origin: '血源',
    aspects: ['Edge', 'Winter'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/TheWolfDivided.webp',
    desc: '他恨，故他在。他甚至憎恨自己的存在。他是那吞噬世界的虚无，是所有毁灭冲动的具象化。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/裂分之狼'
  },
  {
    id: 'XVII',
    name: '浪游旅人 (The Vagabond)',
    origin: '肉源',
    aspects: ['Moth', 'Rose', 'Lantern'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheVagabond.webp',
    desc: '她不在此处。她在地图的边缘，在未知的路径上。为了不被捕获，她甚至出卖了自己的眼睛。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/浪游旅人'
  },
  {
    id: 'XVIII',
    name: '双生巫女 (Sister-and-Witch)',
    origin: '肉源',
    aspects: ['Heart', 'Rose', 'Grail', 'Moon'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheSisterAndWitch.webp',
    desc: '结合即是分离。她们在深红的秘密中低语，编织着连结血脉的结。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/双生巫女'
  },
  {
    id: 'XIX',
    name: '制花人 (The Flowermaker)',
    origin: '光源',
    aspects: ['Grail', 'Lantern', 'Nectar'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/1024px-19制花人.webp',
    desc: '极乐的施予者。不要接受他的礼物，除非你愿意为了那一瞬间的欢愉，付出永恒的代价。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/制花人'
  },
  {
    id: 'XX',
    name: '白日铸炉 (The Forge of Days)',
    origin: '光源',
    aspects: ['Forge', 'Lantern'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/TheForgeOfDays.webp',
    desc: '烈火不灭。她不是为了毁灭，而是为了改变。所有静止的事物都将被投入炉中，直到它们成为新的形态。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/白日铸炉'
  },
  {
    id: 'XXI',
    name: '耀山之隙 (The Glory?)',
    origin: '未知',
    aspects: ['Lantern', 'Knock'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/21耀山之隙（河鱼）.webp',
    desc: '光辉太过强烈，以至于成为了裂隙。从那里透出的光，足以灼瞎凡人的双眼。真理是危险的。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/耀山之隙'
  },
  {
    id: 'XXII',
    name: '白雪 (The White)',
    origin: '虚源',
    aspects: ['Winter', 'Heart'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/1024px-22白雪（苏酥会酥）.webp',
    desc: '纯白的寂静。在一切声音消失之后，剩下的只有她。她是安抚者，也是最终的遗忘。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/白雪'
  },
  {
    id: 'XXIII',
    name: '黑骸 (The Black)',
    origin: '未知',
    aspects: ['Grail', 'Moon'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/1024px-23黑骸（河鱼）.webp',
    desc: '未知的深渊。在杯底的沉渣中，在月光的背面，有些东西在蠕动，且并未死去。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/黑骸'
  },
  {
    id: 'XXIV',
    name: '扶摇蜘蛛 (The Spider)',
    origin: '虚源',
    aspects: ['Knock', 'Edge', 'Grail'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/扶摇蜘蛛官网配图.webp',
    desc: '秘密的编织者。她在漫宿的角落里结网，等待着那些鲁莽的闯入者。文字是她的丝线。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/扶摇蜘蛛'
  },
  {
    id: 'XXV',
    name: '戴冠之孳 (The Crowned Growth)',
    origin: '虚源',
    aspects: ['Grail', 'Winter'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/450px-25戴冠之孳.webp',
    desc: '它是肿瘤，也是果实。它代表着那些不该生长却疯狂蔓延的事物。荣耀归于畸变。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/戴冠之孳'
  },
  {
    id: 'XXVI',
    name: '光明果 (The Bright-Fruit)',
    origin: '虚源',
    aspects: ['Grail', 'Heart', 'Moth'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/1024px-26光明果（河鱼）.webp',
    desc: '诱人的果实，内在却充满了异样的甜美。它是光与血肉的错误结合，令人无法抗拒。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/光明果'
  },
  {
    id: 'XXVII',
    name: '树中牝马 (The Mare-in-the-Tree)',
    origin: '虚源',
    aspects: ['Moth', 'Forge', 'Nectar'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/1024px-27树中牝马.webp',
    desc: '噩梦栖息于树枝之间。混乱的自然力量，她在森林的低语中不仅带来了生命，也带来了异化。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/树中牝马'
  },
  {
    id: 'XXVIII',
    name: '见证人 (The Witness)',
    origin: '虚源',
    aspects: ['Heart', 'Grail', 'Lantern', 'Moth', 'Forge'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/450px-见证人官网配图.webp',
    desc: '他看着一切。哪怕是那些不该被看见的仪式，哪怕是那些应当被埋葬的罪行。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/见证人'
  },
  {
    id: 'XXIX',
    name: '制烛人 (The Chandler)',
    origin: '尚未诞生',
    aspects: ['Lantern', 'Edge', 'Moth'],
    gender: '尚未确定',
    image: BASE_URL + 'images/hours/450px-29制烛人（河鱼）.webp',
    desc: '他照亮前路，但他也是那个掐灭烛火的人。在未知的时间线里，他既是引导者也是终结者。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/制烛人'
  },
  {
    id: 'XXXV',
    name: '七蟠 (The Seven-Coils)',
    origin: '石源',
    aspects: ['Knock', 'Secret Histories', 'Scale', 'Edge'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/450px-35七蟠（RoAshe）.webp',
    desc: '在神灵降临之前的古老存在。它们盘踞在世界的基座上，每一层盘绕都压碎了一个时代。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/七蟠'
  },
  {
    id: 'XXXVI',
    name: '转轮 (The Wheel)',
    origin: '石源',
    aspects: ['Heart', 'Moth', 'Nectar'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/450px-36转轮（RoAshe）.webp',
    desc: '时间不是直线，而是碾碎一切的轮盘。曾经发生的必将再次发生，无法逃避，无法停止。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/转轮'
  },
  {
    id: 'XXXVII',
    name: '燧石 (The Flint)',
    origin: '石源',
    aspects: ['Forge', 'Sky'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/450px-37燧石（RoAshe）.webp',
    desc: '最初的火花来自石头的碰撞。她是冷酷的创造者，在没有温度的虚空中击打出第一缕光。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/燧石'
  },
  {
    id: 'XXXVIII',
    name: '逆孵之卵 (The Egg Unhatching)',
    origin: '石源',
    aspects: ['Lantern', 'Sky', 'Scale'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/450px-38逆孵之卵（RoAshe）.webp',
    desc: '并不是所有的蛋都应该孵化。有些东西如果保持封闭，才是对世界最大的仁慈。那是未诞生的辉光。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/逆孵之卵'
  },
  {
    id: 'XXXIX',
    name: '浪潮 (The Tide)',
    origin: '石源',
    aspects: ['Grail', 'Moon'],
    gender: '阴性',
    image: BASE_URL + 'images/hours/450px-39浪潮（RoAshe）.webp',
    desc: '吞没一切的海洋。她不仅仅是水，她是贪婪的引力，将陆地、生命和理性全部拉入深渊。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/浪潮'
  },
  {
    id: 'XXXX',
    name: '骄阳 (The Sun-in-Splendour)',
    origin: '光源',
    aspects: ['Lantern'],
    gender: '阳性',
    image: BASE_URL + 'images/hours/1024px-骄阳（河鱼）.webp',
    desc: '曾经的最高神。他是绝对的理性，绝对的光明。但他已被瓜分，辉光已碎。我们如今沐浴的，只是他尸体的余晖。',
    wikiUrl: 'https://boh.huijiwiki.com/wiki/骄阳'
  }
];