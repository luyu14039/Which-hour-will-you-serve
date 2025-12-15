import type { Aspect } from '../types';

export interface Judgment {
  title: string;
  description: string;
  motto: string;
  tarotCard: string;
}

export const ASPECT_JUDGMENTS: Record<Aspect, Judgment> = {
  'Lantern': {
    title: '辉光之子 (Child of the Glory)',
    description: '你的灵魂中燃烧着一种无情的理智。对你而言，世界不是用来感受的，而是用来解析的。你无法容忍阴影中的秘密，正如烛火无法容忍黑暗。你的目光锐利，有时甚至灼人。你追求的真理可能并不仁慈，但它绝对真实。在漫宿的高处，你俯瞰众生，不仅看见了他们的血肉，更看见了他们苍白的骨骼。',
    motto: '“仁慈仅存在于阴影之中；而辉光之下，无所遁形。”',
    tarotCard: 'XX - JUDGEMENT'
  },
  'Forge': {
    title: '塑形者 (The Shaper)',
    description: '你明白世界并非恒久不变，它只是等待被重塑的原材料。你拥有改变现状的野心与力量，哪怕这往往伴随着破坏。你不仅是火焰，也是铁锤；你不仅是燃料，也是引擎。安逸对你来说是一种慢性毒药，唯有在剧烈的变革与创造中，你才能感受到自己真正活着。',
    motto: '“火是变迁，我们亦然。世界将被锻造。”',
    tarotCard: 'IV - THE EMPEROR'
  },
  'Edge': {
    title: '征服者 (The Conqueror)',
    description: '你深知生存的本质即是斗争。无论是在言语的交锋中，还是在意志的角力里，你从不退缩。你敏锐地察觉到他人的弱点，并非出于恶意，而是出于本能。痛苦对你而言不是阻碍，而是磨刀石。你行走在刀锋之上，享受着那种时刻可能坠落、却依然掌控局面的战栗。',
    motto: '“每一场对话都是一次交锋，每一次呼吸都是一场掠夺。”',
    tarotCard: 'VII - THE CHARIOT'
  },
  'Winter': {
    title: '悼亡者 (The Mourner)',
    description: '你属于寂静，属于结束，属于那些被遗忘的角落。你并不畏惧死亡或终结，因为你明白那是万物必然的归宿。你的内心如同一片落雪的荒原，寒冷、纯净且安宁。你善于保守秘密，也善于在喧嚣中保持沉默。当其他人恐惧黑夜时，你却在苍白的月光下找到了安宁。',
    motto: '“白雪不语，却掩埋一切。”',
    tarotCard: 'XIII - DEATH'
  },
  'Heart': {
    title: '存续者 (The Preserver)',
    description: '你拥有令人惊叹的生命力与韧性。无论面对何种风暴，你总能屹立不倒。你不仅保护自己，也庇护他人。你的力量并非来自破坏，而来自坚持——像雷鸣般永不停歇的心跳，像春天里顽强生长的野草。你拒绝接受终结，你用欢愉、舞蹈和坚定的信念对抗着漫宿的寒风。',
    motto: '“雷鸣不息，我亦不止。生命本身就是对虚无的反抗。”',
    tarotCard: '0 - THE FOOL'
  },
  'Grail': {
    title: '渴慕者 (The Yearning)',
    description: '你是一个巨大的容器，永远渴望着被填满。无论是感官的欢愉、情感的羁绊，还是鲜活的生命体验，你都贪婪地汲取着。你敏锐地感知着他人的欲望，并能轻易地操纵它们。对你来说，平庸是最大的罪恶。你追求极致的体验，哪怕那意味着要在蜜糖中品尝毒药。',
    motto: '“饥饿是存在的证明。我们要么吞噬，要么被吞噬。”',
    tarotCard: 'III - THE EMPRESS'
  },
  'Moth': {
    title: '漫游者 (The Wanderer)',
    description: '你的灵魂属于林地，混乱而自由。你拒绝被定义，拒绝被形状束缚。你总是凭直觉行事，像飞蛾扑火般追逐着那些不可名状的光芒。你明白蜕变的痛苦与狂喜，为了成为新的自己，你随时准备抛弃旧的皮囊。在你的眼中，世界是一场疯狂的假面舞会，而你是唯一不肯摘下面具的舞者。',
    motto: '“剪去头发，剪去指甲，剪去名字。在混乱中，我们获得自由。”',
    tarotCard: 'XVIII - THE MOON'
  },
  'Knock': {
    title: '洞察者 (The Opener)',
    description: '你着迷于界限，以及如何打破它们。对你而言，每一扇门都是一种挑衅，每一个伤口都是一个机会。你看见了世界结构中的裂缝，并渴望窥探裂缝背后的东西。你既不属于屋内，也不属于屋外，你永远站在门槛之上。你是那个在午夜敲门的人，是那个将钥匙转动的人。',
    motto: '“所有的墙都有缝隙，所有的门都是伤口。”',
    tarotCard: 'II - THE HIGH PRIESTESS'
  },
  'Secret Histories': {
    title: '记录者 (The Chronicler)',
    description: '你行走在多重历史的交汇点。你明白过去并非只有一种，真相往往由谎言编织而成。你博学、冷静，像一位图书管理员整理着世界的碎片。你并不急于干涉，而是倾向于观察与记录。你知道知识是有重量的，而你甘愿背负这种重量，为了让那些被遗忘的故事得以延续。',
    motto: '“历史是一张由谎言编织的挂毯，而我们手握针线。”',
    tarotCard: 'XXI - THE WORLD'
  },
  'Moon': {
    title: '守夜人 (The Watchman)',
    description: '你是黑夜的守望者，游走在清醒与疯狂的边缘。你聆听潮汐的低语，窥视月光下的阴影。对你而言，真相往往隐藏在谎言的背面，而最深刻的秘密总是伴随着危险。你并不畏惧黑暗，因为你明白，只有在黑暗中，某些事物才会显露真容。你守护着那些不应被揭示的知识，如同大海守护着深渊。',
    motto: '“行于夜者，被遗忘者。”',
    tarotCard: 'XVIII - THE MOON'
  },
  'Sky': {
    title: '风暴之子 (Child of the Storm)',
    description: '你的灵魂共鸣着高空的寒风与雷鸣。你理解宇宙运行的冰冷法则，那是一种超越凡俗情感的绝对和谐。无论是数学的优雅公式，还是风暴的毁灭力量，在你眼中都是同一种旋律的变奏。你追求的是一种崇高的秩序，一种不被尘世喧嚣所玷污的完美。你俯瞰众生，如苍穹般辽阔而无情。',
    motto: '“平衡，和谐与必然性。”',
    tarotCard: 'XVII - THE STAR'
  },
  'Rose': {
    title: '引路人 (The Guide)',
    description: '你掌握着通往新视界的秘密路径。你明白世界并非只有表面所见的那样，在现实的缝隙中，隐藏着无数通往漫宿的捷径。你既是迷途者的向导，也是未知的探索者。你的直觉如同罗盘般精准，指引你穿越迷雾与混乱。你寻找的不仅仅是方向，更是那隐藏在光芒背后的终极启迪。',
    motto: '“探索？启迪？希望？”',
    tarotCard: 'IX - THE HERMIT'
  },
  'Scale': {
    title: '坚守者 (The Sentinel)',
    description: '你拥有大地深处岩石般的坚韧与古老。你的意志不可动摇，如同亿万年前便已存在的山脉。你守护着那些不应被遗忘的传统与力量，抵御着时间的侵蚀。你的皮肤下流淌着原始的血液，你的沉默中蕴含着巨大的力量。你不需要言语，你的存在本身就是一种无法忽视的威压。',
    motto: '“此为大地深处原始力量的残余。”',
    tarotCard: 'XI - JUSTICE'
  },
  'Nectar': {
    title: '滋养者 (The Nurturer)',
    description: '你与世界的脉搏同频共振。你理解生命最原始的渴望——生长、繁衍、吞噬与重生。你的血液中流淌着森林的汁液，你的呼吸中带有泥土的芬芳。你既是慈悲的治愈者，也是残酷的自然法则的化身。你明白，所有的生命都源于血，也终将归于血。你在腐朽中培育新生，在死亡中看见绽放。',
    motto: '“很久以前，一些人把该准则称作‘血’。”',
    tarotCard: 'XIV - TEMPERANCE'
  }
};

export const SPECIAL_COMBINATIONS: Record<string, Judgment> = {
  // Lantern Combinations
  'Lantern+Winter': {
    title: '暮光圣徒 (The Twilight Saint)',
    description: '辉光已逝，唯余美丽。你明白辉煌终将落幕，并在那凄美的余晖中找到了自己的位置。你既是光芒，也是光芒死去的寒冷。你的力量源自于接受衰败，在结束中寻找新的开始。',
    motto: '“美即是终结。”',
    tarotCard: 'XVI - THE TOWER'
  },
  'Lantern+Forge': {
    title: '光辉暴君 (The Radiant Tyrant)',
    description: '烈火与光芒。你是纯粹的能量，是毫不留情的创造力。你的存在本身就是对停滞的宣战，你燃烧自己，也点燃周围的一切。你的道路是辉煌的，但也可能是短暂的。',
    motto: '“燃烧即是存在。”',
    tarotCard: 'XIX - THE SUN'
  },
  'Lantern+Secret Histories': {
    title: '先知 (The Prophet)',
    description: '你不仅看见了真理，还看见了真理在时间长河中的倒影。你知晓过去如何导致现在，现在又将如何通向未来。你的理智穿越了历史的迷雾，看见了唯一的路径。',
    motto: '“我看见了必然。”',
    tarotCard: 'II - THE HIGH PRIESTESS'
  },

  // Forge Combinations
  'Forge+Edge': {
    title: '偶像破坏者 (The Iconoclast)',
    description: '你不仅想要重塑世界，更想要粉碎旧的秩序。你是狮子铁匠的宠儿，你的锤炼伴随着冲突与抗争。你拒绝一切权威，除非那权威是你亲手锻造的。',
    motto: '“我不再侍奉。”',
    tarotCard: 'XI - JUSTICE'
  },
  'Forge+Winter': {
    title: '灰烬行者 (The Ash-Walker)',
    description: '你明白火焰终将熄灭，而你拥抱这种必然。你在毁灭中寻找宁静，在燃烧后的灰烬中发现美。你的锻造不是为了创造永恒，而是为了加速终结。',
    motto: '“一切终归尘土。”',
    tarotCard: 'XX - JUDGEMENT'
  },

  // Edge Combinations
  'Edge+Winter': {
    title: '守夜人 (The Sentinel)',
    description: '你划定界限。你将世界分为“内”与“外”，“我”与“非我”。你的仁慈是冰冷的，你的保护是致命的。你守望着门槛，任何越界者都将面临你的审判。你不仅是战士，更是守门人。',
    motto: '“界限必须被划定，哪怕是用血。”',
    tarotCard: 'IV - THE EMPEROR'
  },
  'Edge+Heart': {
    title: '决斗者 (The Duelist)',
    description: '你享受战斗，不是为了杀戮，而是为了那种鲜活的生命感。每一次交锋都让你的心脏跳动得更加剧烈。你在冲突中舞蹈，在危险中欢笑。',
    motto: '“生命即是斗争。”',
    tarotCard: 'VII - THE CHARIOT'
  },

  // Winter Combinations
  'Winter+Knock': {
    title: '引渡者 (The Psychopomp)',
    description: '你站在生与死的门槛上。你并不恐惧死亡，因为你知道那只是一扇门。你引导迷途的灵魂，打开通往寂静的通道。你是最后的守门人。',
    motto: '“门已开，请安息。”',
    tarotCard: 'XIII - DEATH'
  },
  'Winter+Edge': {
    title: '处刑人 (The Executioner)',
    description: '你是终结的执行者。你没有恶意，只有职责。当事物必须结束时，你挥下刀锋。你的冷酷是一种慈悲，因为你缩短了痛苦。',
    motto: '“这是必要的终结。”',
    tarotCard: 'XI - JUSTICE'
  },

  // Heart Combinations
  'Heart+Grail': {
    title: '爱人 (The Lover)',
    description: '生命与欲望在你体内交织。你热爱这个世界，热爱其中的一切快感与痛楚。你的爱是无尽的，你的渴望也是无尽的。你是永恒的脉动，是鲜红的诱惑。',
    motto: '“我们结合，我们永生。”',
    tarotCard: 'VI - THE LOVERS'
  },
  'Heart+Moth': {
    title: '舞者 (The Dancer)',
    description: '你听到了鼓声，于是你起舞。你不在乎方向，只在乎律动。你在混乱中保持着生命的活力，在蜕变中寻找永恒的节奏。',
    motto: '“不要停下，直到心脏停止。”',
    tarotCard: '0 - THE FOOL'
  },

  // Grail Combinations
  'Grail+Moth': {
    title: '蜕变者 (The Changeling)',
    description: '混乱的饥渴。你不仅想要吞噬世界，还想在吞噬中不断变化。你是一场永不散场的狂欢，是午夜森林中带血的盛宴。你追求的不仅仅是满足，而是通过满足来蜕变。',
    motto: '“我们饮下，我们改变。”',
    tarotCard: 'III - THE EMPRESS'
  },
  'Grail+Edge': {
    title: '掠夺者 (The Ravager)',
    description: '你想要的东西，你会亲手去拿。你的欲望伴随着暴力，你的征服伴随着快感。你是战场上的饕餮，吞噬着败者的力量。',
    motto: '“强者通吃。”',
    tarotCard: 'XV - THE DEVIL'
  },

  // Moth Combinations
  'Moth+Knock': {
    title: '穿林者 (The Wood-Walker)',
    description: '你知道林地中的捷径。你穿过树木，穿过伤口，穿过梦境。没有墙能挡住你，因为你随时可以变成别的东西。',
    motto: '“我在缝隙中行走。”',
    tarotCard: 'XVIII - THE MOON'
  },
  'Moth+Lantern': {
    title: '寻光者 (The Light-Seeker)',
    description: '你像飞蛾扑火一样追逐真理。你知道那光芒会灼伤你，但你无法抗拒。你在疯狂与理智的边缘徘徊，寻找那最终的启示。',
    motto: '“为了光，我愿燃烧。”',
    tarotCard: 'IX - THE HERMIT'
  },

  // Knock Combinations
  'Knock+Secret Histories': {
    title: '考古学家 (The Archaeologist)',
    description: '你挖掘过去，打开尘封的墓穴。你知道每一个秘密都是一把钥匙，每一段历史都是一扇门。你揭示那些被埋藏的真相。',
    motto: '“过去从未死去，它只是被锁住了。”',
    tarotCard: 'XXI - THE WORLD'
  },

  // Secret Histories Combinations
  'Secret Histories+Lantern': {
    title: '图书管理员 (The Librarian)',
    description: '你守护着知识，整理着光芒的碎片。你明白秩序的重要性，即使是在混乱的历史中。你用理智的光芒照亮过去的阴影。',
    motto: '“知识即是光。”',
    tarotCard: 'V - THE HIEROPHANT'
  },

  // Rose Combinations
  'Rose+Secret Histories': {
    title: '流亡者 (The Exile)',
    description: '你已行过千山万水，足迹遍布那些被遗忘的古道与废弃的圣所。对你而言，历史并非书本上的文字，而是脚下延伸的尘土。你不再属于任何一座城池，因为整个世界既是你的流放地，也是你的朝圣路。你知晓通往漫宿的所有捷径，却唯独遗失了归乡的地图。',
    motto: '“家园已逝，唯有前路。”',
    tarotCard: '0 - THE FOOL'
  },
  'Rose+Knock': {
    title: '渗透者 (The Infiltrator)',
    description: '墙壁对你而言不过是等待被拆解的谜题，锁钥的咬合声是你最亲切的耳语。你像一阵穿堂风，轻易地滑过那些被严密看守的界限。无论是物质的樊笼还是心灵的迷宫，都无法困住你探寻的脚步。你不仅穿过了门，你成为了门本身。',
    motto: '“界限是为别人设立的。”',
    tarotCard: 'VII - THE CHARIOT'
  },

  // Sky Combinations
  'Sky+Forge': {
    title: '裂空者 (The Sky-Render)',
    description: '当你的锤砧落下，连苍穹亦为之震颤。你引动高空的雷霆注入凡铁，将风暴的狂怒锻造成形。你的造物不仅仅是工具，它们是灾难的具象，是对此世脆弱法则的傲慢嘲弄。你不仅在锻造武器，你正在重铸天空的秩序。',
    motto: '“风暴不是被驯服的，它是被锻造的。”',
    tarotCard: 'XVI - THE TOWER'
  },
  'Sky+Lantern': {
    title: '天穹之眼 (The Eye of the Firmament)',
    description: '在凡人眼中闪烁的星辰，在你眼中却是宇宙精密的齿轮与代码。你洞悉了维系漫宿运转的冰冷逻辑，那是一种不含仁慈、绝对完美的几何学。你站在高处俯瞰众生，如同虚空凝视着尘埃，理解了光辉背后的残酷真理。',
    motto: '“在光的尽头，是绝对的法则。”',
    tarotCard: 'XVII - THE STAR'
  },

  // Moon Combinations
  'Moon+Moth': {
    title: '梦游者 (The Sleepwalker)',
    description: '现实的边缘在你眼中早已模糊，如同月光下的潮汐般涨落不定。你在清醒时漫步于梦境的森林，在沉睡中低语着现世的秘密。你的灵魂是一只在虚幻与真实之间迷途的飞蛾，追逐着那些不存在于此世的苍白磷火，沉醉于疯狂而凄美的诗篇。',
    motto: '“醒来才是噩梦的开始。”',
    tarotCard: 'XVIII - THE MOON'
  },

  // Nectar Combinations
  'Nectar+Heart': {
    title: '丰饶之母/父 (The Bountiful)',
    description: '你的血液中流淌着太古森林的脉动，每一次呼吸都带来春日的潮湿与生机。你是枯骨上绽放的野花，是荒原中涌出的甘泉。在你身边，伤口会以惊人的速度愈合，生命会以狂野的姿态疯长。你不仅滋养万物，你就是生命那无法被遏制的狂喜本身。',
    motto: '“生命，生命，更多的生命。”',
    tarotCard: 'III - THE EMPRESS'
  },

  // Scale Combinations
  'Scale+Winter': {
    title: '墓穴守卫 (The Crypt-Warden)',
    description: '你如同一座沉默的山脉，屹立在生者与死者的边界。你的意志像冻土般坚硬，封存着那些不应见光的秘密与古老的诅咒。时间在你身上失去了意义，你成为了永恒的守望者，确保那些沉睡在黑暗中的事物，永远不会被惊扰。',
    motto: '“在此止步。”',
    tarotCard: 'IV - THE EMPEROR'
  }
};
