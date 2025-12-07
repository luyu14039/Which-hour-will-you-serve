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
        aspect: 'Lantern',
        value: 1,
        flavorText: '“光不仅照亮事物，更将其刺穿。”——作为医生，你见过太多无法被手术刀切除的病灶。这本笔记散发着消毒水和陈旧恐惧的味道。',
        nextQuestionId: 'q2_physician'
      },
      {
        id: 'B',
        text: '一枚温热的古旧银币',
        aspect: 'Grail',
        value: 1,
        flavorText: '它在你的掌心搏动，像一颗被剥离的心脏。你的家族从未提及这笔遗产，但你一直知道，有些债务是用血偿还的。',
        nextQuestionId: 'q2_rich'
      },
      {
        id: 'C',
        text: '一份关于“无面者”的档案',
        aspect: 'Edge',
        value: 1,
        flavorText: '作为警局的边缘人，你习惯了在阴沟里寻找真相。档案袋上沾着干涸的血迹，那是你唯一熟悉的颜色。',
        nextQuestionId: 'q2_detective'
      },
      {
        id: 'D',
        text: '一张空白的塔罗牌',
        aspect: 'Moth',
        value: 1,
        flavorText: '你是个默默无闻的职员，但这张牌让你想起了梦中那片没有树皮的森林。在梦里，你总是赤着脚。',
        nextQuestionId: 'q2_dreamer'
      },
      {
        id: 'E',
        text: '一卷尘封已久的羊皮纸',
        aspect: 'Secret Histories',
        value: 1,
        flavorText: '上面记载着被正史抹去的朝代。墨迹似乎在自行游走，重组着那些不应被铭记的名字。',
        nextQuestionId: 'q2_scholar'
      },
      {
        id: 'F',
        text: '一把沉重的铁锤',
        aspect: 'Forge',
        value: 1,
        flavorText: '它比看起来要重得多，手柄上刻着“改变”的字样。你感到一种破坏的冲动，想要粉碎旧的形态。',
        nextQuestionId: 'q2_physician'
      },
      {
        id: 'G',
        text: '一朵永不凋谢的苍白花朵',
        aspect: 'Winter',
        value: 1,
        flavorText: '它散发着墓土的寒意，触感像死人的皮肤。你感到一种宁静，仿佛所有的声音都被吸走了。',
        nextQuestionId: 'q2_scholar'
      },
      {
        id: 'H',
        text: '一块仍在跳动的琥珀',
        aspect: 'Heart',
        value: 1,
        flavorText: '里面封存着某种古老的昆虫，它似乎还在呼吸。你感到一种莫名的活力，心跳与它同步。',
        nextQuestionId: 'q2_dreamer'
      },
      {
        id: 'I',
        text: '一把没有齿的钥匙',
        aspect: 'Knock',
        value: 1,
        flavorText: '它无法打开任何普通的锁，但你直觉它能打开更重要的东西。比如伤口，或者梦境。',
        nextQuestionId: 'q2_detective'
      }
    ]
  },
  
  // Branch: Physician
  {
    id: 'q2_physician',
    title: '苍白的医学 (Pale Medicine)',
    description: '你回到医院值夜班。停尸房里传来奇怪的声音，那具无名尸体似乎...并不安分。死者本应保持沉默。',
    options: [
      { id: 'A', text: '解剖它，寻找生理异常', aspect: 'Forge', value: 2, flavorText: '血肉只是机器，你试图拆解它以理解故障。手术刀划过皮肤的声音令人安心。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '安抚它，监测生命体征', aspect: 'Heart', value: 2, flavorText: '生命在死亡中依然顽强，你试图维持这种不可能的律动。心跳监视器画出了诡异的波形。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '观察瞳孔与尸斑', aspect: 'Lantern', value: 2, flavorText: '你用理性的目光审视死亡，寻找科学无法解释的征兆。它的瞳孔里倒映着不存在的光。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '为它举行简单的葬礼', aspect: 'Winter', value: 2, flavorText: '死者应得安息，你用寂静安抚了躁动。寒冷弥漫在房间里，声音消失了。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Rich
  {
    id: 'q2_rich',
    title: '丝绒与低语 (Velvet & Whispers)',
    description: '在伊弗涅俱乐部（Ecdysis Club），一位戴着面纱的女士注意到了你手中的银币。空气中弥漫着香水和陈酒的味道。',
    options: [
      { id: 'A', text: '请她喝一杯，探听消息', aspect: 'Grail', value: 2, flavorText: '欲望是通用的货币，而你挥金如土。她的嘴唇像伤口一样红。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '展示家族徽章，要求解释', aspect: 'Edge', value: 2, flavorText: '权力不容置疑，你习惯了发号施令。她微微低头，但这可能只是伪装的顺从。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '讲一个荒诞的笑话', aspect: 'Moth', value: 2, flavorText: '你用混乱打破了僵局，她被你的疯狂逗乐了。笑声像剪刀一样锋利。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '真诚地赞美她的面纱', aspect: 'Heart', value: 2, flavorText: '你的魅力源自真心，这比金钱更难得。她似乎在面纱后微笑。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Detective
  {
    id: 'q2_detective',
    title: '未干的墨迹 (Wet Ink)',
    description: '档案将你指引向东区的一间废弃公寓。墙上画满了眼睛，墨迹似乎还未干透，仿佛有人刚离开。',
    options: [
      { id: 'A', text: '搜集现场的仪式残片', aspect: 'Knock', value: 2, flavorText: '每一扇门都需要钥匙，每一个谜题都有答案。你捡起了一块刻着伤疤的骨头。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '潜伏观察，等待嫌疑人', aspect: 'Edge', value: 2, flavorText: '猎人必须有耐心，刀锋必须藏在鞘中。你在阴影中与黑暗融为一体。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '分析墙上的涂鸦逻辑', aspect: 'Lantern', value: 2, flavorText: '即使是疯子也有逻辑，你试图解读混乱中的秩序。这些眼睛似乎在盯着你。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '感受残留的死亡气息', aspect: 'Winter', value: 2, flavorText: '这里发生过死亡，你对这种寒冷感到亲切。死者留下了无声的证词。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Dreamer
  {
    id: 'q2_dreamer',
    title: '无墙之林 (The Wood)',
    description: '你睡着了。没有墙壁，只有树木。有些东西在树后看着你，那是被称为“林地”的梦境边缘。',
    options: [
      { id: 'A', text: '脱下衣服，在月光下起舞', aspect: 'Moth', value: 2, flavorText: '蜕皮是成长的开始，你听到了振翅声。你感觉皮肤下有什么东西在蠕动。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '保持警惕，寻找道路', aspect: 'Lantern', value: 2, flavorText: '即使在梦中，理智也是武器，你拒绝被混乱吞噬。你紧握着清醒的意识。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '拥抱树木，感受脉动', aspect: 'Heart', value: 2, flavorText: '森林是活的，你与它同呼吸，共命运。树液像血液一样流淌。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '回忆古老的林地传说', aspect: 'Secret Histories', value: 2, flavorText: '你知道这里的规则，因为你在书上读过。不要吃这里的食物，不要回应名字。', nextQuestionId: 'q3_bookstore' }
    ]
  },
  // Branch: Scholar (New)
  {
    id: 'q2_scholar',
    title: '被遗忘的历史 (Forgotten Histories)',
    description: '你根据羊皮纸的指引找到了一间被遗忘的地下图书馆。空气中弥漫着臭氧和古老纸张的味道，这里的时间似乎停滞了。',
    options: [
      { id: 'A', text: '整理散落的禁忌手稿', aspect: 'Secret Histories', value: 2, flavorText: '你将碎片拼凑成历史，虽然这历史并不存在。文字在纸上重组。', nextQuestionId: 'q3_bookstore' },
      { id: 'B', text: '在寂静中聆听回声', aspect: 'Winter', value: 2, flavorText: '这里埋葬着死去的知识，你学会了像死人一样沉默。尘埃落下的声音震耳欲聋。', nextQuestionId: 'q3_bookstore' },
      { id: 'C', text: '点亮提灯，照亮角落', aspect: 'Lantern', value: 2, flavorText: '光芒驱散了阴影，你发现了隐藏的卷轴。有些东西畏惧光亮。', nextQuestionId: 'q3_bookstore' },
      { id: 'D', text: '寻找隐藏的暗门', aspect: 'Knock', value: 2, flavorText: '图书馆本身就是一个谜题，而你找到了机关。书架后传来了齿轮转动的声音。', nextQuestionId: 'q3_bookstore' }
    ]
  },

  // Convergence
  {
    id: 'q3_bookstore',
    title: '莫尔兰书店 (Morland\'s Shop)',
    description: '所有的线索都指向这里。门铃响了，但莫尔兰女士仍在打瞌睡。空气中漂浮着尘埃和旧纸张的香气。你的手指划过一排排旧书，最终停在了一本散发着微弱热度的书脊上。',
    options: [
      { id: 'A', text: '《战栗的诗篇》', aspect: 'Moth', value: 2, flavorText: '文字在纸上跳动，仿佛要挣脱束缚，飞入你的脑海。你听到了剪刀剪开丝绸的声音。', nextQuestionId: 'q4_work' },
      { id: 'B', text: '《关于锁匠的梦》', aspect: 'Knock', value: 2, flavorText: '书中夹着一把画出来的钥匙，却能打开现实的锁。你看见了门后的门。', nextQuestionId: 'q4_work' },
      { id: 'C', text: '《无情的几何学》', aspect: 'Lantern', value: 2, flavorText: '逻辑严密得令人窒息，每一个公式都在燃烧。光芒刺痛了你的双眼。', nextQuestionId: 'q4_work' },
      { id: 'D', text: '《沉默的送葬曲》', aspect: 'Winter', value: 2, flavorText: '阅读它时，周围的声音仿佛都被吸走了，只剩下寒冷。你感到一种苍白的宁静。', nextQuestionId: 'q4_work' },
      { id: 'E', text: '《不休之舞》', aspect: 'Heart', value: 2, flavorText: '书页随着看不见的心跳震动，阅读它让你感到精力充沛。鼓声在远处回荡。', nextQuestionId: 'q4_work' },
      { id: 'F', text: '《上校的战略论》', aspect: 'Edge', value: 2, flavorText: '书页边缘锋利如刀。每一个战术都是为了制造痛苦和终结。', nextQuestionId: 'q4_work' },
      { id: 'G', text: '《未被记录的时刻》', aspect: 'Secret Histories', value: 2, flavorText: '书中的地图在不断变化。你看到了从未发生过的历史，它们比现实更真实。', nextQuestionId: 'q4_work' },
      { id: 'H', text: '《红杯颂歌》', aspect: 'Grail', value: 2, flavorText: '书页散发着甜腻的香气。阅读它让你感到口渴，一种无法被水缓解的渴。', nextQuestionId: 'q4_work' },
      { id: 'I', text: '《炼金术士的笔记》', aspect: 'Forge', value: 2, flavorText: '书脊滚烫。文字在燃烧，讲述着改变物质形态的禁忌技艺。', nextQuestionId: 'q4_work' },
      { 
        id: 'J', 
        text: '一本没有标题的黑色封皮书', 
        aspect: 'Winter', 
        value: 3, 
        flavorText: '你本不该看见它。它散发着坟墓的寒意，只有那些已经触碰过死亡边缘的人才能察觉它的存在。', 
        nextQuestionId: 'q4_work',
        requirement: { aspect: 'Winter', minScore: 1 }
      },
      { 
        id: 'K', 
        text: '《守夜人的镜子》', 
        aspect: 'Lantern', 
        value: 3, 
        flavorText: '只有在特定的角度下，书名才会显现。光芒在书页间折射，只有理智极高的人才敢直视。', 
        nextQuestionId: 'q4_work',
        requirement: { aspect: 'Lantern', minScore: 1 }
      },
      { 
        id: 'L', 
        text: '《被删减的编年史》', 
        aspect: 'Secret Histories', 
        value: 3, 
        flavorText: '这本书的页码是乱序的，每一页都记载着同一个日期的不同版本。你看见了历史的伤口。', 
        nextQuestionId: 'q4_work',
        requirement: { aspect: 'Secret Histories', minScore: 1 }
      },
      { 
        id: 'M', 
        text: '《剪刀与丝绸》', 
        aspect: 'Moth', 
        value: 3, 
        flavorText: '书页薄如蝉翼，仿佛随时会破碎。阅读它让你感到头皮发痒，仿佛有什么东西要长出来。', 
        nextQuestionId: 'q4_work',
        requirement: { aspect: 'Moth', minScore: 1 }
      }
    ]
  },

  {
    id: 'q4_work',
    title: '凡俗的躯壳 (The Mundane Shell)',
    description: '禁忌的知识在脑海中生根，但你仍需维持生计。在枯燥的工作中，你如何消磨时间？',
    options: [
      { id: 'A', text: '在账目间隙描绘不可见的地图', aspect: 'Secret Histories', value: 1, flavorText: '历史有许多个版本，你在记录真实的那一个。墨水渗透了纸背。', nextQuestionId: 'q5_ally' },
      { id: 'B', text: '将自身投入劳作的熔炉', aspect: 'Forge', value: 1, flavorText: '身体是熔炉，汗水是燃料，你将自己锻造成器。火花在你的指尖跳跃。', nextQuestionId: 'q5_ally' },
      { id: 'C', text: '在茶歇时播撒不安的种子', aspect: 'Moth', value: 1, flavorText: '混乱是阶梯，你看着同事们在恐慌中起舞。谎言比真相更甜美。', nextQuestionId: 'q5_ally' },
      { id: 'D', text: '利用职务之便窃取资源', aspect: 'Grail', value: 1, flavorText: '为了伟大的事业，一点小小的贪污算什么？你品尝着禁果的滋味。', nextQuestionId: 'q5_ally' },
      { id: 'E', text: '保持微笑，维系团队关系', aspect: 'Heart', value: 1, flavorText: '你用永不枯竭的活力掩盖了内心的秘密。你的心跳掩盖了低语声。', nextQuestionId: 'q5_ally' },
      { id: 'F', text: '在显微镜下寻找光的本质', aspect: 'Lantern', value: 1, flavorText: '即使在最微小的事物中，辉光也无处不在。你试图理解这世界的底层逻辑。', nextQuestionId: 'q5_ally' },
      { id: 'G', text: '挑起部门间的竞争', aspect: 'Edge', value: 1, flavorText: '冲突能暴露弱点。你像摆弄棋子一样摆弄同事，享受着混乱中的秩序。', nextQuestionId: 'q5_ally' },
      { id: 'H', text: '在档案室整理逝者的记录', aspect: 'Winter', value: 1, flavorText: '死者比生者更诚实。你在旧纸堆中寻找被遗忘的真相，享受着寂静。', nextQuestionId: 'q5_ally' },
      { id: 'I', text: '寻找办公室里的隐藏空间', aspect: 'Knock', value: 1, flavorText: '每栋建筑都有秘密。你敲击墙壁，寻找空洞的回音，寻找通往别处的门。', nextQuestionId: 'q5_ally' }
    ]
  },

  {
    id: 'q5_ally',
    title: '志同道合者 (A Kindred Spirit)',
    description: '在茫茫人海中，你遇到了第一个可能理解你的人。你被对方身上的什么特质吸引？',
    options: [
      { id: 'A', text: '那双仿佛看穿一切的冷漠眼睛', aspect: 'Lantern', value: 2, flavorText: '他看见了辉光，且没有被灼瞎。他的目光如镜子般反射着真理。', nextQuestionId: 'q5b_obsession' },
      { id: 'B', text: '那道横贯面部的狰狞伤疤', aspect: 'Edge', value: 2, flavorText: '那是斗争的勋章，证明他曾与怪物搏斗。伤疤在抽动，渴望着新的鲜血。', nextQuestionId: 'q5b_obsession' },
      { id: 'C', text: '那种令人不安的迷人魅力', aspect: 'Grail', value: 2, flavorText: '他渴望着什么，正如你一样，饥渴难耐。他的笑容里藏着钩子。', nextQuestionId: 'q5b_obsession' },
      { id: 'D', text: '那种死人般的沉静气质', aspect: 'Winter', value: 2, flavorText: '他已经准备好迎接结局，甚至期待着它。他身上带着墓土的味道。', nextQuestionId: 'q5b_obsession' },
      { id: 'E', text: '那种流浪者的沧桑感', aspect: 'Secret Histories', value: 2, flavorText: '他走过那些不存在的道路，鞋底沾满了异域的尘土。他知道哪里有门。', nextQuestionId: 'q5b_obsession' },
      { id: 'F', text: '那种不知疲倦的狂热', aspect: 'Forge', value: 2, flavorText: '他的眼中燃烧着改变世界的火焰。他随时准备将一切投入熔炉。', nextQuestionId: 'q5b_obsession' },
      { id: 'G', text: '那种难以捉摸的疯狂', aspect: 'Moth', value: 2, flavorText: '他像飞蛾一样不可预测，时刻准备蜕变。他的笑声中藏着剪刀的声音。', nextQuestionId: 'q5b_obsession' },
      { id: 'H', text: '那种令人安心的稳重', aspect: 'Heart', value: 2, flavorText: '无论发生什么，他的心跳始终平稳。他是风暴中的锚点。', nextQuestionId: 'q5b_obsession' },
      { id: 'I', text: '那种洞悉秘密的敏锐', aspect: 'Knock', value: 2, flavorText: '他总能找到上锁的门，并知道如何打开它们。他看见了现实的裂缝。', nextQuestionId: 'q5b_obsession' },
      { 
        id: 'J', 
        text: '那个总是擦拭匕首的沉默保镖', 
        aspect: 'Edge', 
        value: 3, 
        flavorText: '他身上的血腥味只有同类才能闻到。他不需要语言，只懂得杀戮的效率。', 
        nextQuestionId: 'q5b_obsession',
        requirement: { aspect: 'Edge', minScore: 2 }
      },
      { 
        id: 'K', 
        text: '那个眼神中燃烧着饥渴的舞者', 
        aspect: 'Grail', 
        value: 3, 
        flavorText: '她不仅仅是在跳舞，她是在进食。她看见了你眼中的空虚，并承诺填满它。', 
        nextQuestionId: 'q5b_obsession',
        requirement: { aspect: 'Grail', minScore: 2 }
      }
    ]
  },

  {
    id: 'q5b_obsession',
    title: '执念 (The Obsession)',
    description: '禁忌的知识在你的脑海中燃烧。是什么驱使你继续前行，即使前方是万丈深渊？',
    options: [
      { id: 'A', text: '对真理的渴望', aspect: 'Lantern', value: 2, flavorText: '我必须知道。无知是唯一的罪恶。光芒在召唤我。', nextQuestionId: 'q6_cult_hq' },
      { id: 'B', text: '对力量的追求', aspect: 'Forge', value: 2, flavorText: '我将重塑这个世界。我是锤，世界是铁。', nextQuestionId: 'q6_cult_hq' },
      { id: 'C', text: '对感官的沉溺', aspect: 'Grail', value: 2, flavorText: '我想品尝一切。痛苦、快乐、恐惧，都是美味。', nextQuestionId: 'q6_cult_hq' },
      { id: 'D', text: '对终结的向往', aspect: 'Winter', value: 2, flavorText: '一切终将结束。我只是想看清结局的样子。', nextQuestionId: 'q6_cult_hq' },
      { id: 'E', text: '对蜕变的冲动', aspect: 'Moth', value: 2, flavorText: '我不愿再做人类。我要脱去这层皮，飞向更高处。', nextQuestionId: 'q6_cult_hq' },
      { id: 'F', text: '对生命的执着', aspect: 'Heart', value: 2, flavorText: '我要活下去，永远活下去。我的心跳将永不停止。', nextQuestionId: 'q6_cult_hq' },
      { id: 'G', text: '对征服的欲望', aspect: 'Edge', value: 2, flavorText: '我要战胜一切阻碍。只有强者才配生存。', nextQuestionId: 'q6_cult_hq' },
      { id: 'H', text: '对门扉的探索', aspect: 'Knock', value: 2, flavorText: '我想知道门后有什么。没有锁能拦住我。', nextQuestionId: 'q6_cult_hq' },
      { id: 'I', text: '对秘密的好奇', aspect: 'Secret Histories', value: 2, flavorText: '我想知道那些被抹去的历史。真相往往藏在谎言之下。', nextQuestionId: 'q6_cult_hq' }
    ]
  },

  // --- STAGE 2: THE SOCIETY (结社) ---
  {
    id: 'q6_cult_hq',
    title: '临时总部 (The Sanctuary)',
    description: '追随者聚集在你身边，如飞蛾扑火。你需要一个隐秘的场所来安放这些躁动的灵魂，一个凡人视线之外的避难所。',
    options: [
      { id: 'A', text: '一座废弃的工厂仓库', aspect: 'Forge', value: 2, flavorText: '敲打声将掩盖我们的仪式，炉火将日夜不息。变革在此锻造。', nextQuestionId: 'q7_creed' },
      { id: 'B', text: '一间隐蔽的地下室', aspect: 'Knock', value: 2, flavorText: '只有知道暗号的人才能进入，门后还有门。这里是世界的伤口。', nextQuestionId: 'q7_creed' },
      { id: 'C', text: '一所经营中的私立医院', aspect: 'Heart', value: 2, flavorText: '生命与死亡在此交汇，无人起疑。我们守护着血脉的延续。', nextQuestionId: 'q7_creed' },
      { id: 'D', text: '一艘停靠在码头的旧船', aspect: 'Secret Histories', value: 2, flavorText: '我们随时准备起航，前往未知的历史。波浪掩盖了我们的低语。', nextQuestionId: 'q7_creed' },
      { id: 'E', text: '一座戒备森严的堡垒', aspect: 'Edge', value: 2, flavorText: '墙壁坚固，视野开阔。我们磨砺刀锋，随时准备迎接必然的冲突。', nextQuestionId: 'q7_creed' },
      { id: 'F', text: '一个流动的马戏团帐篷', aspect: 'Moth', value: 2, flavorText: '今天在这里，明天在那里。我们在混乱中安家，在笑声中隐藏疯狂。', nextQuestionId: 'q7_creed' },
      { id: 'G', text: '一座废弃的灯塔', aspect: 'Lantern', value: 2, flavorText: '它曾指引船只，现在指引我们。光芒在高处闪耀，驱散无知的迷雾。', nextQuestionId: 'q7_creed' },
      { id: 'H', text: '一处荒凉的墓园', aspect: 'Winter', value: 2, flavorText: '死者是最好的邻居，他们从不抱怨。寂静是我们最好的掩护。', nextQuestionId: 'q7_creed' },
      { 
        id: 'I', 
        text: '伊弗涅俱乐部的私人包厢', 
        aspect: 'Grail', 
        value: 3, 
        flavorText: '奢华、堕落、隐秘。在这里，所有的欲望都被允许，所有的秘密都被交换。', 
        nextQuestionId: 'q7_creed',
        requirement: { aspect: 'Grail', minScore: 3 }
      }
    ]
  },

  {
    id: 'q7_creed',
    title: '教团信条 (The Doctrine)',
    description: '你的信徒们渴望指引，他们饥渴的眼神注视着你。你的教团核心教义是什么？这将决定你们飞升的道路。',
    options: [
      { id: 'A', text: '“世界将被锻造。”', aspect: 'Forge', value: 3, flavorText: '我们是变革的铁锤，世界是我们的铁砧。旧的形态必须被打破。', nextQuestionId: 'q8_exploration' },
      { id: 'B', text: '“仁慈仅存在于阴影之中。”', aspect: 'Lantern', value: 3, flavorText: '我们追求无情的真理，哪怕它会灼伤双眼。辉光之下无所遁形。', nextQuestionId: 'q8_exploration' },
      { id: 'C', text: '“饥饿是存在的证明。”', aspect: 'Grail', value: 3, flavorText: '我们吞噬一切体验，直到感官的尽头。永不满足，永不停歇。', nextQuestionId: 'q8_exploration' },
      { id: 'D', text: '“白雪不语，却掩埋一切。”', aspect: 'Winter', value: 3, flavorText: '我们是寂静的守望者，等待着必然的终结。一切终将归于寒冷。', nextQuestionId: 'q8_exploration' },
      { id: 'E', text: '“雷鸣不息，我亦不止。”', aspect: 'Heart', value: 3, flavorText: '我们永不停止，永不放弃。生命本身就是一场狂舞，直到心脏停止跳动。', nextQuestionId: 'q8_exploration' },
      { id: 'F', text: '“冲突是唯一的真理。”', aspect: 'Edge', value: 3, flavorText: '和平是谎言，只有斗争是真实的。我们在鲜血中升华。', nextQuestionId: 'q8_exploration' },
      { id: 'G', text: '“变化是唯一的常态。”', aspect: 'Moth', value: 3, flavorText: '我们像飞蛾一样蜕变，抛弃旧的躯壳。疯狂是进化的阶梯。', nextQuestionId: 'q8_exploration' },
      { id: 'H', text: '“每一堵墙都是一扇门。”', aspect: 'Knock', value: 3, flavorText: '没有什么是封闭的，只要你懂得敲击。我们是开门人。', nextQuestionId: 'q8_exploration' },
      { id: 'I', text: '“过去从未被写定。”', aspect: 'Secret Histories', value: 3, flavorText: '历史是可塑的粘土。我们编织过去，以此改变未来。', nextQuestionId: 'q8_exploration' }
    ]
  },

  {
    id: 'q8_exploration',
    title: '夜色下的城市 (The City at Night)',
    description: '你派遣信徒去探索城市的废弃角落，寻找那些被遗忘的秘密。他们在阴影中带回了什么？',
    options: [
      { id: 'A', text: '一箱生锈的工具和炸药', aspect: 'Edge', value: 2, flavorText: '武器，或者工具，取决于怎么用。它们渴望着破坏。', nextQuestionId: 'q8b_expedition' },
      { id: 'B', text: '几瓶未标记的致幻剂', aspect: 'Moth', value: 2, flavorText: '理智的枷锁需要被溶解，森林在瓶中呼唤。剪去你的束缚。', nextQuestionId: 'q8b_expedition' },
      { id: 'C', text: '一本关于古老仪式的笔记', aspect: 'Secret Histories', value: 2, flavorText: '知识比黄金更重，这些文字在地图上并不存在。历史被改写了。', nextQuestionId: 'q8b_expedition' },
      { id: 'D', text: '一名迷路的无辜者', aspect: 'Heart', value: 2, flavorText: '新的信徒，或者是祭品？不，我们会保护他，直到他准备好。', nextQuestionId: 'q8b_expedition' },
      { id: 'E', text: '绘制了详细的城市灵脉图', aspect: 'Lantern', value: 2, flavorText: '城市也是一种生物，我们找到了它的血管。光流在地下涌动。', nextQuestionId: 'q8b_expedition' },
      { id: 'F', text: '来自古老墓地的尘土', aspect: 'Winter', value: 2, flavorText: '死者有很多话要说，只要你肯倾听。尘土中含有记忆。', nextQuestionId: 'q8b_expedition' },
      { 
        id: 'G', 
        text: '一台仍在运转的古怪机器', 
        aspect: 'Forge', 
        value: 2, 
        flavorText: '它在黑暗中轰鸣，吞噬着周围的热量。你听懂了它的语言：改变。', 
        nextQuestionId: 'q8b_expedition',
        requirement: { aspect: 'Forge', minScore: 2 }
      },
      { 
        id: 'H', 
        text: '一个被封印的红漆盒子', 
        aspect: 'Grail', 
        value: 2, 
        flavorText: '盒子里装着某种还在跳动的东西。它散发着令人无法抗拒的香气。', 
        nextQuestionId: 'q8b_expedition',
        requirement: { aspect: 'Grail', minScore: 2 }
      },
      { 
        id: 'I', 
        text: '一把能打开任何锁的钥匙', 
        aspect: 'Knock', 
        value: 2, 
        flavorText: '它看起来只是一根弯曲的铁丝，但在你手中，它能打开现实的裂缝。', 
        nextQuestionId: 'q8b_expedition',
        requirement: { aspect: 'Knock', minScore: 2 }
      }
    ]
  },

  {
    id: 'q8b_expedition',
    title: '藏宝地探险 (The Expedition)',
    description: '根据线索，你们锁定了一处可能藏有司辰遗物的地点。但那里并非无人看守。',
    options: [
      { id: 'A', text: '凯尔伊苏姆的废弃修道院', aspect: 'Winter', value: 2, flavorText: '寂静修女曾在此驻足。寒冷刺骨，但你听到了死者的低语指引。', nextQuestionId: 'q9_dream_door' },
      { id: 'B', text: '狐百合原野的地下墓穴', aspect: 'Grail', value: 2, flavorText: '空气中弥漫着甜腻的腐烂气息。这里埋葬着渴望，而非尸体。', nextQuestionId: 'q9_dream_door' },
      { id: 'C', text: '格里克堡的断壁残垣', aspect: 'Edge', value: 2, flavorText: '古老的战场，幽灵仍在厮杀。你需要一把好刀，和一颗冷酷的心。', nextQuestionId: 'q9_dream_door' },
      { id: 'D', text: '深海之下的沉船', aspect: 'Knock', value: 2, flavorText: '有些门开在水下。你需要屏住呼吸，直到肺部燃烧，直到看见深渊。', nextQuestionId: 'q9_dream_door' },
      { id: 'E', text: '镜中之城的倒影', aspect: 'Lantern', value: 2, flavorText: '这里的光是冷的。你必须分清什么是真实，什么是反射。', nextQuestionId: 'q9_dream_door' },
      { id: 'F', text: '还在运作的古代铸造厂', aspect: 'Forge', value: 2, flavorText: '机器仍在轰鸣，尽管操作者早已死去。热浪扑面而来，那是创造的气息。', nextQuestionId: 'q9_dream_door' },
      { id: 'G', text: '充满迷雾的沼泽地', aspect: 'Moth', value: 2, flavorText: '道路在不断变化，树木在移动。你必须迷失自己，才能找到方向。', nextQuestionId: 'q9_dream_door' },
      { id: 'H', text: '生机勃勃的地下花园', aspect: 'Heart', value: 2, flavorText: '植物在黑暗中疯狂生长，脉搏在泥土下跳动。生命在此处过于旺盛。', nextQuestionId: 'q9_dream_door' },
      { id: 'I', text: '地图上不存在的街道', aspect: 'Secret Histories', value: 2, flavorText: '你走进了一条从未见过的巷子。这里的建筑风格属于另一个时代。', nextQuestionId: 'q9_dream_door' }
    ]
  },

  {
    id: 'q9_dream_door',
    title: '纯白之门 (The White Door)',
    description: '在梦中，你穿过林地，来到了一扇散发着寒气的白色大门前。守门人伸出了苍白的手，要求过路费。',
    options: [
      { id: 'A', text: '支付一份“健康”', aspect: 'Heart', value: 2, flavorText: '你醒来时感到虚弱，但灵魂更加轻盈。肉体只是容器。', nextQuestionId: 'q10_funds' },
      { id: 'B', text: '支付一份“理智”', aspect: 'Lantern', value: 2, flavorText: '逻辑的结构瓦解了，你看见了光芒中的尘埃。疯狂是另一种清醒。', nextQuestionId: 'q10_funds' },
      { id: 'C', text: '支付一份“激情”', aspect: 'Grail', value: 2, flavorText: '你的情感变得麻木，但意志如铁。凡俗的欲望不再困扰你。', nextQuestionId: 'q10_funds' },
      { id: 'D', text: '强行闯入', aspect: 'Knock', value: 2, flavorText: '门被撬开了，但你也受了伤。有些门是不该被强开的，伤口在流血。', nextQuestionId: 'q10_funds' },
      { id: 'E', text: '欺骗守门人', aspect: 'Moth', value: 2, flavorText: '你戴上了面具，守门人以为你是另一个人。谁是真正的你？', nextQuestionId: 'q10_funds' },
      { id: 'F', text: '保持绝对的沉默', aspect: 'Winter', value: 2, flavorText: '你像影子一样滑过，没有惊动任何人。你不存在于此。', nextQuestionId: 'q10_funds' },
      { id: 'G', text: '重铸门锁', aspect: 'Forge', value: 2, flavorText: '你改变了锁的结构，让它适应你的钥匙。规则是可以被重塑的。', nextQuestionId: 'q10_funds' },
      { id: 'H', text: '击败守门人', aspect: 'Edge', value: 2, flavorText: '你用暴力证明了你的资格。守门人倒下了，路通了。', nextQuestionId: 'q10_funds' },
      { id: 'I', text: '说出古老的通行证', aspect: 'Secret Histories', value: 2, flavorText: '你知道这扇门的真名。语言是有力量的，尤其是那些被遗忘的语言。', nextQuestionId: 'q10_funds' }
    ]
  },

  {
    id: 'q10_funds',
    title: '世俗的资助 (The Funds)',
    description: '教团的运作需要资金，隐秘的技艺也需要物质的支持。你更倾向于哪种方式获取财富？',
    options: [
      { id: 'A', text: '以凡俗的劳作换取银币', aspect: 'Forge', value: 1, flavorText: '诚实，但辛苦。每一枚硬币都浸透了汗水，正如每一把剑都需要锤炼。', nextQuestionId: 'q10b_summoning' },
      { id: 'B', text: '接受一位“好心人”的馈赠', aspect: 'Grail', value: 2, flavorText: '这笔钱带着香水味，代价未明。你品尝着诱饵，等待着钩子。', nextQuestionId: 'q10b_summoning' },
      { id: 'C', text: '伪造不存在的历史证明', aspect: 'Knock', value: 2, flavorText: '真假并不重要，重要的是有人相信。你编织谎言如编织丝绸，打开了财富之门。', nextQuestionId: 'q10b_summoning' },
      { id: 'D', text: '“借用”不义之财', aspect: 'Edge', value: 2, flavorText: '弱肉强食是自然法则。你拿走你需要的，因为你更强，刀锋更利。', nextQuestionId: 'q10b_summoning' },
      { id: 'E', text: '依靠信徒的自愿奉献', aspect: 'Heart', value: 2, flavorText: '我们是家人，互相扶持是理所应当的。血浓于水，金钱只是工具。', nextQuestionId: 'q10b_summoning' },
      { id: 'F', text: '贩卖不为人知的秘密', aspect: 'Secret Histories', value: 2, flavorText: '信息就是力量，而你掌握着许多人想知道的秘密。历史是有价的。', nextQuestionId: 'q10b_summoning' },
      { 
        id: 'G', 
        text: '利用梦境进行交易', 
        aspect: 'Moth', 
        value: 2, 
        flavorText: '你在梦中出售理智，换取现实中的黄金。疯狂是你的货币。', 
        nextQuestionId: 'q10b_summoning',
        requirement: { aspect: 'Moth', minScore: 2 }
      },
      { 
        id: 'H', 
        text: '继承无主之财', 
        aspect: 'Winter', 
        value: 2, 
        flavorText: '死人不需要钱。你只是替他们保管，直到你也成为他们的一员。', 
        nextQuestionId: 'q10b_summoning',
        requirement: { aspect: 'Winter', minScore: 2 }
      },
      { 
        id: 'I', 
        text: '通过学术研究获得资助', 
        aspect: 'Lantern', 
        value: 2, 
        flavorText: '虽然凡人无法理解你的研究，但他们敬畏你的智慧。光芒吸引着飞蛾般的赞助者。', 
        nextQuestionId: 'q10b_summoning',
        requirement: { aspect: 'Lantern', minScore: 2 }
      }
    ]
  },

  {
    id: 'q10b_summoning',
    title: '异界的盟友 (The Summoning)',
    description: '随着力量的增长，你尝试跨越帷幕，召唤某种存在来协助你的事业。你呼唤了谁的名字？',
    options: [
      { id: 'A', text: '敲击者 (Percussigant)', aspect: 'Heart', value: 2, flavorText: '它没有眼睛，只有节奏。它不知疲倦地工作，只要你能忍受那永恒的鼓点。', nextQuestionId: 'q11_hunter' },
      { id: 'B', text: '镜中少女 (Maid-in-the-Mirror)', aspect: 'Winter', value: 2, flavorText: '她从镜面中浮现，苍白而美丽。她能让任何东西消失，包括尸体。', nextQuestionId: 'q11_hunter' },
      { id: 'C', text: '坩埚王 (King Crucible)', aspect: 'Forge', value: 2, flavorText: '活体火焰的傲慢君主。他能锻造一切，但他总是很饿，渴望燃料。', nextQuestionId: 'q11_hunter' },
      { id: 'D', text: '先知 (Raw Prophet)', aspect: 'Grail', value: 2, flavorText: '一团歌唱的血肉。它的歌声令人迷醉，能解开任何人的心防。', nextQuestionId: 'q11_hunter' },
      { id: 'E', text: '提示者 (Hint)', aspect: 'Lantern', value: 2, flavorText: '一个发光的几何体。它知道很多事情，但它的光芒会灼伤你的视网膜。', nextQuestionId: 'q11_hunter' },
      { id: 'F', text: '危险的成虫 (Perilous Imago)', aspect: 'Moth', value: 2, flavorText: '它在现实与梦境之间振翅。它的鳞粉能让人发疯，也能让人遗忘。', nextQuestionId: 'q11_hunter' },
      { id: 'G', text: '门扉猎手 (Key-Hunter)', aspect: 'Knock', value: 2, flavorText: '它能嗅到锁的味道。没有它打不开的门，也没有它找不到的路。', nextQuestionId: 'q11_hunter' },
      { id: 'H', text: '寂静馆的图书管理员', aspect: 'Secret Histories', value: 2, flavorText: '他带来了不存在的书籍。他知道所有被抹去的历史，但他要求你用记忆交换。', nextQuestionId: 'q11_hunter' },
      { 
        id: 'I', 
        text: '特蕾莎 (Teresa)', 
        aspect: 'Lantern', 
        value: 4, 
        flavorText: '漫宿的博学家，她知晓无数秘密。召唤她需要极高的理智，否则你会被她的知识压垮。', 
        nextQuestionId: 'q11_hunter',
        requirement: { aspect: 'Lantern', minScore: 4 }
      },
      { 
        id: 'J', 
        text: '伊泽姆 (Ezeem)', 
        aspect: 'Edge', 
        value: 4, 
        flavorText: '第二大陆的流亡者，完美的杀戮机器。他渴望鲜血，而你承诺给他一场盛宴。', 
        nextQuestionId: 'q11_hunter',
        requirement: { aspect: 'Edge', minScore: 4 }
      }
    ]
  },

  // --- STAGE 3: THE THREAT (威胁) ---
  {
    id: 'q11_hunter',
    title: '第三章：防剿局 (The Suppression Bureau)',
    description: '那个穿着风衣的警探已经在楼下徘徊了三天。防剿局注意到了你。道格拉斯先生从不轻易放弃。',
    options: [
      { id: 'A', text: '让他“意外”消失', aspect: 'Edge', value: 3, flavorText: '死人不会说话，意外总是发生。雨夜是最好的掩护。', nextQuestionId: 'q12_aftermath_violence' },
      { id: 'B', text: '邀请他加入我们', aspect: 'Grail', value: 3, flavorText: '没有人能拒绝真正的诱惑，即使是猎人也会渴望猎物。他也是饥饿的。', nextQuestionId: 'q12_aftermath_seduction' },
      { id: 'C', text: '用法术让他遗忘', aspect: 'Winter', value: 3, flavorText: '记忆是可以被擦除的粉笔字，让他忘记自己是谁。白色的虚无吞噬了他。', nextQuestionId: 'q12_aftermath_hiding' },
      { id: 'D', text: '搬迁据点，暂避锋芒', aspect: 'Secret Histories', value: 2, flavorText: '我们像影子一样移动，在地图的缝隙中生存。他找不到不存在的地方。', nextQuestionId: 'q12_aftermath_hiding' },
      { id: 'E', text: '正面应对，展示无害的假象', aspect: 'Heart', value: 2, flavorText: '你用真诚的微笑和无懈可击的伪装让他困惑。你的心跳平稳如常。', nextQuestionId: 'q12_aftermath_hiding' },
      { id: 'F', text: '引诱他进入疯狂的陷阱', aspect: 'Moth', value: 3, flavorText: '你为他准备了一个迷宫。当他走出来时（如果他能），他将不再是他自己。', nextQuestionId: 'q12_aftermath_trap' },
      { id: 'G', text: '用强光让他失明', aspect: 'Lantern', value: 3, flavorText: '你向他展示了不可直视的真理。他的眼睛被烧毁了，现在他只能看见光。', nextQuestionId: 'q12_aftermath_trap' },
      { id: 'H', text: '制造一场工业事故', aspect: 'Forge', value: 3, flavorText: '机器偶尔会失控，蒸汽管道会爆裂。这只是一场不幸的意外。', nextQuestionId: 'q12_aftermath_violence' },
      { id: 'I', text: '把他关在门外', aspect: 'Knock', value: 3, flavorText: '你锁上了所有的门，包括他心里的门。他被困在了现实之外。', nextQuestionId: 'q12_aftermath_trap' }
    ]
  },

  // Branch: Violence
  {
    id: 'q12_aftermath_violence',
    title: '血腥的善后 (The Evidence)',
    description: '事情解决了，但留下了痕迹。尸体怎么处理？这不仅仅是清理，更是一种仪式。',
    options: [
      { id: 'A', text: '作为食尸鬼的饲料', aspect: 'Winter', value: 2, flavorText: '尘归尘，土归土，骨头归于饥饿的黑暗。墓地会保守秘密。', nextQuestionId: 'q13_sacrifice' },
      { id: 'B', text: '用火焰净化一切', aspect: 'Forge', value: 2, flavorText: '灰烬是最纯净的物质，火焰会带走罪证。从毁灭中诞生纯净。', nextQuestionId: 'q13_sacrifice' },
      { id: 'C', text: '将尸体悬挂示众', aspect: 'Edge', value: 2, flavorText: '这是对所有窥探者的警告，恐惧是最好的防线。让所有人看见违逆者的下场。', nextQuestionId: 'q13_sacrifice' },
      { id: 'D', text: '将其伪装成意外事故', aspect: 'Knock', value: 2, flavorText: '你巧妙地布置了现场，连最有经验的法医也看不出破绽。巧合是精心设计的谎言。', nextQuestionId: 'q13_sacrifice' }
    ]
  },
  
  // Branch: Trap (New)
  {
    id: 'q12_aftermath_trap',
    title: '理智的崩塌 (The Breakdown)',
    description: '猎人落入了陷阱。他的理智在非欧几里得的几何结构中瓦解。你如何处理这个疯子？',
    options: [
      { id: 'A', text: '将他困在镜中迷宫', aspect: 'Knock', value: 2, flavorText: '他在无数个倒影中迷失了方向，永远找不到出口。门关上了。', nextQuestionId: 'q13_sacrifice' },
      { id: 'B', text: '向他展示不可名状的真理', aspect: 'Lantern', value: 2, flavorText: '光芒烧毁了他的视网膜和大脑。他看见了太多，现在他只能尖叫。', nextQuestionId: 'q13_sacrifice' },
      { id: 'C', text: '让他成为混乱的传播者', aspect: 'Moth', value: 2, flavorText: '你剪断了他与现实的最后联系。他笑着跑进了夜色，成为了我们的传声筒。', nextQuestionId: 'q13_sacrifice' },
      { id: 'D', text: '将他囚禁在机械装置中', aspect: 'Forge', value: 2, flavorText: '血肉是软弱的，机器是永恒的。你将他改造成了不知疲倦的守卫。', nextQuestionId: 'q13_sacrifice' }
    ]
  },

  // Branch: Seduction
  {
    id: 'q12_aftermath_seduction',
    title: '变节者 (The Turncoat)',
    description: '他动摇了，但他需要一个理由背叛他的誓言。你将如何彻底摧毁他的防线？',
    options: [
      { id: 'A', text: '许诺他永生', aspect: 'Lantern', value: 2, flavorText: '辉光之下没有死亡，只有永恒的燃烧。他渴望成为光的一部分。', nextQuestionId: 'q13_sacrifice' },
      { id: 'B', text: '满足他扭曲的欲望', aspect: 'Grail', value: 2, flavorText: '他将成为我们最忠诚的狗，只要给他骨头。欲望是最好的项圈。', nextQuestionId: 'q13_sacrifice' },
      { id: 'C', text: '与他建立真正的情感连接', aspect: 'Heart', value: 2, flavorText: '你用真心换取真心，他为了爱而背叛了职责。心跳同步的瞬间，他沦陷了。', nextQuestionId: 'q13_sacrifice' },
      { id: 'D', text: '让他陷入疯狂的混乱', aspect: 'Moth', value: 2, flavorText: '你剪断了他理智的弦，现在他只听得懂疯狂的语言。他在笑声中崩溃。', nextQuestionId: 'q13_sacrifice' }
    ]
  },
  // Branch: Hiding
  {
    id: 'q12_aftermath_hiding',
    title: '漫长的长夜 (The Long Night)',
    description: '你们躲在阴影中，资源日益匮乏，人心浮动。黑暗中似乎有眼睛在窥视。',
    options: [
      { id: 'A', text: '用严酷的纪律约束信徒', aspect: 'Edge', value: 2, flavorText: '恐惧能维持秩序，刀锋必须向外。任何动摇者都将被清洗。', nextQuestionId: 'q13_sacrifice' },
      { id: 'B', text: '用希望和幻象安抚他们', aspect: 'Moth', value: 2, flavorText: '只要梦还在，我们就还在。剪去他们的恐惧，编织美好的谎言。', nextQuestionId: 'q13_sacrifice' },
      { id: 'C', text: '互相扶持，共度难关', aspect: 'Heart', value: 2, flavorText: '我们是家人，我们不会抛弃彼此。团结是唯一的温暖。', nextQuestionId: 'q13_sacrifice' },
      { id: 'D', text: '像死人一样彻底静默', aspect: 'Winter', value: 2, flavorText: '没有呼吸，没有心跳，猎人无法追踪不存在的东西。我们已死，故我们安全。', nextQuestionId: 'q13_sacrifice' },
      { id: 'E', text: '利用古老的密道转移', aspect: 'Secret Histories', value: 2, flavorText: '你打开了地图上未标注的门，带领大家走向安全。历史有许多条路。', nextQuestionId: 'q13_sacrifice' }
    ]
  },

  {
    id: 'q13_sacrifice',
    title: '力量的代价 (The Price of Power)',
    description: '为了召唤某种强大的存在来扭转局势，必须有人付出代价。漫宿的门扉需要祭品才能开启。',
    options: [
      { id: 'A', text: '一名忠诚的信徒', aspect: 'Knock', value: 3, flavorText: '他的血将打开道路，这是他无上的荣耀。伤口是通往彼岸的门。', nextQuestionId: 'q14_fascination' },
      { id: 'B', text: '你自己的一部分理智', aspect: 'Moth', value: 3, flavorText: '你听到了脑海中的振翅声，你剪掉了自己的影子。为了飞升，必须抛弃重量。', nextQuestionId: 'q14_fascination' },
      { id: 'C', text: '大量的财富', aspect: 'Forge', value: 2, flavorText: '黄金在熔炉中化为力量，物质转化为能量。火焰吞噬了一切。', nextQuestionId: 'q14_fascination' },
      { id: 'D', text: '敌人的灵魂', aspect: 'Edge', value: 3, flavorText: '战利品最好的用途，让他们的痛苦成为我们的燃料。复仇是甜美的。', nextQuestionId: 'q14_fascination' },
      { id: 'E', text: '自愿献身的圣徒', aspect: 'Heart', value: 3, flavorText: '没有强迫，只有爱。他微笑着走向祭坛，心脏在手中跳动。', nextQuestionId: 'q14_fascination' },
      { id: 'F', text: '一段珍贵的记忆', aspect: 'Secret Histories', value: 3, flavorText: '你献祭了过去的一部分，以此换取未来的可能性。遗忘是另一种死亡。', nextQuestionId: 'q14_fascination' },
      { id: 'G', text: '一份天才的灵感', aspect: 'Lantern', value: 3, flavorText: '你将那个可能改变世界的想法献给了光。现在你的脑海一片空白，但门开了。', nextQuestionId: 'q14_fascination' },
      { id: 'H', text: '一次完美的欢愉', aspect: 'Grail', value: 3, flavorText: '你放弃了那次极致的体验，将其转化为纯粹的渴望。饥饿感更加强烈了。', nextQuestionId: 'q14_fascination' },
      { id: 'I', text: '一段沉默的时光', aspect: 'Winter', value: 3, flavorText: '你献祭了声音，世界变得安静。在寂静中，你听到了门开的声音。', nextQuestionId: 'q14_fascination' },
      { 
        id: 'J', 
        text: '一件完美的造物', 
        aspect: 'Forge', 
        value: 3, 
        flavorText: '你花费数年心血打造的杰作，在瞬间化为乌有。创造是为了毁灭。', 
        nextQuestionId: 'q14_fascination',
        requirement: { aspect: 'Forge', minScore: 3 }
      },
      { 
        id: 'K', 
        text: '一个无法愈合的伤口', 
        aspect: 'Knock', 
        value: 3, 
        flavorText: '你撕裂了自己的肉体，创造了一个永久的通道。痛苦是门票。', 
        nextQuestionId: 'q14_fascination',
        requirement: { aspect: 'Knock', minScore: 3 }
      }
    ]
  },

  {
    id: 'q14_fascination',
    title: '入迷 (The Golden Light)',
    description: '仪式成功了，但金色的幻象让你无法集中精神。你看见空气中充满了眼睛，阳光在歌唱。这是辉光的诅咒。',
    options: [
      { id: 'A', text: '用“恐惧”来抵消', aspect: 'Winter', value: 2, flavorText: '冰冷的恐惧让你清醒，你回想起坟墓的寂静。死亡是唯一的解药。', nextQuestionId: 'q15_dread' },
      { id: 'B', text: '沉溺其中，记录幻象', aspect: 'Lantern', value: 3, flavorText: '这是启示！我不能错过！光芒充满了我的血管！我看见了更高处的门。', nextQuestionId: 'q15_dread' },
      { id: 'C', text: '用体力劳动耗尽精力', aspect: 'Heart', value: 2, flavorText: '疲惫是最好的镇静剂，你不停地奔跑直到倒下。汗水冲刷了幻觉。', nextQuestionId: 'q15_dread' },
      { id: 'D', text: '向他人倾诉', aspect: 'Grail', value: 2, flavorText: '分享疯狂，或者传染疯狂。让大家一起感受这份极乐。', nextQuestionId: 'q15_dread' },
      { id: 'E', text: '专注于战斗和冲突', aspect: 'Edge', value: 2, flavorText: '疼痛让你保持清醒，敌人的鲜血冲刷了金色的幻象。', nextQuestionId: 'q15_dread' },
      { id: 'F', text: '顺应混乱，变得疯狂', aspect: 'Moth', value: 3, flavorText: '既然无法抵抗，那就加入。你在疯狂中找到了新的平衡。', nextQuestionId: 'q15_dread' },
      { 
        id: 'G', 
        text: '在熔炉中重铸意志', 
        aspect: 'Forge', 
        value: 3, 
        flavorText: '你将自己投入火中，烧尽了软弱的幻象。你变得坚硬如铁。', 
        nextQuestionId: 'q15_dread',
        requirement: { aspect: 'Forge', minScore: 3 }
      },
      { 
        id: 'H', 
        text: '寻找门后的缝隙', 
        aspect: 'Knock', 
        value: 3, 
        flavorText: '即使在幻象中也有漏洞。你找到了逃离辉光的后门。', 
        nextQuestionId: 'q15_dread',
        requirement: { aspect: 'Knock', minScore: 3 }
      },
      { 
        id: 'I', 
        text: '改写此刻的历史', 
        aspect: 'Secret Histories', 
        value: 3, 
        flavorText: '你欺骗了时间，假装这一刻从未发生。幻象消退了，因为它不存在。', 
        nextQuestionId: 'q15_dread',
        requirement: { aspect: 'Secret Histories', minScore: 3 }
      }
    ]
  },

  {
    id: 'q15_dread',
    title: '恐惧 (The Creeping Cold)',
    description: '入迷消退后，绝望如潮水般涌来。你感到自己渺小而无助，末日似乎近在咫尺。',
    options: [
      { id: 'A', text: '用“安逸”来安抚', aspect: 'Heart', value: 2, flavorText: '一杯热茶，一个温暖的拥抱。生活还要继续。', nextQuestionId: 'q16_stag_door' },
      { id: 'B', text: '直面恐惧，将其转化为力量', aspect: 'Edge', value: 3, flavorText: '恐惧是磨刀石。你凝视深渊，直到深渊移开目光。', nextQuestionId: 'q16_stag_door' },
      { id: 'C', text: '在梦中寻找慰藉', aspect: 'Moth', value: 2, flavorText: '现实太残酷，不如睡去。林地里没有恐惧。', nextQuestionId: 'q16_stag_door' },
      { id: 'D', text: '用理性的分析解构恐惧', aspect: 'Lantern', value: 2, flavorText: '恐惧源于无知。一旦理解了它，它就失去了力量。', nextQuestionId: 'q16_stag_door' },
      { id: 'E', text: '拥抱虚无，成为恐惧本身', aspect: 'Winter', value: 3, flavorText: '你不再害怕寒冷，因为你已经成为了冰。', nextQuestionId: 'q16_stag_door' },
      { id: 'F', text: '寻找历史中的先例', aspect: 'Secret Histories', value: 2, flavorText: '这以前发生过，也会再次发生。你从古籍中找到了安慰。', nextQuestionId: 'q16_stag_door' },
      { 
        id: 'G', 
        text: '用愤怒燃烧恐惧', 
        aspect: 'Forge', 
        value: 3, 
        flavorText: '愤怒是燃料。你点燃了内心的火，驱散了寒冷。', 
        nextQuestionId: 'q16_stag_door',
        requirement: { aspect: 'Forge', minScore: 3 }
      },
      { 
        id: 'H', 
        text: '用欲望填满空虚', 
        aspect: 'Grail', 
        value: 3, 
        flavorText: '你沉溺于感官的狂欢，直到忘记了恐惧的味道。', 
        nextQuestionId: 'q16_stag_door',
        requirement: { aspect: 'Grail', minScore: 3 }
      },
      { 
        id: 'I', 
        text: '打开心扉接纳它', 
        aspect: 'Knock', 
        value: 3, 
        flavorText: '恐惧也是一种开启。你让它穿过你，就像风穿过敞开的门。', 
        nextQuestionId: 'q16_stag_door',
        requirement: { aspect: 'Knock', minScore: 3 }
      }
    ]
  },

  // --- STAGE 4: THE MANSUS (漫宿) ---
  {
    id: 'q16_stag_door',
    title: '第四章：牡鹿之门 (The Stag Door)',
    description: '你的灵魂来到了牡鹿之门前。门上的骷髅发出咯咯的笑声，空洞的眼窝注视着你：“什么东西必须失去？”',
    options: [
      { id: 'A', text: '“我的无知。”', aspect: 'Lantern', value: 3, flavorText: '门开了，光芒刺眼。你看见了不该看见的真理，理智在燃烧。', nextQuestionId: 'q17_mansus_sight' },
      { id: 'B', text: '“我的仁慈。”', aspect: 'Edge', value: 3, flavorText: '门开了，血腥味扑面而来。你为了力量放弃了同情，心如铁石。', nextQuestionId: 'q17_mansus_sight' },
      { id: 'C', text: '“我的界限。”', aspect: 'Moth', value: 3, flavorText: '门开了，你听到了振翅声。你不再是完整的个体，你成为了群。', nextQuestionId: 'q17b_spider_door' },
      { id: 'D', text: '“我的安全。”', aspect: 'Forge', value: 3, flavorText: '门开了，热浪滚滚。你为了重塑自己甘愿冒险，跳入熔炉。', nextQuestionId: 'q17_mansus_sight' },
      { id: 'E', text: '“我的名字。”', aspect: 'Knock', value: 3, flavorText: '门开了，你成为了无名之辈，可以去往任何地方，打开任何锁。', nextQuestionId: 'q17b_spider_door' },
      { id: 'F', text: '“我的健康。”', aspect: 'Heart', value: 3, flavorText: '门开了，鼓声如雷。你放弃了平静的生活，拥抱了永恒的律动。', nextQuestionId: 'q17_mansus_sight' },
      { id: 'G', text: '“我的饥渴。”', aspect: 'Grail', value: 3, flavorText: '门开了，香气袭人。你意识到饥渴永远无法被填满，它本身就是目的。', nextQuestionId: 'q17b_spider_door' },
      { id: 'H', text: '“我的声音。”', aspect: 'Winter', value: 3, flavorText: '门开了，寂静降临。你学会了死者的语言，沉默是金。', nextQuestionId: 'q17b_spider_door' },
      { id: 'I', text: '“我的记忆。”', aspect: 'Secret Histories', value: 3, flavorText: '门开了，过去如烟消散。你成为了历史的记录者，而非参与者。', nextQuestionId: 'q17_mansus_sight' },
      { 
        id: 'J', 
        text: '直接穿过锁孔', 
        aspect: 'Knock', 
        value: 5, 
        flavorText: '你不需要回答谜题，因为你就是钥匙。你把自己折叠起来，滑过了现实的缝隙。', 
        nextQuestionId: 'q17_mansus_sight',
        requirement: { aspect: 'Knock', minScore: 5 }
      }
    ]
  },

  {
    id: 'q17b_spider_door',
    title: '蜘蛛之门 (The Spider\'s Door)',
    description: '你没有止步于牡鹿之门。你向下走，来到了更深的地方。这里布满了粘稠的网，空气中弥漫着古老的血腥味。一只巨大的复眼在黑暗中注视着你。',
    options: [
      { id: 'A', text: '献上你的鲜血', aspect: 'Grail', value: 4, flavorText: '它吸食了你的生命，但也赐予了你永不满足的渴望。你感到一种扭曲的力量在体内涌动。', nextQuestionId: 'q18_hunger' },
      { id: 'B', text: '剪断蛛网', aspect: 'Edge', value: 4, flavorText: '你用暴力开辟了道路。蜘蛛畏惧你的锋芒，退回了阴影之中。', nextQuestionId: 'q18_hunger' },
      { id: 'C', text: '与蜘蛛交易秘密', aspect: 'Secret Histories', value: 4, flavorText: '你知道它渴望什么。你用一个被遗忘的名字换取了通过权。', nextQuestionId: 'q18_hunger' },
      { id: 'D', text: '让自己被缠绕', aspect: 'Winter', value: 4, flavorText: '你停止了挣扎，像死尸一样安静。它对死物不感兴趣，你滑了过去。', nextQuestionId: 'q18_hunger' }
    ]
  },

  {
    id: 'q17_mansus_sight',
    title: '大胜迹 (The Glory)',
    description: '穿过牡鹿之门，你在漫宿的高处目睹了神灵的尸体。那是被谋杀的太阳，流淌着金色的血液。这是宇宙最大的秘密，也是最大的亵渎。',
    options: [
      { id: 'A', text: '痛哭流涕', aspect: 'Winter', value: 3, flavorText: '悲伤是唯一恰当的反应。一切终将逝去，即使是神。', nextQuestionId: 'q18_hunger' },
      { id: 'B', text: '试图收集神血', aspect: 'Grail', value: 3, flavorText: '这是无上的美味。你渴望品尝神性的滋味，哪怕只有一滴。', nextQuestionId: 'q18_hunger' },
      { id: 'C', text: '记录这一刻的星象', aspect: 'Secret Histories', value: 3, flavorText: '历史在此刻断裂。你记录下这不可能的时刻，作为未来的筹码。', nextQuestionId: 'q18_hunger' },
      { id: 'D', text: '嘲笑陨落的神', aspect: 'Knock', value: 3, flavorText: '旧神已死，新神当立。你看见了机会，门已经打开。', nextQuestionId: 'q18_hunger' },
      { id: 'E', text: '分析光芒的构成', aspect: 'Lantern', value: 3, flavorText: '即使是神血，也遵循某种法则。你试图理解这不可理解之物。', nextQuestionId: 'q18_hunger' },
      { id: 'F', text: '饮下神灵的眼泪', aspect: 'Moth', value: 3, flavorText: '悲伤是甜美的，混乱是美味的。你与疯狂共饮，庆祝这荒谬的结局。', nextQuestionId: 'q18_hunger' },
      { id: 'G', text: '试图重铸太阳', aspect: 'Forge', value: 3, flavorText: '破碎并非终结，而是重塑的开始。你看见了更伟大的形态。', nextQuestionId: 'q18_hunger' },
      { id: 'H', text: '试图复活太阳', aspect: 'Heart', value: 3, flavorText: '生命不应如此终结。你试图用自己的心跳唤醒沉睡的神。', nextQuestionId: 'q18_hunger' },
      { id: 'I', text: '试图夺取太阳的武器', aspect: 'Edge', value: 3, flavorText: '即使是尸体也握着权柄。你渴望那把能弑神的刀。', nextQuestionId: 'q18_hunger' }
    ]
  },

  {
    id: 'q18_hunger',
    title: '无尽的饥饿 (The Insatiable Hunger)',
    description: '回到现世后，你感到一种无法被凡俗食物填满的饥饿。世界尝起来像灰烬。你渴望吞噬什么？',
    options: [
      { id: 'A', text: '古籍中的知识', aspect: 'Lantern', value: 2, flavorText: '你狼吞虎咽地阅读，试图填补脑海中的空白。文字是唯一的食粮。', nextQuestionId: 'q19_betrayal' },
      { id: 'B', text: '鲜活的生命体验', aspect: 'Grail', value: 3, flavorText: '盛宴永不结束。你渴望更多的爱，更多的痛，更多的味道。', nextQuestionId: 'q19_betrayal' },
      { id: 'C', text: '他人的痛苦', aspect: 'Edge', value: 2, flavorText: '他们的尖叫是你的佐餐酒。你从冲突中汲取力量，以痛苦为食。', nextQuestionId: 'q19_betrayal' },
      { id: 'D', text: '改变世界的原料', aspect: 'Forge', value: 2, flavorText: '你吞噬金属与火焰。你渴望重塑物质本身，将世界嚼碎。', nextQuestionId: 'q19_betrayal' },
      { id: 'E', text: '无尽的爱与崇拜', aspect: 'Heart', value: 2, flavorText: '你渴望被包围，被需要，被爱。这是唯一的填补方式，填补你空洞的心。', nextQuestionId: 'q19_betrayal' },
      { id: 'F', text: '绝对的虚无', aspect: 'Winter', value: 2, flavorText: '你吞噬寂静，直到你也成为寂静的一部分。寒冷让你感到饱足。', nextQuestionId: 'q19_betrayal' },
      { id: 'G', text: '混乱与疯狂', aspect: 'Moth', value: 2, flavorText: '你渴望失去理智，渴望在混沌中起舞。秩序让你反胃。', nextQuestionId: 'q19_betrayal' },
      { id: 'H', text: '未知的秘密', aspect: 'Knock', value: 2, flavorText: '你渴望打开所有的盒子，揭开所有的面纱。谜题是你的美餐。', nextQuestionId: 'q19_betrayal' },
      { id: 'I', text: '被遗忘的过去', aspect: 'Secret Histories', value: 2, flavorText: '你渴望那些不再存在的时光。你吞噬历史的残片，以此维生。', nextQuestionId: 'q19_betrayal' }
    ]
  },

  {
    id: 'q19_betrayal',
    title: '背叛 (The Betrayal)',
    description: '你最信任的一名核心信徒试图背叛你，窃取你的飞升机会。即使是最忠诚的狗，也会在饥饿时咬主人。',
    options: [
      { id: 'A', text: '用令人窒息的宽恕淹没他', aspect: 'Heart', value: 3, flavorText: '你的心胸如大海般宽广（或者你只是在等待更好的时机）。爱能融化最坚硬的冰。', nextQuestionId: 'q20_grand_ritual' },
      { id: 'B', text: '将他转化为不知疲倦的傀儡', aspect: 'Winter', value: 3, flavorText: '现在他永远不会背叛了，虽然他变得有点冷。死亡是永恒的忠诚。', nextQuestionId: 'q20_grand_ritual' },
      { id: 'C', text: '在荣耀的决斗中终结他', aspect: 'Edge', value: 3, flavorText: '强者生存。这是对他最好的尊重。鲜血洗清了耻辱。', nextQuestionId: 'q20_grand_ritual' },
      { id: 'D', text: '把他献祭给司辰', aspect: 'Knock', value: 3, flavorText: '废物利用。他的背叛成为了你飞升的垫脚石。门需要润滑。', nextQuestionId: 'q20_grand_ritual' },
      { id: 'E', text: '用无可辩驳的逻辑揭穿他', aspect: 'Lantern', value: 3, flavorText: '他在真理的光芒下无处遁形，他的谎言不攻自破。你剥开了他的伪装。', nextQuestionId: 'q20_grand_ritual' },
      { id: 'F', text: '让他迷失在自己的阴谋中', aspect: 'Moth', value: 3, flavorText: '你编织了更复杂的网，他最终作茧自缚。他在自己的迷宫中饿死。', nextQuestionId: 'q20_grand_ritual' },
      { id: 'G', text: '召唤蜘蛛之门的恐怖', aspect: 'Knock', value: 4, flavorText: '你打开了不该打开的门。他被无数只看不见的手拖入了黑暗。', nextQuestionId: 'q20_grand_ritual' },
      { 
        id: 'H', 
        text: '将他投入永恒的熔炉', 
        aspect: 'Forge', 
        value: 4, 
        flavorText: '他的背叛成为了最好的燃料。他在火焰中尖叫，为你的飞升提供了最后的推力。', 
        nextQuestionId: 'q20_grand_ritual',
        requirement: { aspect: 'Forge', minScore: 4 }
      },
      { 
        id: 'I', 
        text: '吞噬他的欲望', 
        aspect: 'Grail', 
        value: 4, 
        flavorText: '你吸干了他对权力的渴望，只留下一具空壳。他的野心现在属于你了。', 
        nextQuestionId: 'q20_grand_ritual',
        requirement: { aspect: 'Grail', minScore: 4 }
      },
      { 
        id: 'J', 
        text: '将他从历史中抹去', 
        aspect: 'Secret Histories', 
        value: 4, 
        flavorText: '你修改了记录。现在，从未有过这个人，也从未有过背叛。只有你，独自走向荣耀。', 
        nextQuestionId: 'q20_grand_ritual',
        requirement: { aspect: 'Secret Histories', minScore: 4 }
      }
    ]
  },

  {
    id: 'q20_grand_ritual',
    title: '大仪式 (The Grand Ritual)',
    description: '时机已到。群星归位。你准备举行一场大仪式来打开飞升之门。你选择的祭品是？',
    options: [
      { id: 'A', text: '你自己的人性', aspect: 'Moth', value: 4, flavorText: '为了飞升，我愿意抛弃人形，化为飞蛾。我不再是我。', nextQuestionId: 'q21_peacock_door' },
      { id: 'B', text: '一座城市的命运', aspect: 'Forge', value: 4, flavorText: '巨大的能量将撕裂帷幕，城市将燃烧。毁灭是新生的代价。', nextQuestionId: 'q21_peacock_door' },
      { id: 'C', text: '所有信徒的生命', aspect: 'Grail', value: 4, flavorText: '他们是我的燃料，我们将融为一体。这是血肉的盛宴。', nextQuestionId: 'q21_peacock_door' },
      { id: 'D', text: '一个惊天的秘密', aspect: 'Knock', value: 4, flavorText: '真理将使我们自由，即使这真理会摧毁世界。门开了。', nextQuestionId: 'q21_peacock_door' },
      { id: 'E', text: '一段被遗忘的历史', aspect: 'Secret Histories', value: 4, flavorText: '你重写了过去，以此改变未来。时间在你的指尖倒流。', nextQuestionId: 'q21_peacock_door' },
      { id: 'F', text: '一场永无止境的舞蹈', aspect: 'Heart', value: 4, flavorText: '鼓声越来越快，直到心脏无法承受。我们在狂喜中超越了肉体。', nextQuestionId: 'q21_peacock_door' },
      { id: 'G', text: '所有的理智', aspect: 'Lantern', value: 4, flavorText: '为了看见真理，必须先瞎眼。你烧毁了自己的思维，只留下光。', nextQuestionId: 'q21_peacock_door' },
      { id: 'H', text: '一场伟大的战争', aspect: 'Edge', value: 4, flavorText: '冲突的能量足以撕裂天空。你发动了最后的战役，以鲜血铺路。', nextQuestionId: 'q21_peacock_door' },
      { id: 'I', text: '永恒的寂静', aspect: 'Winter', value: 4, flavorText: '你熄灭了所有的声音，所有的光。在绝对的虚无中，门显现了。', nextQuestionId: 'q21_peacock_door' }
    ]
  },

  // --- STAGE 5: ASCENSION (飞升) ---
  {
    id: 'q21_peacock_door',
    title: '第五章：孔雀之门 (The Peacock Door)',
    description: '你来到了漫宿的极高处。孔雀之门闪耀着令人目盲的光芒，无数只眼睛注视着你。',
    options: [
      { id: 'A', text: '挖出自己的眼睛（比喻）', aspect: 'Lantern', value: 3, flavorText: '肉眼凡胎无法直视真理。你选择用心灵去观看。光芒不再刺眼。', nextQuestionId: 'q22_farewell' },
      { id: 'B', text: '用镜子反射光芒', aspect: 'Winter', value: 3, flavorText: '通过倒影观察，更加安全。你保持着冷静的距离，不被灼伤。', nextQuestionId: 'q22_farewell' },
      { id: 'C', text: '强行闯入，不顾灼伤', aspect: 'Forge', value: 3, flavorText: '痛苦只是转化的过程。你在光芒中重铸自己，变得更强。', nextQuestionId: 'q22_farewell' },
      { id: 'D', text: '寻找后门', aspect: 'Knock', value: 3, flavorText: '总有缝隙可钻。你找到了光芒照不到的阴影，滑了进去。', nextQuestionId: 'q22_farewell' },
      { id: 'E', text: '蜕去人形', aspect: 'Moth', value: 3, flavorText: '如果眼睛会瞎，那就不要眼睛。你变成了某种不需要视觉的东西。', nextQuestionId: 'q22_farewell' },
      { id: 'F', text: '回忆通关密语', aspect: 'Secret Histories', value: 3, flavorText: '你知道这扇门的秘密，因为你曾在梦中来过无数次。门认识你。', nextQuestionId: 'q22_farewell' },
      { id: 'G', text: '用心跳感应', aspect: 'Heart', value: 3, flavorText: '你闭上眼，跟随节奏。光芒也有脉搏，你与它共振。', nextQuestionId: 'q22_farewell' },
      { id: 'H', text: '饮下光芒', aspect: 'Grail', value: 3, flavorText: '你张开嘴，吞噬了那些光。它在你的胃里燃烧，让你感到温暖。', nextQuestionId: 'q22_farewell' },
      { id: 'I', text: '斩断光芒', aspect: 'Edge', value: 3, flavorText: '你挥刀，在光幕上切开一道口子。你走进了黑暗的裂缝。', nextQuestionId: 'q22_farewell' }
    ]
  },

  {
    id: 'q22_farewell',
    title: '最后的告别 (The Farewell)',
    description: '在飞升前的最后时刻，你回头看了一眼凡世。你看到了什么？',
    options: [
      { id: 'A', text: '一片燃烧的废墟', aspect: 'Edge', value: 3, flavorText: '我留下了毁灭。这是我存在的证明。灰烬在风中飞舞。', nextQuestionId: 'q23_rival' },
      { id: 'B', text: '一场永不散场的宴席', aspect: 'Grail', value: 3, flavorText: '我留下了欲望。他们将永远饥渴，永远追逐。', nextQuestionId: 'q23_rival' },
      { id: 'C', text: '一座精密的机械钟表', aspect: 'Forge', value: 3, flavorText: '我留下了秩序。世界将像机器一样运转，冰冷而精确。', nextQuestionId: 'q23_rival' },
      { id: 'D', text: '一片寂静的墓地', aspect: 'Winter', value: 3, flavorText: '我留下了安宁。一切归于沉寂，没有痛苦。', nextQuestionId: 'q23_rival' },
      { id: 'E', text: '无数条交错的道路', aspect: 'Secret Histories', value: 3, flavorText: '我留下了可能性。历史将继续分叉，没有定论。', nextQuestionId: 'q23_rival' },
      { id: 'F', text: '一道永恒的光', aspect: 'Lantern', value: 3, flavorText: '我留下了真理。它将永远照耀，无人能忽视。', nextQuestionId: 'q23_rival' },
      { id: 'G', text: '一声有力的心跳', aspect: 'Heart', value: 3, flavorText: '我留下了生命。它将生生不息，直到时间的尽头。', nextQuestionId: 'q23_rival' },
      { id: 'H', text: '一片纷飞的鳞粉', aspect: 'Moth', value: 3, flavorText: '我留下了混乱。世界将永远变化，永远不可预测。', nextQuestionId: 'q23_rival' },
      { id: 'I', text: '一扇敞开的门', aspect: 'Knock', value: 3, flavorText: '我留下了通道。后来者将跟随我的脚步，穿越界限。', nextQuestionId: 'q23_rival' }
    ]
  },

  {
    id: 'q23_rival',
    title: '宿敌 (The Rival)',
    description: '一位敌对的具名者挡在了三尖之门前。他是你的一面镜子，是你未曾选择的道路。他长着和你一样的脸。',
    options: [
      { id: 'A', text: '与他融合', aspect: 'Heart', value: 4, flavorText: '我们本就是一体。拥抱你的阴影，变得完整。', nextQuestionId: 'q24_transformation' },
      { id: 'B', text: '将他撕碎', aspect: 'Edge', value: 4, flavorText: '只能有一个胜者。你斩断了最后的羁绊，杀死了过去的自己。', nextQuestionId: 'q24_transformation' },
      { id: 'C', text: '欺骗他，让他让路', aspect: 'Moth', value: 4, flavorText: '他被自己的倒影迷惑了。你悄无声息地滑过，留他在镜中。', nextQuestionId: 'q24_transformation' },
      { id: 'D', text: '向他展示更高的真理', aspect: 'Lantern', value: 4, flavorText: '他在辉光面前跪下了。真理征服一切，包括你自己。', nextQuestionId: 'q24_transformation' },
      { id: 'E', text: '静静地等待他消亡', aspect: 'Winter', value: 4, flavorText: '时间站在你这边。一切终将结束，你只需要比他活得久。', nextQuestionId: 'q24_transformation' },
      { id: 'F', text: '用更强大的力量碾压他', aspect: 'Forge', value: 4, flavorText: '你的力量是压倒性的。他只是你前进路上的绊脚石，被碾成尘埃。', nextQuestionId: 'q24_transformation' },
      { id: 'G', text: '诱惑他', aspect: 'Grail', value: 4, flavorText: '你许诺给他想要的一切。他沉溺于幻象，忘记了阻拦你。', nextQuestionId: 'q24_transformation' },
      { id: 'H', text: '把他关起来', aspect: 'Knock', value: 4, flavorText: '你打开了一扇通往虚空的门，把他推了进去。现在他是囚徒了。', nextQuestionId: 'q24_transformation' },
      { id: 'I', text: '改写他的历史', aspect: 'Secret Histories', value: 4, flavorText: '你修改了过去，让他从未成为你的对手。他只是一个路人。', nextQuestionId: 'q24_transformation' }
    ]
  },

  {
    id: 'q24_transformation',
    title: '本质的转化 (Transformation)',
    description: '在光芒中，你意识到自己不再是人类。你的皮肤剥落，露出了下面的...',
    options: [
      { id: 'A', text: '光芒', aspect: 'Lantern', value: 5, flavorText: '我成为了光。我无所不知。我没有影子。', nextQuestionId: 'q25_end' },
      { id: 'B', text: '伤口', aspect: 'Knock', value: 5, flavorText: '我成为了门。我连接一切。我是通道。', nextQuestionId: 'q25_end' },
      { id: 'C', text: '饥饿', aspect: 'Grail', value: 5, flavorText: '我成为了口。我吞噬世界。我永远空虚。', nextQuestionId: 'q25_end' },
      { id: 'D', text: '虚无', aspect: 'Winter', value: 5, flavorText: '我成为了终结。我带来寂静。我是最后的呼吸。', nextQuestionId: 'q25_end' },
      { id: 'E', text: '律动', aspect: 'Heart', value: 5, flavorText: '我成为了心跳。我永不停歇。我是生命的鼓点。', nextQuestionId: 'q25_end' },
      { id: 'F', text: '火焰', aspect: 'Forge', value: 5, flavorText: '我成为了火。我燃烧一切杂质。我是永恒的引擎。', nextQuestionId: 'q25_end' },
      { id: 'G', text: '利刃', aspect: 'Edge', value: 5, flavorText: '我成为了刀。我分割世界。我是冲突的化身。', nextQuestionId: 'q25_end' },
      { id: 'H', text: '飞蛾', aspect: 'Moth', value: 5, flavorText: '我成为了蜕变。我不再是我。我是无数个我。', nextQuestionId: 'q25_end' },
      { id: 'I', text: '羊皮纸', aspect: 'Secret Histories', value: 5, flavorText: '我成为了记录。我承载着所有可能与不可能的历史。', nextQuestionId: 'q25_end' }
    ]
  },

  {
    id: 'q25_end',
    title: '结局 (The End)',
    description: '你穿过了三尖之门。你成为了历史的哪一部分？',
    options: [
      { id: 'A', text: '我成为了历史本身', aspect: 'Secret Histories', value: 5, flavorText: '我无处不在。我是所有故事的集合。', nextQuestionId: 'end' },
      { id: 'B', text: '我成为了改变历史的力量', aspect: 'Forge', value: 5, flavorText: '世界因我而变。我是永恒的引擎。', nextQuestionId: 'end' },
      { id: 'C', text: '我成为了历史的注脚', aspect: 'Moth', value: 5, flavorText: '我在混乱中永生。我是不确定的变量。', nextQuestionId: 'end' },
      { id: 'D', text: '我成为了历史的终结', aspect: 'Edge', value: 5, flavorText: '万物归一。我是最后的句号。', nextQuestionId: 'end' },
      { id: 'E', text: '我成为了指引的光芒', aspect: 'Lantern', value: 5, flavorText: '我是灯塔，我是真理，我是永恒的燃烧。', nextQuestionId: 'end' },
      { id: 'F', text: '我成为了永恒的寂静', aspect: 'Winter', value: 5, flavorText: '我是终结后的安宁，我是白雪覆盖的坟墓。', nextQuestionId: 'end' },
      { id: 'G', text: '我成为了不息的脉搏', aspect: 'Heart', value: 5, flavorText: '我是生命本身，我是永不停止的鼓点。', nextQuestionId: 'end' },
      { id: 'H', text: '我成为了无尽的渴望', aspect: 'Grail', value: 5, flavorText: '我是饥饿，我是满足，我是所有感官的极致。', nextQuestionId: 'end' },
      { id: 'I', text: '我成为了开启一切的钥匙', aspect: 'Knock', value: 5, flavorText: '我是门，我是锁，我是连接所有世界的通道。', nextQuestionId: 'end' }
    ]
  }
];
