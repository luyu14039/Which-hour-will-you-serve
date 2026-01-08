import type { Question } from '../types';

export const questions: Question[] = [
  // --- STAGE 1: THE CALL (启蒙) ---
  {
    id: 'origin',
    title: '第一章：遗产 (The Legacy)',
    description: '伦敦的雨总是带着一股陈旧硬币和湿羊毛的味道。在那个阴郁的午后，一份来自已故亲属的包裹打破了你平静的生活。除了微薄的积蓄，里面还有一样东西，它在阴影中呼吸...',
    options: [
      {
        id: 'A',
        text: '一本字迹癫狂的笔记',
        values: { 'Lantern': 1 },
        flavorText: '“光不仅照亮事物，更将其刺穿。”——作为医生，你见过太多无法被手术刀切除的病灶。这本笔记散发着消毒水和陈旧恐惧的味道。',
        nextQuestionId: 'q2_physician'
      },
      {
        id: 'B',
        text: '一枚温热的古旧银币',
        values: { 'Grail': 1 },
        flavorText: '它在你的掌心搏动，像一颗被剥离的心脏。你的家族从未提及这笔遗产，但你一直知道，有些债务是用血偿还的。',
        nextQuestionId: 'q2_rich'
      },
      {
        id: 'C',
        text: '一份关于“无面者”的档案',
        values: { 'Edge': 1 },
        flavorText: '作为警局的边缘人，你习惯了在阴沟里寻找真相。档案袋上沾着干涸的血迹，那是你唯一熟悉的颜色。',
        nextQuestionId: 'q2_detective'
      },
      {
        id: 'D',
        text: '一张空白的塔罗牌',
        values: { 'Moth': 1 },
        flavorText: '你是个默默无闻的职员，但这张牌让你想起了梦中那片没有树皮的森林。在梦里，你总是赤着脚。',
        nextQuestionId: 'q2_dreamer'
      },
      {
        id: 'E',
        text: '一卷尘封已久的羊皮纸',
        values: { 'Secret Histories': 1 },
        flavorText: '上面记载着被正史抹去的朝代。墨迹似乎在自行游走，重组着那些不应被铭记的名字。',
        nextQuestionId: 'q2_scholar'
      },
      {
        id: 'F',
        text: '一把沉重的铁锤',
        values: { 'Forge': 1 },
        flavorText: '它比看起来要重得多，手柄上刻着“改变”的字样。你感到一种破坏的冲动，想要粉碎旧的形态。',
        nextQuestionId: 'q2_physician'
      },
      {
        id: 'G',
        text: '一朵永不凋谢的苍白花朵',
        values: { 'Winter': 1 },
        flavorText: '它散发着墓土的寒意，触感像死人的皮肤。你感到一种宁静，仿佛所有的声音都被吸走了。',
        nextQuestionId: 'q2_scholar'
      },
      {
        id: 'H',
        text: '一块仍在跳动的琥珀',
        values: { 'Heart': 1 },
        flavorText: '里面封存着某种古老的昆虫，它似乎还在呼吸。你感到一种莫名的活力，心跳与它同步。',
        nextQuestionId: 'q2_dreamer'
      },
      {
        id: 'I',
        text: '一把没有齿的钥匙',
        values: { 'Knock': 1 },
        flavorText: '它无法打开任何普通的锁，但你直觉它能打开更重要的东西。比如伤口，或者梦境。',
        nextQuestionId: 'q2_detective'
      },
      {
        id: 'J',
        text: '一面总是照出背面的镜子',
        values: { 'Moon': 1 },
        flavorText: '无论你如何调整角度，镜中映出的总是事物的背面，或是隐藏在阴影中的秘密。',
        nextQuestionId: 'q2_dreamer'
      },
      {
        id: 'K',
        text: '一块冰冷的陨石碎片',
        values: { 'Sky': 1 },
        flavorText: '它比看起来要沉重，散发着高空的寒意。握着它，你感到一种绝对的、不容置疑的秩序。',
        nextQuestionId: 'q2_physician'
      },
      {
        id: 'L',
        text: '一张画着迷宫的地图',
        values: { 'Rose': 1 },
        flavorText: '地图上的路径似乎在不断变化。它指引的不是地点，而是方向。你感到一种流浪的冲动。',
        nextQuestionId: 'q2_scholar'
      },
      {
        id: 'M',
        text: '一颗石化的蛇眼',
        values: { 'Scale': 1 },
        flavorText: '它坚硬如铁，凝视着过去。你感到一种古老的坚韧，仿佛皮肤正在硬化成鳞片。',
        nextQuestionId: 'q2_detective'
      },
      {
        id: 'N',
        text: '一瓶散发着甜腻香气的液体',
        values: { 'Nectar': 1 },
        flavorText: '那是生命最原始的味道，混合了花蜜、血液和腐殖质。你感到体内有什么东西在疯狂生长。',
        nextQuestionId: 'q2_rich'
      }
    ]
  },
  
  // Branch: Physician
  {
    id: 'q2_physician',
    title: '苍白的医学 (Pale Medicine)',
    description: '你回到医院值夜班。停尸房里传来奇怪的声音，那具无名尸体似乎...并不安分。死者本应保持沉默。',
    options: [
      { id: 'A', text: '解剖它，寻找生理异常', values: { 'Forge': 2, 'Scale': 1 }, flavorText: '血肉只是机器，你试图拆解它以理解故障。手术刀划过皮肤的声音令人安心，就像敲击坚硬的甲壳。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '安抚它，监测生命体征', values: { 'Heart': 2, 'Nectar': 1 }, flavorText: '生命在死亡中依然顽强，你试图维持这种不可能的律动。心跳监视器画出了诡异的波形，如同藤蔓生长。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '观察瞳孔与尸斑', values: { 'Lantern': 2, 'Sky': 1 }, flavorText: '你用理性的目光审视死亡，寻找科学无法解释的征兆。它的瞳孔里倒映着不存在的光，那是来自高空的冷漠注视。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '为它举行简单的葬礼', values: { 'Winter': 2, 'Moon': 1 }, flavorText: '死者应得安息，你用寂静安抚了躁动。寒冷弥漫在房间里，声音消失了，只有月光在窥视。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Rich
  {
    id: 'q2_rich',
    title: '丝绒与低语 (Velvet & Whispers)',
    description: '在伊弗涅俱乐部（Ecdysis Club），一位戴着面纱的女士注意到了你手中的银币。空气中弥漫着香水和陈酒的味道。',
    options: [
      { id: 'A', text: '请她喝一杯，探听消息', values: { 'Grail': 2, 'Nectar': 1 }, flavorText: '欲望是通用的货币，而你挥金如土。她的嘴唇像伤口一样红，散发着甜腻的香气。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '展示家族徽章，要求解释', values: { 'Edge': 2, 'Sky': 1 }, flavorText: '权力不容置疑，你习惯了发号施令。她微微低头，但这可能只是伪装的顺从。你感到一种居高临下的快感。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '讲一个荒诞的笑话', values: { 'Moth': 2, 'Knock': 1 }, flavorText: '你用混乱打破了僵局，她被你的疯狂逗乐了。笑声不仅是防御，更是撬开防线的工具。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '真诚地赞美她的面纱', values: { 'Heart': 2, 'Rose': 1 }, flavorText: '你的魅力源自真心，这比金钱更难得。她似乎在面纱后微笑，指引你走向更深处的迷宫。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Detective
  {
    id: 'q2_detective',
    title: '未干的墨迹 (Wet Ink)',
    description: '档案将你指引向东区的一间废弃公寓。墙上画满了眼睛，墨迹似乎还未干透，仿佛有人刚离开。',
    options: [
      { id: 'A', text: '搜集现场的仪式残片', values: { 'Knock': 2, 'Rose': 1 }, flavorText: '每一扇门都需要钥匙，每一个谜题都有答案。你捡起了一块刻着伤疤的骨头，它似乎指向某个遥远的方向。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '潜伏观察，等待嫌疑人', values: { 'Edge': 2, 'Scale': 1 }, flavorText: '猎人必须有耐心，刀锋必须藏在鞘中。你在阴影中与黑暗融为一体，皮肤变得像石头一样坚硬。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '分析墙上的涂鸦逻辑', values: { 'Lantern': 2, 'Sky': 1 }, flavorText: '即使是疯子也有逻辑，你试图解读混乱中的秩序。这些眼睛似乎在盯着你，带着审判的意味。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '感受残留的死亡气息', values: { 'Winter': 2, 'Moon': 1 }, flavorText: '这里发生过死亡，你对这种寒冷感到亲切。死者留下了无声的证词，只有月光能听懂。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Dreamer
  {
    id: 'q2_dreamer',
    title: '无墙之林 (The Wood)',
    description: '你睡着了。没有墙壁，只有树木。有些东西在树后看着你，那是被称为“林地”的梦境边缘。',
    options: [
      { id: 'A', text: '脱下衣服，在月光下起舞', values: { 'Moth': 2, 'Nectar': 1 }, flavorText: '蜕皮是成长的开始，你听到了振翅声。你感觉皮肤下有什么东西在蠕动，那是生命的野性呼唤。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '保持警惕，寻找道路', values: { 'Lantern': 2, 'Sky': 1 }, flavorText: '即使在梦中，理智也是武器，你拒绝被混乱吞噬。你紧握着清醒的意识，如同握着一把冰冷的尺。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '拥抱树木，感受脉动', values: { 'Heart': 2, 'Rose': 1 }, flavorText: '森林是活的，你与它同呼吸，共命运。树液像血液一样流淌，指引你走向森林深处。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '回忆古老的林地传说', values: { 'Secret Histories': 2, 'Moon': 1 }, flavorText: '你知道这里的规则，因为你在书上读过。不要吃这里的食物，不要回应名字。月光下，一切都显露原形。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Scholar (New)
  {
    id: 'q2_scholar',
    title: '被遗忘的历史 (Forgotten Histories)',
    description: '你根据羊皮纸的指引找到了一间被遗忘的地下图书馆。空气中弥漫着臭氧和古老纸张的味道，这里的时间似乎停滞了。',
    options: [
      { id: 'A', text: '整理散落的禁忌手稿', values: { 'Secret Histories': 2, 'Rose': 1 }, flavorText: '你将碎片拼凑成历史，虽然这历史并不存在。文字在纸上重组，描绘出一张通往未知的地图。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '在寂静中聆听回声', values: { 'Winter': 2, 'Scale': 1 }, flavorText: '这里埋葬着死去的知识，你学会了像死人一样沉默。尘埃落下的声音震耳欲聋，古老的石头在低语。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '点亮提灯，照亮角落', values: { 'Lantern': 2, 'Sky': 1 }, flavorText: '光芒驱散了阴影，你发现了隐藏的卷轴。有些东西畏惧光亮，正如谎言畏惧真理。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '寻找隐藏的暗门', values: { 'Knock': 2, 'Moon': 1 }, flavorText: '图书馆本身就是一个谜题，而你找到了机关。书架后传来了齿轮转动的声音，月光从缝隙中透出。', nextQuestionId: 'q3_bookstore' }
    ]
  },

  // Convergence
  {
    id: 'q3_bookstore',
    title: '莫尔兰书店 (Morland\'s Shop)',
    description: '所有的线索都指向这里。门铃响了，但莫尔兰女士仍在打瞌睡。空气中漂浮着尘埃和旧纸张的香气。你的手指划过一排排旧书，最终停在了一本散发着微弱热度的书脊上。',
    options: [
      { 
        id: 'A', 
        text: '《星辰与辉光的法则》', 
        values: { 'Lantern': 2, 'Sky': 2 }, 
        flavorText: '逻辑严密得令人窒息，每一个公式都在燃烧。它讲述了星辰运行的轨迹，以及光芒背后的绝对秩序。', 
        nextQuestionId: 'q4_work' 
      },
      { 
        id: 'B', 
        text: '《重塑基石》', 
        values: { 'Forge': 2, 'Scale': 2 }, 
        flavorText: '书脊滚烫，闻起来像雨后的岩石。它教导如何用烈火软化顽石，将世界锻造成更坚固的形态。', 
        nextQuestionId: 'q4_work' 
      },
      { 
        id: 'C', 
        text: '《伤口即是门扉》', 
        values: { 'Edge': 2, 'Knock': 2 }, 
        flavorText: '书页边缘锋利如刀，夹着一把画出来的钥匙。痛苦是开门的代价，每一个伤口都是通往别处的路。', 
        nextQuestionId: 'q4_work' 
      },
      { 
        id: 'D', 
        text: '《苍白之夜》', 
        values: { 'Winter': 2, 'Moon': 2 }, 
        flavorText: '阅读它时，周围的声音仿佛都被吸走了。镜子般的书页映照出事物的背面，那是被遗忘的寂静。', 
        nextQuestionId: 'q4_work' 
      },
      { 
        id: 'E', 
        text: '《永恒的脉动》', 
        values: { 'Heart': 2, 'Nectar': 2 }, 
        flavorText: '书页随着看不见的心跳震动，散发着花蜜的甜香。生命在其中狂欢，拒绝枯萎，拒绝停止。', 
        nextQuestionId: 'q4_work' 
      },
      { 
        id: 'F', 
        text: '《狂喜的蜕变》', 
        values: { 'Grail': 2, 'Moth': 2 }, 
        flavorText: '文字在纸上跳动，散发着诱人的香气。它承诺填满你的空虚，只要你愿意脱去旧皮，拥抱混乱。', 
        nextQuestionId: 'q4_work' 
      },
      { 
        id: 'G', 
        text: '《未绘之图》', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '书中的地图在不断变化，每一页都是一个岔路口。它指引你走向那些从未发生过的历史，走向未知的地平线。', 
        nextQuestionId: 'q4_work' 
      }
    ]
  },

  {
    id: 'q4_work',
    title: '凡俗的躯壳 (The Mundane Shell)',
    description: '禁忌的知识在脑海中生根，但你仍需维持生计。在枯燥的工作中，你如何消磨时间？',
    options: [
      { 
        id: 'A', 
        text: '在账目间隙描绘不可见的地图', 
        values: { 'Secret Histories': 3, 'Rose': 1 }, 
        flavorText: '历史有许多个版本，你在记录真实的那一个。墨水渗透了纸背，指引向未知的方向。', 
        nextQuestionId: 'q5_ally' 
      },
      { 
        id: 'B', 
        text: '将自身投入劳作的熔炉', 
        values: { 'Forge': 3, 'Scale': 1 }, 
        flavorText: '身体是熔炉，汗水是燃料。你将自己锻造成器，皮肤在高温下变得坚硬如鳞。', 
        nextQuestionId: 'q5_ally' 
      },
      { 
        id: 'C', 
        text: '在茶歇时播撒不安的种子', 
        values: { 'Moth': 3, 'Knock': 1 }, 
        flavorText: '混乱是阶梯，你寻找着制度的裂缝。谎言比真相更甜美，能撬开人们封闭的心智。', 
        nextQuestionId: 'q5_ally' 
      },
      { 
        id: 'D', 
        text: '利用职务之便窃取资源', 
        values: { 'Grail': 3, 'Edge': 1 }, 
        flavorText: '为了伟大的事业，一点小小的贪污算什么？你品尝着禁果的滋味，磨砺着贪婪的刀锋。', 
        nextQuestionId: 'q5_ally' 
      },
      { 
        id: 'E', 
        text: '保持微笑，维系团队关系', 
        values: { 'Heart': 3, 'Nectar': 1 }, 
        flavorText: '你用永不枯竭的活力掩盖了内心的秘密。你的心跳掩盖了低语声，生命在伪装下疯长。', 
        nextQuestionId: 'q5_ally' 
      },
      { 
        id: 'F', 
        text: '在显微镜下寻找光的本质', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '即使在最微小的事物中，辉光也无处不在。你试图理解这世界的底层逻辑与绝对秩序。', 
        nextQuestionId: 'q5_ally' 
      },
      { 
        id: 'G', 
        text: '寻找办公室里的隐藏空间', 
        values: { 'Winter': 3, 'Moon': 1 }, 
        flavorText: '喧嚣之外总有寂静。你寻找那些被光遗忘的角落，在那里，月光和尘埃是唯一的伴侣。', 
        nextQuestionId: 'q5_ally' 
      }
    ]
  },

  {
    id: 'q5_ally',
    title: '志同道合者 (A Kindred Spirit)',
    description: '在茫茫人海中，你遇到了第一个可能理解你的人。你被对方身上的什么特质吸引？',
    options: [
      { 
        id: 'A', 
        text: '那个眼神冷漠的逻辑学家', 
        values: { 'Lantern': 2, 'Sky': 2 }, 
        flavorText: '他看见了辉光，且没有被灼瞎。他的目光如镜子般反射着真理，言语如同冰冷的法则。', 
        nextQuestionId: 'q5b_obsession' 
      },
      { 
        id: 'B', 
        text: '那个皮肤粗糙的工匠', 
        values: { 'Forge': 2, 'Scale': 2 }, 
        flavorText: '他的眼中燃烧着改变世界的火焰，皮肤像石头一样坚硬。他随时准备将一切投入熔炉，重塑现实。', 
        nextQuestionId: 'q5b_obsession' 
      },
      { 
        id: 'C', 
        text: '那个总是擦拭匕首的开锁人', 
        values: { 'Edge': 2, 'Knock': 2 }, 
        flavorText: '伤疤是他的勋章，钥匙是他的武器。他总能找到上锁的门，并用暴力或技巧打开它们。', 
        nextQuestionId: 'q5b_obsession' 
      },
      { 
        id: 'D', 
        text: '那个苍白的守夜人', 
        values: { 'Winter': 2, 'Moon': 2 }, 
        flavorText: '他已经准备好迎接结局，甚至期待着它。他身上带着墓土的味道，只在月光下显露真容。', 
        nextQuestionId: 'q5b_obsession' 
      },
      { 
        id: 'E', 
        text: '那个充满活力的园丁', 
        values: { 'Heart': 2, 'Nectar': 2 }, 
        flavorText: '无论发生什么，他的心跳始终平稳。他懂得生命的循环，能让枯木逢春，也能让鲜血流淌。', 
        nextQuestionId: 'q5b_obsession' 
      },
      { 
        id: 'F', 
        text: '那个疯狂的舞者', 
        values: { 'Grail': 2, 'Moth': 2 }, 
        flavorText: '他渴望着什么，正如你一样，饥渴难耐。他像飞蛾一样不可预测，时刻准备蜕变，在混乱中狂欢。', 
        nextQuestionId: 'q5b_obsession' 
      },
      { 
        id: 'G', 
        text: '那个流浪的绘图师', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '他走过那些不存在的道路，鞋底沾满了异域的尘土。他知道哪里有门，并能指引你走向未知的方向。', 
        nextQuestionId: 'q5b_obsession' 
      }
    ]
  },

  {
    id: 'q5b_obsession',
    title: '执念 (The Obsession)',
    description: '禁忌的知识在你的脑海中燃烧。是什么驱使你继续前行，即使前方是万丈深渊？',
    options: [
      { 
        id: 'A', 
        text: '对真理与方向的渴望', 
        values: { 'Lantern': 3, 'Rose': 1 }, 
        flavorText: '我必须知道。无知是唯一的罪恶。光芒在召唤我，指引我走向未知的方向。', 
        nextQuestionId: 'q5c_sacrifice' 
      },
      { 
        id: 'B', 
        text: '对力量与征服的追求', 
        values: { 'Forge': 3, 'Edge': 1 }, 
        flavorText: '我将重塑这个世界。我是锤，世界是铁。阻挡我的人都将成为废料。', 
        nextQuestionId: 'q5c_sacrifice' 
      },
      { 
        id: 'C', 
        text: '对感官与生命的沉溺', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '我想品尝一切。痛苦、快乐、恐惧，都是美味。我的心跳为此而狂乱。', 
        nextQuestionId: 'q5c_sacrifice' 
      },
      { 
        id: 'D', 
        text: '对终结与静谧的向往', 
        values: { 'Winter': 3, 'Moon': 1 }, 
        flavorText: '一切终将结束。我只是想看清结局的样子，那是镜中倒影般的永恒寂静。', 
        nextQuestionId: 'q5c_sacrifice' 
      },
      { 
        id: 'E', 
        text: '对蜕变与开启的冲动', 
        values: { 'Moth': 3, 'Knock': 1 }, 
        flavorText: '我不愿再做人类。我要脱去这层皮，敲开肉体的牢笼，飞向未知的更高处。', 
        nextQuestionId: 'q5c_sacrifice' 
      },
      { 
        id: 'F', 
        text: '对门扉与历史的探索', 
        values: { 'Knock': 3, 'Secret Histories': 1 }, 
        flavorText: '我想知道门后有什么。没有锁能拦住我，我要揭开那些被抹去的过往。', 
        nextQuestionId: 'q5c_sacrifice' 
      },
      { 
        id: 'G', 
        text: '对坚韧与自然的执着', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '我要像岩石一样坚不可摧，像藤蔓一样生生不息。我将在这个残酷的世界扎根。', 
        nextQuestionId: 'q5c_sacrifice' 
      }
    ]
  },

  {
    id: 'q5c_sacrifice',
    title: '初次献祭 (The First Sacrifice)',
    description: '为了踏上这条道路，你必须抛弃一些凡俗的重负。你献祭了什么？',
    options: [
      { 
        id: 'A', 
        text: '我的名誉与社会地位', 
        values: { 'Moth': 2, 'Knock': 2 }, 
        flavorText: '让他们说我是疯子吧。我剪断了社会的牵索，现在我是自由的。', 
        nextQuestionId: 'q6_cult_hq' 
      },
      { 
        id: 'B', 
        text: '我的理智与安稳睡眠', 
        values: { 'Winter': 2, 'Moon': 2 }, 
        flavorText: '梦境侵蚀了现实。我不再需要清醒，我在疯狂的边缘看到了更美的风景。', 
        nextQuestionId: 'q6_cult_hq' 
      },
      { 
        id: 'C', 
        text: '我的健康与肉体完整', 
        values: { 'Forge': 2, 'Edge': 2 }, 
        flavorText: '伤疤是入场券。我用痛苦换取力量，用血肉喂养火焰。', 
        nextQuestionId: 'q6_cult_hq' 
      },
      { 
        id: 'D', 
        text: '我的过去与家族记忆', 
        values: { 'Lantern': 2, 'Sky': 2 }, 
        flavorText: '我烧毁了照片和信件。为了看见真理，我必须斩断与谎言的联系。', 
        nextQuestionId: 'q6_cult_hq' 
      },
      { 
        id: 'E', 
        text: '我的道德与同情心', 
        values: { 'Grail': 2, 'Heart': 2 }, 
        flavorText: '善良是软弱的借口。我拥抱了饥饿，我学会了在必要时无情地进食。', 
        nextQuestionId: 'q6_cult_hq' 
      },
      { 
        id: 'F', 
        text: '我的一只眼睛', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '为了看见不可见之物，我牺牲了凡俗的视力。现在的世界更加清晰，也更加陌生。', 
        nextQuestionId: 'q6_cult_hq' 
      },
      { 
        id: 'G', 
        text: '我的恐惧', 
        values: { 'Scale': 2, 'Nectar': 2 }, 
        flavorText: '我杀死了内心的怯懦。现在我像野兽一样本能地生存，像岩石一样无畏。', 
        nextQuestionId: 'q6_cult_hq' 
      }
    ]
  },

  // --- STAGE 2: THE SOCIETY (结社) ---
  {
    id: 'q6_cult_hq',
    title: '临时总部 (The Sanctuary)',
    description: '追随者聚集在你身边，如飞蛾扑火。你需要一个隐秘的场所来安放这些躁动的灵魂，一个凡人视线之外的避难所。',
    options: [
      { 
        id: 'A', 
        text: '一座废弃的灯塔工厂', 
        values: { 'Forge': 3, 'Lantern': 1 }, 
        flavorText: '巨大的透镜聚集着光芒，炉火在底部日夜不息。我们在光与火中锻造变革，将凡俗的铁炼成神圣的金。', 
        nextQuestionId: 'q7_creed' 
      },
      { 
        id: 'B', 
        text: '图书馆后的隐秘暗门', 
        values: { 'Secret Histories': 3, 'Knock': 1 }, 
        flavorText: '只有知道暗号的人才能找到它。门后是错综复杂的走廊，通往未被记录的历史，藏匿着不应存在的知识。', 
        nextQuestionId: 'q7_creed' 
      },
      { 
        id: 'C', 
        text: '一所提供特殊服务的疗养院', 
        values: { 'Heart': 3, 'Grail': 1 }, 
        flavorText: '生命在这里延续，欲望在这里得到满足。我们在狂欢中守护着血脉的跳动，用欢愉对抗虚无。', 
        nextQuestionId: 'q7_creed' 
      },
      { 
        id: 'D', 
        text: '一座戒备森严的陵墓', 
        values: { 'Winter': 3, 'Edge': 1 }, 
        flavorText: '死者是最好的守卫，墙壁坚不可摧。我们在寂静中磨砺刀锋，等待终结，与尸骨为伴。', 
        nextQuestionId: 'q7_creed' 
      },
      { 
        id: 'E', 
        text: '一个只在月夜出现的马戏团', 
        values: { 'Moth': 3, 'Moon': 1 }, 
        flavorText: '它随着月相变化位置。我们在混乱中安家，在苍白的月光下脱去伪装，上演着无人能懂的戏剧。', 
        nextQuestionId: 'q7_creed' 
      },
      { 
        id: 'F', 
        text: '一座俯瞰城市的律法高塔', 
        values: { 'Sky': 3, 'Scale': 1 }, 
        flavorText: '我们在高处审视众生，制定规则。坚硬的石墙隔绝了凡俗的喧嚣，我们是秩序的守护者。', 
        nextQuestionId: 'q7_creed' 
      },
      { 
        id: 'G', 
        text: '一片被遗忘的杂草丛生的废墟', 
        values: { 'Nectar': 3, 'Rose': 1 }, 
        flavorText: '植物在断壁残垣间疯长，掩盖了古老的路径。我们在荒野中寻找方向，回归自然的怀抱。', 
        nextQuestionId: 'q7_creed' 
      }
    ]
  },

  {
    id: 'q7_creed',
    title: '教团信条 (The Doctrine)',
    description: '你的信徒们渴望指引，他们饥渴的眼神注视着你。你的教团核心教义是什么？这将决定你们飞升的道路。',
    options: [
      { 
        id: 'A', 
        text: '“真理是唯一的律法。”', 
        values: { 'Lantern': 4 }, 
        flavorText: '我们追求无情的真理，并以此审判世界。辉光之下，一切必须井然有序，没有阴影可以藏身。', 
        nextQuestionId: 'q8_exploration' 
      },
      { 
        id: 'B', 
        text: '“冲突锻造世界。”', 
        values: { 'Forge': 2, 'Edge': 2 }, 
        flavorText: '和平是谎言，只有斗争能带来变革。我们是铁锤，世界是铁砧，火花在碰撞中诞生。', 
        nextQuestionId: 'q8_exploration' 
      },
      { 
        id: 'C', 
        text: '“生命是一场盛宴。”', 
        values: { 'Grail': 2, 'Heart': 2 }, 
        flavorText: '我们吞噬一切体验，永不停止跳动。在欲望的尽头，生命生生不息，我们拒绝枯萎。', 
        nextQuestionId: 'q8_exploration' 
      },
      { 
        id: 'D', 
        text: '“寂静是镜中的倒影。”', 
        values: { 'Winter': 2, 'Moon': 2 }, 
        flavorText: '我们在月光下守望终结。世界是一面镜子，我们注视着它破碎前的宁静背面。', 
        nextQuestionId: 'q8_exploration' 
      },
      { 
        id: 'E', 
        text: '“我们行走在被遗忘的道路上。”', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '历史是可塑的，方向是未知的。我们编织过去，探索那些不存在的地平线，寻找世界的裂缝。', 
        nextQuestionId: 'q8_exploration' 
      },
      { 
        id: 'F', 
        text: '“混沌是通往飞升的门扉。”', 
        values: { 'Moth': 2, 'Knock': 2 }, 
        flavorText: '为了这一刻，我们时刻准备着蜕变。敲击世界的伤口，直到它裂开，露出里面的光。', 
        nextQuestionId: 'q8_exploration' 
      },
      { 
        id: 'G', 
        text: '“我们是荒原上的棘刺与古岩。”', 
        values: { 'Scale': 2, 'Nectar': 2 }, 
        flavorText: '我们在恶劣中生存，生命与坚韧共存。像岩石一样古老，像藤蔓一样顽强。', 
        nextQuestionId: 'q8_exploration' 
      }
    ]
  },

  {
    id: 'q8_exploration',
    title: '夜色下的城市 (The City at Night)',
    description: '你派遣信徒去探索城市的废弃角落，寻找那些被遗忘的秘密。他们在阴影中带回了什么？',
    options: [
      { 
        id: 'A', 
        text: '一箱生锈的武器零件', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '它们渴望着被修复，被使用。金属中蕴含着暴力的潜能，等待着火花点燃战火。', 
        nextQuestionId: 'q8b_expedition' 
      },
      { 
        id: 'B', 
        text: '一名迷失的舞者', 
        values: { 'Moth': 3, 'Heart': 1 }, 
        flavorText: '她在寻找森林，或者只是在寻找下一个心跳。她的疯狂充满了生命力，如同扑火的飞蛾。', 
        nextQuestionId: 'q8b_expedition' 
      },
      { 
        id: 'C', 
        text: '一本发光的古老手稿', 
        values: { 'Secret Histories': 3, 'Lantern': 1 }, 
        flavorText: '文字在黑暗中燃烧，记录着不应存在的历史。真理的光芒透过纸背，刺痛了你的双眼。', 
        nextQuestionId: 'q8b_expedition' 
      },
      { 
        id: 'D', 
        text: '一把从尸体上取下的钥匙', 
        values: { 'Winter': 3, 'Knock': 1 }, 
        flavorText: '死者不再需要它了。它冰冷刺骨，却能打开通往另一个世界的门，通往寂静之处。', 
        nextQuestionId: 'q8b_expedition' 
      },
      { 
        id: 'E', 
        text: '一篮奇异的甜美果实', 
        values: { 'Grail': 3, 'Nectar': 1 }, 
        flavorText: '它们生长在不该生长的地方，散发着诱人的香气。每一口都是对感官的极致挑逗，也是生命的馈赠。', 
        nextQuestionId: 'q8b_expedition' 
      },
      { 
        id: 'F', 
        text: '一段关于倒影的录像', 
        values: { 'Sky': 3, 'Moon': 1 }, 
        flavorText: '画面中的水坑映照出的不是天空，而是另一个世界。虚假与真实在其中倒置，律法在倒影中扭曲。', 
        nextQuestionId: 'q8b_expedition' 
      },
      { 
        id: 'G', 
        text: '一张标注着地下空洞的地图', 
        values: { 'Rose': 3, 'Scale': 1 }, 
        flavorText: '城市之下还有城市。岩石中隐藏着古老的通道，等待着被重新发现，通往大地的深处。', 
        nextQuestionId: 'q8b_expedition' 
      }
    ]
  },

  {
    id: 'q8b_expedition',
    title: '藏宝地探险 (The Expedition)',
    description: '根据线索，你们锁定了一处可能藏有司辰遗物的地点。但那里并非无人看守。',
    options: [
      { 
        id: 'A', 
        text: '凯尔伊苏姆的废弃修道院', 
        values: { 'Winter': 2, 'Lantern': 2 }, 
        flavorText: '寂静修女曾在此驻足。寒冷刺骨，但你听到了死者的低语指引，光芒在冰雪中折射。', 
        nextQuestionId: 'q8c_obstacle' 
      },
      { 
        id: 'B', 
        text: '狐百合原野的地下墓穴', 
        values: { 'Grail': 2, 'Moth': 2 }, 
        flavorText: '空气中弥漫着甜腻的腐烂气息。这里埋葬着渴望，而非尸体。我们在混乱中寻找宝藏。', 
        nextQuestionId: 'q8c_obstacle' 
      },
      { 
        id: 'C', 
        text: '格里克堡的断壁残垣', 
        values: { 'Edge': 2, 'Forge': 2 }, 
        flavorText: '古老的战场，幽灵仍在厮杀。你需要一把好刀，和一颗冷酷的心，去重铸这段历史。', 
        nextQuestionId: 'q8c_obstacle' 
      },
      { 
        id: 'D', 
        text: '深海之下的沉船', 
        values: { 'Knock': 2, 'Moon': 2 }, 
        flavorText: '有些门开在水下。你需要屏住呼吸，直到肺部燃烧，直到看见深渊中的倒影。', 
        nextQuestionId: 'q8c_obstacle' 
      },
      { 
        id: 'E', 
        text: '镜中之城的倒影', 
        values: { 'Sky': 2, 'Secret Histories': 2 }, 
        flavorText: '这里的光是冷的。你必须分清什么是真实，什么是反射，什么是被遗忘的律法。', 
        nextQuestionId: 'q8c_obstacle' 
      },
      { 
        id: 'F', 
        text: '生机勃勃的地下花园', 
        values: { 'Heart': 2, 'Nectar': 2 }, 
        flavorText: '植物在黑暗中疯狂生长，脉搏在泥土下跳动。生命在此处过于旺盛，吞噬了一切。', 
        nextQuestionId: 'q8c_obstacle' 
      },
      { 
        id: 'G', 
        text: '充满迷雾的迷宫', 
        values: { 'Rose': 2, 'Scale': 2 }, 
        flavorText: '道路在不断变化，岩石在移动。你必须迷失自己，才能找到方向，找到坚固的基石。', 
        nextQuestionId: 'q8c_obstacle' 
      }
    ]
  },

  {
    id: 'q8c_obstacle',
    title: '无形的阻碍 (The Obstacle)',
    description: '通往遗物的道路被某种力量封锁了。这不是凡俗的障碍，而是对你意志的考验。',
    options: [
      { 
        id: 'A', 
        text: '用暴力粉碎屏障', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '没有什么是绝对坚固的。只要力量足够，连空间本身也能被撕裂。', 
        nextQuestionId: 'q9_dream_door' 
      },
      { 
        id: 'B', 
        text: '用欺骗绕过守卫', 
        values: { 'Moth': 3, 'Moon': 1 }, 
        flavorText: '你变成了影子，变成了风。守卫看着你，却什么也没看见。', 
        nextQuestionId: 'q9_dream_door' 
      },
      { 
        id: 'C', 
        text: '用诱惑腐化意志', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '每个人都有渴望。你许诺了他们最想要的东西，于是门为你打开。', 
        nextQuestionId: 'q9_dream_door' 
      },
      { 
        id: 'D', 
        text: '用仪式解开封印', 
        values: { 'Knock': 3, 'Lantern': 1 }, 
        flavorText: '你念出了古老的咒语，光芒在指尖汇聚。锁芯自动旋转，封印瓦解。', 
        nextQuestionId: 'q9_dream_door' 
      },
      { 
        id: 'E', 
        text: '用耐心等待破绽', 
        values: { 'Winter': 3, 'Scale': 1 }, 
        flavorText: '时间是你的盟友。你像石头一样静止，直到屏障自己露出裂缝。', 
        nextQuestionId: 'q9_dream_door' 
      },
      { 
        id: 'F', 
        text: '用知识寻找捷径', 
        values: { 'Secret Histories': 3, 'Sky': 1 }, 
        flavorText: '你在古籍中读到过这里。你知道一条被遗忘的密道，它符合古老的律法。', 
        nextQuestionId: 'q9_dream_door' 
      },
      { 
        id: 'G', 
        text: '用本能感知方向', 
        values: { 'Nectar': 3, 'Rose': 1 }, 
        flavorText: '你闭上眼睛，感受气流的流动。自然会指引你，即使是在这死寂之地。', 
        nextQuestionId: 'q9_dream_door' 
      }
    ]
  },

  {
    id: 'q9_dream_door',
    title: '纯白之门 (The White Door)',
    description: '在梦中，你穿过林地，来到了一扇散发着寒气的白色大门前。守门人伸出了苍白的手，要求过路费。',
    options: [
      { 
        id: 'A', 
        text: '支付一份“健康”', 
        values: { 'Heart': 3, 'Scale': 1 }, 
        flavorText: '你醒来时感到虚弱，但灵魂更加轻盈。肉体只是容器，你献出了血肉的坚韧。', 
        nextQuestionId: 'q10_funds' 
      },
      { 
        id: 'B', 
        text: '支付一份“理智”', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '逻辑的结构瓦解了，你看见了光芒中的尘埃。疯狂是另一种清醒，你献出了思维的秩序。', 
        nextQuestionId: 'q10_funds' 
      },
      { 
        id: 'C', 
        text: '支付一份“激情”', 
        values: { 'Grail': 3, 'Moth': 1 }, 
        flavorText: '你的情感变得麻木，但意志如铁。凡俗的欲望不再困扰你，你献出了内心的躁动。', 
        nextQuestionId: 'q10_funds' 
      },
      { 
        id: 'D', 
        text: '强行闯入', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '门被撬开了，但你也受了伤。有些门是不该被强开的，你用暴力回应了阻碍。', 
        nextQuestionId: 'q10_funds' 
      },
      { 
        id: 'E', 
        text: '欺骗守门人', 
        values: { 'Moon': 3, 'Winter': 1 }, 
        flavorText: '你戴上了面具，守门人以为你是另一个人。谁是真正的你？你献出了真实的自我。', 
        nextQuestionId: 'q10_funds' 
      },
      { 
        id: 'F', 
        text: '说出古老的通行证', 
        values: { 'Secret Histories': 3, 'Rose': 1 }, 
        flavorText: '你知道这扇门的真名。语言是有力量的，尤其是那些被遗忘的语言。你献出了秘密。', 
        nextQuestionId: 'q10_funds' 
      },
      { 
        id: 'G', 
        text: '用鲜血滋养门扉', 
        values: { 'Knock': 3, 'Nectar': 1 }, 
        flavorText: '门渴望着生命。你划破手掌，让血液流淌。你献出了生命的源泉。', 
        nextQuestionId: 'q10_funds' 
      }
    ]
  },

  {
    id: 'q10_funds',
    title: '世俗的资助 (The Funds)',
    description: '教团的运作需要资金，隐秘的技艺也需要物质的支持。你更倾向于哪种方式获取财富？',
    options: [
      { 
        id: 'A', 
        text: '诚实的劳作与信徒的奉献', 
        values: { 'Forge': 2, 'Heart': 2 }, 
        flavorText: '每一枚硬币都浸透了汗水，每一份奉献都源于爱。我们在凡俗中建立根基，用双手创造价值。', 
        nextQuestionId: 'q10b_summoning' 
      },
      { 
        id: 'B', 
        text: '贩卖梦境与诱惑', 
        values: { 'Grail': 2, 'Moth': 2 }, 
        flavorText: '我们在梦中出售理智，在现实中兜售欲望。疯狂与快感是最好的商品，让人欲罢不能。', 
        nextQuestionId: 'q10b_summoning' 
      },
      { 
        id: 'C', 
        text: '伪造文书与贩卖秘密', 
        values: { 'Knock': 2, 'Secret Histories': 2 }, 
        flavorText: '真假并不重要，重要的是有人相信。我们编织谎言，出售那些不该被知晓的历史。', 
        nextQuestionId: 'q10b_summoning' 
      },
      { 
        id: 'D', 
        text: '掠夺与继承无主之财', 
        values: { 'Edge': 2, 'Winter': 2 }, 
        flavorText: '弱肉强食是自然法则，死人不需要财富。我们拿走我们需要的，不留一丝痕迹。', 
        nextQuestionId: 'q10b_summoning' 
      },
      { 
        id: 'E', 
        text: '学术拨款与法律漏洞', 
        values: { 'Lantern': 2, 'Sky': 2 }, 
        flavorText: '凡人敬畏智慧，规则总有缝隙。我们利用体制本身来滋养我们的事业，在光天化日之下行事。', 
        nextQuestionId: 'q10b_summoning' 
      },
      { 
        id: 'F', 
        text: '通过隐秘路线走私', 
        values: { 'Rose': 2, 'Scale': 2 }, 
        flavorText: '城市之下有无数通道。我们运输违禁品，避开所有视线，像蛇一样穿行于阴影之中。', 
        nextQuestionId: 'q10b_summoning' 
      },
      { 
        id: 'G', 
        text: '出售奇异的草药与毒物', 
        values: { 'Moon': 2, 'Nectar': 2 }, 
        flavorText: '来自林地的馈赠，既能治病也能致死。只有我们知道如何调配，掌控生死的界限。', 
        nextQuestionId: 'q10b_summoning' 
      }
    ]
  },

  {
    id: 'q10b_summoning',
    title: '异界的盟友 (The Summoning)',
    description: '随着力量的增长，你尝试跨越帷幕，召唤某种存在来协助你的事业。你呼唤了谁的名字？',
    options: [
      { 
        id: 'A', 
        text: '敲击者与坩埚王', 
        values: { 'Heart': 3, 'Forge': 1 }, 
        flavorText: '永恒的节奏与活体的火焰。它们带来力量与变革，只要你能提供燃料，它们将为你锻造一切。', 
        nextQuestionId: 'q10c_ritual' 
      },
      { 
        id: 'B', 
        text: '镜中少女与伊泽姆', 
        values: { 'Winter': 3, 'Edge': 1 }, 
        flavorText: '苍白的倒影与完美的杀手。它们带来寒冷与死亡，渴望鲜血与寂静，是最好的刺客。', 
        nextQuestionId: 'q10c_ritual' 
      },
      { 
        id: 'C', 
        text: '先知与特蕾莎', 
        values: { 'Lantern': 3, 'Secret Histories': 1 }, 
        flavorText: '光芒中的低语者与历史的记录员。它们知晓过去与未来，能解答你所有的疑惑。', 
        nextQuestionId: 'q10c_ritual' 
      },
      { 
        id: 'D', 
        text: '生者与原生先知', 
        values: { 'Grail': 3, 'Moth': 1 }, 
        flavorText: '无尽的饥饿与混乱的预言。它们带来狂喜与蜕变，让你的敌人陷入疯狂。', 
        nextQuestionId: 'q10c_ritual' 
      },
      { 
        id: 'E', 
        text: '守夜人与迷途之灵', 
        values: { 'Sky': 3, 'Moon': 1 }, 
        flavorText: '律法的执行者与虚幻的幽灵。它们在真实与谎言之间游走，维护着某种不可言说的秩序。', 
        nextQuestionId: 'q10c_ritual' 
      },
      { 
        id: 'F', 
        text: '林地之子与巨蛇', 
        values: { 'Nectar': 3, 'Scale': 1 }, 
        flavorText: '自然的愤怒与古老的智慧。它们带来生长与毁灭，让城市回归荒野。', 
        nextQuestionId: 'q10c_ritual' 
      },
      { 
        id: 'G', 
        text: '引路人与开门者', 
        values: { 'Rose': 3, 'Knock': 1 }, 
        flavorText: '方向的指引者与界限的破坏者。它们能带你去任何地方，打开任何封闭的空间。', 
        nextQuestionId: 'q10c_ritual' 
      }
    ]
  },

  {
    id: 'q10c_ritual',
    title: '献祭仪式 (The Ritual)',
    description: '仪式需要一个焦点，一件能承载力量的器物。你将什么放置在祭坛中央？',
    options: [
      { 
        id: 'A', 
        text: '一面破碎的镜子', 
        values: { 'Moon': 3, 'Winter': 1 }, 
        flavorText: '它映照出破碎的现实。每一块碎片都藏着一个谎言，每一道裂痕都是一张嘴。', 
        nextQuestionId: 'q11_hunter' 
      },
      { 
        id: 'B', 
        text: '一把染血的匕首', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '它渴望着再次品尝鲜血。刀刃上的锈迹是它饮下的生命，它在期待下一场杀戮。', 
        nextQuestionId: 'q11_hunter' 
      },
      { 
        id: 'C', 
        text: '一只满溢的圣杯', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '杯中盛满了红色的液体，散发着甜腻的香气。这是生命的精华，也是欲望的源泉。', 
        nextQuestionId: 'q11_hunter' 
      },
      { 
        id: 'D', 
        text: '一盏永不熄灭的灯', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '光芒刺穿了黑暗，照亮了祭坛的每一个角落。没有阴影可以躲藏，真理在此显现。', 
        nextQuestionId: 'q11_hunter' 
      },
      { 
        id: 'E', 
        text: '一把古老的钥匙', 
        values: { 'Knock': 3, 'Secret Histories': 1 }, 
        flavorText: '它能打开什么？或者它能锁住什么？它是连接两个世界的桥梁，是通往未知的邀请。', 
        nextQuestionId: 'q11_hunter' 
      },
      { 
        id: 'F', 
        text: '一张苍白的面具', 
        values: { 'Moth': 3, 'Rose': 1 }, 
        flavorText: '戴上它，你就不再是你。你成为了某种象征，某种在月光下起舞的存在。', 
        nextQuestionId: 'q11_hunter' 
      },
      { 
        id: 'G', 
        text: '一颗发芽的种子', 
        values: { 'Nectar': 3, 'Scale': 1 }, 
        flavorText: '它在坚硬的石板上扎根，汲取着看不见的养分。生命在死亡中绽放，野性在苏醒。', 
        nextQuestionId: 'q11_hunter' 
      }
    ]
  },

  // --- STAGE 3: THE THREAT (威胁) ---
  {
    id: 'q11_hunter',
    title: '第三章：防剿局 (The Suppression Bureau)',
    description: '那个穿着风衣的警探已经在楼下徘徊了三天。防剿局注意到了你。道格拉斯先生从不轻易放弃。',
    options: [
      { 
        id: 'A', 
        text: '制造意外与暴力清除', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '机器故障，或者街头斗殴。死人不会说话，意外总是发生。我们用铁与火回应威胁。', 
        nextQuestionId: 'q12_aftermath_violence' 
      },
      { 
        id: 'B', 
        text: '诱惑与情感攻势', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '没有人能拒绝真正的诱惑，即使是猎人。我们用爱与欲望软化他的意志，让他成为我们的一员。', 
        nextQuestionId: 'q12_aftermath_seduction' 
      },
      { 
        id: 'C', 
        text: '彻底的隐匿与消失', 
        values: { 'Winter': 3, 'Secret Histories': 1 }, 
        flavorText: '我们像影子一样移动，在地图的缝隙中生存。他找不到不存在的地方，我们已化为寂静。', 
        nextQuestionId: 'q12_aftermath_hiding' 
      },
      { 
        id: 'D', 
        text: '疯狂的陷阱与迷宫', 
        values: { 'Moth': 3, 'Knock': 1 }, 
        flavorText: '我们为他准备了一个没有出口的迷宫。当他走出来时，他将不再是他自己，理智已成碎片。', 
        nextQuestionId: 'q12_aftermath_trap' 
      },
      { 
        id: 'E', 
        text: '利用光芒灼瞎他眼', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '我们利用法律的漏洞，或者直接用真理的光芒烧毁他的眼睛。在绝对的秩序面前，他是违规者。', 
        nextQuestionId: 'q12_aftermath_trap' 
      },
      { 
        id: 'F', 
        text: '迷雾中的误导', 
        values: { 'Moon': 3, 'Rose': 1 }, 
        flavorText: '虚假的线索，错误的路径。他在追逐幻影，而我们早已远去，消失在月色之中。', 
        nextQuestionId: 'q12_aftermath_hiding' 
      },
      { 
        id: 'G', 
        text: '自然的报复', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '毒蛇，荆棘，或者某种古老的疾病。自然界总有办法处理入侵者，让他回归泥土。', 
        nextQuestionId: 'q12_aftermath_violence' 
      }
    ]
  },

  // Branch: Violence
  {
    id: 'q12_aftermath_violence',
    title: '血腥的善后 (The Evidence)',
    description: '事情解决了，但留下了痕迹。尸体怎么处理？这不仅仅是清理，更是一种仪式。',
    options: [
      { 
        id: 'A', 
        text: '作为食尸鬼的饲料', 
        values: { 'Winter': 2, 'Grail': 2 }, 
        flavorText: '尘归尘，土归土，骨头归于饥饿的黑暗。墓地会保守秘密，而饥饿将得到满足。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'B', 
        text: '用火焰净化一切', 
        values: { 'Forge': 2, 'Lantern': 2 }, 
        flavorText: '灰烬是最纯净的物质，火焰会带走罪证。从毁灭中诞生纯净，光芒掩盖了罪行。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'C', 
        text: '将尸体悬挂示众', 
        values: { 'Edge': 2, 'Sky': 2 }, 
        flavorText: '这是对所有窥探者的警告，恐惧是最好的防线。让所有人看见违逆者的下场，这是我们的律法。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'D', 
        text: '将其伪装成意外事故', 
        values: { 'Knock': 2, 'Moth': 2 }, 
        flavorText: '你巧妙地布置了现场，连最有经验的法医也看不出破绽。巧合是精心设计的谎言，混乱掩盖了真相。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'E', 
        text: '埋葬在古树之下', 
        values: { 'Heart': 2, 'Nectar': 2 }, 
        flavorText: '生命滋养生命。他的血肉将成为树木的养分，在春天开出鲜艳的花朵。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'F', 
        text: '抹去他的存在记录', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '你修改了档案，让他从未存在过。他迷失在历史的缝隙中，找不到回家的路。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'G', 
        text: '将他沉入深潭', 
        values: { 'Moon': 2, 'Scale': 2 }, 
        flavorText: '水面平静如镜，深处却隐藏着秘密。他成为了水底沉睡的一部分，坚硬而冰冷。', 
        nextQuestionId: 'q13_sacrifice' 
      }
    ]
  },
  
  // Branch: Trap (New)
  {
    id: 'q12_aftermath_trap',
    title: '理智的崩塌 (The Breakdown)',
    description: '猎人落入了陷阱。他的理智在非欧几里得的几何结构中瓦解。你如何处理这个疯子？',
    options: [
      { 
        id: 'A', 
        text: '将他困在镜中迷宫', 
        values: { 'Knock': 2, 'Moon': 2 }, 
        flavorText: '他在无数个倒影中迷失了方向，永远找不到出口。门关上了，只剩下虚幻的月光。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'B', 
        text: '向他展示不可名状的真理', 
        values: { 'Lantern': 2, 'Sky': 2 }, 
        flavorText: '光芒烧毁了他的视网膜和大脑。他看见了太多，现在他只能尖叫，臣服于绝对的秩序。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'C', 
        text: '让他成为混乱的传播者', 
        values: { 'Moth': 2, 'Heart': 2 }, 
        flavorText: '你剪断了他与现实的最后联系。他笑着跑进了夜色，成为了我们的传声筒，散播着疯狂的生命力。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'D', 
        text: '将他囚禁在机械装置中', 
        values: { 'Forge': 2, 'Edge': 2 }, 
        flavorText: '血肉是软弱的，机器是永恒的。你将他改造成了不知疲倦的守卫，一把活体兵器。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'E', 
        text: '让他遗忘一切', 
        values: { 'Winter': 2, 'Secret Histories': 2 }, 
        flavorText: '你抹去了他的记忆，让他成为了一张白纸。他在寂静中徘徊，不知道自己是谁。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'F', 
        text: '将他放逐到荒野', 
        values: { 'Nectar': 2, 'Scale': 2 }, 
        flavorText: '城市不再欢迎他。他在森林中退化，皮肤变硬，成为了野兽的一部分。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'G', 
        text: '指引他走向错误的道路', 
        values: { 'Rose': 2, 'Grail': 2 }, 
        flavorText: '你给了他一张错误的地图。他在渴望中追寻着永远无法到达的目的地。', 
        nextQuestionId: 'q13_sacrifice' 
      }
    ]
  },

  // Branch: Seduction
  {
    id: 'q12_aftermath_seduction',
    title: '变节者 (The Turncoat)',
    description: '他动摇了，但他需要一个理由背叛他的誓言。你将如何彻底摧毁他的防线？',
    options: [
      { 
        id: 'A', 
        text: '许诺他永生', 
        values: { 'Lantern': 2, 'Forge': 2 }, 
        flavorText: '辉光之下没有死亡，只有永恒的燃烧。他渴望成为光的一部分，渴望被重塑。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'B', 
        text: '满足他扭曲的欲望', 
        values: { 'Grail': 2, 'Heart': 2 }, 
        flavorText: '他将成为我们最忠诚的狗，只要给他骨头。欲望是最好的项圈，心跳为此加速。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'C', 
        text: '与他建立真正的情感连接', 
        values: { 'Heart': 2, 'Nectar': 2 }, 
        flavorText: '你用真心换取真心，他为了爱而背叛了职责。心跳同步的瞬间，他沦陷了，生命交织在一起。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'D', 
        text: '让他陷入疯狂的混乱', 
        values: { 'Moth': 2, 'Moon': 2 }, 
        flavorText: '你剪断了他理智的弦，现在他只听得懂疯狂的语言。他在笑声中崩溃，在月光下起舞。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'E', 
        text: '赋予他真正的权力', 
        values: { 'Edge': 2, 'Sky': 2 }, 
        flavorText: '防剿局束缚了他，而你给了他刀。他将用这把刀审判他的旧主。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'F', 
        text: '向他展示世界的真相', 
        values: { 'Secret Histories': 2, 'Knock': 2 }, 
        flavorText: '你打开了门，让他看见了历史的背面。他无法再回到那个虚假的世界。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'G', 
        text: '承诺带他去往别处', 
        values: { 'Rose': 2, 'Winter': 2 }, 
        flavorText: '你许诺了一个没有痛苦的地方。他在寂静中找到了方向，跟随你走向终结。', 
        nextQuestionId: 'q13_sacrifice' 
      }
    ]
  },
  // Branch: Hiding
  {
    id: 'q12_aftermath_hiding',
    title: '漫长的长夜 (The Long Night)',
    description: '你们躲在阴影中，资源日益匮乏，人心浮动。黑暗中似乎有眼睛在窥视。',
    options: [
      { 
        id: 'A', 
        text: '用严酷的纪律约束信徒', 
        values: { 'Edge': 2, 'Sky': 2 }, 
        flavorText: '恐惧能维持秩序，刀锋必须向外。任何动摇者都将被清洗，律法不容置疑。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'B', 
        text: '用希望和幻象安抚他们', 
        values: { 'Moth': 2, 'Lantern': 2 }, 
        flavorText: '只要梦还在，我们就还在。剪去他们的恐惧，编织美好的谎言，光芒在前方。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'C', 
        text: '互相扶持，共度难关', 
        values: { 'Heart': 2, 'Nectar': 2 }, 
        flavorText: '我们是家人，我们不会抛弃彼此。团结是唯一的温暖，生命在困境中更显顽强。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'D', 
        text: '像死人一样彻底静默', 
        values: { 'Winter': 2, 'Moon': 2 }, 
        flavorText: '没有呼吸，没有心跳，猎人无法追踪不存在的东西。我们已死，故我们安全，月光掩护着我们。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'E', 
        text: '利用古老的密道转移', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '你打开了地图上未标注的门，带领大家走向安全。历史有许多条路，我们走在未知的方向上。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'F', 
        text: '加固避难所的防御', 
        values: { 'Forge': 2, 'Scale': 2 }, 
        flavorText: '我们将这里变成了堡垒。墙壁加厚，门窗封死。我们像岩石一样坚不可摧。', 
        nextQuestionId: 'q13_sacrifice' 
      },
      { 
        id: 'G', 
        text: '打开通往别处的门', 
        values: { 'Knock': 2, 'Grail': 2 }, 
        flavorText: '现实太危险，我们躲进梦境。门后有美酒和安宁，只要你愿意付出代价。', 
        nextQuestionId: 'q13_sacrifice' 
      }
    ]
  },

  {
    id: 'q13_sacrifice',
    title: '力量的代价 (The Price of Power)',
    description: '为了召唤某种强大的存在来扭转局势，必须有人付出代价。漫宿的门扉需要祭品才能开启。',
    options: [
      { 
        id: 'A', 
        text: '一名忠诚的信徒', 
        values: { 'Knock': 3, 'Winter': 1 }, 
        flavorText: '他的血将打开道路，他的沉默将保守秘密。这是他无上的荣耀，也是最后的奉献。', 
        nextQuestionId: 'q14_fascination' 
      },
      { 
        id: 'B', 
        text: '你自己的一部分理智与记忆', 
        values: { 'Moth': 3, 'Secret Histories': 1 }, 
        flavorText: '你剪掉了自己的影子，遗忘了过去。为了飞升，必须抛弃重量，哪怕那是你自己。', 
        nextQuestionId: 'q14_fascination' 
      },
      { 
        id: 'C', 
        text: '大量的财富与敌人的灵魂', 
        values: { 'Forge': 3, 'Edge': 1 }, 
        flavorText: '黄金在熔炉中化为力量，敌人的痛苦成为燃料。毁灭带来新生，战争滋养变革。', 
        nextQuestionId: 'q14_fascination' 
      },
      { 
        id: 'D', 
        text: '自愿献身的圣徒与极致的欢愉', 
        values: { 'Heart': 3, 'Grail': 1 }, 
        flavorText: '没有强迫，只有爱与渴望。他在极乐中走向祭坛，心脏在手中跳动，鲜血甜美如蜜。', 
        nextQuestionId: 'q14_fascination' 
      },
      { 
        id: 'E', 
        text: '一份天才的灵感', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '你将那个可能改变世界的想法献给了光。现在你的脑海一片空白，但门开了，真理降临。', 
        nextQuestionId: 'q14_fascination' 
      },
      { 
        id: 'F', 
        text: '一条隐秘的路径', 
        values: { 'Rose': 3, 'Moon': 1 }, 
        flavorText: '你献祭了方向感，从此只能在月光下徘徊。但你找到了通往漫宿的捷径，虽然你再也回不来了。', 
        nextQuestionId: 'q14_fascination' 
      },
      { 
        id: 'G', 
        text: '坚硬的外壳与生命力', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '你剥下了自己的皮，献出了鲜血。痛苦让你更接近原始的真实，你重生为更古老的存在。', 
        nextQuestionId: 'q14_fascination' 
      }
    ]
  },

  {
    id: 'q14_fascination',
    title: '入迷 (The Golden Light)',
    description: '仪式成功了，但金色的幻象让你无法集中精神。你看见空气中充满了眼睛，阳光在歌唱。这是辉光的诅咒。',
    options: [
      { 
        id: 'A', 
        text: '用恐惧与战斗来抵消', 
        values: { 'Winter': 2, 'Edge': 2 }, 
        flavorText: '冰冷的恐惧让你清醒，敌人的鲜血冲刷了金色的幻象。死亡是唯一的解药，寂静是最好的良药。', 
        nextQuestionId: 'q15_dread' 
      },
      { 
        id: 'B', 
        text: '沉溺其中，记录幻象', 
        values: { 'Lantern': 4 }, 
        flavorText: '这是启示！我不能错过！光芒充满了我的血管，我看见了更高处的法则。我将成为光。', 
        nextQuestionId: 'q15_dread' 
      },
      { 
        id: 'C', 
        text: '用体力劳动与分享来耗尽精力', 
        values: { 'Heart': 2, 'Grail': 2 }, 
        flavorText: '疲惫是最好的镇静剂，或者将疯狂传染给他人。让大家一起感受这份极乐，分担这份重负。', 
        nextQuestionId: 'q15_dread' 
      },
      { 
        id: 'D', 
        text: '顺应混乱，寻找后门', 
        values: { 'Moth': 2, 'Knock': 2 }, 
        flavorText: '既然无法抵抗，那就加入。你在疯狂中找到了逃离辉光的缝隙，变成了另一种生物。', 
        nextQuestionId: 'q15_dread' 
      },
      { 
        id: 'E', 
        text: '在熔炉中重铸意志', 
        values: { 'Forge': 2, 'Scale': 2 }, 
        flavorText: '你将自己投入火中，烧尽了软弱的幻象。你变得坚硬如铁，不可动摇，皮肤化为鳞甲。', 
        nextQuestionId: 'q15_dread' 
      },
      { 
        id: 'F', 
        text: '改写此刻的历史', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '你欺骗了时间，假装这一刻从未发生。你走上了一条没有幻象的岔路，虽然那条路通往未知。', 
        nextQuestionId: 'q15_dread' 
      },
      { 
        id: 'G', 
        text: '躲入月光与自然', 
        values: { 'Moon': 2, 'Nectar': 2 }, 
        flavorText: '辉光太刺眼，你躲进了柔和的月色和茂密的森林。根系让你保持理智，阴影保护着你。', 
        nextQuestionId: 'q15_dread' 
      }
    ]
  },

  {
    id: 'q15_dread',
    title: '恐惧 (The Creeping Cold)',
    description: '入迷消退后，绝望如潮水般涌来。你感到自己渺小而无助，末日似乎近在咫尺。',
    options: [
      { 
        id: 'A', 
        text: '用安逸与欲望来填补', 
        values: { 'Heart': 2, 'Grail': 2 }, 
        flavorText: '一杯热茶，一次狂欢。生活还要继续，感官的刺激能驱散寒冷。', 
        nextQuestionId: 'q16_stag_door' 
      },
      { 
        id: 'B', 
        text: '用愤怒与战斗来对抗', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '恐惧是磨刀石，愤怒是燃料。你凝视深渊，直到深渊移开目光。', 
        nextQuestionId: 'q16_stag_door' 
      },
      { 
        id: 'C', 
        text: '在梦中寻找慰藉或拥抱虚无', 
        values: { 'Moth': 2, 'Winter': 2 }, 
        flavorText: '现实太残酷，不如睡去。或者干脆成为冰，不再感到寒冷。', 
        nextQuestionId: 'q16_stag_door' 
      },
      { 
        id: 'D', 
        text: '用理性的分析解构恐惧', 
        values: { 'Lantern': 2, 'Sky': 2 }, 
        flavorText: '恐惧源于无知。一旦理解了它，将其纳入秩序，它就失去了力量。', 
        nextQuestionId: 'q16_stag_door' 
      },
      { 
        id: 'E', 
        text: '寻找历史中的先例', 
        values: { 'Secret Histories': 2, 'Rose': 2 }, 
        flavorText: '这以前发生过，也会再次发生。你从古籍和地图中找到了方向。', 
        nextQuestionId: 'q16_stag_door' 
      },
      { 
        id: 'F', 
        text: '打开心扉接纳它', 
        values: { 'Knock': 3, 'Scale': 1 }, 
        flavorText: '恐惧也是一种开启。你让它穿过你，像风穿过敞开的门，像水流过坚硬的鳞片。', 
        nextQuestionId: 'q16_stag_door' 
      },
      { 
        id: 'G', 
        text: '在月光下静思', 
        values: { 'Moon': 2, 'Nectar': 2 }, 
        flavorText: '月亮也有阴晴圆缺。你像植物一样忍受寒冬，等待春天的复苏。', 
        nextQuestionId: 'q16_stag_door' 
      }
    ]
  },

  // --- STAGE 4: THE MANSUS (漫宿) ---
  {
    id: 'q16_stag_door',
    title: '第四章：牡鹿之门 (The Stag Door)',
    description: '你的灵魂来到了牡鹿之门前。门上的骷髅发出咯咯的笑声，空洞的眼窝注视着你：“什么东西必须失去？”',
    options: [
      { 
        id: 'A', 
        text: '“我的无知。”', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '门开了，光芒刺眼。你看见了不该看见的真理，理智在燃烧。', 
        nextQuestionId: 'q17_mansus_sight' 
      },
      { 
        id: 'B', 
        text: '“我的仁慈。”', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '门开了，血腥味扑面而来。你为了力量放弃了同情，心如铁石。', 
        nextQuestionId: 'q17_mansus_sight' 
      },
      { 
        id: 'C', 
        text: '“我的界限。”', 
        values: { 'Moth': 3, 'Winter': 1 }, 
        flavorText: '门开了，你听到了振翅声。你不再是完整的个体，你成为了群，或者成为了寂静。', 
        nextQuestionId: 'q17b_spider_door' 
      },
      { 
        id: 'D', 
        text: '“我的名字。”', 
        values: { 'Knock': 3, 'Secret Histories': 1 }, 
        flavorText: '门开了，你成为了无名之辈，可以去往任何地方，打开任何锁。', 
        nextQuestionId: 'q17b_spider_door' 
      },
      { 
        id: 'E', 
        text: '“我的健康。”', 
        values: { 'Heart': 3, 'Grail': 1 }, 
        flavorText: '门开了，鼓声如雷。你放弃了平静的生活，拥抱了永恒的律动与饥渴。', 
        nextQuestionId: 'q17_mansus_sight' 
      },
      { 
        id: 'F', 
        text: '“我的方向。”', 
        values: { 'Rose': 3, 'Moon': 1 }, 
        flavorText: '门开了，你迷失在月光下的岔路口。你不再知道去向何方，但你已在路上。', 
        nextQuestionId: 'q17b_spider_door' 
      },
      { 
        id: 'G', 
        text: '“我的表皮。”', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '门开了，你蜕下了旧皮。你变得坚硬而充满野性，不再受凡俗伤害。', 
        nextQuestionId: 'q17_mansus_sight' 
      }
    ]
  },

  {
    id: 'q17b_spider_door',
    title: '蜘蛛之门 (The Spider\'s Door)',
    description: '你没有止步于牡鹿之门。你向下走，来到了更深的地方。这里没有网，只有无尽的灰色沙砾在风中低语。面前的门扉晶亮如雨滴，黑色的表面渗出饱满的血珠，仿佛无数只肿胀的蜱虫。',
    options: [
      { 
        id: 'A', 
        text: '献上你的鲜血', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '它吸食了你的生命，但也赐予了你永不满足的渴望。你感到一种扭曲的力量在体内涌动。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'B', 
        text: '强行通过', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '你用暴力开辟了道路。门扉上的血珠畏惧你的锋芒，纷纷退散。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'C', 
        text: '与门扉交易秘密', 
        values: { 'Secret Histories': 3, 'Knock': 1 }, 
        flavorText: '你知道它渴望什么。你用一个被遗忘的名字换取了通过权。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'D', 
        text: '像死人一样静默', 
        values: { 'Winter': 3, 'Moth': 1 }, 
        flavorText: '你停止了呼吸和心跳，像死尸一样冰冷。那些渴望温热鲜血的“蜱虫”对你失去了兴趣。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'E', 
        text: '用光芒灼烧', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '你带来了不属于这里的强光。阴影退缩，血珠蒸发，道路显现。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'F', 
        text: '让根系撑开门扉', 
        values: { 'Nectar': 3, 'Scale': 1 }, 
        flavorText: '你种下了古老的种子。藤蔓在瞬间生长，强行撑开了这扇贪婪的门。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'G', 
        text: '寻找月光下的缝隙', 
        values: { 'Rose': 3, 'Moon': 1 }, 
        flavorText: '你没有走正门，而是找到了空间折叠的漏洞。你滑了进去，像一阵风。', 
        nextQuestionId: 'q18_hunger' 
      }
    ]
  },

  {
    id: 'q17_mansus_sight',
    title: '大胜迹 (The Glory)',
    description: '穿过牡鹿之门，你在漫宿的高处目睹了神灵的尸体。那是被谋杀的太阳，流淌着金色的血液。这是宇宙最大的秘密，也是最大的亵渎。',
    options: [
      { 
        id: 'A', 
        text: '痛哭流涕并饮下眼泪', 
        values: { 'Winter': 3, 'Moth': 1 }, 
        flavorText: '悲伤是甜美的，混乱是美味的。你与疯狂共饮，庆祝这荒谬的结局。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'B', 
        text: '收集神血并试图复活', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '这是无上的美味，也是生命的源泉。你试图用自己的心跳唤醒沉睡的神。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'C', 
        text: '记录星象并分析光芒', 
        values: { 'Secret Histories': 3, 'Lantern': 1 }, 
        flavorText: '历史在此刻断裂，光芒遵循法则。你记录下这不可能的时刻，试图理解不可理解之物。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'D', 
        text: '嘲笑陨落并夺取武器', 
        values: { 'Knock': 3, 'Edge': 1 }, 
        flavorText: '旧神已死，新神当立。你看见了机会，渴望那把能弑神的刀。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'E', 
        text: '试图重铸太阳', 
        values: { 'Forge': 3, 'Scale': 1 }, 
        flavorText: '破碎并非终结，而是重塑的开始。你看见了更伟大的形态，坚不可摧。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'F', 
        text: '审判罪行并映照倒影', 
        values: { 'Sky': 3, 'Moon': 1 }, 
        flavorText: '即使是神也无法逃脱律法。你在月光下审视这具尸体，看见了虚假的辉光。', 
        nextQuestionId: 'q18_hunger' 
      },
      { 
        id: 'G', 
        text: '寻找归途并让生命绽放', 
        values: { 'Rose': 3, 'Nectar': 1 }, 
        flavorText: '在神的尸体上，奇异的花朵正在开放。你寻找着通往地面的路，带回这禁忌的种子。', 
        nextQuestionId: 'q18_hunger' 
      }
    ]
  },

  {
    id: 'q18_hunger',
    title: '无尽的饥饿 (The Insatiable Hunger)',
    description: '回到现世后，你感到一种无法被凡俗食物填满的饥饿。世界尝起来像灰烬。你渴望吞噬什么？',
    options: [
      { 
        id: 'A', 
        text: '古籍中的知识与被遗忘的过去', 
        values: { 'Lantern': 3, 'Secret Histories': 1 }, 
        flavorText: '你狼吞虎咽地阅读，吞噬历史的残片。文字是唯一的食粮。', 
        nextQuestionId: 'q19_betrayal' 
      },
      { 
        id: 'B', 
        text: '鲜活的体验与无尽的爱', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '盛宴永不结束。你渴望被包围，被需要，被爱。这是唯一的填补方式。', 
        nextQuestionId: 'q19_betrayal' 
      },
      { 
        id: 'C', 
        text: '他人的痛苦与物质的毁灭', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '他们的尖叫是你的佐餐酒，你将世界嚼碎。毁灭带来饱足感。', 
        nextQuestionId: 'q19_betrayal' 
      },
      { 
        id: 'D', 
        text: '绝对的虚无与混乱', 
        values: { 'Winter': 3, 'Moth': 1 }, 
        flavorText: '你吞噬寂静，渴望在混沌中起舞。秩序让你反胃，寒冷让你满足。', 
        nextQuestionId: 'q19_betrayal' 
      },
      { 
        id: 'E', 
        text: '未知的秘密与隐秘的路径', 
        values: { 'Knock': 3, 'Rose': 1 }, 
        flavorText: '你渴望打开所有的盒子，走遍所有的路。谜题是你的美餐。', 
        nextQuestionId: 'q19_betrayal' 
      },
      { 
        id: 'F', 
        text: '律法的审判与月光的幻象', 
        values: { 'Sky': 3, 'Moon': 1 }, 
        flavorText: '你吞噬罪恶，品尝谎言。真理与虚假在你的舌尖交织。', 
        nextQuestionId: 'q19_betrayal' 
      },
      { 
        id: 'G', 
        text: '原始的生命与坚硬的岩石', 
        values: { 'Nectar': 3, 'Scale': 1 }, 
        flavorText: '你渴望泥土的味道，渴望变得坚不可摧。自然是你的一部分。', 
        nextQuestionId: 'q19_betrayal' 
      }
    ]
  },

  {
    id: 'q19_betrayal',
    title: '背叛 (The Betrayal)',
    description: '你最信任的一名核心信徒试图背叛你，窃取你的飞升机会。即使是最忠诚的狗，也会在饥饿时咬主人。',
    options: [
      { 
        id: 'A', 
        text: '宽恕并将其转化为傀儡', 
        values: { 'Heart': 3, 'Winter': 1 }, 
        flavorText: '爱能融化坚冰，或者死亡能带来永恒的忠诚。现在他永远不会背叛了。', 
        nextQuestionId: 'q20_grand_ritual' 
      },
      { 
        id: 'B', 
        text: '决斗并将其投入熔炉', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '强者生存。他的背叛成为了最好的燃料，他在火焰中尖叫。', 
        nextQuestionId: 'q20_grand_ritual' 
      },
      { 
        id: 'C', 
        text: '献祭给司辰或诱入陷阱', 
        values: { 'Knock': 3, 'Moth': 1 }, 
        flavorText: '废物利用。你打开了不该打开的门，让他迷失在自己的阴谋中。', 
        nextQuestionId: 'q20_grand_ritual' 
      },
      { 
        id: 'D', 
        text: '用逻辑揭穿并从历史中抹去', 
        values: { 'Lantern': 3, 'Secret Histories': 1 }, 
        flavorText: '他在真理下无处遁形。你修改了记录，现在从未有过这个人。', 
        nextQuestionId: 'q20_grand_ritual' 
      },
      { 
        id: 'E', 
        text: '吞噬他的欲望并审判他', 
        values: { 'Grail': 3, 'Sky': 1 }, 
        flavorText: '你吸干了他的野心，只留下一具空壳。律法不容背叛。', 
        nextQuestionId: 'q20_grand_ritual' 
      },
      { 
        id: 'F', 
        text: '让他迷失在迷宫中', 
        values: { 'Rose': 3, 'Moon': 1 }, 
        flavorText: '你改变了道路，让他永远在原地打转，直到分不清幻象与真实。', 
        nextQuestionId: 'q20_grand_ritual' 
      },
      { 
        id: 'G', 
        text: '碾碎他并喂给野兽', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '你展现了原始的残暴。他成为了森林的养分。', 
        nextQuestionId: 'q20_grand_ritual' 
      }
    ]
  },

  {
    id: 'q20_grand_ritual',
    title: '大仪式 (The Grand Ritual)',
    description: '时机已到。群星归位。你准备举行一场大仪式来打开飞升之门。你选择的祭品是？',
    options: [
      { 
        id: 'A', 
        text: '抛弃人性并在狂舞中飞升', 
        values: { 'Moth': 4, 'Heart': 1 }, 
        flavorText: '我不再是我。鼓声如雷，我在蜕变中超越了肉体。', 
        nextQuestionId: 'q21_peacock_door' 
      },
      { 
        id: 'B', 
        text: '献祭城市并引发战争', 
        values: { 'Forge': 4, 'Edge': 1 }, 
        flavorText: '巨大的能量撕裂帷幕，毁灭是新生的代价。世界在燃烧。', 
        nextQuestionId: 'q21_peacock_door' 
      },
      { 
        id: 'C', 
        text: '吞噬信徒并归于寂静', 
        values: { 'Grail': 4, 'Winter': 1 }, 
        flavorText: '这是血肉的盛宴，也是最后的沉默。我们将融为一体。', 
        nextQuestionId: 'q21_peacock_door' 
      },
      { 
        id: 'D', 
        text: '揭示秘密并重写历史', 
        values: { 'Knock': 4, 'Secret Histories': 1 }, 
        flavorText: '真理将使我们自由。时间倒流，门开了。', 
        nextQuestionId: 'q21_peacock_door' 
      },
      { 
        id: 'E', 
        text: '烧毁理智并制定新法', 
        values: { 'Lantern': 4, 'Sky': 1 }, 
        flavorText: '为了看见真理，必须先瞎眼。我在光芒中确立了新的秩序。', 
        nextQuestionId: 'q21_peacock_door' 
      },
      { 
        id: 'F', 
        text: '迷失方向并打破现实', 
        values: { 'Rose': 4, 'Moon': 1 }, 
        flavorText: '所有的路都通向这里，所有的幻象都成真。世界只是一个倒影。', 
        nextQuestionId: 'q21_peacock_door' 
      },
      { 
        id: 'G', 
        text: '硬化血肉并回归自然', 
        values: { 'Scale': 4, 'Nectar': 1 }, 
        flavorText: '我成为了大地的一部分，永恒不朽。根系穿透了帷幕。', 
        nextQuestionId: 'q21_peacock_door' 
      }
    ]
  },

  // --- STAGE 5: ASCENSION (飞升) ---
  {
    id: 'q21_peacock_door',
    title: '第五章：孔雀之门 (The Peacock Door)',
    description: '你来到了漫宿的极高处。孔雀之门闪耀着令人目盲的光芒，无数只眼睛注视着你。',
    options: [
      { 
        id: 'A', 
        text: '挖出双眼并审判光芒', 
        values: { 'Lantern': 3, 'Sky': 1 }, 
        flavorText: '肉眼凡胎无法直视真理。你用心灵去观看，并理解了光的法则。', 
        nextQuestionId: 'q22_farewell' 
      },
      { 
        id: 'B', 
        text: '用镜子反射并观察倒影', 
        values: { 'Winter': 3, 'Moon': 1 }, 
        flavorText: '通过倒影观察更加安全。你保持着冷静的距离，看见了虚假的真实。', 
        nextQuestionId: 'q22_farewell' 
      },
      { 
        id: 'C', 
        text: '强行闯入并斩断光幕', 
        values: { 'Forge': 3, 'Edge': 1 }, 
        flavorText: '痛苦只是转化的过程。你在光芒中重铸自己，用利刃开辟道路。', 
        nextQuestionId: 'q22_farewell' 
      },
      { 
        id: 'D', 
        text: '寻找后门并蜕去人形', 
        values: { 'Knock': 3, 'Moth': 1 }, 
        flavorText: '总有缝隙可钻。你变成了某种不需要视觉的东西，滑入了阴影。', 
        nextQuestionId: 'q22_farewell' 
      },
      { 
        id: 'E', 
        text: '回忆密语并寻找路径', 
        values: { 'Secret Histories': 3, 'Rose': 1 }, 
        flavorText: '你知道这扇门的秘密。你曾在梦中来过无数次，熟悉每一条岔路。', 
        nextQuestionId: 'q22_farewell' 
      },
      { 
        id: 'F', 
        text: '用心跳感应并饮下光芒', 
        values: { 'Heart': 3, 'Grail': 1 }, 
        flavorText: '光芒也有脉搏。你张开嘴，吞噬了那些光，与它共振。', 
        nextQuestionId: 'q22_farewell' 
      },
      { 
        id: 'G', 
        text: '硬化皮肤并扎根于光中', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '你的皮肤变得如岩石般坚硬，吸收着光芒作为养分。', 
        nextQuestionId: 'q22_farewell' 
      }
    ]
  },

  {
    id: 'q22_farewell',
    title: '最后的告别 (The Farewell)',
    description: '在飞升前的最后时刻，你回头看了一眼凡世。你看到了什么？',
    options: [
      { 
        id: 'A', 
        text: '燃烧的废墟与精密的钟表', 
        values: { 'Edge': 3, 'Forge': 1 }, 
        flavorText: '我留下了毁灭与秩序。世界在燃烧，但机器仍在运转。', 
        nextQuestionId: 'q23_rival' 
      },
      { 
        id: 'B', 
        text: '永不散场的宴席与不息的心跳', 
        values: { 'Grail': 3, 'Heart': 1 }, 
        flavorText: '我留下了欲望与生命。他们将永远饥渴，永远跳动。', 
        nextQuestionId: 'q23_rival' 
      },
      { 
        id: 'C', 
        text: '寂静的墓地与纷飞的鳞粉', 
        values: { 'Winter': 3, 'Moth': 1 }, 
        flavorText: '我留下了安宁与混乱。一切归于沉寂，又在疯狂中重生。', 
        nextQuestionId: 'q23_rival' 
      },
      { 
        id: 'D', 
        text: '无限的可能性与永恒的光', 
        values: { 'Secret Histories': 3, 'Lantern': 1 }, 
        flavorText: '我留下了真理与分叉的历史。光芒照亮了每一条未选的路。', 
        nextQuestionId: 'q23_rival' 
      },
      { 
        id: 'E', 
        text: '敞开的门与错综的迷宫', 
        values: { 'Knock': 3, 'Rose': 1 }, 
        flavorText: '我留下了通道与方向。后来者将穿越界限，迷失在旅途中。', 
        nextQuestionId: 'q23_rival' 
      },
      { 
        id: 'F', 
        text: '严酷的律法与虚幻的倒影', 
        values: { 'Sky': 3, 'Moon': 1 }, 
        flavorText: '我留下了审判与谎言。世界在规则与幻象之间摇摆。', 
        nextQuestionId: 'q23_rival' 
      },
      { 
        id: 'G', 
        text: '坚固的岩石与茂密的森林', 
        values: { 'Scale': 3, 'Nectar': 1 }, 
        flavorText: '我留下了原始的自然。文明崩塌，但生命在废墟上疯长。', 
        nextQuestionId: 'q23_rival' 
      }
    ]
  },

  {
    id: 'q23_rival',
    title: '宿敌 (The Rival)',
    description: '一位敌对的具名者挡在了三尖之门前。他是你的一面镜子，是你未曾选择的道路。他长着和你一样的脸。',
    options: [
      { 
        id: 'A', 
        text: '与他融合并诱惑他', 
        values: { 'Heart': 4, 'Grail': 1 }, 
        flavorText: '我们本就是一体。拥抱你的阴影，满足他的渴望，变得完整。', 
        nextQuestionId: 'q24_transformation' 
      },
      { 
        id: 'B', 
        text: '将他撕碎并碾压', 
        values: { 'Edge': 4, 'Forge': 1 }, 
        flavorText: '只能有一个胜者。你的力量是压倒性的，你斩断了最后的羁绊。', 
        nextQuestionId: 'q24_transformation' 
      },
      { 
        id: 'C', 
        text: '欺骗他并等待他消亡', 
        values: { 'Moth': 4, 'Winter': 1 }, 
        flavorText: '他被自己的倒影迷惑了。时间站在你这边，你静静地看着他归于尘土。', 
        nextQuestionId: 'q24_transformation' 
      },
      { 
        id: 'D', 
        text: '向他展示真理并审判他', 
        values: { 'Lantern': 4, 'Sky': 1 }, 
        flavorText: '他在辉光面前跪下了。真理征服一切，律法不容置疑。', 
        nextQuestionId: 'q24_transformation' 
      },
      { 
        id: 'E', 
        text: '把他关起来并改写历史', 
        values: { 'Knock': 4, 'Secret Histories': 1 }, 
        flavorText: '你打开了一扇通往虚空的门，并修改了过去。他从未成为你的对手。', 
        nextQuestionId: 'q24_transformation' 
      },
      { 
        id: 'F', 
        text: '误导他并让他迷失', 
        values: { 'Rose': 4, 'Moon': 1 }, 
        flavorText: '你指引他走向错误的道路，他在月光下的迷宫中永远徘徊。', 
        nextQuestionId: 'q24_transformation' 
      },
      { 
        id: 'G', 
        text: '承受他的攻击并吞噬他', 
        values: { 'Scale': 4, 'Nectar': 1 }, 
        flavorText: '你如山岳般不动。他的攻击无效，而你像藤蔓一样缠绕并吸收了他。', 
        nextQuestionId: 'q24_transformation' 
      }
    ]
  },

  {
    id: 'q24_transformation',
    title: '本质的转化 (Transformation)',
    description: '在光芒中，你意识到自己不再是人类。你的皮肤剥落，露出了下面的...',
    options: [
      { 
        id: 'A', 
        text: '光芒与律法', 
        values: { 'Lantern': 5, 'Sky': 1 }, 
        flavorText: '我成为了光，我成为了法。我无所不知，我不可违逆。', 
        nextQuestionId: 'q25_end' 
      },
      { 
        id: 'B', 
        text: '门扉与路径', 
        values: { 'Knock': 5, 'Rose': 1 }, 
        flavorText: '我成为了门，我成为了路。我连接一切，我通往何方。', 
        nextQuestionId: 'q25_end' 
      },
      { 
        id: 'C', 
        text: '饥饿与律动', 
        values: { 'Grail': 5, 'Heart': 1 }, 
        flavorText: '我成为了口，我成为了心。我吞噬世界，我永不停歇。', 
        nextQuestionId: 'q25_end' 
      },
      { 
        id: 'D', 
        text: '虚无与蜕变', 
        values: { 'Winter': 5, 'Moth': 1 }, 
        flavorText: '我成为了终结，我成为了变化。我带来寂静，我不再是我。', 
        nextQuestionId: 'q25_end' 
      },
      { 
        id: 'E', 
        text: '火焰与利刃', 
        values: { 'Forge': 5, 'Edge': 1 }, 
        flavorText: '我成为了火，我成为了刀。我燃烧杂质，我分割世界。', 
        nextQuestionId: 'q25_end' 
      },
      { 
        id: 'F', 
        text: '记录与倒影', 
        values: { 'Secret Histories': 5, 'Moon': 1 }, 
        flavorText: '我成为了书，我成为了镜。我承载历史，我映照虚幻。', 
        nextQuestionId: 'q25_end' 
      },
      { 
        id: 'G', 
        text: '岩石与根系', 
        values: { 'Scale': 5, 'Nectar': 1 }, 
        flavorText: '我成为了基石，我成为了森林。我永恒坚固，我生生不息。', 
        nextQuestionId: 'q25_end' 
      }
    ]
  },

  {
    id: 'q25_end',
    title: '结局 (The End)',
    description: '你穿过了三尖之门。你成为了历史的哪一部分？',
    options: [
      {
        id: 'A',
        text: '历史与方向',
        values: { 'Secret Histories': 5, 'Rose': 1 },
        flavorText: '我成为了历史本身，也成为了指引方向的罗盘。我无处不在。',
        nextQuestionId: 'end'
      },
      {
        id: 'B',
        text: '欲望与生命',
        values: { 'Grail': 5, 'Heart': 1 },
        flavorText: '我成为了永恒的渴望，也成为了不息的生命。我感受一切。',
        nextQuestionId: 'end'
      },
      {
        id: 'C',
        text: '毁灭与重铸',
        values: { 'Edge': 5, 'Forge': 1 },
        flavorText: '我成为了战争，也成为了创造。我毁灭旧世界，铸造新世界。',
        nextQuestionId: 'end'
      },
      {
        id: 'D',
        text: '寂静与混乱',
        values: { 'Winter': 5, 'Moth': 1 },
        flavorText: '我成为了死亡，也成为了疯狂。我带来安宁，也带来不可预测。',
        nextQuestionId: 'end'
      },
      {
        id: 'E',
        text: '真理与律法',
        values: { 'Lantern': 5, 'Sky': 1 },
        flavorText: '我成为了光，也成为了法。我照亮一切，我裁决一切。',
        nextQuestionId: 'end'
      },
      {
        id: 'F',
        text: '门扉与月光',
        values: { 'Knock': 5, 'Moon': 1 },
        flavorText: '我成为了连接，也成为了幻象。我打开所有的门，映照所有的梦。',
        nextQuestionId: 'end'
      },
      {
        id: 'G',
        text: '自然与坚韧',
        values: { 'Nectar': 5, 'Scale': 1 },
        flavorText: '我成为了大地，也成为了不朽。我滋养万物，我永恒存在。',
        nextQuestionId: 'end'
      }
    ]
  }
];
